import "./globals.css";
import { Suspense } from "react";
import { ProjectLoading } from "@/components/ProjectLoading";

import dynamic from "next/dynamic";

// const Hero = dynamic(() => import("./home/Hero"), {
//   ssr: false,
// });

// export const revalidate = 100;n
// export const dynamic = "auto";

import Hero from "./home/Hero";
import Projects from "./home/Projects";
import Skills from "./home/Skills";
import About from "./home/About";
// import { HeroTest } from "./home/HeroTest";

export default async function Index() {
  return (
    <>
      <div className="mt-[100px]"></div>
      <div className={`mx-auto min-h-screen max-w-screen-2xl px-6`}>
        {/* <HeroTest/> */}
        <Hero />
        <Suspense fallback={<ProjectLoading />}>
          <Projects />
        </Suspense>
        <Skills />
      </div>
      <About />
    </>
  );
}
