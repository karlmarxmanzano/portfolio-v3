import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://karlmarxmanzano.com";
const title = "Karl Marx Manzano — Full-stack developer";
const description =
  "Portfolio of Karl Marx Manzano, a full-stack developer specializing in C#/.NET, Laravel, and Vue.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Karl Marx Manzano",
    "full-stack developer",
    "software engineer",
    "Laravel developer",
    "Vue.js developer",
    "C# .NET developer",
    "web developer Philippines",
  ],
  authors: [{ name: "Karl Marx Manzano", url: siteUrl }],
  creator: "Karl Marx Manzano",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Karl Marx Manzano",
    title,
    description,
    images: [
      {
        url: "/portrait.jpg",
        width: 567,
        height: 567,
        alt: "Karl Marx Manzano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Applied synchronously before paint so the saved/preferred theme never flashes.
const themeInitScript = `(function(){try{var s=localStorage.getItem('km-theme');var d=s?s==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", instrumentSans.variable, jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
