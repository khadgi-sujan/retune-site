"use client";

// ── Web Audio API sound synthesis ──
// All sounds are generated programmatically — no audio files needed.
// Muted by default; user opts in via speaker toggle.
// Clicks/taps use filtered noise (not oscillators) per best practices.

let ctx: AudioContext | null = null;
let muted = true;

function getContext(): AudioContext | null {
  if (muted) return null;
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

export function isMuted() {
  return muted;
}

export function setMuted(m: boolean) {
  muted = m;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("sound", m ? "off" : "on");
  }
}

export function initSound() {
  if (typeof localStorage !== "undefined") {
    muted = localStorage.getItem("sound") !== "on";
  }
  return !muted;
}

// ── Helpers ──

/** Pre-decayed noise buffer — exponential falloff baked in */
function clickBuffer(c: AudioContext, ms: number): AudioBuffer {
  const len = Math.round(c.sampleRate * ms / 1000);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) {
    d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.3));
  }
  return buf;
}

// ── Sounds ──

// ── Layered theme sound engine ──

export type WashLayerName = "choir" | "shimmer" | "chime" | "woodwind" | "strings";
export const washLayerNames: WashLayerName[] = ["choir", "shimmer", "chime", "woodwind", "strings"];

export type WashWaveform = "sine" | "triangle" | "square" | "sawtooth";
export const washWaveforms: WashWaveform[] = ["sine", "triangle", "square", "sawtooth"];

export interface WashLayer {
  enabled: boolean;
  gain: number;       // 0-0.3
  delay: number;      // seconds offset
  duration: number;   // seconds
  freq: number;       // base frequency Hz
  attack: number;     // 0-1, fraction of duration
  waveform: WashWaveform;
  cutoff: number;     // lowpass filter Hz (20-8000)
  vibRate: number;    // vibrato speed Hz (0-10, 0 = off)
  vibDepth: number;   // vibrato depth (0-0.02, fraction of freq)
  drift: number;      // pitch drift over duration (-0.1 to 0.1, negative = down)
  reverb: number;     // reverb wet mix (0-1, 0 = dry)
  echoTime: number;   // echo delay time in seconds (0-1)
  echoFeedback: number; // echo feedback amount (0-0.8)
  echoMix: number;    // echo wet mix (0-1, 0 = no echo)
  pan: number;        // stereo pan (-1 left, 0 center, 1 right)
}

export type WashConfig = Record<WashLayerName, WashLayer>;

const defaultWashConfig: WashConfig = {
  choir:    { enabled: true,  gain: 0.07, delay: 0,    duration: 0.8, freq: 104, attack: 0.4,  waveform: "sine",     cutoff: 800,  vibRate: 4.0, vibDepth: 0.004, drift: -0.02, reverb: 0.3,  echoTime: 0,    echoFeedback: 0,   echoMix: 0,    pan: 0 },
  shimmer:  { enabled: true,  gain: 0.03, delay: 0.15, duration: 0.7, freq: 312, attack: 0.35, waveform: "sine",     cutoff: 600,  vibRate: 0,   vibDepth: 0,     drift: 0,     reverb: 0.4,  echoTime: 0,    echoFeedback: 0,   echoMix: 0,    pan: 0.2 },
  chime:    { enabled: true,  gain: 0.04, delay: 0.05, duration: 0.4, freq: 880, attack: 0.02, waveform: "sine",     cutoff: 4000, vibRate: 0,   vibDepth: 0,     drift: -0.05, reverb: 0.5,  echoTime: 0.15, echoFeedback: 0.2, echoMix: 0.15, pan: -0.15 },
  woodwind: { enabled: true,  gain: 0.05, delay: 0.08, duration: 0.9, freq: 220, attack: 0.5,  waveform: "triangle", cutoff: 500,  vibRate: 3.5, vibDepth: 0.003, drift: -0.03, reverb: 0.2,  echoTime: 0,    echoFeedback: 0,   echoMix: 0,    pan: -0.2 },
  strings:  { enabled: true,  gain: 0.05, delay: 0.1,  duration: 1.0, freq: 156, attack: 0.45, waveform: "sine",     cutoff: 600,  vibRate: 5.0, vibDepth: 0.003, drift: -0.01, reverb: 0.35, echoTime: 0,    echoFeedback: 0,   echoMix: 0,    pan: 0.1 },
};

let washConfig: WashConfig = JSON.parse(JSON.stringify(defaultWashConfig));

export function getWashConfig(): WashConfig { return JSON.parse(JSON.stringify(washConfig)); }
export function getDefaultWashConfig(): WashConfig { return JSON.parse(JSON.stringify(defaultWashConfig)); }
export function setWashLayer(name: WashLayerName, updates: Partial<WashLayer>) {
  washConfig[name] = { ...washConfig[name], ...updates };
}
export function resetWashConfig() { washConfig = JSON.parse(JSON.stringify(defaultWashConfig)); }

export function playWashLayer(name: WashLayerName, toDark?: boolean) {
  const wasMuted = muted;
  if (wasMuted) muted = false;
  const c = getContext();
  if (!c) { if (wasMuted) muted = true; return; }
  _playLayer(c, c.currentTime, washConfig[name], name, toDark ?? true);
  if (wasMuted) muted = true;
}

export function playAllWashLayers(toDark?: boolean) {
  const wasMuted = muted;
  if (wasMuted) muted = false;
  const c = getContext();
  if (!c) { if (wasMuted) muted = true; return; }
  const t = c.currentTime;
  for (const name of washLayerNames) {
    if (washConfig[name].enabled) _playLayer(c, t, washConfig[name], name, toDark ?? true);
  }
  if (wasMuted) muted = true;
}

export function copyWashConfig() {
  const out = JSON.stringify(washConfig, null, 2);
  navigator.clipboard.writeText(out);
}

// ── Synthetic impulse response for reverb ──
let cachedIR: AudioBuffer | null = null;

function getImpulseResponse(c: AudioContext): AudioBuffer {
  if (cachedIR && cachedIR.sampleRate === c.sampleRate) return cachedIR;
  const duration = 1.5; // 1.5s reverb tail
  const length = Math.round(c.sampleRate * duration);
  const buf = c.createBuffer(2, length, c.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buf.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (length * 0.2));
    }
  }
  cachedIR = buf;
  return buf;
}

function _makeVoice(c: AudioContext, t: number, dur: number, l: WashLayer, freq: number, gainMult: number, onset: number) {
  const rng = () => 0.94 + Math.random() * 0.12;
  const osc = c.createOscillator();
  osc.type = l.waveform;
  const f = freq * rng();
  osc.frequency.setValueAtTime(f, t + onset);
  const driftTarget = f * (1 + l.drift);
  if (driftTarget > 0) osc.frequency.exponentialRampToValueAtTime(driftTarget, t + dur * 0.8);

  // Vibrato
  let vib: OscillatorNode | null = null;
  let vibG: GainNode | null = null;
  if (l.vibRate > 0 && l.vibDepth > 0) {
    vib = c.createOscillator();
    vib.type = "sine";
    vib.frequency.value = l.vibRate + Math.random() * 1;
    vibG = c.createGain();
    vibG.gain.value = f * l.vibDepth;
    vib.connect(vibG).connect(osc.frequency);
    vib.start(t); vib.stop(t + dur);
  }

  // Lowpass
  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = l.cutoff;

  // Gain envelope
  const g = c.createGain();
  const vol = l.gain * gainMult * rng();
  g.gain.setValueAtTime(0, t + onset);
  g.gain.linearRampToValueAtTime(vol, t + onset + dur * l.attack);
  g.gain.setValueAtTime(vol * 0.8, t + onset + dur * 0.55);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);

  // Chain: osc → lowpass → gain → panner → [dry + reverb + echo] → destination
  osc.connect(lp).connect(g);

  // Stereo panner
  const panner = c.createStereoPanner();
  panner.pan.value = l.pan;
  g.connect(panner);

  const nodes: AudioNode[] = [osc, lp, g, panner];
  if (vib) nodes.push(vib);
  if (vibG) nodes.push(vibG);

  // Dry path
  const dryGain = c.createGain();
  const hasFx = l.reverb > 0 || (l.echoMix > 0 && l.echoTime > 0);
  dryGain.gain.value = hasFx ? Math.max(0, 1 - Math.max(l.reverb, l.echoMix) * 0.5) : 1;
  panner.connect(dryGain).connect(c.destination);
  nodes.push(dryGain);

  // Reverb (convolver with synthetic IR)
  if (l.reverb > 0) {
    const conv = c.createConvolver();
    conv.buffer = getImpulseResponse(c);
    const reverbGain = c.createGain();
    reverbGain.gain.value = l.reverb;
    panner.connect(conv).connect(reverbGain).connect(c.destination);
    nodes.push(conv, reverbGain);
  }

  // Echo (delay with feedback loop)
  if (l.echoMix > 0 && l.echoTime > 0) {
    const delay = c.createDelay(2);
    delay.delayTime.value = l.echoTime;
    const feedback = c.createGain();
    feedback.gain.value = Math.min(l.echoFeedback, 0.8); // safety cap
    const echoWet = c.createGain();
    echoWet.gain.value = l.echoMix;
    // Feedback loop: panner → delay → feedback → delay (loop)
    panner.connect(delay);
    delay.connect(feedback).connect(delay); // feedback loop
    delay.connect(echoWet).connect(c.destination);
    nodes.push(delay, feedback, echoWet);
  }

  osc.start(t + onset);
  osc.stop(t + dur);
  osc.onended = () => { nodes.forEach(n => n.disconnect()); };
}

function _playLayer(c: AudioContext, baseTime: number, l: WashLayer, name: WashLayerName, dark: boolean) {
  const t = baseTime + l.delay;
  const dur = l.duration;
  const rng = () => 0.94 + Math.random() * 0.12;
  const base = dark ? l.freq : l.freq * 1.12;

  if (name === "choir") {
    // Major chord — root, M3, P5
    [base, base * 1.25, base * 1.5].forEach((freq, i) => {
      _makeVoice(c, t, dur, l, freq, 1, i * 0.05);
    });
  }

  if (name === "shimmer") {
    // Detuned pair for gentle beating
    [0, 2].forEach((detune) => {
      _makeVoice(c, t, dur, l, base + detune, 1, 0);
    });
  }

  if (name === "chime") {
    // Single percussive tone
    _makeVoice(c, t, dur, l, base, 1, 0);
  }

  if (name === "woodwind") {
    // Tonal voice
    _makeVoice(c, t, dur, l, base, 1, 0);
    // Breath noise layer
    const len = Math.round(c.sampleRate * dur);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource(); src.buffer = buf;
    const bp = c.createBiquadFilter();
    bp.type = "bandpass"; bp.frequency.value = base * 1.5; bp.Q.value = 0.3;
    const ng = c.createGain();
    ng.gain.setValueAtTime(0, t);
    ng.gain.linearRampToValueAtTime(l.gain * 0.3, t + dur * 0.3);
    ng.gain.exponentialRampToValueAtTime(0.001, t + dur * 0.6);
    src.connect(bp).connect(ng).connect(c.destination);
    src.start(t); src.stop(t + dur);
    src.onended = () => { src.disconnect(); bp.disconnect(); ng.disconnect(); };
  }

  if (name === "strings") {
    // Root + octave
    [base, base * 2].forEach((freq, i) => {
      _makeVoice(c, t, dur, l, freq, i === 0 ? 1 : 0.5, 0);
    });
  }
}

/** Theme toggle — gentle exhale, lowpass-filtered noise sweep */
export function playClick(_toDark?: boolean) {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;
  const dur = 0.35;

  const len = Math.round(c.sampleRate * dur);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

  const src = c.createBufferSource();
  src.buffer = buf;

  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(300, t);
  lp.frequency.exponentialRampToValueAtTime(800, t + dur * 0.4);
  lp.frequency.exponentialRampToValueAtTime(400, t + dur);

  const gain = c.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.15, t + dur * 0.35);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

  src.connect(lp).connect(gain).connect(c.destination);
  src.start(t);
  src.stop(t + dur);
  src.onended = () => { src.disconnect(); lp.disconnect(); gain.disconnect(); };
}

/** Copy button — slightly brighter tick */
export function playTick() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;

  const src = c.createBufferSource();
  src.buffer = clickBuffer(c, 8);

  const bp = c.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 4500;
  bp.Q.value = 3;

  const gain = c.createGain();
  gain.gain.setValueAtTime(0.2, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.008);

  src.connect(bp).connect(gain).connect(c.destination);
  src.start(t);
  src.stop(t + 0.008);
  src.onended = () => { src.disconnect(); bp.disconnect(); gain.disconnect(); };
}

/** Logo hover — soft ascending confirmation */
export function playSparkle() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;

  [440, 560, 660].forEach((freq, i) => {
    const osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.15, t + 0.04);

    const gain = c.createGain();
    const onset = i * 0.055;
    gain.gain.setValueAtTime(0, t + onset);
    gain.gain.linearRampToValueAtTime(0.06, t + onset + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, t + onset + 0.12);

    osc.connect(gain).connect(c.destination);
    osc.start(t + onset);
    osc.stop(t + onset + 0.12);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  });
}

/** FAQ expand — tonal pop with pitch sweep */
export function playPop() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;

  const osc = c.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(350, t);
  osc.frequency.exponentialRampToValueAtTime(500, t + 0.04);

  const gain = c.createGain();
  gain.gain.setValueAtTime(0.1, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

  osc.connect(gain).connect(c.destination);
  osc.start(t);
  osc.stop(t + 0.06);
  osc.onended = () => { osc.disconnect(); gain.disconnect(); };
}

/** Navigation link — very short noise tap */
export function playTap() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;

  const src = c.createBufferSource();
  src.buffer = clickBuffer(c, 6);

  const bp = c.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 3800;
  bp.Q.value = 2;

  const gain = c.createGain();
  gain.gain.setValueAtTime(0.12, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.006);

  src.connect(bp).connect(gain).connect(c.destination);
  src.start(t);
  src.stop(t + 0.006);
  src.onended = () => { src.disconnect(); bp.disconnect(); gain.disconnect(); };
}

/** Sound toggle on — two-note rising confirmation */
export function playEnable() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;

  [400, 540].forEach((freq, i) => {
    const osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.1, t + 0.04);

    const gain = c.createGain();
    const onset = i * 0.09;
    gain.gain.setValueAtTime(0, t + onset);
    gain.gain.linearRampToValueAtTime(0.08, t + onset + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, t + onset + 0.1);

    osc.connect(gain).connect(c.destination);
    osc.start(t + onset);
    osc.stop(t + onset + 0.1);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  });
}
