"use client";

import { useState, useCallback, useRef, useLayoutEffect, useEffect, type ReactNode } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
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

export function FaqItem({ question, children }: { question: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
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
    // Terminal is in .desktop-bg, positioned via CSS.
    // We compute how far it needs to translate to reach the dock thumbnail.
    const desktopBg = hero.querySelector('.desktop-bg') as HTMLElement | null;
    const dockThumb = hero.querySelector('.mock-dock-spacer') as HTMLElement | null;
    const termEl = desktopBg?.querySelector('.mock-terminal') as HTMLElement | null;

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

    let kf = '@keyframes mock-terminal-toggle {\n';
    kf += `  0%, 55.9% { transform: ${genieDocked}; clip-path: ${genieRect}; }\n`;

    for (let i = 0; i <= GF; i++) {
      const gp = 1 - i / GF;
      const pct = (56 + (i / GF) * 4).toFixed(2);
      kf += `  ${pct}% { transform: ${genieXform(Math.max(0, (gp - 0.4) / 0.6))}; clip-path: ${geniePoly(Math.min(1, gp / 0.5))}; }\n`;
    }

    for (let i = 0; i <= GF; i++) {
      const gp = i / GF;
      const pct = (91 + (i / GF) * 4).toFixed(2);
      kf += `  ${pct}% { transform: ${genieXform(Math.max(0, (gp - 0.4) / 0.6))}; clip-path: ${geniePoly(Math.min(1, gp / 0.5))}; }\n`;
    }

    kf += `  95.1%, 100% { transform: ${genieDocked}; clip-path: ${genieRect}; }\n`;
    kf += '}';

    let genieStyleEl = document.querySelector('style[data-genie]') as HTMLStyleElement;
    if (!genieStyleEl) {
      genieStyleEl = document.createElement('style');
      genieStyleEl.setAttribute('data-genie', '');
      document.head.appendChild(genieStyleEl);
    }
    genieStyleEl.textContent = kf;

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
      const termEl = desktopBg.querySelector('.mock-terminal') as HTMLElement;
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
        onClick={() => setPaused(p => !p)}
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
        <svg className="logo-mark" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="11" width="4" height="8" fill="currentColor"/>
          <rect x="16" y="3" width="4" height="8" fill="currentColor"/>
          <rect x="20" y="19" width="4" height="8" fill="currentColor"/>
          <rect x="28" y="11" width="4" height="8" fill="currentColor"/>
          <rect x="24" y="19" width="4" height="8" fill="currentColor"/>
          <rect x="28" y="27" width="4" height="8" fill="currentColor"/>
          <rect x="32" y="35" width="4" height="8" fill="currentColor"/>
          <rect x="36" y="35" width="4" height="8" fill="currentColor"/>
          <rect x="40" y="27" width="4" height="8" fill="currentColor"/>
          <rect x="8" y="27" width="4" height="8" fill="currentColor"/>
          <rect x="4" y="35" width="4" height="8" fill="currentColor"/>
          <rect x="12" y="19" width="4" height="8" fill="currentColor"/>
        </svg>
        <span className="logo-name">Retune</span>
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
        </div>
      </nav>
    </aside>
  );
}
