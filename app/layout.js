import { Analytics } from "@vercel/analytics/react";
import { Metadata } from 'next'

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

import "./globals.css";

import { Red_Hat_Display } from "next/font/google";
const mainFont = Red_Hat_Display({
  subsets: ["latin-ext"],
  variable: "--font-redhat",
  display: 'swap',
  // fallback: ["Helvetica", "sans-serif"],
});

export const metadata = {
  title: "Mick's portfolio",
  description: "Mick Dellaert, a graphic designer on a journey of becoming a developer.",
  creator: "Mick Dellaert",
  icons: {
    icon: '/icon.ico',
  },
}

// import HashScroll from "@/components/HashScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`${mainFont.variable} font-sans text-neutral-950 antialiased `}
      >
        {/* <HashScroll> */}
        <Navbar />
        {children}
        <Analytics />
        {/* </HashScroll> */}
        <Footer />
      </body>
    </html>
  );
}
