import type { Metadata } from "next";
import { Retune } from "retune";

export const metadata: Metadata = {
  title: "Retune — The visual layer for vibe coding",
  description:
    "Select any element in your running app, tweak it visually, and let your AI coding tool write the changes. The visual layer for vibe coding.",
  openGraph: {
    title: "Retune",
    description: "The visual layer for vibe coding.",
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
