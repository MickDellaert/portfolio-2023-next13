"use client";

import "./globals.css";
import useSWR from "swr";

import Loading from "./loading";
import Error from "./error";
import Project from "../components/home/Project";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";

import jsonData from "../json/data.json";

import * as ReactIcons from "react-icons/si";

import { Manrope } from "@next/font/google";
const mainFont = Manrope({ subsets: ["latin"] });

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <Error />;
  if (!data) return <Loading />;

  console.log(jsonData);

  return (
    <>
      <div
        className={`${mainFont.className} mx-auto max-w-screen-2xl px-8 font-black`}
      >
        <Hero />
        <ul
          id="projects"
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
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

        <Skills data={data} />
      </div>
      <About />
    </>
  );
}
