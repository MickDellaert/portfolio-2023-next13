import "./globals.css";

// export const revalidate = 0;
export const dynamic = "auto";

import { Manrope } from "@next/font/google";
const mainFont = Manrope({ subsets: ["latin"] });

import supabase from "@/utils/supabase";
import Hero from "./home/Hero";
import Filter from "./home/Filter";
import Project from "./home/Project";
import About from "./home/About";
import Skills from "./home/Skills";
import Tags from "./home/Tags";
import TagButtons from "./home/TagButtons";
import Test from "./home/Test";
import TestChild from "./home/TestChild";

export default async function Index({ searchParams }) {
  let filter = searchParams.tag;

  // console.log(searchParams.tag);

  if (filter) {
    filter = filter.split(",");
  }

  let query = supabase
    .from("projects")
    .select(`*, icons("*"), skills!inner("*"), images("*")`)
    .order("id");

  if (filter) {
    query = query.in("skills.iconName", filter);
  }

  const { data: projects } = await query;

  return (
    <>
      <div className="mt-[100px]"></div>

      {/* <pre className="mt-[100px] text-sm">{JSON.stringify(projects, null, 2)}</pre> */}

      <div
        className={`${mainFont.className} mx-auto max-w-screen-2xl px-8 font-black`}
      >
        <Hero />
        <Tags />

        <Test>
          <TestChild test="testprop" />
        </Test>

        {/* <Filter /> */}
        <ul
          id="projects"
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              urlName={project.urlName}
              name={project.name}
              description={project.description}
              mainImage={project.images[0].url}
            />
          ))}
        </ul>

        <Skills />
      </div>
      <About />
    </>
  );
}

// export async function generateStaticParams() {
//   const { data: projects } = await supabase
//     .from("projects")
//     .select("id")
//     .order("id");
//   return projects?.map((id) => ({
//     id: id.id.toString(),
//   }));
// }
