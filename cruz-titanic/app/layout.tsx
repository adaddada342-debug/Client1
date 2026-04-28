import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CursorAura } from "@/components/CursorAura";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Nav } from "@/components/Nav";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The 400lbs Beef Titanic — Cruz",
  description:
    "A mythic, unstoppable, larger-than-life human figure. Cruz — the 400lbs Beef Titanic.",
  metadataBase: new URL("https://cruz.example.com"),
  openGraph: {
    title: "The 400lbs Beef Titanic — Cruz",
    description: "A cinematic, mythic experience for Cruz.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="bg-ink-950 text-bone-50">
        <SmoothScrollProvider>
          <GrainOverlay />
          <CursorAura />
          <Nav />
          <main id="main">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
