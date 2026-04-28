import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { cn } from "@/utils/cn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The 400lbs Beef Titanic",
  description:
    "A cinematic mythic experience devoted to Cruz, the unstoppable human force known as The 400lbs Beef Titanic.",
  metadataBase: new URL("https://the-400lbs-beef-titanic.vercel.app"),
  openGraph: {
    title: "The 400lbs Beef Titanic",
    description:
      "A premium interactive legend page chronicling the mythic force of Cruz.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 400lbs Beef Titanic",
    description:
      "A premium interactive legend page chronicling the mythic force of Cruz.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          sora.variable,
          "text-white antialiased",
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
