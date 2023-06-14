"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CldImage } from "next-cloudinary";
import * as ReactIcons from "react-icons/si";

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
  // console.log(project);
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
            className={`"grid-image grayscale" rounded-2xl ${
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
            <div className="grid-title p-8 text-center">
              <h2 className="mb-4 text-3xl font-black text-black lg:text-xl xl:text-3xl">
                {name}
              </h2>
              <p className="text-base font-normal text-gray-400 sm:block">
                Built with:
              </p>
              <div className="mb-4 flex justify-center gap-2">
                {project.icons.map((skills, i) => {
                  const ProjectSkills = ReactIcons[skills.iconCode];
                  return (
                    <ProjectSkills
                      key={i}
                      className="h-[20px] w-[20px] fill-gray-400"
                    />
                  );
                })}
              </div>
              <p className="text-base font-bold text-primary underline decoration-2 underline-offset-2">
                Find out more
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 mb-4 sm:hidden">
          {/* <div className="flex items-center "> */}
            <h2 className="text-2xl font-black text-black w-4/5">
              {name}
            </h2>
            {/* <p className="text-base font-normal text-gray-400 ml-2 sm:block">
              Built with:
            </p> */}
            <div className="flex justify-center gap-2">
              {project.icons.map((skills, i) => {
                const ProjectSkills = ReactIcons[skills.iconCode];
                return (
                  <ProjectSkills
                    key={i}
                    className="h-[20px] w-[20px] fill-gray-400"
                  />
                );
              })}
            </div>
          </div>
          {/* <p className="text-base font-bold text-primary underline decoration-2 underline-offset-2">
            Find out more
          </p> */}
        {/* </div> */}
      </Link>
    </>
  );
}

export default Project;
