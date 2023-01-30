"use client";

import Image from "next/image";
import Loading from "./loading";
import { Inter } from "@next/font/google";
import "./globals.css";
import useSWR from "swr";
import Project from "../components/Project";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  console.log(data);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <ul className="grid lg:grid-cols-4 gap-12 ">
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
