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
  const [paused, setPaused] = useState(false);
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

          <div className={`hero-visual${paused ? " animation-paused" : ""}`}>
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
                    <div className="mock-edit-count">2</div>
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
                <div className="mock-panel-header">
                  <div className="mock-el-tag">div</div>
                  <div className="mock-scope-row">
                    <span className="mock-scope-label">Apply to all instances</span>
                    <div className="mock-switch-track on">
                      <div className="mock-switch-thumb" />
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
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 16a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM7 7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM13 11h-2v2h2v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z"/></svg></span><span className="mock-input-value mock-val-pad">12px</span></div>
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M8 7.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9zM16.5 7a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5zM13 13v-2h-2v2h2zm1-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2z"/></svg></span><span className="mock-input-value">16px</span></div>
                        <div className="mock-split-btn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M8 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5zM17 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5zM9.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM9 16.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg></div>
                      </div>
                      <div className="mock-group-label">Margin</div>
                      <div className="mock-input-row">
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M7.5 16a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM7 7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM13 11h-2v2h2v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z"/></svg></span><span className="mock-input-value">0px</span></div>
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M8 7.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9zM16.5 7a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5zM13 13v-2h-2v2h2zm1-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2z"/></svg></span><span className="mock-input-value">0px</span></div>
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
                        <div className="mock-input"><span className="mock-input-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.9"><path fillRule="evenodd" clipRule="evenodd" d="M12.478 8H12.5h3a.5.5 0 0 1 0 1h-3c-.708 0-1.21 0-1.6.032-.488.032-.724.124-.908.218a2.25 2.25 0 0 0-.874.874c-.094.184-.186.42-.218.908C9 11.291 9 11.792 9 12.5v3a.5.5 0 0 1-1 0v-3.022c0-.7 0-1.245.036-1.66.035-.449.077-.831.149-1.183a3.25 3.25 0 0 1 1.64-1.64c.352-.148.734-.19 1.183-.225C11.233 8 11.778 8 12.478 8Z"/></svg></span><span className="mock-input-value mock-val-radius">8px</span></div>
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
              {/* Animated cursor */}
              <div className="mock-cursor">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1c1917" stroke="#fff" strokeWidth="1.5"><path d="M5 3l14 8-6.5 1.5L11 19z"/></svg>
              </div>
            </div>
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
