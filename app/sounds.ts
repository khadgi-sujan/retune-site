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

/** Theme toggle — short swoosh matching the radial reveal */
export function playClick() {
  const c = getContext();
  if (!c) return;
  const t = c.currentTime;
  const dur = 0.15;

  // Noise sweep: bandpass rises from low to mid, like air rushing out
  const len = Math.round(c.sampleRate * dur);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

  const src = c.createBufferSource();
  src.buffer = buf;

  const bp = c.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.setValueAtTime(800, t);
  bp.frequency.exponentialRampToValueAtTime(3000, t + dur * 0.6);
  bp.frequency.exponentialRampToValueAtTime(1500, t + dur);
  bp.Q.value = 1.5;

  const gain = c.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.12, t + dur * 0.15);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

  src.connect(bp).connect(gain).connect(c.destination);
  src.start(t);
  src.stop(t + dur);
  src.onended = () => { src.disconnect(); bp.disconnect(); gain.disconnect(); };
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
