import "./styles.css";
import {
  CopyButton,
  HeroInstallCopy,
  FaqGroup,
  FaqItem,
  TryItButton,
  HeroCursorPositioner,
  Sidebar,
  MenuBarTime,
  CalendarIcon,
} from "./components";
import { DOCK_FINDER, DOCK_TERMINAL, DOCK_SAFARI, DOCK_SETTINGS, DOCK_NOTES, DOCK_TRASH } from "./dock-icons";

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
            {/* macOS menu bar */}
            <div className="menu-bar">
              <div className="menu-bar-left menu-bar-safari-ctx">
                <svg className="menu-bar-apple" width="10" height="10" viewBox="0 0 13 13" fill="currentColor"><path d="M8.61523 3.63672C8.72852 3.64844 8.90234 3.67969 9.13672 3.73047C9.37109 3.77734 9.62109 3.87695 9.88672 4.0293C10.1523 4.17773 10.3926 4.41016 10.6074 4.72656C10.5957 4.73438 10.5293 4.7832 10.4082 4.87305C10.291 4.95898 10.1562 5.08789 10.0039 5.25977C9.85156 5.43164 9.7168 5.64648 9.59961 5.9043C9.48633 6.16211 9.43164 6.46289 9.43555 6.80664C9.43945 7.2207 9.51367 7.57031 9.6582 7.85547C9.80273 8.13672 9.9707 8.36328 10.1621 8.53516C10.3535 8.70312 10.5215 8.82617 10.666 8.9043C10.8145 8.97852 10.8926 9.01562 10.9004 9.01562C10.8965 9.02734 10.8672 9.10938 10.8125 9.26172C10.7617 9.41406 10.6816 9.60742 10.5723 9.8418C10.4629 10.0723 10.3223 10.3184 10.1504 10.5801C9.99414 10.7988 9.83398 11.0098 9.66992 11.2129C9.50977 11.416 9.33203 11.582 9.13672 11.7109C8.94141 11.8438 8.7168 11.9121 8.46289 11.916C8.2207 11.9238 8.01758 11.8906 7.85352 11.8164C7.69336 11.7461 7.52539 11.6719 7.34961 11.5938C7.17383 11.5195 6.94727 11.4824 6.66992 11.4824C6.38867 11.4824 6.1582 11.5176 5.97852 11.5879C5.79883 11.6582 5.62695 11.7305 5.46289 11.8047C5.30273 11.8789 5.10742 11.9238 4.87695 11.9395C4.63867 11.9434 4.41602 11.875 4.20898 11.7344C4.00586 11.5977 3.81641 11.4199 3.64062 11.2012C3.46484 10.9863 3.30273 10.7676 3.1543 10.5449C2.91992 10.2051 2.70703 9.80859 2.51562 9.35547C2.32812 8.89844 2.1875 8.41797 2.09375 7.91406C2 7.40625 1.97656 6.9043 2.02344 6.4082C2.07031 5.91211 2.21289 5.45508 2.45117 5.03711C2.69336 4.62305 3.01562 4.29297 3.41797 4.04688C3.82031 3.80078 4.25195 3.67578 4.71289 3.67188C4.95117 3.66797 5.18164 3.70703 5.4043 3.78906C5.62695 3.86719 5.83398 3.94727 6.02539 4.0293C6.2168 4.10742 6.38281 4.14648 6.52344 4.14648C6.66406 4.14648 6.83984 4.09961 7.05078 4.00586C7.26172 3.91211 7.5 3.82227 7.76562 3.73633C8.03125 3.65039 8.31445 3.61719 8.61523 3.63672ZM8.05273 2.74609C7.86523 2.97656 7.62695 3.16797 7.33789 3.32031C7.04883 3.47266 6.75 3.53906 6.44141 3.51953C6.39844 3.20703 6.43945 2.89844 6.56445 2.59375C6.68945 2.28906 6.83984 2.0332 7.01562 1.82617C7.21094 1.5957 7.45898 1.4043 7.75977 1.25195C8.06055 1.0957 8.34961 1.01172 8.62695 1C8.6582 1.32031 8.61719 1.63281 8.50391 1.9375C8.39453 2.24219 8.24414 2.51172 8.05273 2.74609Z"/></svg>
                <span className="menu-bar-app">Safari</span>
                <span className="menu-bar-item">File</span>
                <span className="menu-bar-item">Edit</span>
                <span className="menu-bar-item">View</span>
              </div>
              <div className="menu-bar-left menu-bar-terminal-ctx">
                <svg className="menu-bar-apple" width="10" height="10" viewBox="0 0 13 13" fill="currentColor"><path d="M8.61523 3.63672C8.72852 3.64844 8.90234 3.67969 9.13672 3.73047C9.37109 3.77734 9.62109 3.87695 9.88672 4.0293C10.1523 4.17773 10.3926 4.41016 10.6074 4.72656C10.5957 4.73438 10.5293 4.7832 10.4082 4.87305C10.291 4.95898 10.1562 5.08789 10.0039 5.25977C9.85156 5.43164 9.7168 5.64648 9.59961 5.9043C9.48633 6.16211 9.43164 6.46289 9.43555 6.80664C9.43945 7.2207 9.51367 7.57031 9.6582 7.85547C9.80273 8.13672 9.9707 8.36328 10.1621 8.53516C10.3535 8.70312 10.5215 8.82617 10.666 8.9043C10.8145 8.97852 10.8926 9.01562 10.9004 9.01562C10.8965 9.02734 10.8672 9.10938 10.8125 9.26172C10.7617 9.41406 10.6816 9.60742 10.5723 9.8418C10.4629 10.0723 10.3223 10.3184 10.1504 10.5801C9.99414 10.7988 9.83398 11.0098 9.66992 11.2129C9.50977 11.416 9.33203 11.582 9.13672 11.7109C8.94141 11.8438 8.7168 11.9121 8.46289 11.916C8.2207 11.9238 8.01758 11.8906 7.85352 11.8164C7.69336 11.7461 7.52539 11.6719 7.34961 11.5938C7.17383 11.5195 6.94727 11.4824 6.66992 11.4824C6.38867 11.4824 6.1582 11.5176 5.97852 11.5879C5.79883 11.6582 5.62695 11.7305 5.46289 11.8047C5.30273 11.8789 5.10742 11.9238 4.87695 11.9395C4.63867 11.9434 4.41602 11.875 4.20898 11.7344C4.00586 11.5977 3.81641 11.4199 3.64062 11.2012C3.46484 10.9863 3.30273 10.7676 3.1543 10.5449C2.91992 10.2051 2.70703 9.80859 2.51562 9.35547C2.32812 8.89844 2.1875 8.41797 2.09375 7.91406C2 7.40625 1.97656 6.9043 2.02344 6.4082C2.07031 5.91211 2.21289 5.45508 2.45117 5.03711C2.69336 4.62305 3.01562 4.29297 3.41797 4.04688C3.82031 3.80078 4.25195 3.67578 4.71289 3.67188C4.95117 3.66797 5.18164 3.70703 5.4043 3.78906C5.62695 3.86719 5.83398 3.94727 6.02539 4.0293C6.2168 4.10742 6.38281 4.14648 6.52344 4.14648C6.66406 4.14648 6.83984 4.09961 7.05078 4.00586C7.26172 3.91211 7.5 3.82227 7.76562 3.73633C8.03125 3.65039 8.31445 3.61719 8.61523 3.63672ZM8.05273 2.74609C7.86523 2.97656 7.62695 3.16797 7.33789 3.32031C7.04883 3.47266 6.75 3.53906 6.44141 3.51953C6.39844 3.20703 6.43945 2.89844 6.56445 2.59375C6.68945 2.28906 6.83984 2.0332 7.01562 1.82617C7.21094 1.5957 7.45898 1.4043 7.75977 1.25195C8.06055 1.0957 8.34961 1.01172 8.62695 1C8.6582 1.32031 8.61719 1.63281 8.50391 1.9375C8.39453 2.24219 8.24414 2.51172 8.05273 2.74609Z"/></svg>
                <span className="menu-bar-app">Terminal</span>
                <span className="menu-bar-item">Shell</span>
                <span className="menu-bar-item">Edit</span>
                <span className="menu-bar-item">View</span>
                <span className="menu-bar-item">Window</span>
              </div>
              <div className="menu-bar-right">
                <svg className="menu-bar-icon" width="10" height="10" viewBox="0 0 13 13" fill="currentColor"><path d="M6.42773 11.2812C6.36523 11.2812 6.30078 11.2617 6.23438 11.2227C6.16797 11.1836 6.07812 11.1133 5.96484 11.0117L4.61719 9.71094C4.57031 9.66406 4.54102 9.61523 4.5293 9.56445C4.51758 9.50977 4.52734 9.45898 4.55859 9.41211C4.74219 9.16211 5 8.94727 5.33203 8.76758C5.66406 8.58789 6.0293 8.49805 6.42773 8.49805C6.81836 8.49805 7.17578 8.58594 7.5 8.76172C7.82812 8.93359 8.08594 9.13867 8.27344 9.37695C8.3125 9.42773 8.32812 9.48438 8.32031 9.54688C8.31641 9.60938 8.29102 9.66406 8.24414 9.71094L6.88477 11.0117C6.77539 11.1172 6.6875 11.1875 6.62109 11.2227C6.55859 11.2617 6.49414 11.2812 6.42773 11.2812ZM3.16406 8.24023L2.30273 7.38477C2.24805 7.33008 2.21875 7.27344 2.21484 7.21484C2.21484 7.15625 2.23438 7.09961 2.27344 7.04492C2.55859 6.70117 2.91406 6.39453 3.33984 6.125C3.76953 5.85547 4.24609 5.64258 4.76953 5.48633C5.29688 5.33008 5.84961 5.25195 6.42773 5.25195C7.00586 5.25195 7.55664 5.33008 8.08008 5.48633C8.60742 5.64258 9.08398 5.85547 9.50977 6.125C9.93945 6.39453 10.2949 6.70117 10.5762 7.04492C10.623 7.09961 10.6426 7.1582 10.6348 7.2207C10.6309 7.2832 10.6055 7.33789 10.5586 7.38477L9.69141 8.23438C9.62891 8.29297 9.5625 8.32422 9.49219 8.32812C9.42188 8.32812 9.35938 8.29688 9.30469 8.23438C8.96484 7.86328 8.53906 7.55664 8.02734 7.31445C7.51953 7.07227 6.98633 6.95312 6.42773 6.95703C5.87695 6.95312 5.3457 7.07031 4.83398 7.30859C4.32617 7.54297 3.9043 7.8457 3.56836 8.2168C3.50977 8.2832 3.44336 8.31836 3.36914 8.32227C3.29492 8.32617 3.22656 8.29883 3.16406 8.24023ZM0.855469 5.92578L0.0820312 5.14648C0.03125 5.0918 0.00390625 5.03516 0 4.97656C0 4.91406 0.0214844 4.85547 0.0644531 4.80078C0.501953 4.26172 1.05273 3.78125 1.7168 3.35938C2.38477 2.93359 3.12109 2.60156 3.92578 2.36328C4.73438 2.12109 5.56836 2 6.42773 2C7.2832 2 8.11328 2.12109 8.91797 2.36328C9.72656 2.60156 10.4648 2.93359 11.1328 3.35938C11.8008 3.78125 12.3535 4.26172 12.791 4.80078C12.834 4.85547 12.8535 4.91406 12.8496 4.97656C12.8496 5.03516 12.8242 5.0918 12.7734 5.14648L12 5.91406C11.9414 5.97266 11.877 6.00391 11.8066 6.00781C11.7363 6.00781 11.6738 5.98047 11.6191 5.92578C10.9355 5.20312 10.1523 4.6543 9.26953 4.2793C8.38672 3.90039 7.43945 3.71094 6.42773 3.71094C5.41992 3.71094 4.47461 3.89844 3.5918 4.27344C2.71289 4.64844 1.93359 5.19727 1.25391 5.91992C1.19531 5.97852 1.12695 6.00977 1.04883 6.01367C0.974609 6.01367 0.910156 5.98438 0.855469 5.92578Z"/></svg>
                <svg className="menu-bar-icon menu-bar-battery" height="10" viewBox="0 0 17 13" fill="currentColor"><path d="M2.60156 8.96484C2.41797 8.96484 2.26953 8.95117 2.15625 8.92383C2.04297 8.89258 1.94922 8.83789 1.875 8.75977C1.80078 8.68945 1.74805 8.59766 1.7168 8.48438C1.68555 8.37109 1.66992 8.22461 1.66992 8.04492V5.60156C1.66992 5.41797 1.68555 5.26953 1.7168 5.15625C1.74805 5.03906 1.80078 4.94141 1.875 4.86328C1.94922 4.79297 2.04297 4.74414 2.15625 4.7168C2.27344 4.68555 2.42383 4.66992 2.60742 4.66992H12.1113C12.291 4.66992 12.4375 4.68555 12.5508 4.7168C12.668 4.74414 12.7617 4.79297 12.832 4.86328C12.9062 4.94141 12.959 5.03711 12.9902 5.15039C13.0215 5.26367 13.0371 5.41016 13.0371 5.58984V8.04492C13.0371 8.38867 12.9688 8.62695 12.832 8.75977C12.7617 8.83789 12.6699 8.89258 12.5566 8.92383C12.4434 8.95117 12.2949 8.96484 12.1113 8.96484H2.60156ZM3.00586 10.6348C2.51758 10.6348 2.07617 10.5938 1.68164 10.5117C1.28711 10.4297 0.947266 10.248 0.662109 9.9668C0.376953 9.68555 0.195312 9.34961 0.117188 8.95898C0.0390625 8.56445 0 8.12305 0 7.63477V5.98828C0 5.50391 0.0390625 5.06836 0.117188 4.68164C0.199219 4.29102 0.380859 3.95312 0.662109 3.66797C0.947266 3.38281 1.28516 3.20117 1.67578 3.12305C2.07031 3.04102 2.50781 3 2.98828 3H11.707C12.1953 3 12.6348 3.04102 13.0254 3.12305C13.4199 3.20117 13.7598 3.38281 14.0449 3.66797C14.3301 3.94922 14.5117 4.28516 14.5898 4.67578C14.668 5.06641 14.707 5.50781 14.707 6V7.63477C14.707 8.12305 14.668 8.5625 14.5898 8.95312C14.5117 9.34375 14.3301 9.68164 14.0449 9.9668C13.7598 10.248 13.4199 10.4297 13.0254 10.5117C12.6348 10.5938 12.1953 10.6348 11.707 10.6348H3.00586ZM2.85352 9.63867H11.8594C12.1445 9.63867 12.418 9.61328 12.6797 9.5625C12.9453 9.50781 13.1582 9.40039 13.3184 9.24023C13.4785 9.08008 13.584 8.86914 13.6348 8.60742C13.6855 8.3457 13.7109 8.07227 13.7109 7.78711V5.84766C13.7109 5.5625 13.6855 5.28906 13.6348 5.02734C13.5879 4.76562 13.4824 4.55469 13.3184 4.39453C13.1582 4.23438 12.9453 4.12891 12.6797 4.07812C12.418 4.02344 12.1445 3.99609 11.8594 3.99609H2.86523C2.57227 3.99609 2.29297 4.02344 2.02734 4.07812C1.76562 4.12891 1.55273 4.23438 1.38867 4.39453C1.22852 4.55469 1.12305 4.76758 1.07227 5.0332C1.02539 5.29492 1.00195 5.57031 1.00195 5.85938V7.78711C1.00195 8.07227 1.02539 8.3457 1.07227 8.60742C1.12305 8.86914 1.22852 9.08008 1.38867 9.24023C1.55273 9.40039 1.76562 9.50781 2.02734 9.5625C2.28906 9.61328 2.56445 9.63867 2.85352 9.63867ZM15.4922 8.28516V5.34961C15.6445 5.35742 15.8008 5.42383 15.9609 5.54883C16.125 5.66992 16.2637 5.83984 16.377 6.05859C16.4902 6.27344 16.5469 6.52539 16.5469 6.81445C16.5469 7.10352 16.4902 7.35742 16.377 7.57617C16.2637 7.79492 16.125 7.9668 15.9609 8.0918C15.8008 8.21289 15.6445 8.27734 15.4922 8.28516Z"/></svg>
                <MenuBarTime />
                <script dangerouslySetInnerHTML={{ __html: `(function(){var e=document.getElementById('menu-bar-time');if(e){var d=new Date(),h=d.getHours(),m=d.getMinutes().toString().padStart(2,'0'),a=h>=12?'PM':'AM';h=h%12||12;e.textContent=h+':'+m+' '+a}})()` }} />
              </div>
            </div>
            <div className="browser-window">
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
                    <div className="mock-selection-label">180 × 120</div>
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
                  {/* Broom / reset */}
                  <div className="mock-toolbar-btn enables-on-change">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M11.3819 8.76362C10.4178 8.23201 9.20537 8.57956 8.66923 9.54116C8.4097 10.0066 8.15016 10.4721 7.89062 10.9376L18.1482 16.5903C18.405 16.1299 18.6618 15.6695 18.9184 15.2091C19.4571 14.2425 19.1063 13.0228 18.1372 12.4885L11.3819 8.76362Z"/><path d="M12.9883 9.00512L15.8934 3.92207C16.5242 2.81843 17.9311 2.42534 19.0478 3.04074C20.1729 3.66076 20.5795 5.07016 19.9558 6.18872L17.0911 11.3267"/><path d="M8.92867 11.8184C7.2347 13.8083 5.31367 14.409 2.75 13.8659C3.77941 20.6894 15.6222 25.1274 16.652 16.4253"/></svg>
                  </div>
                  {/* Settings */}
                  <div className="mock-toolbar-btn">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M16.167 12.5a1.375 1.375 0 0 0 .275 1.517l.05.05a1.667 1.667 0 1 1-2.359 2.358l-.05-.05a1.375 1.375 0 0 0-1.516-.275 1.375 1.375 0 0 0-.834 1.258v.142a1.667 1.667 0 1 1-3.333 0v-.075a1.375 1.375 0 0 0-.9-1.258 1.375 1.375 0 0 0-1.517.275l-.05.05a1.667 1.667 0 1 1-2.358-2.359l.05-.05a1.375 1.375 0 0 0 .275-1.516 1.375 1.375 0 0 0-1.258-.834h-.142a1.667 1.667 0 0 1 0-3.333h.075a1.375 1.375 0 0 0 1.258-.9 1.375 1.375 0 0 0-.275-1.517l-.05-.05A1.667 1.667 0 1 1 5.867 3.558l.05.05a1.375 1.375 0 0 0 1.516.275h.067a1.375 1.375 0 0 0 .833-1.258v-.142a1.667 1.667 0 1 1 3.334 0v.075a1.375 1.375 0 0 0 .833 1.258 1.375 1.375 0 0 0 1.517-.275l.05-.05a1.667 1.667 0 1 1 2.358 2.359l-.05.05a1.375 1.375 0 0 0-.275 1.516v.067a1.375 1.375 0 0 0 1.258.833h.142a1.667 1.667 0 0 1 0 3.334h-.075a1.375 1.375 0 0 0-1.258.833Z"/></svg>
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
                    <span className="mock-row-label">Target</span>
                    <div className="mock-selector-field">
                      <div className="mock-selector-tag active">All instances<span className="mock-selector-count">4</span></div>
                      <div className="mock-selector-tag">This instance</div>
                    </div>
                  </div>
                  <div className="mock-header-row">
                    <span className="mock-row-label">State</span>
                    <div className="mock-input mock-select mock-state-select"><span className="mock-input-value">None</span><svg className="mock-chevron" width="6" height="6" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2.5 4L5 6.5L7.5 4"/></svg></div>
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
            </div>
            {/* macOS dock */}
            <div className="mock-dock">
              <div className="mock-dock-glass">
                <img className="mock-dock-icon" src={DOCK_FINDER} alt="" width={26} height={26} decoding="sync" />
                <img className="mock-dock-icon" src={DOCK_TERMINAL} alt="" width={26} height={26} decoding="sync" />
                <img className="mock-dock-icon" src={DOCK_SAFARI} alt="" width={26} height={26} decoding="sync" />
                <img className="mock-dock-icon" src={DOCK_SETTINGS} alt="" width={26} height={26} decoding="sync" />
                <CalendarIcon />
                <script dangerouslySetInnerHTML={{ __html: `(function(){var d=new Date();var day=document.getElementById('dock-cal-day');var num=document.getElementById('dock-cal-num');if(day)day.textContent=d.toLocaleDateString('en-US',{weekday:'short'});if(num)num.textContent=d.getDate()})()` }} />
                <img className="mock-dock-icon" src={DOCK_NOTES} alt="" width={26} height={26} decoding="sync" />
                <div className="mock-dock-sep" />
                <div className="mock-dock-spacer" />
                <img className="mock-dock-icon" src={DOCK_TRASH} alt="" width={26} height={26} decoding="sync" />
              </div>
              {/* Running app dots — positioned below their respective icons */}
              <div className="mock-dock-dots">
                <span className="mock-dock-dot-space" />
                <span className="mock-dock-dot" />
                <span className="mock-dock-dot" />
              </div>
            </div>
            </div>
            {/* Terminal wrapper — outside desktop-bg so drop-shadow isn't clipped */}
            <div className="mock-terminal-wrapper">
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
                      {/* Eye row */}
                      <rect x="3" y="2" width="2" height="2"/>
                      <rect x="5" y="2" width="1" height="2" fill="#1c1917"/>
                      <rect x="6" y="2" width="6" height="2"/>
                      <rect x="12" y="2" width="1" height="2" fill="#1c1917"/>
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
            <script dangerouslySetInnerHTML={{ __html: `(function(){var h=document.querySelector('.hero-visual'),bg=document.querySelector('.desktop-bg'),sp=document.querySelector('.mock-dock-spacer'),t=document.querySelector('.mock-terminal');if(!h||!bg||!sp||!t)return;var br=bg.getBoundingClientRect(),sr=sp.getBoundingClientRect(),th=t.scrollHeight,tcx=br.width/2,tcy=br.height-80-th/2,scx=sr.left+sr.width/2-br.left,scy=sr.top+sr.height/2-br.top,sc=sr.width/300;h.style.setProperty('--genie-dx',(scx-tcx)+'px');h.style.setProperty('--genie-dy',(scy-tcy)+'px');h.style.setProperty('--genie-scale',sc)})()` }} />
            {/* Animated cursor — outside desktop-bg */}
            <div className="mock-cursor">
              <svg className="cursor-pointer" width="18" height="18" viewBox="0 0 24 24" fill="#1c1917" stroke="#fff" strokeWidth="1.5"><path d="M5 3l14 8-6.5 1.5L11 19z"/></svg>
              <svg className="cursor-crosshair" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
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
                <p className="install-step-desc">Auto-detects Claude Code and Cursor. Configures the MCP server and installs the Retune skill that teaches your agent how to resolve design tokens, utility classes, and CSS variables.</p>
                <div className="code-block">
                  <CopyButton text="npx retune setup" />
                  <div className="code-line">npx retune setup</div>
                </div>
              </div>
            </div>
          </div>

          <p className="install-compat">
            Works with Next.js, Vite, and Remix. Tailwind, CSS Modules, and plain CSS. Claude Code and Cursor via MCP.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section className="section" id="faq">
          <h2 className="section-heading">FAQ</h2>
          <FaqGroup>
            <FaqItem index={0} question="Does it modify my source code directly?">
              No. Retune sends a structured diff of your visual changes to your AI coding tool (Claude Code, Cursor, etc.), which makes the actual code changes. You always review and approve before anything is committed.
            </FaqItem>
            <FaqItem index={1} question="Does it ship to production?">
              No. The <code>&lt;Retune /&gt;</code> component automatically hides itself in production builds. It only activates in development mode unless you explicitly pass the <code>force</code> prop.
            </FaqItem>
            <FaqItem index={2} question="How does it find the right element in my code?">
              It combines CSS selectors, React component hierarchy, class names, and text content to give your AI agent enough context to locate the exact element. No build plugin needed.
            </FaqItem>
            <FaqItem index={3} question="What frameworks and styling approaches are supported?">
              Next.js, Vite, and Remix for build tools. Tailwind CSS, CSS Modules, and plain CSS for styling. Any AI tool that supports MCP (Claude Code, Cursor), plus clipboard fallback for others.
            </FaqItem>
            <FaqItem index={4} question="Can I use it without an AI tool?">
              Yes. Changes are previewed live in the browser regardless. If no MCP server is connected, you can copy the structured diff to your clipboard and paste it into any tool.
            </FaqItem>
            <FaqItem index={5} question="How does it detect my styling approach and design variables?">
              It walks <code>document.styleSheets</code> at runtime to detect utility CSS vs semantic CSS without hardcoded framework patterns. It also scans for CSS custom properties and categorizes them by which CSS properties actually use each variable, not by naming convention.
            </FaqItem>
            <FaqItem index={6} question="Does it detect React components?">
              Yes. It traverses the React fiber tree to find the component hierarchy and identifies the nearest component name for the selected element. This context helps your AI agent locate the right file without a build plugin.
            </FaqItem>
            <FaqItem index={7} question="Does it work with SSR and server components?">
              Yes. Retune is a client-side component that hydrates after page load. It works with Next.js App Router, Pages Router, Remix, and other SSR/SSG frameworks without affecting server rendering.
            </FaqItem>
            <FaqItem index={8} question="Does it affect performance?">
              Minimal impact. It only activates when you enter edit mode, so there's no overhead during normal development. Style analysis runs once per element selection, not continuously.
            </FaqItem>
            <FaqItem index={9} question="Can it inspect iframes or shadow DOM?">
              Not currently. Only elements in the main document are accessible due to browser security restrictions. Shadow DOM support is planned.
            </FaqItem>
          </FaqGroup>
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          <p className="footer-text">PolyForm Shield License. Created by <a href="https://x.com/___sujan" className="footer-link" target="_blank" rel="noopener noreferrer">Sujan Khadgi</a>.</p>
        </footer>
      </main>
    </div>
  );
}
