"use client";

import "./styles.css";

export default function Home() {
  return (
    <main className="page">
      {/* Logo */}
      <div className="logo">
        <div className="logo-mark" />
        <span className="logo-name">Retune</span>
      </div>

      {/* Hero */}
      <section className="section">
        <h1 className="hero-heading">
          Stop prompting for pixels.
        </h1>
        <p className="hero-sub">
          Select any element on your app, tweak it visually, and let your AI
          coding tool apply the changes to source. No more describing CSS in words.
        </p>
        <div className="cta-row">
          <button className="cta-primary" onClick={() => {
            const host = document.querySelector("[data-retune-host]") as HTMLElement;
            const btn = host?.shadowRoot?.querySelector(".retune-toolbar-collapse-btn") as HTMLElement;
            btn?.click();
          }}>
            Try it on this page
          </button>
          <span className="cta-hint">or click the toolbar in the corner</span>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <p className="section-label">How it works</p>
        <h2 className="section-heading">Select. Tweak. Apply.</h2>
        <p className="section-desc">
          Retune is a visual overlay for your running app. Make precise CSS edits
          with controls instead of prompts, then send them to Claude Code or Cursor.
        </p>
        <div className="steps">
          <div className="step">
            <span className="step-num">01</span>
            <div className="step-content">
              <p className="step-title">Select an element</p>
              <p className="step-desc">
                Click anything on your page. Retune identifies the element, its CSS
                classes, React component, and which styles apply to it.
              </p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">02</span>
            <div className="step-content">
              <p className="step-title">Edit visually</p>
              <p className="step-desc">
                Adjust spacing, colors, typography, layout, borders, shadows, and
                more. Changes preview live — exactly like browser devtools, but intuitive.
              </p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">03</span>
            <div className="step-content">
              <p className="step-title">Send to your AI tool</p>
              <p className="step-desc">
                Copy the changes or let your MCP-connected agent read them directly.
                Retune tells the AI exactly what changed and where to find it in code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What your agent sees */}
      <section className="section">
        <p className="section-label">Output</p>
        <h2 className="section-heading">Your agent gets the full picture</h2>
        <p className="section-desc">
          No vague descriptions. Retune sends structured diffs with element
          identification, component context, and exact before/after values.
        </p>
        <div className="output-block">
          <span className="output-label">Element: </span><span className="output-value">&lt;button&gt; "Get Started"</span>{"\n"}
          <span className="output-label">Component: </span><span className="output-value">HeroSection &rsaquo; Button</span>{"\n"}
          <span className="output-label">Selector: </span><span className="output-value">.btn-primary</span>{"\n\n"}
          <span className="output-label">Changes:</span>{"\n"}
          {"  "}padding: <span className="output-old">12px 24px</span> <span className="output-change">16px 32px</span>{"\n"}
          {"  "}border-radius: <span className="output-old">8px</span> <span className="output-change">12px</span>{"\n"}
          {"  "}font-size: <span className="output-old">14px</span> <span className="output-change">16px</span>
        </div>
      </section>

      {/* Setup */}
      <section className="section">
        <p className="section-label">Setup</p>
        <h2 className="section-heading">Two lines of code</h2>
        <p className="section-desc">
          Add the overlay to your layout. Works with Next.js, Vite, Remix — any React app.
        </p>
        <div className="code-block">
          <div className="code-line"><span className="code-keyword">import</span> {"{"} Retune {"}"} <span className="code-keyword">from</span> <span className="code-string">"retune"</span></div>
          <div className="code-line" style={{ height: 8 }} />
          <div className="code-line"><span className="code-comment">{"// Add to your layout, anywhere in the tree"}</span></div>
          <div className="code-line">&lt;<span className="code-component">Retune</span> /&gt;</div>
        </div>
      </section>

      {/* Works with */}
      <section className="section">
        <p className="section-label">Compatibility</p>
        <h2 className="section-heading">Works with your stack</h2>
        <p className="section-desc">
          Retune detects your styling approach automatically and formats changes
          to match — whether that's utility classes, CSS modules, or plain stylesheets.
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

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Retune — visual CSS editing for AI-assisted development.</p>
      </footer>
    </main>
  );
}
