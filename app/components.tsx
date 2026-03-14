"use client";

import { useState, useCallback, useRef, useLayoutEffect, useEffect, createContext, useContext, type ReactNode } from "react";
import { playClick, playTick, playTap, playEnable, initSound, setMuted } from "./sounds";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const handleCopy = useCallback(() => {
    playTick();
    navigator.clipboard.writeText(text).then(() => {
      clearTimeout(timerRef.current);
      setCopied(true);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
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
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const handleClick = useCallback(() => {
    playTick();
    navigator.clipboard.writeText("npm install retune").then(() => {
      clearTimeout(timerRef.current);
      setCopied(true);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
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
      { duration: 800, easing: "cubic-bezier(0.165, 0.84, 0.44, 1)", fill: "both" }
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
  const markRef = useRef<SVGGElement>(null);

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

  // Logo mark trail animation — triggers on hover
  useEffect(() => {
    const g = markRef.current;
    const logo = g?.closest(".sidebar-logo");
    if (!g || !logo) return;

    const seq: string[][] = [
      ["sq1"], ["sq2"], ["sq3"], ["sq4"], ["sq5"], ["sq6"],
      ["sq7"], ["sq8"], ["sq9"], ["sq10"], ["sq11"], ["sq12"],
      ["sq13L", "sq13R"], ["sq14L", "sq14R"],
    ];

    const stagger = 45;
    const flash = 300;
    const pause = 200;
    const sweepTime = seq.length * stagger + flash;
    const cycleTime = sweepTime + pause;
    let hovering = false;
    let timers: ReturnType<typeof setTimeout>[] = [];

    const isP3 = window.matchMedia("(color-gamut: p3)").matches;

    function randomColor() {
      const h = Math.random() * 360;
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const l = isDark ? 0.7 + Math.random() * 0.15 : 0.6 + Math.random() * 0.1;
      const c = isP3 ? 0.3 + Math.random() * 0.1 : 0.2 + Math.random() * 0.08;
      const color = `oklch(${l} ${c} ${h})`;
      const fallback = `hsl(${h}, 100%, ${isDark ? 50 + Math.random() * 25 : 50 + Math.random() * 15}%)`;
      return { color: isP3 ? color : fallback };
    }

    function clearAll() {
      timers.forEach(clearTimeout);
      timers = [];
    }

    function resetRects() {
      const rects = g.querySelectorAll("rect");
      rects.forEach((el) => {
        el.style.transition = "none";
        el.style.fill = "";
        el.removeAttribute("filter");
      });
    }

    function runCycle() {
      if (!hovering) return;
      const { color } = randomColor();

      seq.forEach((ids, i) => {
        timers.push(setTimeout(() => {
          if (!hovering) return;
          ids.forEach((id) => {
            const el = g.querySelector(`#${id}`) as SVGRectElement | null;
            if (!el) return;
            el.style.transition = "none";
            el.style.fill = color;
            el.setAttribute("filter", "url(#bloom)");
            el.getBoundingClientRect();
            el.style.transition = `fill ${flash}ms ease-out`;
            el.style.fill = "";
            timers.push(setTimeout(() => { el.removeAttribute("filter"); }, 80));
          });
        }, i * stagger));
      });

      timers.push(setTimeout(runCycle, cycleTime));
    }

    function onEnter() { hovering = true; runCycle(); }
    function onLeave() { hovering = false; clearAll(); resetRects(); }

    logo.addEventListener("mouseenter", onEnter);
    logo.addEventListener("mouseleave", onLeave);
    return () => {
      logo.removeEventListener("mouseenter", onEnter);
      logo.removeEventListener("mouseleave", onLeave);
      clearAll();
    };
  }, []);

  return (
    <aside className={`sidebar${menuOpen ? " menu-open" : ""}`}>
      <a href="#" className="sidebar-logo">
        <svg className="logo-svg" viewBox="0 0 97 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="bloom" x="-100%" y="-100%" width="300%" height="300%" colorInterpolationFilters="sRGB">
              {/* Wide soft glow — blurred + color-amplified */}
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="wideBlur"/>
              <feColorMatrix in="wideBlur" type="matrix" result="wideGlow"
                values="1.8 0 0 0 0  0 1.8 0 0 0  0 0 1.8 0 0  0 0 0 0.6 0"/>
              {/* Tight bright halo */}
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="tightBlur"/>
              <feColorMatrix in="tightBlur" type="matrix" result="tightGlow"
                values="2 0 0 0 0.1  0 2 0 0 0.1  0 0 2 0 0.1  0 0 0 0.9 0"/>
              {/* White-hot core — push source toward white */}
              <feColorMatrix in="SourceGraphic" type="matrix" result="hotCore"
                values="1 0 0 0 0.4  0 1 0 0 0.4  0 0 1 0 0.4  0 0 0 1 0"/>
              {/* Stack: wide glow → tight glow → hot core */}
              <feMerge>
                <feMergeNode in="wideGlow"/>
                <feMergeNode in="tightGlow"/>
                <feMergeNode in="hotCore"/>
              </feMerge>
            </filter>
          </defs>
          <g ref={markRef} transform="translate(8, 8)">
            <rect id="sq1" x="0" y="13.714" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq2" x="0" y="11.428" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq3" x="0" y="9.143" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq4" x="0" y="6.857" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq5" x="0" y="4.571" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq6" x="0" y="2.286" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq7" x="2.286" y="0" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq8" x="4.571" y="0" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq9" x="6.857" y="0" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq10" x="9.143" y="2.286" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq11" x="9.143" y="4.571" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq12" x="9.143" y="13.714" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq13L" x="6.857" y="11.428" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq13R" x="11.429" y="11.428" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq14L" x="4.571" y="9.143" width="2.286" height="2.286" fill="currentColor"/>
            <rect id="sq14R" x="13.714" y="9.143" width="2.286" height="2.286" fill="currentColor"/>
          </g>
          <path d="M28.522 22V21.352L29.224 21.208C29.728 21.1 29.89 21.01 29.89 20.02V11.506C29.89 10.498 29.728 10.408 29.224 10.3L28.522 10.156V9.526H34.174C37.45 9.526 38.872 10.624 38.872 12.766C38.872 14.188 37.972 15.34 36.208 15.844V15.916C37.072 17.536 38.242 19.462 39.232 20.776C39.43 21.046 39.592 21.082 40.15 21.262L40.51 21.352V22H37.126C35.92 20.452 34.732 18.346 33.886 16.546C33.814 16.546 32.536 16.528 32.5 16.528V20.02C32.5 21.01 32.644 21.1 33.184 21.208L33.922 21.352V22H28.522ZM33.49 15.646C35.362 15.646 36.154 14.908 36.154 12.964C36.154 10.84 35.542 10.408 33.994 10.408C33.292 10.408 32.77 10.462 32.5 10.534V15.574C32.536 15.592 33.022 15.646 33.49 15.646ZM45.2254 22.216C42.1114 22.216 40.5814 20.29 40.5814 17.302C40.5814 14.296 42.8134 12.478 45.2254 12.478C47.6554 12.478 49.1314 13.738 49.1674 17.122H42.9934C43.0834 19.822 44.2894 20.812 46.1254 20.812C47.4034 20.812 48.2314 20.434 48.9334 20.092V20.866C48.3754 21.406 47.0254 22.216 45.2254 22.216ZM45.1174 13.306C44.0014 13.306 43.1194 14.152 43.0114 16.276L46.6834 16.096C46.6834 13.99 46.3774 13.306 45.1174 13.306ZM53.4346 22.216C52.0486 22.216 51.0946 21.586 51.0946 20.02V13.864H49.8886V13.288C51.2386 12.856 51.9766 11.902 52.4806 10.39H53.4886V12.73H56.0266L55.7566 13.864H53.4886V19.75C53.4886 20.596 53.8306 20.938 54.7126 20.938C55.1806 20.938 55.7386 20.812 56.0806 20.722V21.37C55.7026 21.766 54.8206 22.216 53.4346 22.216ZM60.2964 22.216C58.8024 22.216 57.8664 21.406 57.8664 19.84V14.728C57.8664 14.026 57.8124 13.972 57.3444 13.738L56.6424 13.396V12.856L59.9544 12.496L60.2424 12.694V19.264C60.2424 20.308 60.6924 20.776 61.6464 20.776C62.4204 20.776 63.2124 20.452 63.7704 20.236V14.728C63.7704 14.026 63.7164 13.972 63.2304 13.738L62.5644 13.396V12.856L65.8764 12.496L66.1464 12.694V19.768C66.1464 20.614 66.2184 20.722 66.7224 20.92L67.3164 21.19V21.766L64.0224 22.216L63.7884 22.054L63.8964 20.92H63.8244C62.8524 21.586 61.6464 22.216 60.2964 22.216ZM68.0523 22V21.37L68.6823 21.208C69.1683 21.082 69.2583 20.974 69.2583 20.218V14.872C69.2583 14.116 69.1683 14.08 68.6823 13.792L68.0343 13.414V12.892L71.4003 12.496L71.6163 12.64L71.5083 13.684H71.5803C72.5343 13.072 73.8303 12.496 75.0903 12.496C76.7823 12.496 77.5383 13.27 77.5383 14.89V20.218C77.5383 20.974 77.6463 21.1 78.1143 21.208L78.7083 21.37V22H74.0283V21.37L74.6223 21.226C75.0723 21.1 75.1443 21.028 75.1443 20.218V15.556C75.1443 14.368 74.7483 13.954 73.7223 13.954C72.9482 13.954 72.0843 14.242 71.6343 14.386V20.218C71.6343 21.046 71.7063 21.1 72.1562 21.226L72.7683 21.37V22H68.0523ZM84.1786 22.216C81.0646 22.216 79.5346 20.29 79.5346 17.302C79.5346 14.296 81.7666 12.478 84.1786 12.478C86.6086 12.478 88.0846 13.738 88.1206 17.122H81.9466C82.0366 19.822 83.2426 20.812 85.0786 20.812C86.3566 20.812 87.1846 20.434 87.8866 20.092V20.866C87.3286 21.406 85.9786 22.216 84.1786 22.216ZM84.0706 13.306C82.9546 13.306 82.0726 14.152 81.9646 16.276L85.6366 16.096C85.6366 13.99 85.3306 13.306 84.0706 13.306Z" fill="currentColor"/>
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
          <a href="#install" className={`toc-link${activeSection === "install" ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Get Started</a>
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
