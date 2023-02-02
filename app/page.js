"use client";

import "./globals.css";

import Loading from "./loading";
import useSWR from "swr";
import Project from "../components/Project";
import Hero from "@/components/Hero";
import About from "@/components/About";
import * as ReactIcons from "react-icons/si";

import { Manrope } from "@next/font/google";
import Skills from "@/components/Skills";
const mainFont = Manrope({ subsets: ["latin"] });

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  console.log(data.skills);

  return (
    <>
      <div
        className={`${mainFont.className} max-w-[90%] sm:max-w-[80%] mx-auto font-black`}
      >
        <Hero />
        <ul
          id="projects"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {data.projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              urlName={project.urlName}
              name={project.name}
              description={project.description}
              mainImage={project.mainImage}
            />
          ))}
        </ul>

        <Skills />
      </div>
      <About />
    </>
  );
}
