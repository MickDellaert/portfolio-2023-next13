import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

import "./globals.css";

import { Red_Hat_Display } from "next/font/google";
const mainFont = Red_Hat_Display({
  subsets: ["latin-ext"],
  variable: "--font-redhat",
  display: "swap",
  // fallback: ["Helvetica", "sans-serif"],
});

export const metadata = {
  title: "Mick's portfolio",
  description: "Mick Dellaert, a graphic designer on a journey of becoming a developer.",
  creator: "Mick Dellaert",
  icons: {
    // icon: {url: "/favicon.svg"},
    // icon: "/favicon.ico",
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head /> */}
      <body className={`${mainFont.variable} font-sans text-neutral-950 antialiased `}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
