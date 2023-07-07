"use client";

import Link from "next/link";
import React from "react";
import { CldImage } from "next-cloudinary";

import skillIcons from "@/components/skillIcons";

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
        <div className="grid-image-container group rounded-2xl ">
          <div className="relative transition-all duration-200 ease-in-out sm:group-hover:scale-[.98] sm:group-hover:opacity-0">
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
          </div>

          <div className="grid-overlay absolute top-0 flex h-full w-full items-center justify-center 
          rounded-2xl opacity-0 transition-all duration-200 ease-in-out sm:group-hover:scale-[1.08] sm:group-hover:opacity-100">
            <div className="grid-title p-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black lg:text-xl xl:text-3xl">
                {name}
              </h2>
              <p className="text-base font-normal text-gray-400 sm:block">
                Built with:
              </p>
              <div className="mb-4 flex justify-center gap-2">
                {project.icons.map((skills, i) => {
                  const ProjectSkills = skillIcons[skills.iconCode];
                  return (
                    <ProjectSkills
                      key={i}
                      className="h-[20px] w-[20px] fill-gray-400"
                    />
                  );
                })}
              </div>
              <p className="text-base font-bold text-primary underline decoration-2 underline-offset-2 hover:text-black hover:decoration-primary">
                Find out more
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-4 flex items-center justify-between sm:hidden">
          {/* <div className="flex items-center "> */}
          <h2 className="w-4/5 text-lg font-bold text-black">{name}</h2>
          {/* <p className="text-base font-normal text-gray-400 ml-2 sm:block">
              Built with:
            </p> */}
          <div className="flex justify-center gap-2">
            {project.icons.map((skills, i) => {
              const ProjectSkills = skillIcons[skills.iconCode];
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
