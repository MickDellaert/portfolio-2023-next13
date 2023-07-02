import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

import "./globals.css";
// import { Archivo } from "next/font/google";
// const mainFont = Archivo({ subsets: ["latin"] });

import { Red_Hat_Display } from "next/font/google";
const mainFont = Red_Hat_Display({ subsets: ["latin"] });

// import HashScroll from "@/components/HashScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${mainFont.className}`}>
        {/* <HashScroll> */}
          <Navbar />
          {children}
          <Footer />
        {/* </HashScroll> */}
      </body>
    </html>
  );
}
