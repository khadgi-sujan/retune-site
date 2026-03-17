import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Retune } from "retune";

export const metadata: Metadata = {
  title: "Retune",
  description:
    "Select any element in your running app, tweak it visually, and let your AI coding tool write the changes. The visual layer for vibe coding.",
  metadataBase: new URL("https://retune.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Retune - The visual layer for vibe coding",
    description:
      "Select any element in your running app, tweak it visually, and let your AI coding tool write the changes to source.",
    siteName: "Retune",
    url: "https://retune.dev",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Retune - The visual layer for vibe coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retune - The visual layer for vibe coding",
    description:
      "Select any element in your running app, tweak it visually, and let your AI coding tool write the changes to source.",
    images: ["/opengraph-image.png"],
    creator: "@___sujan",
  },
  keywords: [
    "retune",
    "vibe coding",
    "visual devtools",
    "AI coding",
    "CSS editor",
    "Claude Code",
    "Cursor",
    "MCP",
    "developer tools",
    "Tailwind",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=localStorage.getItem('theme')||'system';var d=p==='dark'||(p==='system'&&matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light');window.__INITIAL_DARK__=d})()`,
          }}
        />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Retune",
              description:
                "The visual layer for vibe coding. Select any element in your running app, tweak it visually, and let your AI coding tool write the changes to source.",
              url: "https://retune.dev",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: "Sujan Khadgi",
                url: "https://x.com/___sujan",
              },
              license: "https://opensource.org/licenses/MIT",
            }),
          }}
        />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        <Analytics />
        <Retune force />
      </body>
    </html>
  );
}
