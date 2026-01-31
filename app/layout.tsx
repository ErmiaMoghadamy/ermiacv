import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { SEO } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SEO.home.title,
  description: SEO.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-500/30 selection:text-white`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
