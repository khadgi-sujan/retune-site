"use client";

import { useState, useCallback, useRef, useLayoutEffect, useEffect, createContext, useContext, type ReactNode } from "react";
import { playClick, playTick, playTap, playEnable, initSound, setMuted, washLayerNames, washWaveforms, getWashConfig, getDefaultWashConfig, setWashLayer, resetWashConfig, playWashLayer, playAllWashLayers, copyWashConfig, type WashLayerName, type WashLayer, type WashWaveform } from "./sounds";

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


const fieldDefs: { key: keyof WashLayer; label: string; min: number; max: number; step: number; sensitivity: number; fmt: (v: number) => string }[] = [
  { key: "gain", label: "Volume", min: 0, max: 0.3, step: 0.001, sensitivity: 0.0005, fmt: v => v.toFixed(3) },
  { key: "delay", label: "Delay", min: 0, max: 1.0, step: 0.005, sensitivity: 0.003, fmt: v => v.toFixed(2) + "s" },
  { key: "duration", label: "Duration", min: 0.05, max: 3.0, step: 0.01, sensitivity: 0.005, fmt: v => v.toFixed(2) + "s" },
  { key: "freq", label: "Freq", min: 20, max: 4000, step: 1, sensitivity: 2, fmt: v => Math.round(v) + " Hz" },
  { key: "attack", label: "Attack", min: 0.01, max: 0.95, step: 0.01, sensitivity: 0.003, fmt: v => v.toFixed(2) },
  { key: "cutoff", label: "Cutoff", min: 20, max: 8000, step: 10, sensitivity: 5, fmt: v => Math.round(v) + " Hz" },
  { key: "vibRate", label: "Vib Rate", min: 0, max: 10, step: 0.1, sensitivity: 0.03, fmt: v => v.toFixed(1) + " Hz" },
  { key: "vibDepth", label: "Vib Depth", min: 0, max: 0.02, step: 0.0001, sensitivity: 0.00005, fmt: v => v.toFixed(4) },
  { key: "drift", label: "Drift", min: -0.1, max: 0.1, step: 0.001, sensitivity: 0.0005, fmt: v => (v >= 0 ? "+" : "") + v.toFixed(3) },
];

// Drag-to-scrub number field (like Figma/Blender)
function DragField({ value, min, max, step, sensitivity, fmt, onChange }: {
  value: number; min: number; max: number; step: number; sensitivity: number; fmt: (v: number) => string; onChange: (v: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ startX: number; startVal: number } | null>(null);
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (editing) return;
    dragState.current = { startX: e.clientX, startVal: value };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [value, editing]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current) return;
    const dx = e.clientX - dragState.current.startX;
    const raw = dragState.current.startVal + dx * sensitivity;
    const clamped = Math.min(max, Math.max(min, raw));
    const snapped = Math.round(clamped / step) * step;
    onChange(snapped);
  }, [min, max, step, sensitivity, onChange]);

  const onPointerUp = useCallback(() => { dragState.current = null; }, []);

  const onWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const dir = e.deltaY > 0 ? -1 : 1;
    const mult = e.shiftKey ? 10 : 1;
    const raw = value + dir * step * mult;
    onChange(Math.min(max, Math.max(min, Math.round(raw / step) * step)));
  }, [value, min, max, step, onChange]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  const onDoubleClick = useCallback(() => {
    setEditing(true);
    setTimeout(() => inputRef.current?.select(), 0);
  }, []);

  const commitEdit = useCallback(() => {
    setEditing(false);
    const raw = parseFloat(inputRef.current?.value ?? "");
    if (!isNaN(raw)) onChange(Math.min(max, Math.max(min, Math.round(raw / step) * step)));
  }, [min, max, step, onChange]);

  return (
    <div ref={ref} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onDoubleClick={onDoubleClick}
      style={{ background: "var(--color-bg-input)", borderRadius: 5, padding: "5px 8px", cursor: editing ? "text" : "ew-resize", userSelect: "none", fontSize: 11, fontVariantNumeric: "tabular-nums", color: "var(--color-text-primary)", minWidth: 0, textAlign: "center" }}>
      {editing ? (
        <input ref={inputRef} type="text" defaultValue={value} onBlur={commitEdit} onKeyDown={e => { if (e.key === "Enter") commitEdit(); if (e.key === "Escape") setEditing(false); }}
          style={{ all: "unset", width: "100%", textAlign: "center", fontSize: 11, fontVariantNumeric: "tabular-nums" }} />
      ) : (
        <span>{fmt(value)}</span>
      )}
    </div>
  );
}

function SoundLab({ onClose }: { onClose: () => void }) {
  const [config, setConfig] = useState(getWashConfig);
  const [solo, setSolo] = useState<WashLayerName | null>(null);
  const [expanded, setExpanded] = useState<WashLayerName | null>(null);

  function tweak(name: WashLayerName, key: keyof WashLayer, val: number | boolean | string) {
    setWashLayer(name, { [key]: val } as Partial<WashLayer>);
    setConfig(getWashConfig());
  }

  function toggleSolo(name: WashLayerName) {
    if (solo === name) {
      setSolo(null);
      for (const n of washLayerNames) setWashLayer(n, { enabled: true });
    } else {
      setSolo(name);
      for (const n of washLayerNames) setWashLayer(n, { enabled: n === name });
    }
    setConfig(getWashConfig());
  }

  function toggleEnabled(name: WashLayerName) {
    tweak(name, "enabled", !config[name].enabled);
    if (solo) { setSolo(null); }
  }

  function reset() { resetWashConfig(); setSolo(null); setExpanded(null); setConfig(getWashConfig()); }

  return (
    <div style={{ position: "fixed", bottom: 16, left: 16, zIndex: 100000, width: 340, background: "var(--color-bg-surface)", border: "1px solid var(--color-border)", borderRadius: 12, padding: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", fontSize: 12, color: "var(--color-text-primary)", fontFamily: "'Inter', sans-serif", maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontWeight: 600, fontSize: 14 }}>Sound Lab</span>
        <button onClick={onClose} style={{ all: "unset", cursor: "pointer", fontSize: 18, color: "var(--color-text-tertiary)", padding: "2px 6px", borderRadius: 4 }}>&times;</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {washLayerNames.map(name => {
          const layer = config[name];
          const isExpanded = expanded === name;
          const dimmed = solo !== null && !layer.enabled;
          return (
            <div key={name} style={{ opacity: dimmed ? 0.3 : 1, transition: "opacity 150ms ease" }}>
              {/* Layer header */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 0" }}>
                <button onClick={() => toggleEnabled(name)} style={{ all: "unset", cursor: "pointer", width: 14, height: 14, borderRadius: 3, border: `1.5px solid ${layer.enabled ? "var(--color-text-primary)" : "var(--color-text-tertiary)"}`, background: layer.enabled ? "var(--color-text-primary)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {layer.enabled && <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.2 5.7L6.5 2.3" stroke="var(--color-bg-surface)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </button>
                <button onClick={() => setExpanded(isExpanded ? null : name)} style={{ all: "unset", cursor: "pointer", flex: 1, fontSize: 12, fontWeight: 500, textTransform: "capitalize", color: layer.enabled ? "var(--color-text-primary)" : "var(--color-text-tertiary)" }}>{name}</button>
                <button onClick={() => toggleSolo(name)} style={{ all: "unset", cursor: "pointer", fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 4, background: solo === name ? "var(--color-cta-bg)" : "transparent", color: solo === name ? "var(--color-cta-text)" : "var(--color-text-tertiary)", letterSpacing: "0.5px" }}>S</button>
                <button onClick={() => playWashLayer(name)} style={{ all: "unset", cursor: "pointer", color: "var(--color-text-tertiary)", display: "flex", padding: 2 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </button>
              </div>
              {/* Expanded controls */}
              {isExpanded && (
                <div style={{ paddingBottom: 10, paddingLeft: 20 }}>
                  {/* Waveform selector */}
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 10, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: 4 }}>Waveform</span>
                    <div style={{ display: "flex", gap: 3 }}>
                      {washWaveforms.map(w => (
                        <button key={w} onClick={() => tweak(name, "waveform", w)} style={{ all: "unset", cursor: "pointer", padding: "4px 8px", borderRadius: 5, fontSize: 10, background: layer.waveform === w ? "var(--color-cta-bg)" : "var(--color-bg-input)", color: layer.waveform === w ? "var(--color-cta-text)" : "var(--color-text-secondary)", textTransform: "capitalize" }}>{w}</button>
                      ))}
                    </div>
                  </div>
                  {/* Number fields */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
                    {fieldDefs.map(f => (
                      <div key={f.key} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <span style={{ fontSize: 10, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{f.label}</span>
                        <DragField value={layer[f.key] as number} min={f.min} max={f.max} step={f.step} sensitivity={f.sensitivity} fmt={f.fmt} onChange={v => tweak(name, f.key, v)} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 6, marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--color-border)" }}>
        <button onClick={() => playAllWashLayers(true)} style={{ all: "unset", cursor: "pointer", flex: 1, textAlign: "center", padding: "7px 0", borderRadius: 6, fontSize: 11, fontWeight: 500, background: "var(--color-cta-bg)", color: "var(--color-cta-text)" }}>Play Dark</button>
        <button onClick={() => playAllWashLayers(false)} style={{ all: "unset", cursor: "pointer", flex: 1, textAlign: "center", padding: "7px 0", borderRadius: 6, fontSize: 11, fontWeight: 500, background: "var(--color-cta-bg)", color: "var(--color-cta-text)" }}>Play Light</button>
        <button onClick={reset} style={{ all: "unset", cursor: "pointer", textAlign: "center", padding: "7px 10px", borderRadius: 6, fontSize: 11, fontWeight: 500, background: "var(--color-bg-input)", color: "var(--color-text-secondary)" }}>Reset</button>
        <button onClick={copyWashConfig} style={{ all: "unset", cursor: "pointer", textAlign: "center", padding: "7px 10px", borderRadius: 6, fontSize: 11, fontWeight: 500, background: "var(--color-bg-input)", color: "var(--color-text-secondary)" }}>Copy</button>
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
    playClick(next);

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
      <a href="#" className="sidebar-logo" onDoubleClick={(e) => { e.preventDefault(); setShowSoundLab(s => !s); }}>
        <svg className="logo-svg" viewBox="0 0 91 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 19H4V7H6V19ZM16 19H14V17H16V19ZM14 17H12V15H14V17ZM18 17H16V15H18V17ZM12 15H10V13H12V15ZM20 15H18V13H20V15ZM16 11H14V7H16V11ZM14 7H6V5H14V7Z" fill="currentColor"/>
          <path d="M24.62 19V18.38L25.52 18.2C26 18.12 26.16 18 26.16 17V7.12C26.16 6.12 26 6.02 25.52 5.92L24.62 5.74V5.14H30.44C33.66 5.14 35.12 6.34 35.12 8.66C35.12 10.14 34 11.52 31.94 12.12V12.18C33.02 14.04 34.44 16.26 35.56 17.7C35.78 17.98 35.98 18.1 36.6 18.26L37.04 18.38V19H34C32.5 17.08 31.12 14.88 30.04 12.74H28.3V17C28.3 18 28.42 18.1 28.98 18.2L29.94 18.38V19H24.62ZM29.5 11.82C31.88 11.82 32.86 10.94 32.86 8.86C32.86 6.42 32.02 6.02 30.18 6.02C29.3 6.02 28.66 6.08 28.3 6.16V11.74C28.3 11.74 28.94 11.82 29.5 11.82ZM41.8591 19.24C38.5391 19.24 36.9191 17.04 36.9191 13.8C36.9191 10.6 39.2191 8.5 41.8591 8.5C44.3991 8.5 45.9391 9.88 45.9391 13.6H39.0391C39.0991 16.64 40.4791 17.96 42.5191 17.96C44.0591 17.96 44.9791 17.48 45.7391 17.12V17.92C45.1991 18.36 43.7791 19.24 41.8591 19.24ZM41.7791 9.34C40.3191 9.34 39.2191 10.4 39.0591 12.76L43.6991 12.52C43.6991 10.22 43.3191 9.34 41.7791 9.34ZM50.2302 19.24C48.9702 19.24 47.9102 18.66 47.9102 17.14V9.88H46.5102V9.3C47.8902 8.92 48.5902 7.98 49.1302 6.36H49.9102V8.82H52.7902L52.5302 9.88H49.9102V16.84C49.9102 17.7 50.3502 18.08 51.2702 18.08C51.8502 18.08 52.4502 17.92 52.8502 17.8V18.44C52.4902 18.78 51.5702 19.24 50.2302 19.24ZM57.2675 19.24C55.5875 19.24 54.5675 18.32 54.5675 16.62V10.74C54.5675 10 54.4875 9.98 54.0275 9.78L53.2075 9.42V8.88L56.2675 8.54L56.5675 8.74V16.16C56.5675 17.32 57.0875 17.94 58.2875 17.94C59.2675 17.94 60.3075 17.52 61.0475 17.2V10.74C61.0475 10 60.9875 9.98 60.5075 9.78L59.7075 9.42V8.88L62.7675 8.54L63.0475 8.74V16.7C63.0475 17.6 63.1675 17.72 63.6475 17.94L64.3875 18.28V18.82L61.2675 19.24L61.0475 19.08L61.1475 17.88H61.0675C60.0075 18.58 58.6675 19.24 57.2675 19.24ZM64.9406 19V18.4L65.7606 18.18C66.1606 18.08 66.3006 17.92 66.3006 17.14V10.94C66.3006 10.14 66.2006 10.1 65.7006 9.86L64.9406 9.48V8.96L68.1006 8.54L68.3006 8.66L68.2006 9.78H68.2806C69.2806 9.14 70.7806 8.52 72.0606 8.52C74.0806 8.52 74.7806 9.38 74.7806 11.18V17.14C74.7806 17.92 74.9406 18.08 75.3206 18.18L76.1206 18.4V19H71.4406V18.4L72.2606 18.18C72.6606 18.08 72.7806 17.98 72.7806 17.14V11.74C72.7806 10.34 72.3206 9.84 71.0406 9.84C70.0606 9.84 68.8806 10.24 68.3006 10.46V17.14C68.3006 17.98 68.4206 18.08 68.8206 18.18L69.6406 18.4V19H64.9406ZM81.87 19.24C78.55 19.24 76.93 17.04 76.93 13.8C76.93 10.6 79.23 8.5 81.87 8.5C84.41 8.5 85.95 9.88 85.95 13.6H79.05C79.11 16.64 80.49 17.96 82.53 17.96C84.07 17.96 84.99 17.48 85.75 17.12V17.92C85.21 18.36 83.79 19.24 81.87 19.24ZM81.79 9.34C80.33 9.34 79.23 10.4 79.07 12.76L83.71 12.52C83.71 10.22 83.33 9.34 81.79 9.34Z" fill="currentColor"/>
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
