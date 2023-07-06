import "./globals.css";
import { Suspense } from "react";
import { ProjectLoading } from "@/components/ProjectLoading";

// export const revalidate = 100;
// export const dynamic = "auto";

import Hero from "./home/Hero";
import Projects from "./home/Projects";
import Skills from "./home/Skills";
import About from "./home/About";

export default async function Index({ searchParams }) {
  return (
    <>
      {/* <h2>under construction</h2> */}

      <div className="mt-[100px]"></div>
      <div className={`mx-auto min-h-screen max-w-screen-2xl px-6`}>
        <Hero />
        <Suspense fallback={<ProjectLoading />}>
          <Projects />
          <Skills />
        </Suspense>
      </div>
      <About />
    </>
  );
}
