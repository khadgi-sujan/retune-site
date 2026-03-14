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

// ── Theme toggle sound variants (A/B testing) ──

/** 1. Breath — gentle exhale, very low frequency */
function themeBreath() {
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

/** 2. Warm whoosh — bandpass noise sweep, softened */
function themeWhoosh() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;
  const dur = 0.2;

  const len = Math.round(c.sampleRate * dur);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

  const src = c.createBufferSource();
  src.buffer = buf;

  const bp = c.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.setValueAtTime(600, t);
  bp.frequency.exponentialRampToValueAtTime(1800, t + dur * 0.5);
  bp.frequency.exponentialRampToValueAtTime(1000, t + dur);
  bp.Q.value = 0.8;

  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 2500;

  const gain = c.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.1, t + dur * 0.25);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

  src.connect(bp).connect(lp).connect(gain).connect(c.destination);
  src.start(t);
  src.stop(t + dur);
  src.onended = () => { src.disconnect(); bp.disconnect(); lp.disconnect(); gain.disconnect(); };
}

/** 3. Tonal sweep — sine wave glides up, like the circle expanding */
function themeTonal() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;
  const dur = 0.3;

  const osc = c.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(250, t);
  osc.frequency.exponentialRampToValueAtTime(500, t + dur * 0.6);
  osc.frequency.exponentialRampToValueAtTime(380, t + dur);

  const gain = c.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.07, t + dur * 0.2);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

  osc.connect(gain).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur);
  osc.onended = () => { osc.disconnect(); gain.disconnect(); };
}

/** 4. Shimmer — staggered soft tones, like the circle edge sparkling */
function themeShimmer() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;

  [280, 350, 420].forEach((freq, i) => {
    const osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.08, t + 0.15);

    const gain = c.createGain();
    const onset = i * 0.07;
    gain.gain.setValueAtTime(0, t + onset);
    gain.gain.linearRampToValueAtTime(0.05, t + onset + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + onset + 0.18);

    osc.connect(gain).connect(c.destination);
    osc.start(t + onset);
    osc.stop(t + onset + 0.18);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  });
}

/** 5. Resonant sweep — filtered oscillator, warm and directional */
function themeResonant() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;
  const dur = 0.25;

  const osc = c.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(200, t);
  osc.frequency.exponentialRampToValueAtTime(600, t + dur * 0.5);
  osc.frequency.exponentialRampToValueAtTime(350, t + dur);

  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(400, t);
  lp.frequency.exponentialRampToValueAtTime(1200, t + dur * 0.4);
  lp.frequency.exponentialRampToValueAtTime(600, t + dur);
  lp.Q.value = 2;

  const gain = c.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.1, t + dur * 0.2);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

  osc.connect(lp).connect(gain).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur);
  osc.onended = () => { osc.disconnect(); lp.disconnect(); gain.disconnect(); };
}

// ── Tweakable theme sound engine ──

export type ThemeVariantName = "breath" | "whoosh" | "tonal" | "shimmer" | "resonant" | "chime" | "ripple" | "phase" | "bubble" | "flutter" | "hum" | "wash";
export const themeVariantNames: ThemeVariantName[] = ["breath", "whoosh", "tonal", "shimmer", "resonant", "chime", "ripple", "phase", "bubble", "flutter", "hum", "wash"];

export interface ThemeSoundParams {
  duration: number;
  freqStart: number;
  freqPeak: number;
  freqEnd: number;
  gain: number;
  attack: number; // 0-1, fraction of duration
}

const defaultParams: Record<ThemeVariantName, ThemeSoundParams> = {
  breath:   { duration: 0.35, freqStart: 300,  freqPeak: 800,  freqEnd: 400,  gain: 0.15,  attack: 0.35 },
  whoosh:   { duration: 0.20, freqStart: 600,  freqPeak: 1800, freqEnd: 1000, gain: 0.10,  attack: 0.25 },
  tonal:    { duration: 0.30, freqStart: 250,  freqPeak: 500,  freqEnd: 380,  gain: 0.07,  attack: 0.20 },
  shimmer:  { duration: 0.18, freqStart: 280,  freqPeak: 420,  freqEnd: 300,  gain: 0.05,  attack: 0.15 },
  resonant: { duration: 0.25, freqStart: 200,  freqPeak: 600,  freqEnd: 350,  gain: 0.10,  attack: 0.20 },
  chime:    { duration: 0.50, freqStart: 880,  freqPeak: 880,  freqEnd: 880,  gain: 0.06,  attack: 0.02 },
  ripple:   { duration: 0.40, freqStart: 600,  freqPeak: 450,  freqEnd: 300,  gain: 0.05,  attack: 0.10 },
  phase:    { duration: 0.45, freqStart: 300,  freqPeak: 304,  freqEnd: 300,  gain: 0.08,  attack: 0.30 },
  bubble:   { duration: 0.15, freqStart: 600,  freqPeak: 600,  freqEnd: 200,  gain: 0.10,  attack: 0.05 },
  flutter:  { duration: 0.30, freqStart: 400,  freqPeak: 500,  freqEnd: 350,  gain: 0.06,  attack: 0.15 },
  hum:      { duration: 0.50, freqStart: 80,   freqPeak: 120,  freqEnd: 80,   gain: 0.20,  attack: 0.40 },
  wash:     { duration: 0.60, freqStart: 190,  freqPeak: 100,  freqEnd: 50,   gain: 0.095, attack: 0.30 },
};

let activeVariant: ThemeVariantName = "wash";
let tweakedParams: ThemeSoundParams = { ...defaultParams.wash };

export function getThemeVariant() { return activeVariant; }
export function getThemeParams() { return tweakedParams; }
export function getDefaultParams(v: ThemeVariantName) { return { ...defaultParams[v] }; }

export function setThemeVariant(v: ThemeVariantName) {
  activeVariant = v;
  tweakedParams = { ...defaultParams[v] };
}

export function setThemeParams(p: Partial<ThemeSoundParams>) {
  tweakedParams = { ...tweakedParams, ...p };
}

/** Play a preview of the current tweaked sound without toggling theme */
export function previewThemeSound() {
  // Temporarily unmute for preview
  const wasMuted = muted;
  if (wasMuted) muted = false;
  playThemeVariant();
  if (wasMuted) muted = true;
}

function playThemeVariant() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;
  const p = tweakedParams;
  const v = activeVariant;

  // ── Multi-tone variants ──

  if (v === "shimmer") {
    const freqs = [p.freqStart, (p.freqStart + p.freqPeak) / 2, p.freqPeak];
    freqs.forEach((freq, i) => {
      const osc = c.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.08, t + p.duration);
      const g = c.createGain();
      const onset = i * 0.07;
      g.gain.setValueAtTime(0, t + onset);
      g.gain.linearRampToValueAtTime(p.gain, t + onset + p.duration * p.attack);
      g.gain.exponentialRampToValueAtTime(0.001, t + onset + p.duration);
      osc.connect(g).connect(c.destination);
      osc.start(t + onset);
      osc.stop(t + onset + p.duration);
      osc.onended = () => { osc.disconnect(); g.disconnect(); };
    });
    return;
  }

  if (v === "ripple") {
    // Descending staggered tones — radiating outward
    const freqs = [p.freqStart, p.freqPeak, p.freqEnd];
    freqs.forEach((freq, i) => {
      const osc = c.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.85, t + p.duration);
      const g = c.createGain();
      const onset = i * (p.duration * 0.25);
      g.gain.setValueAtTime(0, t + onset);
      g.gain.linearRampToValueAtTime(p.gain, t + onset + p.duration * p.attack);
      g.gain.exponentialRampToValueAtTime(0.001, t + onset + p.duration * 0.7);
      osc.connect(g).connect(c.destination);
      osc.start(t + onset);
      osc.stop(t + onset + p.duration);
      osc.onended = () => { osc.disconnect(); g.disconnect(); };
    });
    return;
  }

  if (v === "phase") {
    // Two slightly detuned oscillators creating beating
    [p.freqStart, p.freqPeak].forEach((freq) => {
      const osc = c.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(p.freqEnd, t + p.duration);
      const g = c.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(p.gain, t + p.duration * p.attack);
      g.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
      osc.connect(g).connect(c.destination);
      osc.start(t);
      osc.stop(t + p.duration);
      osc.onended = () => { osc.disconnect(); g.disconnect(); };
    });
    return;
  }

  if (v === "wash") {
    // Layered noise at different frequency bands fading in sequence
    [0, 1, 2].forEach((band) => {
      const bandFreqs = [p.freqStart, (p.freqStart + p.freqPeak) / 2, p.freqPeak];
      const len = Math.round(c.sampleRate * p.duration);
      const buf = c.createBuffer(1, len, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      src.buffer = buf;
      const bp = c.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = bandFreqs[band];
      bp.Q.value = 1;
      const g = c.createGain();
      const onset = band * (p.duration * 0.15);
      g.gain.setValueAtTime(0, t + onset);
      g.gain.linearRampToValueAtTime(p.gain, t + onset + p.duration * p.attack);
      g.gain.exponentialRampToValueAtTime(0.001, t + onset + p.duration * 0.8);
      src.connect(bp).connect(g).connect(c.destination);
      src.start(t + onset);
      src.stop(t + onset + p.duration);
      src.onended = () => { src.disconnect(); bp.disconnect(); g.disconnect(); };
    });
    return;
  }

  // ── Single oscillator variants ──

  if (v === "chime") {
    // Pure tone with natural ring-out, like tapping glass
    const osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(p.freqStart, t);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(p.gain, t + p.duration * p.attack);
    g.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
    osc.connect(g).connect(c.destination);
    osc.start(t);
    osc.stop(t + p.duration);
    osc.onended = () => { osc.disconnect(); g.disconnect(); };
    return;
  }

  if (v === "bubble") {
    // Sine with quick pitch drop — water droplet
    const osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(p.freqStart, t);
    osc.frequency.exponentialRampToValueAtTime(p.freqEnd, t + p.duration * 0.7);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(p.gain, t + p.duration * p.attack);
    g.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
    osc.connect(g).connect(c.destination);
    osc.start(t);
    osc.stop(t + p.duration);
    osc.onended = () => { osc.disconnect(); g.disconnect(); };
    return;
  }

  if (v === "flutter") {
    // Amplitude-modulated tone — hummingbird/card flick
    const osc = c.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(p.freqStart, t);
    osc.frequency.exponentialRampToValueAtTime(p.freqEnd, t + p.duration);
    // LFO for amplitude modulation
    const lfo = c.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 30; // flutter rate
    const lfoGain = c.createGain();
    lfoGain.gain.value = 0.5; // modulation depth
    lfo.connect(lfoGain);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(p.gain, t + p.duration * p.attack);
    g.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
    lfoGain.connect(g.gain);
    osc.connect(g).connect(c.destination);
    osc.start(t);
    lfo.start(t);
    osc.stop(t + p.duration);
    lfo.stop(t + p.duration);
    osc.onended = () => { osc.disconnect(); lfo.disconnect(); lfoGain.disconnect(); g.disconnect(); };
    return;
  }

  if (v === "hum") {
    // Deep warm low-frequency tone — felt more than heard
    const osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(p.freqStart, t);
    osc.frequency.exponentialRampToValueAtTime(p.freqPeak, t + p.duration * 0.3);
    osc.frequency.exponentialRampToValueAtTime(p.freqEnd, t + p.duration);
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 200;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(p.gain, t + p.duration * p.attack);
    g.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
    osc.connect(lp).connect(g).connect(c.destination);
    osc.start(t);
    osc.stop(t + p.duration);
    osc.onended = () => { osc.disconnect(); lp.disconnect(); g.disconnect(); };
    return;
  }

  if (v === "tonal") {
    const osc = c.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(p.freqStart, t);
    osc.frequency.exponentialRampToValueAtTime(p.freqPeak, t + p.duration * 0.5);
    osc.frequency.exponentialRampToValueAtTime(p.freqEnd, t + p.duration);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(p.gain, t + p.duration * p.attack);
    g.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
    osc.connect(g).connect(c.destination);
    osc.start(t);
    osc.stop(t + p.duration);
    osc.onended = () => { osc.disconnect(); g.disconnect(); };
    return;
  }

  if (v === "resonant") {
    const osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(p.freqStart, t);
    osc.frequency.exponentialRampToValueAtTime(p.freqPeak, t + p.duration * 0.5);
    osc.frequency.exponentialRampToValueAtTime(p.freqEnd, t + p.duration);
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(p.freqStart * 2, t);
    lp.frequency.exponentialRampToValueAtTime(p.freqPeak * 2, t + p.duration * 0.4);
    lp.frequency.exponentialRampToValueAtTime(p.freqEnd * 2, t + p.duration);
    lp.Q.value = 2;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(p.gain, t + p.duration * p.attack);
    g.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
    osc.connect(lp).connect(g).connect(c.destination);
    osc.start(t);
    osc.stop(t + p.duration);
    osc.onended = () => { osc.disconnect(); lp.disconnect(); g.disconnect(); };
    return;
  }

  // ── Noise-based (breath, whoosh) ──
  const len = Math.round(c.sampleRate * p.duration);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

  const src = c.createBufferSource();
  src.buffer = buf;

  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(p.freqStart, t);
  lp.frequency.exponentialRampToValueAtTime(p.freqPeak, t + p.duration * 0.4);
  lp.frequency.exponentialRampToValueAtTime(p.freqEnd, t + p.duration);

  if (v === "whoosh") {
    const bp = c.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.setValueAtTime(p.freqStart, t);
    bp.frequency.exponentialRampToValueAtTime(p.freqPeak, t + p.duration * 0.5);
    bp.frequency.exponentialRampToValueAtTime(p.freqEnd, t + p.duration);
    bp.Q.value = 0.8;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(p.gain, t + p.duration * p.attack);
    g.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
    src.connect(bp).connect(lp).connect(g).connect(c.destination);
    src.start(t);
    src.stop(t + p.duration);
    src.onended = () => { src.disconnect(); bp.disconnect(); lp.disconnect(); g.disconnect(); };
  } else {
    // breath (default)
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(p.gain, t + p.duration * p.attack);
    g.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
    src.connect(lp).connect(g).connect(c.destination);
    src.start(t);
    src.stop(t + p.duration);
    src.onended = () => { src.disconnect(); lp.disconnect(); g.disconnect(); };
  }
}

/** Theme toggle — plays the currently selected variant */
export function playClick() {
  playThemeVariant();
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
