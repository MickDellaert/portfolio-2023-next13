"use client";

import Image from "next/image";
import Loading from "./loading";
import { DM_Sans } from "@next/font/google";
import "./globals.css";
import useSWR from "swr";
import Project from "../components/Project";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  console.log(data);

  return (
    <>
      <div className="max-w-[90%] sm:max-w-[80%] mx-auto">
        <Hero />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {data.projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              mainImage={project.mainImage}
            />
          ))}
        </ul>
      </div>
      <About />
    </>
  );
}

// {
//   revalidateOnFocus: false,
//   revalidateOnMount:false,
//   revalidateOnReconnect: false,
//   refreshWhenOffline: false,
//   refreshWhenHidden: false,
//   refreshInterval: 0
// }
