"use client";

import "./styles.css";

export default function Home() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <div className="logo-mark" />
            <span className="logo-name">Retune</span>
          </a>
          <div className="nav-links">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#controls" className="nav-link">Controls</a>
            <a href="#output" className="nav-link">Output</a>
            <a href="#install" className="nav-link">Install</a>
            <a href="https://github.com/khadgi-sujan/retune" className="nav-link nav-github" target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main className="page">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-text">
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
                  <div className="mock-card selected">
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
              <div className="mock-panel">
                <div className="mock-panel-title" />
                <div className="mock-panel-section">
                  <div className="mock-panel-label" />
                  <div className="mock-panel-slider" />
                  <div className="mock-panel-label" />
                  <div className="mock-panel-slider" />
                </div>
                <div className="mock-panel-section">
                  <div className="mock-panel-label" />
                  <div className="mock-panel-color-row">
                    <div className="mock-color-swatch" />
                    <div className="mock-color-value" />
                  </div>
                </div>
                <div className="mock-panel-section">
                  <div className="mock-panel-label" />
                  <div className="mock-panel-slider" />
                </div>
              </div>
            </div>
            <div className="callout callout-select">Selected element</div>
            <div className="callout callout-panel">Live controls</div>
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
                  <div className="code-line"><span className="code-comment">$</span> npm install retune</div>
                </div>
              </div>
            </div>

            <div className="install-step">
              <div className="install-step-num">2</div>
              <div className="install-step-content">
                <p className="install-step-title">Add to your layout</p>
                <div className="code-block">
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
          <div className="footer-links">
            <a href="https://github.com/khadgi-sujan/retune" className="footer-link" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.npmjs.com/package/retune" className="footer-link" target="_blank" rel="noopener">npm</a>
          </div>
        </footer>
      </main>
    </>
  );
}
