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
      Try it on this page
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
    const panelOffsetPx = 8;

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
    const cardY = cardEl
      ? ((cardEl.getBoundingClientRect().top + cardEl.getBoundingClientRect().height / 2 - oy0) / ch) * 100
      : 25;

    const measurePanelItem = (selector: string) => {
      const val = container.querySelector(selector);
      const input = val?.closest(".mock-input");
      if (!input) return null;
      const r = input.getBoundingClientRect();
      const centerX = r.left + r.width / 2 - ox0;
      const centerY = r.top + r.height / 2 - oy0;
      return {
        fromRight: cw0 - centerX,
        y: ((centerY - panelOffsetPx) / ch) * 100,
      };
    };

    const padMeasure = measurePanelItem(".mock-val-pad");
    const radMeasure = measurePanelItem(".mock-val-radius");
    const padScrollPct = (80 / ch) * 100;
    const radScrollPct = (250 / ch) * 100;

    const apply = (cw: number) => {
      hero.style.setProperty("--tb-x", `${((cw - tbFromRight) / cw) * 100}%`);
      hero.style.setProperty("--tb-y", `${tbY}%`);

      const cardX = cardRatio * 100;
      hero.style.setProperty("--card-x", `${cardX}%`);
      hero.style.setProperty("--card-y", `${cardY}%`);

      if (padMeasure) {
        hero.style.setProperty("--pad-x", `${((cw - padMeasure.fromRight) / cw) * 100}%`);
        hero.style.setProperty("--pad-y", `${padMeasure.y - padScrollPct}%`);
      }
      if (radMeasure) {
        hero.style.setProperty("--rad-x", `${((cw - radMeasure.fromRight) / cw) * 100}%`);
        hero.style.setProperty("--rad-y", `${radMeasure.y - radScrollPct}%`);
      }
    };

    apply(cw0);

    const onResize = () => apply(container.clientWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
