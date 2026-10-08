import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ExpertLinx | Enterprise Microsoft, Cloud, AI & Custom Software Solutions",
  description:
    "ExpertLinx helps organizations modernize operations through Microsoft technologies, cloud, AI, automation, and custom enterprise software.",
  keywords: [
    "technology transformation",
    "Microsoft solutions",
    "cloud modernization",
    "enterprise AI",
    "custom enterprise software",
  ],
  alternates: { canonical: "https://expertlinx.com" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
