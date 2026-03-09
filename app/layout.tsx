import type { Metadata } from "next";
import { Retune } from "retune";

export const metadata: Metadata = {
  title: "Retune — Visual devtools for AI-assisted development",
  description:
    "Select any element in your running React app, tweak it visually, and let your AI coding tool write the CSS. No more describing layouts in words.",
  openGraph: {
    title: "Retune",
    description: "Visual devtools that persist changes to source code via AI agents.",
    siteName: "Retune",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body style={{ margin: 0, fontFamily: "'Inter', sans-serif" }}>
        {children}
        <Retune force />
      </body>
    </html>
  );
}
