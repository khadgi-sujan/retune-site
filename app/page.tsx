import "./styles.css";
import {
  CopyButton,
  HeroInstallCopy,
  FaqItem,
  TryItButton,
  HeroCursorPositioner,
  Sidebar,
} from "./components";

const retuneVersion = process.env.RETUNE_VERSION ?? "0.0.0";

export default function Home() {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">Skip to content</a>

      {/* ── Sidebar TOC ── */}
      <Sidebar version={retuneVersion} />

      {/* ── Main Content ── */}
      <main className="content" id="main-content">
        {/* ── Hero ── */}
        <section className="hero">
          <h1 className="hero-heading">
            The visual layer for vibe coding.
          </h1>
          <p className="hero-sub">
            Retune lets you select and tweak any element right in the browser. Your AI agent writes the code. No more prompting for pixels.
          </p>
          <div className="cta-row desktop-only">
            <TryItButton />
            <HeroInstallCopy />
          </div>
          <p className="mobile-callout">Retune is a desktop tool. Try it on a larger screen to see the live demo.</p>

          <HeroCursorPositioner>
            <div className="desktop-bg" aria-hidden="true">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              {/* Tab overview pill */}
              <div className="safari-pill">
                <svg className="safari-btn" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>
                <svg className="safari-btn safari-chevron" width="6" height="6" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2.5 4L5 6.5L7.5 4"/></svg>
              </div>
              {/* Nav pill */}
              <div className="safari-pill safari-nav-pill">
                <svg className="safari-btn safari-back" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                <span className="safari-pill-sep" />
                <svg className="safari-btn safari-fwd" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </div>
              {/* URL pill */}
              <div className="safari-url-wrap">
                <div className="browser-url safari-pill">
                  <span>localhost:3000</span>
                  <svg className="safari-reload" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                </div>
              </div>
              {/* Actions pill */}
              <div className="safari-pill">
                <svg className="safari-btn" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                <svg className="safari-btn" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                <svg className="safari-btn" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
              </div>
            </div>
            <div className="browser-content">
              <div className="mock-main">
                {/* Nav */}
                <div className="mock-nav">
                  <svg className="mock-nav-logo" width="14" height="14" viewBox="0 0 32 32" fill="none"><path d="M19.2002 0C23.6805 0 25.9206.0001 27.6318.872 29.1371 1.639 30.3609 2.863 31.1279 4.368 31.9999 6.08 32 8.32 32 12.8V19.2c0 4.48 0 6.72-.872 8.432a7.99 7.99 0 01-3.496 3.496C25.92 32 23.68 32 19.2 32H12.8C8.32 32 6.08 32 4.368 31.128a7.99 7.99 0 01-3.496-3.496C0 25.92 0 23.68 0 19.2V12.8C0 8.32 0 6.08.872 4.368A7.99 7.99 0 014.368.872C6.08 0 8.32 0 12.8 0h6.4zM25.977 4.392c.347-.309.147-.8-.297-.663C20.17 5.428 8.932 16.296 5.469 26.878c-.155.473.417.819.799.498C12.962 21.747 16.678 23.5 19 17c2.37-6.637 1.145-7.43 6.977-12.608z" fill="#00983F"/></svg>
                  <span className="mock-nav-brand">Pied Piper</span>
                  <div className="mock-nav-links">
                    <span className="mock-nav-link">Features</span>
                    <span className="mock-nav-link">Pricing</span>
                    <span className="mock-nav-link">Docs</span>
                  </div>
                  <div className="mock-nav-cta">Sign up</div>
                </div>
                {/* Hero */}
                <div className="mock-hero">
                  <div className="mock-hero-badge">New: Middle Out</div>
                  <h2 className="mock-hero-heading">A better internet, through compression</h2>
                  <p className="mock-hero-sub">Lossless compression with a Weissman score of 5.2. Making the world a better place.</p>
                  <div className="mock-hero-buttons">
                    <div className="mock-hero-btn primary">Compress now</div>
                    <div className="mock-hero-btn">Watch demo</div>
                  </div>
                </div>
                {/* Logos */}
                <div className="mock-logos">
                  <span className="mock-logos-label">Backed by</span>
                  <div className="mock-logos-row">
                    <span className="mock-logo">Raviga Capital</span>
                    <span className="mock-logo">Bream-Hall</span>
                    <span className="mock-logo">Coleman Blair</span>
                    <span className="mock-logo">Laurie Bream</span>
                  </div>
                </div>
                {/* Bento feature grid */}
                <div className="mock-features-header">
                  <h3 className="mock-section-title">Everything you need to compress</h3>
                  <p className="mock-section-sub">Middle out compression for the decentralized internet</p>
                </div>
                <div className="mock-bento">
                  <div className="mock-bento-slot">
                    <div className="mock-bento-card mock-card-target">
                      <span className="mock-bento-title">Weissman Score</span>
                      <span className="mock-bento-sub">Real-time compression metrics</span>
                      <div className="mock-bento-visual">
                        <div className="mock-bento-chart">
                          {/* Nucleus: 2.1 → PP iterations → 5.2 at Disrupt */}
                          <div className="mock-chart-bar" style={{height: '38%'}} />
                          <div className="mock-chart-bar" style={{height: '42%'}} />
                          <div className="mock-chart-bar" style={{height: '41%'}} />
                          <div className="mock-chart-bar" style={{height: '54%'}} />
                          <div className="mock-chart-bar" style={{height: '58%'}} />
                          <div className="mock-chart-bar" style={{height: '72%'}} />
                          <div className="mock-chart-bar" style={{height: '98%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="mock-selection-overlay" />
                    <div className="mock-selection-label">div.card 180×120</div>
                  </div>
                  <div className="mock-bento-card">
                    <span className="mock-bento-title">Network</span>
                    <span className="mock-bento-sub">Decentralized nodes</span>
                    <div className="mock-bento-visual">
                      <div className="mock-bento-links">
                        <div className="mock-link-row">
                          <span className="mock-link-url">piedpiper.com/download</span>
                          <span className="mock-link-count">2.4k</span>
                        </div>
                        <div className="mock-link-row">
                          <span className="mock-link-url">piedpiper.com/compress</span>
                          <span className="mock-link-count">1.8k</span>
                        </div>
                        <div className="mock-link-row">
                          <span className="mock-link-url">piedpiper.com/pricing</span>
                          <span className="mock-link-count">956</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mock-bento-card">
                    <span className="mock-bento-title">API</span>
                    <span className="mock-bento-sub">Middle out SDK</span>
                    <div className="mock-bento-visual">
                      <div className="mock-bento-code">
                        <div className="mock-code-line"><span className="mock-code-kw">const</span> ratio = <span className="mock-code-fn">weissman</span>(5.2)</div>
                        <div className="mock-code-line"><span className="mock-code-kw">if</span> (ratio {">"} nucleus) {"{"}</div>
                        <div className="mock-code-line">  piedPiper.<span className="mock-code-fn">compress</span>(data)</div>
                        <div className="mock-code-line">{"}"}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Stats row */}
                <div className="mock-stats">
                  <div className="mock-stat">
                    <span className="mock-stat-num">5.2</span>
                    <span className="mock-stat-label">Weissman</span>
                  </div>
                  <div className="mock-stat">
                    <span className="mock-stat-num">99.9%</span>
                    <span className="mock-stat-label">Lossless</span>
                  </div>
                  <div className="mock-stat">
                    <span className="mock-stat-num">8B+</span>
                    <span className="mock-stat-label">Files / day</span>
                  </div>
                  <div className="mock-stat">
                    <span className="mock-stat-num">3ms</span>
                    <span className="mock-stat-label">Compress time</span>
                  </div>
                </div>
                {/* Second bento row — wider cards */}
                <div className="mock-bento mock-bento-2col">
                  <div className="mock-bento-card">
                    <span className="mock-bento-title">Platform</span>
                    <span className="mock-bento-sub">The new decentralized internet</span>
                    <div className="mock-bento-visual">
                      <div className="mock-integrations">
                        <div className="mock-integration-pill">PiperNet</div>
                        <div className="mock-integration-pill">PiperChat</div>
                        <div className="mock-integration-pill">PiperStore</div>
                        <div className="mock-integration-pill">SeeFood</div>
                        <div className="mock-integration-pill">PiperCoin</div>
                        <div className="mock-integration-pill">Octopipe</div>
                      </div>
                    </div>
                  </div>
                  <div className="mock-bento-card">
                    <span className="mock-bento-title">Team</span>
                    <span className="mock-bento-sub">The guys who built the new internet</span>
                    <div className="mock-bento-visual">
                      <div className="mock-avatars">
                        <div className="mock-avatar" style={{background: '#3b82f6'}}>R</div>
                        <div className="mock-avatar" style={{background: '#8b5cf6'}}>G</div>
                        <div className="mock-avatar" style={{background: '#ec4899'}}>D</div>
                        <div className="mock-avatar" style={{background: '#f59e0b'}}>J</div>
                        <div className="mock-avatar mock-avatar-more">+E</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonials */}
                <div className="mock-testimonials">
                  <div className="mock-testimonial">
                    <p className="mock-testimonial-text">"This is the best compression I have ever seen. This guy fucks."</p>
                    <div className="mock-testimonial-author">
                      <div className="mock-testimonial-avatar" style={{background: '#3b82f6'}} />
                      <div>
                        <span className="mock-testimonial-name">Russ Hanneman</span>
                        <span className="mock-testimonial-role">Billionaire, Tres Commas</span>
                      </div>
                    </div>
                  </div>
                  <div className="mock-testimonial">
                    <p className="mock-testimonial-text">"I have been known to fuck myself."</p>
                    <div className="mock-testimonial-author">
                      <div className="mock-testimonial-avatar" style={{background: '#8b5cf6'}} />
                      <div>
                        <span className="mock-testimonial-name">Richard Hendricks</span>
                        <span className="mock-testimonial-role">CEO, Pied Piper</span>
                      </div>
                    </div>
                  </div>
                  <div className="mock-testimonial">
                    <p className="mock-testimonial-text">"JIAN-YANG!"</p>
                    <div className="mock-testimonial-author">
                      <div className="mock-testimonial-avatar" style={{background: '#059669'}} />
                      <div>
                        <span className="mock-testimonial-name">Erlich Bachman</span>
                        <span className="mock-testimonial-role">Visionary, Aviato</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CTA section */}
                <div className="mock-bottom-cta">
                  <h3 className="mock-bottom-heading">Ready to compress?</h3>
                  <p className="mock-bottom-sub">Free for individuals. This guy fucks.</p>
                  <div className="mock-hero-buttons">
                    <div className="mock-hero-btn primary">Start compressing</div>
                    <div className="mock-hero-btn">Talk to Jared</div>
                  </div>
                </div>
                {/* Footer */}
                <div className="mock-footer">
                  <div className="mock-footer-cols">
                    <div className="mock-footer-col">
                      <span className="mock-footer-heading">Product</span>
                      <span className="mock-footer-link">Features</span>
                      <span className="mock-footer-link">Pricing</span>
                      <span className="mock-footer-link">Changelog</span>
                      <span className="mock-footer-link">Docs</span>
                    </div>
                    <div className="mock-footer-col">
                      <span className="mock-footer-heading">Company</span>
                      <span className="mock-footer-link">About</span>
                      <span className="mock-footer-link">Blog</span>
                      <span className="mock-footer-link">Careers</span>
                      <span className="mock-footer-link">Contact</span>
                    </div>
                    <div className="mock-footer-col">
                      <span className="mock-footer-heading">Legal</span>
                      <span className="mock-footer-link">Privacy</span>
                      <span className="mock-footer-link">Terms</span>
                      <span className="mock-footer-link">DPA</span>
                    </div>
                  </div>
                  <div className="mock-footer-bottom">
                    <span className="mock-footer-copy">&copy; 2025 Pied Piper Inc.</span>
                  </div>
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
                    <div className="mock-edit-count">
                      <span className="mock-count-1">1</span>
                      <span className="mock-count-2">2</span>
                    </div>
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
                <div className="mock-panel-scroll">
                <div className="mock-panel-inner">
                <div className="mock-panel-header">
                  <div className="mock-el-tag">div</div>
                  <div className="mock-header-row">
                    <span className="mock-row-label">State</span>
                    <div className="mock-input mock-select mock-state-select"><span className="mock-input-value">default</span><svg className="mock-chevron" width="6" height="6" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2.5 4L5 6.5L7.5 4"/></svg></div>
                  </div>
                  <div className="mock-header-row">
                    <span className="mock-row-label">Selector</span>
                    <div className="mock-selector-field">
                      <div className="mock-selector-tag">This element</div>
                      <div className="mock-selector-tag active">mock-card<span className="mock-selector-count">4</span></div>
                    </div>
                  </div>
                </div>
                  {/* Position — alignment + type */}
                  <div className="mock-section">
                    <div className="mock-section-header">Position</div>
                    <div className="mock-section-body">
                      <div className="mock-field">
                        <span className="mock-field-label">Alignment</span>
                        <div className="mock-align-row">
                          <div className="mock-btn-group disabled">
                            <div className="mock-align-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M17.25 10C17.6642 10 18 9.66421 18 9.25V8.75C18 8.33579 17.6642 8 17.25 8H8.75C8.33579 8 8 8.33579 8 8.75V9.25C8 9.66421 8.33579 10 8.75 10H17.25ZM13.25 15C13.6642 15 14 14.6642 14 14.25V13.75C14 13.3358 13.6642 13 13.25 13H8.75C8.33579 13 8 13.3358 8 13.75V14.25C8 14.6642 8.33579 15 8.75 15H13.25Z" fillOpacity="0.9"/><path d="M6 17.5C6 17.7761 5.77614 18 5.5 18C5.22386 18 5 17.7761 5 17.5V5.5C5 5.22386 5.22386 5 5.5 5C5.77614 5 6 5.22386 6 5.5V17.5Z" fillOpacity="0.3"/></svg></div>
                            <div className="mock-align-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M17.25 10C17.6642 10 18 9.66421 18 9.25V8.75C18 8.33579 17.6642 8 17.25 8H7.75C7.33579 8 7 8.33579 7 8.75V9.25C7 9.66421 7.33579 10 7.75 10H17.25ZM15.25 15C15.6642 15 16 14.6642 16 14.25V13.75C16 13.3358 15.6642 13 15.25 13H9.75C9.33579 13 9 13.3358 9 13.75V14.25C9 14.6642 9.33579 15 9.75 15H15.25Z" fillOpacity="0.9"/><path fillRule="evenodd" clipRule="evenodd" d="M13 17.5C13 17.7761 12.7761 18 12.5 18C12.2239 18 12 17.7761 12 17.5V15H13V17.5ZM13 13V10H12V13H13ZM13 5.5V8H12V5.5C12 5.22386 12.2239 5 12.5 5C12.7761 5 13 5.22386 13 5.5Z" fillOpacity="0.3"/></svg></div>
                            <div className="mock-align-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M6.75 10C6.33579 10 6 9.66421 6 9.25V8.75C6 8.33579 6.33579 8 6.75 8H15.25C15.6642 8 16 8.33579 16 8.75V9.25C16 9.66421 15.6642 10 15.25 10H6.75ZM10.75 15C10.3358 15 10 14.6642 10 14.25V13.75C10 13.3358 10.3358 13 10.75 13H15.25C15.6642 13 16 13.3358 16 13.75V14.25C16 14.6642 15.6642 15 15.25 15H10.75Z" fillOpacity="0.9"/><path d="M18 17.5C18 17.7761 18.2239 18 18.5 18C18.7761 18 19 17.7761 19 17.5V5.5C19 5.22386 18.7761 5 18.5 5C18.2239 5 18 5.22386 18 5.5V17.5Z" fillOpacity="0.3"/></svg></div>
                          </div>
                          <div className="mock-btn-group disabled">
                            <div className="mock-align-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M10 17.25C10 17.6642 9.66421 18 9.25 18H8.75C8.33579 18 8 17.6642 8 17.25L8 8.75C8 8.33579 8.33579 8 8.75 8H9.25C9.66421 8 10 8.33579 10 8.75V17.25ZM15 13.25C15 13.6642 14.6642 14 14.25 14H13.75C13.3358 14 13 13.6642 13 13.25V8.75C13 8.33579 13.3358 8 13.75 8H14.25C14.6642 8 15 8.33579 15 8.75V13.25Z" fillOpacity="0.9"/><path d="M17.5 6C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5L5.5 5C5.22386 5 5 5.22386 5 5.5C5 5.77614 5.22386 6 5.5 6L17.5 6Z" fillOpacity="0.3"/></svg></div>
                            <div className="mock-align-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M10 6.75C10 6.33579 9.66421 6 9.25 6H8.75C8.33579 6 8 6.33579 8 6.75V16.25C8 16.6642 8.33579 17 8.75 17H9.25C9.66421 17 10 16.6642 10 16.25V6.75ZM15 8.75C15 8.33579 14.6642 8 14.25 8H13.75C13.3358 8 13 8.33579 13 8.75V14.25C13 14.6642 13.3358 15 13.75 15H14.25C14.6642 15 15 14.6642 15 14.25V8.75Z" fillOpacity="0.9"/><path fillRule="evenodd" clipRule="evenodd" d="M17.5 11C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H15V11H17.5ZM13 11H10V12H13V11ZM5.5 11H8V12H5.5C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11Z" fillOpacity="0.3"/></svg></div>
                            <div className="mock-align-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M10 6.75C10 6.33579 9.66421 6 9.25 6H8.75C8.33579 6 8 6.33579 8 6.75L8 15.25C8 15.6642 8.33579 16 8.75 16H9.25C9.66421 16 10 15.6642 10 15.25V6.75ZM15 10.75C15 10.3358 14.6642 10 14.25 10H13.75C13.3358 10 13 10.3358 13 10.75V15.25C13 15.6642 13.3358 16 13.75 16H14.25C14.6642 16 15 15.6642 15 15.25V10.75Z" fillOpacity="0.9"/><path d="M17.5 18C17.7761 18 18 18.2239 18 18.5C18 18.7761 17.7761 19 17.5 19H5.5C5.22386 19 5 18.7761 5 18.5C5 18.2239 5.22386 18 5.5 18H17.5Z" fillOpacity="0.3"/></svg></div>
                          </div>
                        </div>
                      </div>
                      <div className="mock-input-row">
                        <div className="mock-field">
                          <span className="mock-field-label">Type</span>
                          <div className="mock-input mock-select"><span className="mock-input-value">static</span><svg className="mock-chevron" width="6" height="6" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2.5 4L5 6.5L7.5 4"/></svg></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Layout — Display + Padding + Margin */}
                  <div className="mock-section">
                    <div className="mock-section-header">Layout</div>
                    <div className="mock-section-body">
                      <div className="mock-input-row">
                        <div className="mock-field">
                          <span className="mock-field-label">Display</span>
                          <div className="mock-segmented">
                            <div className="mock-seg-btn active"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M16.5 7H7.5C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17H16.5C16.7761 17 17 16.7761 17 16.5V7.5C17 7.22386 16.7761 7 16.5 7ZM7.5 6C6.67157 6 6 6.67157 6 7.5V16.5C6 17.3284 6.67157 18 7.5 18H16.5C17.3284 18 18 17.3284 18 16.5V7.5C18 6.67157 17.3284 6 16.5 6H7.5Z"/></svg></div>
                            <div className="mock-seg-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M9.5 7H7.5C7.22386 7 7 7.22386 7 7.5V16.5C7 16.7761 7.22386 17 7.5 17H9.5C9.77614 17 10 16.7761 10 16.5V7.5C10 7.22386 9.77614 7 9.5 7ZM7.5 6C6.67157 6 6 6.67157 6 7.5V16.5C6 17.3284 6.67157 18 7.5 18H9.5C10.3284 18 11 17.3284 11 16.5V7.5C11 6.67157 10.3284 6 9.5 6H7.5ZM16.5 7H14.5C14.2239 7 14 7.22386 14 7.5V9.5C14 9.77614 14.2239 10 14.5 10H16.5C16.7761 10 17 9.77614 17 9.5V7.5C17 7.22386 16.7761 7 16.5 7ZM14.5 6C13.6716 6 13 6.67157 13 7.5V9.5C13 10.3284 13.6716 11 14.5 11H16.5C17.3284 11 18 10.3284 18 9.5V7.5C18 6.67157 17.3284 6 16.5 6H14.5ZM16 13.5C16 13.2239 15.7761 13 15.5 13C15.2239 13 15 13.2239 15 13.5V15H13.5C13.2239 15 13 15.2239 13 15.5C13 15.7761 13.2239 16 13.5 16H15V17.5C15 17.7761 15.2239 18 15.5 18C15.7761 18 16 17.7761 16 17.5V16H17.5C17.7761 16 18 15.7761 18 15.5C18 15.2239 17.7761 15 17.5 15H16V13.5Z"/></svg></div>
                            <div className="mock-seg-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M7 9.5L7 7.5C7 7.22386 7.22386 7 7.5 7L16.5 7C16.7761 7 17 7.22386 17 7.5L17 9.5C17 9.77614 16.7761 10 16.5 10L7.5 10C7.22386 10 7 9.77614 7 9.5ZM6 7.5C6 6.67157 6.67157 6 7.5 6L16.5 6C17.3284 6 18 6.67157 18 7.5L18 9.5C18 10.3284 17.3284 11 16.5 11L7.5 11C6.67157 11 6 10.3284 6 9.5L6 7.5ZM7 16.5L7 14.5C7 14.2239 7.22386 14 7.5 14L9.5 14C9.77614 14 10 14.2239 10 14.5L10 16.5C10 16.7761 9.77614 17 9.5 17L7.5 17C7.22386 17 7 16.7761 7 16.5ZM6 14.5C6 13.6716 6.67157 13 7.5 13L9.5 13C10.3284 13 11 13.6716 11 14.5L11 16.5C11 17.3284 10.3284 18 9.5 18L7.5 18C6.67157 18 6 17.3284 6 16.5L6 14.5ZM13.5 16C13.2239 16 13 15.7761 13 15.5C13 15.2239 13.2239 15 13.5 15L15 15L15 13.5C15 13.2239 15.2239 13 15.5 13C15.7761 13 16 13.2239 16 13.5L16 15L17.5 15C17.7761 15 18 15.2239 18 15.5C18 15.7761 17.7761 16 17.5 16L16 16L16 17.5C16 17.7761 15.7761 18 15.5 18C15.2239 18 15 17.7761 15 17.5L15 16L13.5 16Z"/></svg></div>
                            <div className="mock-seg-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M7 7H10V10H7V7ZM6 7C6 6.44771 6.44771 6 7 6H10C10.5523 6 11 6.44771 11 7V10C11 10.5523 10.5523 11 10 11H7C6.44771 11 6 10.5523 6 10V7ZM7 14H10V17H7V14ZM6 14C6 13.4477 6.44771 13 7 13H10C10.5523 13 11 13.4477 11 14V17C11 17.5523 10.5523 18 10 18H7C6.44771 18 6 17.5523 6 17V14ZM17 7H14V10H17V7ZM14 6C13.4477 6 13 6.44771 13 7V10C13 10.5523 13.4477 11 14 11H17C17.5523 11 18 10.5523 18 10V7C18 6.44771 17.5523 6 17 6H14ZM14 14H17V17H14V14ZM13 14C13 13.4477 13.4477 13 14 13H17C17.5523 13 18 13.4477 18 14V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V14Z"/></svg></div>
                          </div>
                        </div>
                      </div>
                      <div className="mock-group-label">Padding</div>
                      <div className="mock-input-row">
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M8 7.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9zM16.5 7a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5zM13 13v-2h-2v2h2zm1-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2z"/></svg></span><span className="mock-input-value mock-val-pad"><span className="mock-val-before">8px</span><span className="mock-val-after">16px</span></span></div>
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 16a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM7 7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM13 11h-2v2h2v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z"/></svg></span><span className="mock-input-value">16px</span></div>
                        <div className="mock-split-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M8 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5zM17 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5zM9.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM9 16.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg></div>
                      </div>
                      <div className="mock-group-label">Margin</div>
                      <div className="mock-input-row">
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M8 7.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9zM16.5 7a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5zM13 13v-2h-2v2h2zm1-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2z"/></svg></span><span className="mock-input-value">0px</span></div>
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 16a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM7 7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM13 11h-2v2h2v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z"/></svg></span><span className="mock-input-value">0px</span></div>
                        <div className="mock-split-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M8 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5zM17 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5zM9.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM9 16.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg></div>
                      </div>
                    </div>
                  </div>
                  {/* Size — width + height */}
                  <div className="mock-section">
                    <div className="mock-section-header"><span>Size</span><div className="mock-section-action"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 6C12.2761 6 12.5 6.22386 12.5 6.5V11.5H17.5C17.7761 11.5 18 11.7239 18 12C18 12.2761 17.7761 12.5 17.5 12.5H12.5V17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5V12.5H6.5C6.22386 12.5 6 12.2761 6 12C6 11.7239 6.22386 11.5 6.5 11.5H11.5V6.5C11.5 6.22386 11.7239 6 12 6Z" fillOpacity="0.9"/></svg></div></div>
                    <div className="mock-section-body">
                      <div className="mock-input-row">
                        <div className="mock-field">
                          <span className="mock-field-label">Width</span>
                          <div className="mock-input"><span className="mock-input-value">auto</span></div>
                        </div>
                        <div className="mock-field">
                          <span className="mock-field-label">Height</span>
                          <div className="mock-input"><span className="mock-input-value">auto</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Appearance — opacity + z-index, corner radius, overflow */}
                  <div className="mock-section">
                    <div className="mock-section-header">Appearance</div>
                    <div className="mock-section-body">
                      <div className="mock-input-row">
                        <div className="mock-field">
                          <span className="mock-field-label">Opacity</span>
                          <div className="mock-input"><span className="mock-input-value">1</span></div>
                        </div>
                        <div className="mock-field">
                          <span className="mock-field-label">Z index</span>
                          <div className="mock-input"><span className="mock-input-value">auto</span></div>
                        </div>
                      </div>
                      <div className="mock-group-label">Corner radius</div>
                      <div className="mock-input-row">
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M12.478 8H12.5h3a.5.5 0 0 1 0 1h-3c-.708 0-1.21 0-1.6.032-.488.032-.724.124-.908.218a2.25 2.25 0 0 0-.874.874c-.094.184-.186.42-.218.908C9 11.291 9 11.792 9 12.5v3a.5.5 0 0 1-1 0v-3.022c0-.7 0-1.245.036-1.66.035-.449.077-.831.149-1.183a3.25 3.25 0 0 1 1.64-1.64c.352-.148.734-.19 1.183-.225C11.233 8 11.778 8 12.478 8Z"/></svg></span><span className="mock-input-value mock-val-radius"><span className="mock-val-before">0px</span><span className="mock-val-after">8px</span></span></div>
                        <div className="mock-split-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M8 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5zM17 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5zM9.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM9 16.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg></div>
                      </div>
                      <div className="mock-group-label">Overflow</div>
                      <div className="mock-input-row">
                        <div className="mock-input mock-select"><span className="mock-input-value">Visible</span><svg className="mock-chevron" width="6" height="6" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2.5 4L5 6.5L7.5 4"/></svg></div>
                      </div>
                    </div>
                  </div>
                  {/* Fill — color + opacity */}
                  <div className="mock-section">
                    <div className="mock-section-header"><span>Fill</span><div className="mock-section-action"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 6C12.2761 6 12.5 6.22386 12.5 6.5V11.5H17.5C17.7761 11.5 18 11.7239 18 12C18 12.2761 17.7761 12.5 17.5 12.5H12.5V17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5V12.5H6.5C6.22386 12.5 6 12.2761 6 12C6 11.7239 6.22386 11.5 6.5 11.5H11.5V6.5C11.5 6.22386 11.7239 6 12 6Z" fillOpacity="0.9"/></svg></div></div>
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
                  {/* Border */}
                  <div className="mock-section">
                    <div className="mock-section-header"><span>Border</span><div className="mock-section-action"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 6C12.2761 6 12.5 6.22386 12.5 6.5V11.5H17.5C17.7761 11.5 18 11.7239 18 12C18 12.2761 17.7761 12.5 17.5 12.5H12.5V17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5V12.5H6.5C6.22386 12.5 6 12.2761 6 12C6 11.7239 6.22386 11.5 6.5 11.5H11.5V6.5C11.5 6.22386 11.7239 6 12 6Z" fillOpacity="0.9"/></svg></div></div>
                  </div>
                  {/* Shadow */}
                  <div className="mock-section">
                    <div className="mock-section-header"><span>Shadow</span><div className="mock-section-action"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 6C12.2761 6 12.5 6.22386 12.5 6.5V11.5H17.5C17.7761 11.5 18 11.7239 18 12C18 12.2761 17.7761 12.5 17.5 12.5H12.5V17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5V12.5H6.5C6.22386 12.5 6 12.2761 6 12C6 11.7239 6.22386 11.5 6.5 11.5H11.5V6.5C11.5 6.22386 11.7239 6 12 6Z" fillOpacity="0.9"/></svg></div></div>
                  </div>
                  {/* Filters */}
                  <div className="mock-section">
                    <div className="mock-section-header"><span>Filters</span><div className="mock-section-action"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 6C12.2761 6 12.5 6.22386 12.5 6.5V11.5H17.5C17.7761 11.5 18 11.7239 18 12C18 12.2761 17.7761 12.5 17.5 12.5H12.5V17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5V12.5H6.5C6.22386 12.5 6 12.2761 6 12C6 11.7239 6.22386 11.5 6.5 11.5H11.5V6.5C11.5 6.22386 11.7239 6 12 6Z" fillOpacity="0.9"/></svg></div></div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            {/* Animated cursor — in desktop-bg so it can reach the dock */}
            <div className="mock-cursor">
              <svg className="cursor-pointer" width="18" height="18" viewBox="0 0 24 24" fill="#1c1917" stroke="#fff" strokeWidth="1.5"><path d="M5 3l14 8-6.5 1.5L11 19z"/></svg>
              <svg className="cursor-crosshair" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1c1917" strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
            </div>
            {/* macOS dock */}
            <div className="mock-dock">
              <div className="mock-dock-glass">
                <img className="mock-dock-icon" src="/dock/finder.png" alt="" />
                <img className="mock-dock-icon" src="/dock/terminal.png" alt="" />
                <img className="mock-dock-icon" src="/dock/safari.png" alt="" />
                <img className="mock-dock-icon" src="/dock/settings.png" alt="" />
                <img className="mock-dock-icon" src="/dock/calendar.png" alt="" />
                <img className="mock-dock-icon" src="/dock/notes.png" alt="" />
                <div className="mock-dock-sep" />
                <div className="mock-dock-spacer" />
                <img className="mock-dock-icon" src="/dock/trash.png" alt="" />
              </div>
              {/* Running app dots — positioned below their respective icons */}
              <div className="mock-dock-dots">
                <span className="mock-dock-dot-space" />
                <span className="mock-dock-dot" />
                <span className="mock-dock-dot" />
              </div>
            </div>
            {/* Claude Code terminal — in desktop-bg so it can genie to/from dock */}
            <div className="mock-terminal">
              <div className="mock-term-titlebar">
                <span className="mock-term-dot" />
                <span className="mock-term-dot" />
                <span className="mock-term-dot" />
                <span className="mock-term-title">Claude Code</span>
              </div>
              <div className="mock-term-body">
                <div className="mock-terminal-line mock-term-line-1">
                  <svg className="mock-term-mascot" width="27" height="18" viewBox="0 0 18 12" fill="#D4775B" shapeRendering="crispEdges">
                    {/* Head */}
                    <rect x="3" y="0" width="12" height="2"/>
                    {/* Eyes (negative space) */}
                    <rect x="3" y="2" width="2" height="2"/>
                    <rect x="6" y="2" width="6" height="2"/>
                    <rect x="13" y="2" width="2" height="2"/>
                    {/* Body (wider) */}
                    <rect x="2" y="4" width="15" height="2"/>
                    <rect x="1" y="4" width="1" height="2"/>
                    <rect x="3" y="6" width="12" height="2"/>
                    {/* Feet */}
                    <rect x="4" y="8" width="1" height="2"/>
                    <rect x="6" y="8" width="1" height="2"/>
                    <rect x="11" y="8" width="1" height="2"/>
                    <rect x="13" y="8" width="1" height="2"/>
                  </svg>
                  <div className="mock-term-meta">
                    <span className="mock-term-badge">Claude Code</span>
                    <span className="mock-term-dim">Opus 4.6 · /piedpiper</span>
                  </div>
                </div>
                <div className="mock-terminal-line mock-term-line-2">
                  <span className="mock-term-marker">⏺</span> <span className="mock-term-tool">retune_get_formatted_changes</span>()
                </div>
                <div className="mock-terminal-line mock-term-line-3">
                  <span className="mock-term-indent" /><span className="mock-term-dim">⎿</span> padding: <span className="mock-term-dim">8px →</span> 16px, border-radius: <span className="mock-term-dim">0px →</span> 8px
                </div>
                <div className="mock-terminal-line mock-term-line-4">
                  <span className="mock-term-indent" /><span className="mock-term-tool">Edit</span> <span className="mock-term-file">Card.tsx</span>
                </div>
                <div className="mock-terminal-line mock-term-line-5">
                  <span className="mock-term-indent" /><span className="mock-term-dim">⎿</span> Applied 2 changes
                </div>
              </div>
            </div>
            </div>
          </HeroCursorPositioner>
        </section>

        {/* ── How It Works ── */}
        <section className="section" id="how-it-works">
          <h2 className="section-heading">How it works</h2>
          <p className="section-desc">
            From visual tweak to committed code in seconds.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <h3 className="step-title">Select an element</h3>
              <p className="step-card-desc">
                Click anything on your page. Retune identifies the component, its styles, and where it lives in your codebase.
              </p>
            </div>
            <div className="step-card">
              <h3 className="step-title">Tweak visually</h3>
              <p className="step-card-desc">
                Adjust spacing, colors, typography, and layout in the browser. Changes preview instantly. What you see is what your agent gets.
              </p>
            </div>
            <div className="step-card">
              <h3 className="step-title">Apply with your agent</h3>
              <p className="step-card-desc">
                Retune connects to Claude Code, Cursor, or any MCP client. Your agent writes the changes to source.
              </p>
            </div>
          </div>
        </section>

        {/* ── What Your Agent Sees ── */}
        <section className="section" id="output">
          <h2 className="section-heading">What your agent sees</h2>
          <p className="section-desc">
            Not vague descriptions, structured data. Component names, selector paths,
            styling approach, and exact before/after values your agent can act on immediately.
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

        {/* ── Compatibility ── */}
        <section className="section" id="compatibility">
          <h2 className="section-heading">Works with your stack</h2>
          <p className="section-desc">
            No config files. No build plugins. Drop one component in and go.
          </p>
          <div className="compat-grid">
            <div className="compat-group">
              <span className="compat-label">Frameworks</span>
              <span className="compat-list">Next.js · Vite · Remix</span>
            </div>
            <div className="compat-group">
              <span className="compat-label">Styling</span>
              <span className="compat-list">Tailwind CSS · CSS Modules · Plain CSS</span>
            </div>
            <div className="compat-group">
              <span className="compat-label">AI Tools</span>
              <span className="compat-list">Claude Code · Cursor · Any MCP client</span>
            </div>
          </div>
        </section>

        {/* ── Install ── */}
        <section className="section" id="install">
          <h2 className="section-heading">Get started</h2>

          <div className="install-steps">
            <div className="install-step">
              <div className="install-step-content">
                <h3 className="install-step-title">Install the package</h3>
                <div className="code-block">
                  <CopyButton text="npm install retune" />
                  <div className="code-line"><span className="code-comment">$</span> npm install retune</div>
                </div>
              </div>
            </div>

            <div className="install-step">
              <div className="install-step-content">
                <h3 className="install-step-title">Add to your layout</h3>
                <div className="code-block">
                  <CopyButton text={`import { Retune } from "retune"\n\n// Add anywhere in your component tree\n<Retune />`} />
                  <div className="code-line"><span className="code-keyword">import</span> {"{"} Retune {"}"} <span className="code-keyword">from</span> <span className="code-string">"retune"</span></div>
                  <div className="code-line" style={{ height: 8 }} />
                  <div className="code-line"><span className="code-comment">{"// Add anywhere in your component tree"}</span></div>
                  <div className="code-line">&lt;<span className="code-component">Retune</span> /&gt;</div>
                </div>
                <p className="install-note">Automatically hidden in production. Use <code>&lt;Retune force /&gt;</code> for live demos.</p>
              </div>
            </div>

            <div className="install-step">
              <div className="install-step-content">
                <h3 className="install-step-title">Connect your AI tool</h3>
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

        {/* ── FAQ ── */}
        <section className="section" id="faq">
          <h2 className="section-heading">FAQ</h2>
          <div className="faq-list">
            <FaqItem question="Does it modify my source code directly?">
              No. Retune sends a structured diff of your visual changes to your AI coding tool (Claude Code, Cursor, etc.), which makes the actual code changes. You always review and approve before anything is committed.
            </FaqItem>
            <FaqItem question="Does it ship to production?">
              No. The <code>&lt;Retune /&gt;</code> component automatically hides itself in production builds. It only activates in development mode unless you explicitly pass the <code>force</code> prop.
            </FaqItem>
            <FaqItem question="How does it find the right element in my code?">
              It combines CSS selectors, React component hierarchy, class names, and text content to give your AI agent enough context to locate the exact element. No build plugin needed.
            </FaqItem>
            <FaqItem question="What frameworks and styling approaches are supported?">
              Next.js, Vite, and Remix for build tools. Tailwind CSS, CSS Modules, and plain CSS for styling. Any AI tool that supports MCP (Claude Code, Cursor), plus clipboard fallback for others.
            </FaqItem>
            <FaqItem question="Can I use it without an AI tool?">
              Yes. Changes are previewed live in the browser regardless. If no MCP server is connected, you can copy the structured diff to your clipboard and paste it into any tool.
            </FaqItem>
            <FaqItem question="How does it detect my styling approach?">
              It analyzes your actual stylesheet rules at runtime, not class names. It walks <code>document.styleSheets</code> to count CSS properties per rule and check selector complexity. Single-property, single-class rules are identified as utility CSS. This works for Tailwind, Bootstrap, Tachyons, UnoCSS, or any atomic framework without hardcoded patterns.
            </FaqItem>
            <FaqItem question="Does it detect React components?">
              Yes. It traverses the React fiber tree to find the component hierarchy and identifies the nearest component name for the selected element. This context helps your AI agent locate the right file without a build plugin.
            </FaqItem>
            <FaqItem question="Does it work with SSR and server components?">
              Yes. Retune is a client-side component that hydrates after page load. It works with Next.js App Router, Pages Router, Remix, and other SSR/SSG frameworks without affecting server rendering.
            </FaqItem>
            <FaqItem question="Does it affect performance?">
              Minimal impact. It only activates when you enter edit mode, so there's no overhead during normal development. Style analysis runs once per element selection, not continuously.
            </FaqItem>
            <FaqItem question="Can it inspect iframes or shadow DOM?">
              Not currently. Only elements in the main document are accessible due to browser security restrictions. Shadow DOM support is planned.
            </FaqItem>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          <p className="footer-text">MIT License. Created by <a href="https://x.com/___sujan" className="footer-link" target="_blank" rel="noopener noreferrer">Sujan Khadgi</a>.</p>
        </footer>
      </main>
    </div>
  );
}
