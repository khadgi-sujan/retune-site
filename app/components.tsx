"use client";

import { useState, useCallback, useRef, useLayoutEffect, useEffect, createContext, useContext, type ReactNode } from "react";
import { playClick, playTick, playTap, playEnable, initSound, setMuted, themeVariantNames, getThemeVariant, setThemeVariant, getThemeParams, setThemeParams, getDefaultParams, previewThemeSound, type ThemeVariantName, type ThemeSoundParams } from "./sounds";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    playTick();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);
  return (
    <button className="copy-btn" onClick={handleCopy} aria-label="Copy to clipboard">
      <span className={`copy-icon ${copied ? "copy-icon-out" : "copy-icon-in"}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
      </span>
      <span className={`copy-icon ${copied ? "copy-icon-in" : "copy-icon-out"}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      </span>
    </button>
  );
}

export function HeroInstallCopy() {
  const [copied, setCopied] = useState(false);
  const handleClick = useCallback(() => {
    playTick();
    navigator.clipboard.writeText("npm install retune").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);
  return (
    <button className="hero-install" onClick={handleClick} aria-label="Copy npm install retune to clipboard">
      <code className="hero-install-cmd">npm install retune</code>
      <span className="hero-install-icon">
        <span className={`copy-icon ${copied ? "copy-icon-out" : "copy-icon-in"}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
        </span>
        <span className={`copy-icon ${copied ? "copy-icon-in" : "copy-icon-out"}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </span>
      </span>
    </button>
  );
}

const FaqContext = createContext<{ openIndex: number | null; toggle: (i: number) => void }>({ openIndex: null, toggle: () => {} });

export function FaqGroup({ children }: { children: ReactNode }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <FaqContext.Provider value={{ openIndex, toggle: (i) => { playTap(); setOpenIndex(openIndex === i ? null : i); } }}>
      {children}
    </FaqContext.Provider>
  );
}

export function FaqItem({ index, question, children }: { index: number; question: string; children: ReactNode }) {
  const { openIndex, toggle } = useContext(FaqContext);
  const open = openIndex === index;
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-question" onClick={() => toggle(index)} aria-expanded={open}>
        <span>{question}</span>
        <svg className="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="4 6 8 10 12 6" /></svg>
      </button>
      <div className="faq-answer">
        <div>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

export function CalendarIcon() {
  const [date] = useState(() => {
    if (typeof window === "undefined") return { day: "", num: "" };
    const d = new Date();
    return { day: d.toLocaleDateString("en-US", { weekday: "short" }), num: String(d.getDate()) };
  });
  return (
    <div className="mock-dock-icon dock-calendar-wrap">
      <svg className="dock-calendar-bg" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="cal-f0" x="86" y="96" width="851.461" height="851.461" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="11"/>
            <feGaussianBlur stdDeviation="11"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <filter id="cal-f1" x="97.431" y="96.4307" width="828.6" height="828.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="1.15" result="effect1_foregroundBlur"/>
          </filter>
          <filter id="cal-f2" x="97.1" y="96.1" width="829.261" height="832.961" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="11"/>
            <feGaussianBlur stdDeviation="1.8"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            <feGaussianBlur stdDeviation="5.45" result="effect2_foregroundBlur"/>
          </filter>
          <linearGradient id="cal-g0" x1="267.605" y1="252.381" x2="733.929" y2="856.618" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EFEFEF" stopOpacity="0.76"/>
            <stop offset="0.327" stopColor="white"/>
            <stop offset="0.779" stopColor="#F5F5F5"/>
            <stop offset="1" stopColor="white" stopOpacity="0.52"/>
          </linearGradient>
          <linearGradient id="cal-g1" x1="432.113" y1="253.108" x2="811.655" y2="880.091" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="0.828" stopColor="#F5F5F5"/>
            <stop offset="1" stopColor="white" stopOpacity="0.54"/>
          </linearGradient>
        </defs>
        <g filter="url(#cal-f0)">
          <path d="M701.461 107H322C203.811 107 108 202.811 108 321V700.461C108 818.65 203.811 914.461 322 914.461H701.461C819.65 914.461 915.461 818.65 915.461 700.461V321C915.461 202.811 819.65 107 701.461 107Z" fill="white" fillOpacity="0.14"/>
        </g>
        <g filter="url(#cal-f1)">
          <path d="M709.731 109.231H313.731C201.341 109.231 110.231 200.341 110.231 312.731V708.731C110.231 821.121 201.341 912.231 313.731 912.231H709.731C822.121 912.231 913.231 821.121 913.231 708.731V312.731C913.231 200.341 822.121 109.231 709.731 109.231Z" stroke="url(#cal-g0)" strokeWidth="21" fill="none"/>
        </g>
        <g filter="url(#cal-f2)">
          <path d="M701.461 107H322C203.811 107 108 202.811 108 321V700.461C108 818.65 203.811 914.461 322 914.461H701.461C819.65 914.461 915.461 818.65 915.461 700.461V321C915.461 202.811 819.65 107 701.461 107Z" fill="url(#cal-g1)"/>
        </g>
      </svg>
      <div className="dock-calendar-content">
        <span id="dock-cal-day" className="dock-calendar-day" suppressHydrationWarning>{date.day}</span>
        <span id="dock-cal-num" className="dock-calendar-num" suppressHydrationWarning>{String(date.num)}</span>
      </div>
    </div>
  );
}

function fmtTime() {
  const d = new Date();
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m} ${ampm}`;
}

export function MenuBarTime() {
  const [time, setTime] = useState(() => typeof window !== "undefined" ? fmtTime() : "");
  useEffect(() => {
    const id = setInterval(() => setTime(fmtTime()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span id="menu-bar-time" className="menu-bar-time" suppressHydrationWarning>{time}</span>;
}

export function TryItButton() {
  return (
    <button
      className="cta-primary desktop-only"
      onClick={() => {
        const host = document.querySelector("[data-retune-host]") as HTMLElement;
        const btn = host?.shadowRoot?.querySelector(".retune-toolbar-collapse-btn") as HTMLElement;
        btn?.click();
      }}
    >
      Try it here
    </button>
  );
}

export function HeroCursorPositioner({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const container = hero.querySelector(".browser-content") as HTMLElement | null;
    if (!container) return;

    const ch = container.clientHeight;
    const cw0 = container.clientWidth;
    const cr0 = container.getBoundingClientRect();
    const borderL = parseFloat(getComputedStyle(container).borderLeftWidth) || 0;
    const borderT = parseFloat(getComputedStyle(container).borderTopWidth) || 0;
    const ox0 = cr0.left + borderL;
    const oy0 = cr0.top + borderT;

    const tbFromRight = 12 + 13;
    const tbY = ((ch - 12 - 13) / ch) * 100;

    const cardEl = container.querySelector(".mock-card-target");
    const cardRatio = cardEl
      ? (() => {
          const r = cardEl.getBoundingClientRect();
          const cx = r.left + r.width / 2 - ox0;
          return cx / cw0;
        })()
      : 0.35;
    // Card position — no page scroll, cards are already in view
    const cardY = cardEl
      ? ((cardEl.getBoundingClientRect().top + cardEl.getBoundingClientRect().height / 2 - oy0) / ch) * 100
      : 25;

    // Panel layout: measure relative positions (transform-independent)
    const panelEl = container.querySelector(".mock-panel");
    const panelScrollEl = container.querySelector(".mock-panel-scroll");
    const panelInnerEl = container.querySelector(".mock-panel-inner");
    const panelCSSTop = 8; // .mock-panel { top: 8px }

    // Tabs height = distance from panel top to scroll viewport
    const tabsHeight = panelEl && panelScrollEl
      ? panelScrollEl.getBoundingClientRect().top - panelEl.getBoundingClientRect().top
      : 0;

    // Read scroll amounts from CSS variables
    const heroStyle = getComputedStyle(hero);
    const scrollPad = parseFloat(heroStyle.getPropertyValue('--scroll-pad')) || -80;
    const scrollRad = parseFloat(heroStyle.getPropertyValue('--scroll-rad')) || -250;

    const measurePanelItem = (selector: string, scrollPx: number) => {
      const val = container.querySelector(selector);
      const input = val?.closest(".mock-input");
      if (!input || !panelInnerEl) return null;
      const inputRect = input.getBoundingClientRect();
      const innerRect = panelInnerEl.getBoundingClientRect();

      // Field center within panel inner (relative diff cancels parent transforms)
      const fieldInInner = inputRect.top + inputRect.height / 2 - innerRect.top;

      // After scroll, field position within scroll viewport
      const fieldAfterScroll = fieldInInner + scrollPx;

      // Y in container (settled: panel at CSS top, no animation transform)
      const centerY = panelCSSTop + tabsHeight + fieldAfterScroll;

      // X position
      const centerX = inputRect.left + inputRect.width / 2 - ox0;

      return {
        fromRight: cw0 - centerX,
        y: (centerY / ch) * 100,
      };
    };

    const padMeasure = measurePanelItem(".mock-val-pad", scrollPad);
    const radMeasure = measurePanelItem(".mock-val-radius", scrollRad);

    // Measure genie target: the minimized dock thumbnail.
    // Terminal wrapper is a sibling of .desktop-bg, positioned to match.
    // We compute how far it needs to translate to reach the dock thumbnail.
    const desktopBg = hero.querySelector('.desktop-bg') as HTMLElement | null;
    const dockThumb = hero.querySelector('.mock-dock-spacer') as HTMLElement | null;
    const termEl = hero.querySelector('.mock-terminal') as HTMLElement | null;

    let genieDx = "200px";
    let genieDy = "200px";
    let genieScale = "0.1";
    if (desktopBg && termEl) {
      const bgRect = desktopBg.getBoundingClientRect();

      // Terminal's open position (CSS: centered, bottom: 80px in .desktop-bg)
      const termWidth = 300;
      const termHeight = termEl.scrollHeight;
      const termCssLeft = bgRect.width / 2 - 150; // centered: 50% - half of 300px
      const termCssBottom = 80; // 48px padding + 32px offset

      // Terminal center in .desktop-bg coords
      const termCx = termCssLeft + termWidth / 2;
      const termCy = bgRect.height - termCssBottom - termHeight / 2;

      // Check if dock is visible (hidden at ≤847px)
      const dockVisible = dockThumb && dockThumb.offsetParent !== null;

      let thumbCx: number, thumbCy: number, dockScale: number;
      if (dockVisible) {
        // Genie to dock thumbnail
        const thumbRect = dockThumb!.getBoundingClientRect();
        thumbCx = thumbRect.left + thumbRect.width / 2 - bgRect.left;
        thumbCy = thumbRect.top + thumbRect.height / 2 - bgRect.top;
        dockScale = thumbRect.width / termWidth;
      } else {
        // No dock — genie to bottom center
        thumbCx = bgRect.width / 2;
        thumbCy = bgRect.height + 20; // just below the visible area
        dockScale = 0.15;
      }

      // Translation delta from terminal open position to target
      const dx = thumbCx - termCx;
      const dy = thumbCy - termCy;

      genieDx = `${dx}px`;
      genieDy = `${dy}px`;
      genieScale = `${dockScale}`;
    }

    // ── Generate precise genie keyframes (Harshil Shah's two-phase algorithm) ──
    // 20 frames per transition × 18-point polygon = smooth, accurate genie effect
    const dxVal = parseFloat(genieDx);
    const dyVal = parseFloat(genieDy);
    const scVal = parseFloat(genieScale);
    const GF = 20;
    const SL = 8;

    function qEase(t: number): number {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function geniePoly(slide: number): string {
      const p: string[] = [];
      for (let i = 0; i <= SL; i++) {
        const y = i / SL;
        const sq = qEase(Math.min(1, slide * y));
        p.push(`${(100 - sq * 45).toFixed(1)}% ${(y * 100).toFixed(1)}%`);
      }
      for (let i = SL; i >= 0; i--) {
        const y = i / SL;
        const sq = qEase(Math.min(1, slide * y));
        p.push(`${(sq * 45).toFixed(1)}% ${(y * 100).toFixed(1)}%`);
      }
      return `polygon(${p.join(', ')})`;
    }

    function genieXform(tp: number): string {
      const et = qEase(tp);
      return `translate(${(dxVal * et).toFixed(2)}px, ${(dyVal * et).toFixed(2)}px) scale(${(1 + (scVal - 1) * et).toFixed(4)})`;
    }

    const genieRect = geniePoly(0);
    const genieDocked = `translate(${dxVal.toFixed(2)}px, ${dyVal.toFixed(2)}px) scale(${scVal})`;

    // Wrapper keyframes: transform + box-shadow fade
    const bsFull = '0px 0px 0px 0.25px var(--term-ring-1), 0px 0px 0px 0.5px var(--term-ring-2)';
    const bsNone = '0px 0px 0px 0px transparent, 0px 0px 0px 0px transparent';

    let wrapperKf = '@keyframes mock-terminal-wrapper-toggle {\n';
    wrapperKf += `  0%, 53.9% { transform: ${genieDocked}; box-shadow: ${bsNone}; }\n`;
    for (let i = 0; i <= GF; i++) {
      const gp = 1 - i / GF;
      const pct = (54 + (i / GF) * 3).toFixed(2);
      // Snap box-shadow on only at the very last step; hold none on second-to-last
      const bs = i === GF ? ` box-shadow: ${bsFull};` : i === GF - 1 ? ` box-shadow: ${bsNone};` : '';
      wrapperKf += `  ${pct}% { transform: ${genieXform(Math.max(0, (gp - 0.2) / 0.8))};${bs} }\n`;
    }
    for (let i = 0; i <= GF; i++) {
      const gp = i / GF;
      const pct = (89 + (i / GF) * 3).toFixed(2);
      // Snap box-shadow off at first step; hold full at step 0
      const bs = i === 0 ? ` box-shadow: ${bsFull};` : i === 1 ? ` box-shadow: ${bsNone};` : '';
      wrapperKf += `  ${pct}% { transform: ${genieXform(Math.max(0, (gp - 0.2) / 0.8))};${bs} }\n`;
    }
    wrapperKf += `  92.1%, 100% { transform: ${genieDocked}; box-shadow: ${bsNone}; }\n`;
    wrapperKf += '}\n\n';

    // Terminal keyframes: clip-path only (polygon warping)
    let clipKf = '@keyframes mock-terminal-clip {\n';
    clipKf += `  0%, 53.9% { clip-path: ${genieRect}; }\n`;
    for (let i = 0; i <= GF; i++) {
      const gp = 1 - i / GF;
      const pct = (54 + (i / GF) * 3).toFixed(2);
      clipKf += `  ${pct}% { clip-path: ${geniePoly(Math.min(1, gp / 0.4))}; }\n`;
    }
    for (let i = 0; i <= GF; i++) {
      const gp = i / GF;
      const pct = (89 + (i / GF) * 3).toFixed(2);
      clipKf += `  ${pct}% { clip-path: ${geniePoly(Math.min(1, gp / 0.4))}; }\n`;
    }
    clipKf += `  92.1%, 100% { clip-path: ${genieRect}; }\n`;
    clipKf += '}';

    let genieStyleEl = document.querySelector('style[data-genie]') as HTMLStyleElement;
    if (!genieStyleEl) {
      genieStyleEl = document.createElement('style');
      genieStyleEl.setAttribute('data-genie', '');
      document.head.appendChild(genieStyleEl);
    }
    genieStyleEl.textContent = wrapperKf + clipKf;

    // Cursor is in .desktop-bg — convert browser-content % → desktop-bg %
    const apply = () => {
      if (!desktopBg) return;
      const bcRect = container.getBoundingClientRect();
      const bgRect = desktopBg.getBoundingClientRect();
      const cw = container.clientWidth;
      const bgW = bgRect.width;
      const bgH = bgRect.height;
      const offX = bcRect.left + borderL - bgRect.left;
      const offY = bcRect.top + borderT - bgRect.top;

      const toBg = (xPct: number, yPct: number) => ({
        x: ((offX + cw * xPct / 100) / bgW) * 100,
        y: ((offY + ch * yPct / 100) / bgH) * 100,
      });

      const tb = toBg(((cw - tbFromRight) / cw) * 100, tbY);
      hero.style.setProperty("--tb-x", `${tb.x}%`);
      hero.style.setProperty("--tb-y", `${tb.y}%`);

      const card = toBg(cardRatio * 100, cardY);
      hero.style.setProperty("--card-x", `${card.x}%`);
      hero.style.setProperty("--card-y", `${card.y}%`);

      if (padMeasure) {
        const pad = toBg(((cw - padMeasure.fromRight) / cw) * 100, padMeasure.y);
        hero.style.setProperty("--pad-x", `${pad.x}%`);
        hero.style.setProperty("--pad-y", `${pad.y}%`);
      }
      if (radMeasure) {
        const rad = toBg(((cw - radMeasure.fromRight) / cw) * 100, radMeasure.y);
        hero.style.setProperty("--rad-x", `${rad.x}%`);
        hero.style.setProperty("--rad-y", `${rad.y}%`);
      }

      // Dock spacer center — cursor clicks here to trigger genie
      if (dockThumb) {
        const dr = dockThumb.getBoundingClientRect();
        hero.style.setProperty("--dock-x", `${((dr.left + dr.width / 2 - bgRect.left) / bgW) * 100}%`);
        hero.style.setProperty("--dock-y", `${((dr.top + dr.height / 2 - bgRect.top) / bgH) * 100}%`);
      }

      // Terminal yellow (minimize) dot — compute from known open-state CSS position
      // Terminal: left = 50% - 150px, bottom = 80px, width = 300px
      // Titlebar padding: 6px 10px, dot size: 7px, gap: 4px
      // Yellow dot (2nd) center X from terminal left: 10 + 7 + 4 + 3.5 = 24.5px
      // Yellow dot center Y from terminal top: 6 + 3.5 = 9.5px
      const termLeft = bgW / 2 - 150;
      const termEl = hero.querySelector('.mock-terminal') as HTMLElement;
      // offsetHeight gives CSS layout height, unaffected by transforms
      const termH = termEl ? termEl.offsetHeight : 120;
      const termTop = bgH - 80 - termH; // bottom: 80px
      const dotCenterX = termLeft + 24.5;
      const dotCenterY = termTop + 9.5;
      hero.style.setProperty("--min-x", `${(dotCenterX / bgW) * 100}%`);
      hero.style.setProperty("--min-y", `${(dotCenterY / bgH) * 100}%`);

      hero.style.setProperty("--genie-dx", genieDx);
      hero.style.setProperty("--genie-dy", genieDy);
      hero.style.setProperty("--genie-scale", genieScale);

    };

    apply();

    const onResize = () => apply();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      document.querySelector('style[data-genie]')?.remove();
    };
  }, []);

  return (
    <div ref={heroRef} className={`hero-visual${paused ? " animation-paused" : ""}`} suppressHydrationWarning>
      {children}
      <button
        className="animation-pause-btn"
        onClick={() => { playTap(); setPaused(p => !p); }}
        aria-label={paused ? "Resume animation" : "Pause animation"}
      >
        {paused ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
        )}
      </button>
    </div>
  );
}

function SoundLab({ onClose }: { onClose: () => void }) {
  const [variant, setVariant] = useState<ThemeVariantName>(getThemeVariant());
  const [params, setParams] = useState<ThemeSoundParams>(getThemeParams());

  function changeVariant(v: ThemeVariantName) {
    setThemeVariant(v);
    setVariant(v);
    setParams(getThemeParams());
  }

  function tweak(key: keyof ThemeSoundParams, val: number) {
    setThemeParams({ [key]: val });
    setParams(prev => ({ ...prev, [key]: val }));
  }

  function reset() {
    const d = getDefaultParams(variant);
    setThemeParams(d);
    setParams(d);
  }

  function copyParams() {
    const p = getThemeParams();
    const out = `// Sound: ${variant}\n{ duration: ${p.duration}, freqStart: ${p.freqStart}, freqPeak: ${p.freqPeak}, freqEnd: ${p.freqEnd}, gain: ${p.gain}, attack: ${p.attack} }`;
    navigator.clipboard.writeText(out);
  }

  const sliders: { key: keyof ThemeSoundParams; label: string; min: number; max: number; step: number }[] = [
    { key: "duration", label: "Duration", min: 0.05, max: 0.8, step: 0.01 },
    { key: "freqStart", label: "Freq Start", min: 50, max: 2000, step: 10 },
    { key: "freqPeak", label: "Freq Peak", min: 100, max: 4000, step: 10 },
    { key: "freqEnd", label: "Freq End", min: 50, max: 2000, step: 10 },
    { key: "gain", label: "Volume", min: 0.01, max: 0.3, step: 0.005 },
    { key: "attack", label: "Attack", min: 0.05, max: 0.8, step: 0.01 },
  ];

  return (
    <div className="sound-lab">
      <div className="sound-lab-header">
        <span className="sound-lab-title">Sound Lab</span>
        <button className="sound-lab-close" onClick={onClose}>&times;</button>
      </div>
      <div className="sound-lab-variants">
        {themeVariantNames.map(v => (
          <button key={v} className={`sound-lab-variant${v === variant ? " active" : ""}`} onClick={() => changeVariant(v)}>{v}</button>
        ))}
      </div>
      <div className="sound-lab-sliders">
        {sliders.map(s => (
          <label key={s.key} className="sound-lab-slider">
            <span className="sound-lab-slider-label">{s.label}</span>
            <input type="range" min={s.min} max={s.max} step={s.step} value={params[s.key]} onChange={e => tweak(s.key, parseFloat(e.target.value))} />
            <span className="sound-lab-slider-value">{s.key === "gain" ? params[s.key].toFixed(3) : s.key === "duration" || s.key === "attack" ? params[s.key].toFixed(2) : Math.round(params[s.key])}</span>
          </label>
        ))}
      </div>
      <div className="sound-lab-actions">
        <button className="sound-lab-action" onClick={() => previewThemeSound()}>Preview</button>
        <button className="sound-lab-action" onClick={reset}>Reset</button>
        <button className="sound-lab-action" onClick={copyParams}>Copy</button>
      </div>
    </div>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return !!(window as unknown as { __INITIAL_DARK__?: boolean }).__INITIAL_DARK__;
    }
    return false;
  });
  const overlayRef = useRef<HTMLDivElement>(null);
  const revealAnim = useRef<Animation | null>(null);
  const appliedDark = useRef(isDark);

  // Ensure data-theme stays set after hydration
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Cleanup on unmount: cancel any in-flight animation
  useEffect(() => {
    return () => {
      if (revealAnim.current) {
        revealAnim.current.cancel();
        revealAnim.current = null;
      }
    };
  }, []);

  function toggle(e: React.MouseEvent) {
    playClick();
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Interrupt: reverse from current position (running or paused via tab-switch)
    if (revealAnim.current && revealAnim.current.playState !== "finished" && revealAnim.current.playState !== "idle") {
      revealAnim.current.reverse();
      return;
    }
    // Clean up any finished/idle animation before starting fresh
    if (revealAnim.current) {
      revealAnim.current.cancel();
      overlay.style.display = "none";
      revealAnim.current = null;
    }

    const next = !appliedDark.current;

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsDark(next);
      appliedDark.current = next;
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
      localStorage.setItem("theme", next ? "dark" : "light");
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    ) + 150; // extend past feather zone

    // Capture old bg before switching
    const oldBg = getComputedStyle(document.documentElement).getPropertyValue("--color-bg-page").trim();

    // Switch theme immediately (new content renders underneath)
    setIsDark(next);
    appliedDark.current = next;
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");

    // Show overlay (old theme bg) with inverted mask — hole at click reveals new content
    overlay.style.background = oldBg;
    const mask = `radial-gradient(circle at ${x}px ${y}px, transparent 0, transparent var(--reveal-radius), black calc(var(--reveal-radius) + 150px))`;
    overlay.style.maskImage = mask;
    overlay.style.webkitMaskImage = mask;
    overlay.style.display = "block";

    // Animate hole expanding via registered @property
    const anim = overlay.animate(
      { "--reveal-radius": ["0px", `${endRadius}px`] } as PropertyIndexedKeyframes,
      { duration: 600, easing: "cubic-bezier(0.19, 1, 0.22, 1)", fill: "both" }
    );
    revealAnim.current = anim;

    anim.addEventListener("finish", () => {
      // Guard: ignore stale finish events from a superseded animation
      if (revealAnim.current !== anim) return;

      if (anim.playbackRate < 0) {
        // Reverse completed — hole closed, revert theme
        overlay.style.maskImage = "none";
        overlay.style.webkitMaskImage = "none";
        const old = !appliedDark.current;
        setIsDark(old);
        appliedDark.current = old;
        document.documentElement.setAttribute("data-theme", old ? "dark" : "light");
        localStorage.setItem("theme", old ? "dark" : "light");
      }
      overlay.style.display = "none";
      revealAnim.current = null;
    });
  }

  return (
    <>
      <div ref={overlayRef} className="theme-reveal" />
      <button id="theme-btn" className="theme-toggle" onClick={toggle} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} suppressHydrationWarning>
        <svg id="theme-sun" className={`theme-icon theme-icon-sun${isDark ? " active" : ""}`} suppressHydrationWarning width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11.9982 3.29083V1.76758M5.83985 18.1586L4.76275 19.2357M11.9982 22.2327V20.7094M19.2334 4.76468L18.1562 5.84179M20.707 12.0001H22.2303M18.1562 18.1586L19.2334 19.2357M1.76562 12.0001H3.28888M4.76267 4.76462L5.83977 5.84173M15.7104 8.28781C17.7606 10.3381 17.7606 13.6622 15.7104 15.7124C13.6601 17.7627 10.336 17.7627 8.28574 15.7124C6.23548 13.6622 6.23548 10.3381 8.28574 8.28781C10.336 6.23756 13.6601 6.23756 15.7104 8.28781Z"/></svg>
        <svg id="theme-moon" className={`theme-icon theme-icon-moon${isDark ? "" : " active"}`} suppressHydrationWarning width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2481 11.8112C20.1889 12.56 18.8958 13 17.5 13C13.9101 13 11 10.0899 11 6.5C11 5.10416 11.44 3.81108 12.1888 2.75189C12.126 2.75063 12.0631 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.9369 21.2494 11.874 21.2481 11.8112Z"/></svg>
      </button>
    </>
  );
}

function SoundToggle() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window !== "undefined") return initSound();
    return false;
  });

  function toggle() {
    const next = !enabled;
    setMuted(!next);
    setEnabled(next);
    if (next) playEnable();
  }

  return (
    <button id="sound-btn" className={`sound-toggle${enabled ? "" : " muted"}`} onClick={toggle} aria-label={enabled ? "Mute sounds" : "Enable sounds"} suppressHydrationWarning>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <mask id="speaker-gap">
            <rect x="0" y="0" width="24" height="24" fill="white" stroke="none"/>
            <path className="sound-mask-slash" d="M4 4L20 20" stroke="black" strokeWidth="4" fill="none" pathLength={1}/>
          </mask>
        </defs>
        <g className="speaker-body" mask="url(#speaker-gap)">
          <path d="M3.75 7.75011H5.35491C5.77433 7.75011 6.18314 7.61825 6.52352 7.37318L11.4578 3.82046C11.7886 3.58233 12.25 3.81868 12.25 4.22623V19.774C12.25 20.1815 11.7886 20.4179 11.4578 20.1797L6.52352 16.627C6.18314 16.3819 5.77433 16.2501 5.35491 16.2501H3.75C2.64543 16.2501 1.75 15.3547 1.75 14.2501V9.75011C1.75 8.64554 2.64543 7.75011 3.75 7.75011Z"/>
        </g>
        <path className="sound-wave sound-wave-outer" d="M19.2478 4.75206C21.1027 6.60695 22.25 9.16945 22.25 11.9999C22.25 14.8303 21.1027 17.3928 19.2478 19.2477"/>
        <path className="sound-wave sound-wave-inner" d="M15.8891 8.11144C16.8844 9.10674 17.5 10.4817 17.5 12.0005C17.5 13.5193 16.8844 14.8943 15.8891 15.8896"/>
        <path className="sound-slash" d="M4 4L20 20" pathLength={1}/>
      </svg>
    </button>
  );
}

export function Sidebar({ version }: { version: string }) {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".hero, .section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id || "";
            setActiveSection(id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const [showSoundLab, setShowSoundLab] = useState(false);

  return (
    <aside className={`sidebar${menuOpen ? " menu-open" : ""}`}>
      {showSoundLab && <SoundLab onClose={() => setShowSoundLab(false)} />}
      <a href="#" className="sidebar-logo">
        <svg className="logo-svg" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#logo-clip)">
            <path d="M20.713 16V15.287L21.748 15.08C22.3 14.988 22.484 14.85 22.484 13.7V2.338C22.484 1.188 22.3 1.073 21.748 0.957999L20.713 0.750999V0.0609996H27.406C31.109 0.0609996 32.788 1.441 32.788 4.109C32.788 5.811 31.5 7.398 29.131 8.088V8.157C30.373 10.296 32.006 12.849 33.294 14.505C33.547 14.827 33.777 14.965 34.49 15.149L34.996 15.287V16H31.5C29.775 13.792 28.188 11.262 26.946 8.801H24.945V13.7C24.945 14.85 25.083 14.965 25.727 15.08L26.831 15.287V16H20.713ZM26.325 7.743C29.062 7.743 30.189 6.731 30.189 4.339C30.189 1.533 29.223 1.073 27.107 1.073C26.095 1.073 25.359 1.142 24.945 1.234V7.651C24.945 7.651 25.681 7.743 26.325 7.743ZM40.5379 16.276C36.7199 16.276 34.8569 13.746 34.8569 10.02C34.8569 6.34 37.5019 3.925 40.5379 3.925C43.4589 3.925 45.2299 5.512 45.2299 9.79H37.2949C37.3639 13.286 38.9509 14.804 41.2969 14.804C43.0679 14.804 44.1259 14.252 44.9999 13.838V14.758C44.3789 15.264 42.7459 16.276 40.5379 16.276ZM40.4459 4.891C38.7669 4.891 37.5019 6.11 37.3179 8.824L42.6539 8.548C42.6539 5.903 42.2169 4.891 40.4459 4.891ZM50.1647 16.276C48.7157 16.276 47.4967 15.609 47.4967 13.861V5.512H45.8867V4.845C47.4737 4.408 48.2787 3.327 48.8997 1.464H49.7967V4.293H53.1087L52.8097 5.512H49.7967V13.516C49.7967 14.505 50.3027 14.942 51.3607 14.942C52.0277 14.942 52.7177 14.758 53.1777 14.62V15.356C52.7637 15.747 51.7057 16.276 50.1647 16.276ZM58.2576 16.276C56.3256 16.276 55.1526 15.218 55.1526 13.263V6.501C55.1526 5.65 55.0606 5.627 54.5316 5.397L53.5886 4.983V4.362L57.1076 3.971L57.4526 4.201V12.734C57.4526 14.068 58.0506 14.781 59.4306 14.781C60.5576 14.781 61.7536 14.298 62.6046 13.93V6.501C62.6046 5.65 62.5356 5.627 61.9836 5.397L61.0636 4.983V4.362L64.5826 3.971L64.9046 4.201V13.355C64.9046 14.39 65.0426 14.528 65.5946 14.781L66.4456 15.172V15.793L62.8576 16.276L62.6046 16.092L62.7196 14.712H62.6276C61.4086 15.517 59.8676 16.276 58.2576 16.276ZM67.0817 16V15.31L68.0247 15.057C68.4847 14.942 68.6457 14.758 68.6457 13.861V6.731C68.6457 5.811 68.5307 5.765 67.9557 5.489L67.0817 5.052V4.454L70.7157 3.971L70.9457 4.109L70.8307 5.397H70.9227C72.0727 4.661 73.7977 3.948 75.2697 3.948C77.5927 3.948 78.3977 4.937 78.3977 7.007V13.861C78.3977 14.758 78.5817 14.942 79.0187 15.057L79.9387 15.31V16H74.5567V15.31L75.4997 15.057C75.9597 14.942 76.0977 14.827 76.0977 13.861V7.651C76.0977 6.041 75.5687 5.466 74.0967 5.466C72.9697 5.466 71.6127 5.926 70.9457 6.179V13.861C70.9457 14.827 71.0837 14.942 71.5437 15.057L72.4867 15.31V16H67.0817ZM86.5505 16.276C82.7325 16.276 80.8695 13.746 80.8695 10.02C80.8695 6.34 83.5145 3.925 86.5505 3.925C89.4715 3.925 91.2425 5.512 91.2425 9.79H83.3075C83.3765 13.286 84.9635 14.804 87.3095 14.804C89.0805 14.804 90.1385 14.252 91.0125 13.838V14.758C90.3915 15.264 88.7585 16.276 86.5505 16.276ZM86.4585 4.891C84.7795 4.891 83.5145 6.11 83.3305 8.824L88.6665 8.548C88.6665 5.903 88.2295 4.891 86.4585 4.891Z" fill="currentColor"/>
            <path d="M2 16H0V2H2V16ZM12 16H10V14H12V16ZM10 14H8V12H10V14ZM14 14H12V12H14V14ZM8 12H6V10H8V12ZM16 12H14V10H16V12ZM12 8H10V2H12V8ZM10 2H2V0H10V2Z" fill="currentColor"/>
          </g>
          <defs><clipPath id="logo-clip"><rect width="96" height="16" fill="white"/></clipPath></defs>
        </svg>
      </a>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <nav className="toc">
        <div className="toc-inner">
          <a href="#" className={`toc-link${activeSection === "" ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Overview</a>
          <a href="#how-it-works" className={`toc-link${activeSection === "how-it-works" ? " active" : ""}`} onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#output" className={`toc-link${activeSection === "output" ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Agent Output</a>
          <a href="#install" className={`toc-link${activeSection === "install" ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Install</a>
          <a href="#faq" className={`toc-link${activeSection === "faq" ? " active" : ""}`} onClick={() => setMenuOpen(false)}>FAQ</a>
          <a
            href="https://github.com/khadgi-sujan/retune"
            className="toc-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/retune"
            className="toc-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            v{version}
          </a>
          <div className="toc-toggles">
            <button className="sound-lab-btn" onClick={() => setShowSoundLab(!showSoundLab)} aria-label="Sound lab" title="Sound Lab">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>
            </button>
            <SoundToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <script dangerouslySetInnerHTML={{ __html: `(function(){
var d=window.__INITIAL_DARK__;
var sun=document.getElementById('theme-sun');
var moon=document.getElementById('theme-moon');
var btn=document.getElementById('theme-btn');
if(sun)sun.setAttribute('class','theme-icon theme-icon-sun'+(d?' active':''));
if(moon)moon.setAttribute('class','theme-icon theme-icon-moon'+(d?'':' active'));
if(btn)btn.setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode');
var snd=localStorage.getItem('sound')==='on';
var sbtn=document.getElementById('sound-btn');
if(sbtn)sbtn.setAttribute('class','sound-toggle'+(snd?'':' muted'));
})()` }} />
    </aside>
  );
}
