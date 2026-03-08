"use client";

import { useState, useCallback } from "react";
import "./styles.css";

function CopyButton({ text }: { text: string }) {
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

export default function Home() {
  return (
    <div className="layout">
      {/* ── Sidebar TOC ── */}
      <aside className="sidebar">
        <a href="#" className="sidebar-logo">
          <div className="logo-mark" />
          <span className="logo-name">Retune</span>
        </a>

        <nav className="toc">
          <a href="#" className="toc-link active">Overview</a>
          <a href="#how-it-works" className="toc-link">How It Works</a>
          <a href="#controls" className="toc-link">Controls</a>
          <a href="#output" className="toc-link">Output</a>
          <a href="#install" className="toc-link">Install</a>
          <a href="#works-with" className="toc-link">Compatibility</a>
        </nav>

        <div className="sidebar-footer">
          <a
            href="https://github.com/khadgi-sujan/retune"
            className="sidebar-ext-link"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/retune"
            className="sidebar-ext-link"
            target="_blank"
            rel="noopener"
          >
            npm
          </a>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="content">
        {/* ── Hero ── */}
        <section className="hero">
          <h1 className="hero-heading">
            Stop prompting<br />for pixels.
          </h1>
          <p className="hero-sub">
            Select any element in your running React app, tweak it visually,
            and let your AI coding tool write the CSS. No more describing
            layouts in words.
          </p>
          <div className="cta-row">
            <button
              className="cta-primary"
              onClick={() => {
                const host = document.querySelector("[data-retune-host]") as HTMLElement;
                const btn = host?.shadowRoot?.querySelector(".retune-toolbar-collapse-btn") as HTMLElement;
                btn?.click();
              }}
            >
              Try it on this page
            </button>
            <a
              href="https://github.com/khadgi-sujan/retune"
              className="cta-secondary"
              target="_blank"
              rel="noopener"
            >
              View on GitHub &rarr;
            </a>
          </div>

          <div className="hero-visual">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="browser-url">localhost:3000</div>
            </div>
            <div className="browser-content">
              <div className="mock-sidebar">
                <div className="mock-sidebar-item active" />
                <div className="mock-sidebar-item" />
                <div className="mock-sidebar-item" />
                <div className="mock-sidebar-item" />
              </div>
              <div className="mock-main">
                <div className="mock-heading" />
                <div className="mock-cards">
                  <div className="mock-card">
                    <div className="mock-card-label" />
                    <div className="mock-card-value" />
                  </div>
                  <div className="mock-card mock-card-target">
                    <div className="mock-card-label" />
                    <div className="mock-card-value" />
                    <div className="mock-selection-ring" />
                  </div>
                  <div className="mock-card">
                    <div className="mock-card-label" />
                    <div className="mock-card-value" />
                  </div>
                </div>
                <div className="mock-table">
                  <div className="mock-table-row header" />
                  <div className="mock-table-row" />
                  <div className="mock-table-row" />
                  <div className="mock-table-row" />
                </div>
              </div>
              {/* Retune toolbar — single element that morphs from circle to pill */}
              <div className="mock-toolbar">
                {/* Collapse button — visible when collapsed, shrinks away when expanded */}
                <div className="mock-collapse-btn">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2.75V4.5M16.9069 5.09326L15.5962 6.40392M6.40381 15.5962L5.09315 16.9069M4.5 11H2.75M6.40381 6.40381L5.09315 5.09315M14.1323 20.999L10.3851 10.7984C10.2362 10.3929 10.6368 10.0021 11.0385 10.1611L21.0397 14.1199C21.4283 14.2737 21.4679 14.8081 21.1062 15.0175L17.3654 17.1832C17.2898 17.227 17.227 17.2898 17.1832 17.3654L15.0343 21.0771C14.822 21.4438 14.2784 21.3967 14.1323 20.999Z"/></svg>
                </div>
                {/* Expanded inner — grows from max-width:0 */}
                <div className="mock-toolbar-expanded">
                  {/* Edit count badge wrap — grows when change happens */}
                  <div className="mock-edit-count-wrap">
                    <div className="mock-edit-count">1</div>
                  </div>
                  {/* Copy */}
                  <div className="mock-toolbar-btn enables-on-change">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.25 8.75V4C15.25 3.30964 14.6904 2.75 14 2.75H4C3.30964 2.75 2.75 3.30964 2.75 4V14C2.75 14.6904 3.30964 15.25 4 15.25H8.75M10 8.75H20C20.6904 8.75 21.25 9.30964 21.25 10V20C21.25 20.6904 20.6904 21.25 20 21.25H10C9.30964 21.25 8.75 20.6904 8.75 20V10C8.75 9.30964 9.30964 8.75 10 8.75Z"/></svg>
                  </div>
                  {/* Undo */}
                  <div className="mock-toolbar-btn enables-on-change">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.75 3.25L3.75 6.25L6.75 9.25"/><path d="M4.5 6.25H14.25C17.7018 6.25 20.5 9.04822 20.5 12.5C20.5 15.9518 17.7018 18.75 14.25 18.75H5.75"/></svg>
                  </div>
                  {/* Redo (always disabled) */}
                  <div className="mock-toolbar-btn always-disabled">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform: "scaleX(-1)"}}><path d="M6.75 3.25L3.75 6.25L6.75 9.25"/><path d="M4.5 6.25H14.25C17.7018 6.25 20.5 9.04822 20.5 12.5C20.5 15.9518 17.7018 18.75 14.25 18.75H5.75"/></svg>
                  </div>
                  {/* Broom / reset */}
                  <div className="mock-toolbar-btn enables-on-change">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M11.3819 8.76362C10.4178 8.23201 9.20537 8.57956 8.66923 9.54116C8.4097 10.0066 8.15016 10.4721 7.89062 10.9376L18.1482 16.5903C18.405 16.1299 18.6618 15.6695 18.9184 15.2091C19.4571 14.2425 19.1063 13.0228 18.1372 12.4885L11.3819 8.76362Z"/><path d="M12.9883 9.00512L15.8934 3.92207C16.5242 2.81843 17.9311 2.42534 19.0478 3.04074C20.1729 3.66076 20.5795 5.07016 19.9558 6.18872L17.0911 11.3267"/><path d="M8.92867 11.8184C7.2347 13.8083 5.31367 14.409 2.75 13.8659C3.77941 20.6894 15.6222 25.1274 16.652 16.4253"/></svg>
                  </div>
                  {/* Panel toggle */}
                  <div className="mock-toolbar-btn">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
                  </div>
                  {/* Close */}
                  <div className="mock-toolbar-btn">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75"/></svg>
                  </div>
                </div>
              </div>
              {/* Retune panel */}
              <div className="mock-panel">
                <div className="mock-panel-tabs">
                  <div className="mock-panel-tab-pill" />
                  <div className="mock-panel-tab">Elements</div>
                  <div className="mock-panel-tab active">Design</div>
                </div>
                <div className="mock-panel-header">
                  <div className="mock-el-tag">div</div>
                  <div className="mock-el-component">Card</div>
                </div>
                <div className="mock-panel-scroll">
                  <div className="mock-section">
                    <div className="mock-section-header">Spacing</div>
                    <div className="mock-section-body">
                      <div className="mock-input-row">
                        <div className="mock-input"><span className="mock-input-label">↕</span><span className="mock-input-value mock-value-animate">24px</span></div>
                        <div className="mock-input"><span className="mock-input-label">↔</span><span className="mock-input-value">20px</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="mock-section">
                    <div className="mock-section-header">Appearance</div>
                    <div className="mock-section-body">
                      <div className="mock-input-row">
                        <div className="mock-input color">
                          <span className="mock-color-swatch" />
                          <span className="mock-input-value">ffffff</span>
                        </div>
                        <div className="mock-input narrow"><span className="mock-input-value">100%</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="mock-section">
                    <div className="mock-section-header">Border</div>
                    <div className="mock-section-body">
                      <div className="mock-input-row">
                        <div className="mock-input"><span className="mock-input-label">W</span><span className="mock-input-value">1px</span></div>
                        <div className="mock-input"><span className="mock-input-label">R</span><span className="mock-input-value">8px</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Animated cursor */}
              <div className="mock-cursor">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1c1917" stroke="#fff" strokeWidth="1.5"><path d="M5 3l14 8-6.5 1.5L11 19z"/></svg>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="section" id="how-it-works">
          <p className="section-label">How it works</p>
          <h2 className="section-heading">Select. Tweak. Apply.</h2>
          <p className="section-desc">
            Three steps from visual change to committed code.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <p className="step-title">Select an element</p>
              <p className="step-card-desc">
                Click anything on your page. Retune identifies the element,
                its React component, CSS classes, and computed styles.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <p className="step-title">Tweak visually</p>
              <p className="step-card-desc">
                Adjust spacing, colors, typography, layout, and more with
                intuitive controls. Changes preview live in the browser.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <p className="step-title">Apply via AI</p>
              <p className="step-card-desc">
                Your MCP-connected agent reads the structured diff and applies
                changes directly to your source code.
              </p>
            </div>
          </div>
        </section>

        {/* ── Dynamic Controls ── */}
        <section className="section" id="controls">
          <p className="section-label">Dynamic controls</p>
          <h2 className="section-heading">The right controls for every element</h2>
          <p className="section-desc">
            Retune detects the element type and shows only relevant properties.
            No digging through 300+ CSS properties.
          </p>
          <div className="controls-grid">
            <div className="control-card">
              <p className="control-card-title">Any element</p>
              <p className="control-list">Padding, Margin, Border-radius, Background, Opacity, Box shadow</p>
            </div>
            <div className="control-card">
              <p className="control-card-title">Text</p>
              <p className="control-list">Font size, Weight, Line height, Letter spacing, Color, Alignment</p>
            </div>
            <div className="control-card">
              <p className="control-card-title">Flex container</p>
              <p className="control-list">Direction, Gap, Align items, Justify content, Wrap</p>
            </div>
            <div className="control-card">
              <p className="control-card-title">Grid container</p>
              <p className="control-list">Template columns, Template rows, Gap</p>
            </div>
            <div className="control-card">
              <p className="control-card-title">Positioned</p>
              <p className="control-list">Top, Right, Bottom, Left, Z-index</p>
            </div>
            <div className="control-card">
              <p className="control-card-title">Appearance</p>
              <p className="control-list">Background, Border, Box shadow, Opacity, Filters</p>
            </div>
          </div>
        </section>

        {/* ── What Your Agent Sees ── */}
        <section className="section" id="output">
          <p className="section-label">Output</p>
          <h2 className="section-heading">Your agent gets the full picture</h2>
          <p className="section-desc">
            Not just what changed — exactly where to find it and how to apply it.
            Source files, styling approach, and exact before/after values.
          </p>
          <div className="output-block">
            <div className="output-chrome">retune output</div>
            <div className="output-body">
              <span className="output-h1">{"# Visual Changes (1 element)"}</span>{"\n\n"}
              <span className="output-h2">{"## `<button>` \"Get Started\""}</span>{"\n\n"}
              <span className="output-key">Component:</span> HeroSection {">"} Button{"\n"}
              <span className="output-key">Selector:</span> .btn-primary{"\n"}
              <span className="output-key">Styling:</span> Tailwind CSS{"\n"}
              <span className="output-key">Classes:</span> btn-primary px-6 py-3 rounded-lg bg-blue-600{"\n\n"}
              <span className="output-h3">{"### Changes"}</span>{"\n\n"}
              <span className="output-table-hdr">{"| Property       | Before      | After       |"}</span>{"\n"}
              <span className="output-table-sep">{"|----------------|-------------|-------------|"}</span>{"\n"}
              {"| "}<span className="output-prop">padding</span>{"        | "}<span className="output-old">12px 24px</span>{"   | "}<span className="output-new">16px 32px</span>{"   |"}{"\n"}
              {"| "}<span className="output-prop">border-radius</span>{"  | "}<span className="output-old">8px</span>{"         | "}<span className="output-new">12px</span>{"        |"}{"\n"}
              {"| "}<span className="output-prop">font-size</span>{"      | "}<span className="output-old">14px</span>{"        | "}<span className="output-new">16px</span>{"        |"}{"\n\n"}
              <span className="output-hint">{"> Suggested Tailwind: px-8 py-4 rounded-xl text-base"}</span>
            </div>
          </div>
        </section>

        {/* ── Install ── */}
        <section className="section" id="install">
          <p className="section-label">Get started</p>
          <h2 className="section-heading">Three steps to visual editing</h2>

          <div className="install-steps">
            <div className="install-step">
              <div className="install-step-num">1</div>
              <div className="install-step-content">
                <p className="install-step-title">Install the package</p>
                <div className="code-block">
                  <CopyButton text="npm install retune" />
                  <div className="code-line"><span className="code-comment">$</span> npm install retune</div>
                </div>
              </div>
            </div>

            <div className="install-step">
              <div className="install-step-num">2</div>
              <div className="install-step-content">
                <p className="install-step-title">Add to your layout</p>
                <div className="code-block">
                  <CopyButton text={`import { Retune } from "retune"\n\n// Add anywhere in your component tree\n<Retune />`} />
                  <div className="code-line"><span className="code-keyword">import</span> {"{"} Retune {"}"} <span className="code-keyword">from</span> <span className="code-string">"retune"</span></div>
                  <div className="code-line" style={{ height: 8 }} />
                  <div className="code-line"><span className="code-comment">{"// Add anywhere in your component tree"}</span></div>
                  <div className="code-line">&lt;<span className="code-component">Retune</span> /&gt;</div>
                </div>
                <p className="install-note">Only renders in development. Use <code>&lt;Retune force /&gt;</code> for production demos.</p>
              </div>
            </div>

            <div className="install-step">
              <div className="install-step-num">3</div>
              <div className="install-step-content">
                <p className="install-step-title">Connect your AI tool</p>
                <p className="install-step-desc">Add to <code>.mcp.json</code> (Claude Code) or MCP settings (Cursor):</p>
                <div className="code-block">
                  <CopyButton text={`{\n  "mcpServers": {\n    "retune": {\n      "command": "npx",\n      "args": ["-y", "retune"]\n    }\n  }\n}`} />
                  <div className="code-line">{"{"}</div>
                  <div className="code-line">{"  "}<span className="code-string">"mcpServers"</span>: {"{"}</div>
                  <div className="code-line">{"    "}<span className="code-string">"retune"</span>: {"{"}</div>
                  <div className="code-line">{"      "}<span className="code-string">"command"</span>: <span className="code-string">"npx"</span>,</div>
                  <div className="code-line">{"      "}<span className="code-string">"args"</span>: [<span className="code-string">"-y"</span>, <span className="code-string">"retune"</span>]</div>
                  <div className="code-line">{"    }"}</div>
                  <div className="code-line">{"  }"}</div>
                  <div className="code-line">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Works With ── */}
        <section className="section" id="works-with">
          <p className="section-label">Compatibility</p>
          <h2 className="section-heading">Works with your stack</h2>
          <p className="section-desc">
            Retune detects your styling approach automatically and formats
            changes to match.
          </p>
          <div className="tag-row">
            <span className="tag">Tailwind CSS</span>
            <span className="tag">CSS Modules</span>
            <span className="tag">Plain CSS</span>
            <span className="tag">Inline Styles</span>
            <span className="tag">styled-components</span>
          </div>
          <div className="tag-row" style={{ marginTop: 8 }}>
            <span className="tag">Next.js</span>
            <span className="tag">Vite</span>
            <span className="tag">Remix</span>
            <span className="tag">Claude Code</span>
            <span className="tag">Cursor</span>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          <p className="footer-text">Retune — visual CSS editing for AI-assisted development.</p>
        </footer>
      </main>
    </div>
  );
}
