"use client";

import { useState, useCallback, useRef, useLayoutEffect, useEffect, createContext, useContext, type ReactNode } from "react";
import { playClick, playTick, playTap, playEnable, initSound, setMuted } from "./sounds";

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
  const [date, setDate] = useState<{ day: string; num: number } | null>(null);
  useEffect(() => {
    const d = new Date();
    setDate({
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      num: d.getDate(),
    });
  }, []);
  if (!date) return <div className="mock-dock-icon dock-calendar-wrap" />;
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
        <span className="dock-calendar-day">{date.day}</span>
        <span className="dock-calendar-num">{date.num}</span>
      </div>
    </div>
  );
}

export function MenuBarTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      let h = d.getHours();
      const m = d.getMinutes().toString().padStart(2, "0");
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${m} ${ampm}`);
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="menu-bar-time">{time}</span>;
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
    <div ref={heroRef} className={`hero-visual${paused ? " animation-paused" : ""}`}>
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

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const revealAnim = useRef<Animation | null>(null);
  const appliedDark = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored
      ? stored === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(dark);
    appliedDark.current = dark;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, []);

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
      <button className="theme-toggle" onClick={toggle} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
        <svg className={`theme-icon theme-icon-sun${isDark ? " active" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11.9982 3.29083V1.76758M5.83985 18.1586L4.76275 19.2357M11.9982 22.2327V20.7094M19.2334 4.76468L18.1562 5.84179M20.707 12.0001H22.2303M18.1562 18.1586L19.2334 19.2357M1.76562 12.0001H3.28888M4.76267 4.76462L5.83977 5.84173M15.7104 8.28781C17.7606 10.3381 17.7606 13.6622 15.7104 15.7124C13.6601 17.7627 10.336 17.7627 8.28574 15.7124C6.23548 13.6622 6.23548 10.3381 8.28574 8.28781C10.336 6.23756 13.6601 6.23756 15.7104 8.28781Z"/></svg>
        <svg className={`theme-icon theme-icon-moon${isDark ? "" : " active"}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2481 11.8112C20.1889 12.56 18.8958 13 17.5 13C13.9101 13 11 10.0899 11 6.5C11 5.10416 11.44 3.81108 12.1888 2.75189C12.126 2.75063 12.0631 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.9369 21.2494 11.874 21.2481 11.8112Z"/></svg>
      </button>
    </>
  );
}

function SoundToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(initSound());
  }, []);

  function toggle() {
    const next = !enabled;
    setMuted(!next);
    setEnabled(next);
    if (next) playEnable();
  }

  return (
    <button className={`sound-toggle${enabled ? "" : " muted"}`} onClick={toggle} aria-label={enabled ? "Mute sounds" : "Enable sounds"}>
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

  return (
    <aside className={`sidebar${menuOpen ? " menu-open" : ""}`}>
      <a href="#" className="sidebar-logo">
        <svg className="logo-svg" viewBox="0 0 212 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.0882 36.0815C50.4149 34.916 52.4368 35.0465 53.604 36.372C54.7702 37.6979 54.6396 39.7187 53.3133 40.8851C51.2689 42.6828 49.2782 44.5944 47.0194 46.1229C45.4282 47.1996 43.692 48 41.6006 48C39.5091 48 37.773 47.1996 36.1817 46.1229C33.923 44.5944 31.9322 42.6828 29.8878 40.8851C28.5616 39.7187 28.4309 37.6979 29.5972 36.372C30.7643 35.0465 32.7862 34.916 34.1129 36.0815C35.9566 37.6982 37.7383 39.4495 39.7724 40.8258C40.798 41.5196 41.2771 41.6035 41.6006 41.6035C41.9241 41.6035 42.4031 41.5196 43.4287 40.8258C44.5299 40.0807 45.8646 38.9137 47.9413 37.0872L49.0882 36.0815Z" fill="currentColor"/>
          <path d="M30.4003 16.0206C32.5806 16.0206 34.4569 16.0155 35.9817 16.1705C37.56 16.331 39.1144 16.6899 40.5349 17.6384C41.5822 18.338 42.4818 19.2373 43.1819 20.2839C45.127 23.1929 44.8006 27.0828 44.8006 30.4127V32.0525C44.7999 33.8181 43.3674 35.2507 41.6006 35.2507C39.8338 35.2507 38.4013 33.8181 38.4005 32.0525C38.4005 29.8676 38.5032 27.6565 38.2817 25.481C38.1726 24.4101 37.9893 24.0317 37.8599 23.8382C37.6267 23.4899 37.3272 23.1903 36.9786 22.9574C36.7848 22.8281 36.4063 22.6447 35.3348 22.5358C34.2089 22.4213 32.7142 22.4171 30.4003 22.4171C28.0865 22.4171 26.5917 22.4213 25.4658 22.5358C24.3944 22.6447 24.0159 22.8281 23.8221 22.9574C23.4735 23.1903 23.1739 23.4899 22.9408 23.8382C22.8114 24.0317 22.628 24.4101 22.5189 25.481C22.4044 26.6061 22.4002 28.1007 22.4002 30.4127V44.783C22.4002 46.5493 20.9674 47.9813 19.2001 47.9813C17.4328 47.9813 16 46.5493 16 44.783V30.4127C16 28.2341 15.995 26.3583 16.15 24.8345C16.3107 23.2573 16.6696 21.7034 17.6188 20.2839C18.3188 19.2373 19.2185 18.338 20.2657 17.6384C23.1767 15.6945 27.0683 16.0206 30.4003 16.0206Z" fill="currentColor"/>
          <path d="M65.16 46V44.56L66.72 44.24C67.84 44 68.2 43.8 68.2 41.6V22.68C68.2 20.44 67.84 20.24 66.72 20L65.16 19.68V18.28H77.72C85 18.28 88.16 20.72 88.16 25.48C88.16 28.64 86.16 31.2 82.24 32.32V32.48C84.16 36.08 86.76 40.36 88.96 43.28C89.4 43.88 89.76 43.96 91 44.36L91.8 44.56V46H84.28C81.6 42.56 78.96 37.88 77.08 33.88C76.92 33.88 74.08 33.84 74 33.84V41.6C74 43.8 74.32 44 75.52 44.24L77.16 44.56V46H65.16ZM76.2 31.88C80.36 31.88 82.12 30.24 82.12 25.92C82.12 21.2 80.76 20.24 77.32 20.24C75.76 20.24 74.6 20.36 74 20.52V31.72C74.08 31.76 75.16 31.88 76.2 31.88ZM101.679 46.48C94.7587 46.48 91.3587 42.2 91.3587 35.56C91.3587 28.88 96.3187 24.84 101.679 24.84C107.079 24.84 110.359 27.64 110.439 35.16H96.7187C96.9187 41.16 99.5988 43.36 103.679 43.36C106.519 43.36 108.359 42.52 109.919 41.76V43.48C108.679 44.68 105.679 46.48 101.679 46.48ZM101.439 26.68C98.9588 26.68 96.9987 28.56 96.7587 33.28L104.919 32.88C104.919 28.2 104.239 26.68 101.439 26.68ZM119.321 46.48C116.241 46.48 114.121 45.08 114.121 41.6V27.92H111.441V26.64C114.441 25.68 116.081 23.56 117.201 20.2H119.441V25.4H125.081L124.481 27.92H119.441V41C119.441 42.88 120.201 43.64 122.161 43.64C123.201 43.64 124.441 43.36 125.201 43.16V44.6C124.361 45.48 122.401 46.48 119.321 46.48ZM133.97 46.48C130.65 46.48 128.57 44.68 128.57 41.2V29.84C128.57 28.28 128.45 28.16 127.41 27.64L125.85 26.88V25.68L133.21 24.88L133.85 25.32V39.92C133.85 42.24 134.85 43.28 136.97 43.28C138.69 43.28 140.45 42.56 141.69 42.08V29.84C141.69 28.28 141.57 28.16 140.49 27.64L139.01 26.88V25.68L146.37 24.88L146.97 25.32V41.04C146.97 42.92 147.13 43.16 148.25 43.6L149.57 44.2V45.48L142.25 46.48L141.73 46.12L141.97 43.6H141.81C139.65 45.08 136.97 46.48 133.97 46.48ZM150.605 46V44.6L152.005 44.24C153.085 43.96 153.285 43.72 153.285 42.04V30.16C153.285 28.48 153.085 28.4 152.005 27.76L150.565 26.92V25.76L158.045 24.88L158.525 25.2L158.285 27.52H158.445C160.565 26.16 163.445 24.88 166.245 24.88C170.005 24.88 171.685 26.6 171.685 30.2V42.04C171.685 43.72 171.925 44 172.965 44.24L174.285 44.6V46H163.885V44.6L165.205 44.28C166.205 44 166.365 43.84 166.365 42.04V31.68C166.365 29.04 165.485 28.12 163.205 28.12C161.485 28.12 159.565 28.76 158.565 29.08V42.04C158.565 43.88 158.725 44 159.725 44.28L161.085 44.6V46H150.605ZM185.841 46.48C178.921 46.48 175.521 42.2 175.521 35.56C175.521 28.88 180.481 24.84 185.841 24.84C191.241 24.84 194.521 27.64 194.601 35.16H180.881C181.081 41.16 183.761 43.36 187.841 43.36C190.681 43.36 192.521 42.52 194.081 41.76V43.48C192.841 44.68 189.841 46.48 185.841 46.48ZM185.601 26.68C183.121 26.68 181.161 28.56 180.921 33.28L189.081 32.88C189.081 28.2 188.401 26.68 185.601 26.68Z" fill="currentColor"/>
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
    </aside>
  );
}
