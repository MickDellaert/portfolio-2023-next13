"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CldImage } from "next-cloudinary";

import { useSearchParams } from "next/navigation";

function Project({
  id,
  urlName,
  name,
  description,
  mainImage,
  projects,
  filteredProjects,
  project,
}) {
  // console.log(projects);
  // console.log(filteredProjects);

  return (
    <>
      <Link className="relative" href={`/project/${urlName}`}>
        {/* <div
          className={`"absolute z-20 h-full w-full rounded-2xl bg-primary hover:hidden ${
            filteredProjects.length === 0
              ? "absolute z-20 h-full w-full rounded-2xl bg-primary opacity-0"
              : filteredProjects.includes(project)
              ? "absolute z-20 h-full w-full rounded-2xl bg-primary opacity-0"
              : "absolute z-20 h-full w-full rounded-2xl bg-primary opacity-5"
          }`}
        ></div> */}
        <div className="grid-image-container overflow-hidden rounded-2xl">
          {/* <h1 className="text-xl font-bold">{name}</h1>
          <p>{description}</p> */}
          <CldImage
            className={`"grid-image grayscale" rounded-xl ${
              filteredProjects.length === 0
                ? "grayscale-0"
                : filteredProjects.includes(project)
                ? "grayscale-0"
                : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
            }`}
            src={mainImage}
            alt={name}
            width={1200}
            height={1200}
          />

          <div className="grid-overlay rounded-2xl ">
            <div className="grid-title p-8 text-center text-3xl font-black text-primary">
              <h2 className="mb-4">{name}</h2>
              <p className="text-base font-bold text-black underline decoration-2 underline-offset-2">
                Find out more
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Project;
