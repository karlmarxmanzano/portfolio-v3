import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
