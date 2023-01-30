"use client";

import Image from "next/image";
import Loading from "./loading";

import { Inter } from "@next/font/google";
// import styles from './page.module.css'
import "./globals.css";

import projects from "../json/data.json";

const inter = Inter({ subsets: ["latin"] });

//useSWR allows the use of SWR inside function components
import useSWR from "swr";
import Project from "./Project";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data

  const { data, error } = useSWR("/api/staticdata", fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <Loading />;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

  console.log(data);

  return (
    <div className="max-w-7xl mx-auto">
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