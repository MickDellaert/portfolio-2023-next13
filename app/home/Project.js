"use client";

import Link from "next/link";
import React from "react";
import { CldImage } from "next-cloudinary";

import skillIcons from "@/components/skillIcons";

function Project({ urlName, name, mainImage, filteredProjects, project }) {
  return (
    <>
      <Link className="relative" href={`/project/${urlName}`}>
        <div className="group">
          <div className="relative transition-all duration-200 ease-in-out sm:group-hover:scale-[.98] sm:group-hover:opacity-0">
            <CldImage
              className={`rounded-2xl ${
                filteredProjects.length === 0
                  ? "grayscale-0"
                  : filteredProjects.includes(project)
                  ? "grayscale-0"
                  : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
              }`}
              src={mainImage}
              alt={name}
              width={600}
              height={600}
            />
          </div>

          <div
            className="mt-3 mb-5 flex h-full w-full content-center items-center justify-between transition-all duration-200 ease-in-out sm:absolute sm:top-0 sm:mt-0 
          sm:mb-0 sm:flex-col sm:justify-center sm:opacity-0 sm:group-hover:scale-[1.08] sm:group-hover:opacity-100"
          >
            <h2 className="w-4/5 text-lg font-bold text-black sm:mb-3 sm:text-center sm:text-3xl lg:text-xl xl:text-3xl">
              {name}
            </h2>
            <p className="hidden mb-1 text-base font-normal text-gray-400 sm:block">
              Built with:
            </p>
            <div className="flex justify-center gap-2 sm:mb-8">
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
            <p className="hidden text-base font-bold text-primary underline decoration-2 underline-offset-4 hover:text-black hover:decoration-primary sm:block">
              Find out more
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Project;
