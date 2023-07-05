import "./globals.css";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProjectLoading } from "@/components/ProjectLoading";

// export const revalidate = 100;
// export const dynamic = "auto";

// import { Archivo } from "next/font/google";
// const mainFont = Archivo({ subsets: ["latin"] });

// import { Red_Hat_Display } from "next/font/google";
// const mainFont = Red_Hat_Display({ subsets: ["latin"] });

import supabase from "@/utils/supabase";
import Hero from "./home/Hero";
import About from "./home/About";
import Skills from "./home/Skills";
import Projects from "./home/Projects";

export default async function Index({ searchParams }) {
  // backend filter - disabled
  // let filter = searchParams.tag;
  // console.log(searchParams.tag);

  // if (filter) {
  //   filter = filter.split(",");
  // }

  // let query = supabase
  //   .from("projects")
  //   .select(`*, icons("*"), skills!inner("*"), images("*")`)
  //   .order("id");

  // if (filter) {
  //   query = query.in("skills.iconName", filter);
  // }

  // const { data: projects } = await query;

  const { data: projects } = await supabase
    .from("projects")
    .select(`*, icons("*"), images("*")`)
    .order("id");

  const { data: icons } = await supabase.from("skills").select();

  // console.log(projects);

  if (!projects) {
    notFound();
  }

  let iconsArray = icons.map((iconName) => iconName.iconName);
  let uniqueIcons = [...new Set(iconsArray)];
  console.log(uniqueIcons);

  return (
    <>
      {/* <h2>under construction</h2> */}

      <div className="mt-[100px]"></div>

      <div className={`mx-auto min-h-screen max-w-screen-2xl px-6`}>
        <Hero />
        <Suspense fallback={<ProjectLoading />}>
          <Projects projects={projects} uniqueIcons={uniqueIcons} />
          <Skills />
        </Suspense>
      </div>
      <About />
      {/* <Footer /> */}

      {/* 
      <pre className="mt-[100px] text-sm">
        {JSON.stringify(projects, null, 2)}
      </pre> */}
    </>
  );
}
