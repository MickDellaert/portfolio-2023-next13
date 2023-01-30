import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

import "./globals.css";
import { DM_Sans } from "@next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${dmSans.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
