"use client";

import Link from "next/link";
import React from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

import skillIcons from "@/components/skillIcons";

function Project({ urlName, name, mainImage, filteredProjects, project }) {
  return (
    <>
      <Link className="relative" href={`/project/${urlName}`}>
        <div className="group">
          <div className="relative overflow-hidden ">
            <div className="group relative aspect-square h-full w-full overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                className={`rounded-2xl drop-shadow-xl filter transition-all duration-200 ease-in-out sm:group-hover:translate-y-44 ${
                  filteredProjects.length === 0
                    ? "grayscale-0"
                    : filteredProjects.includes(project)
                    ? "grayscale-0"
                    : "opacity-75 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                }`}
                src={mainImage}
                alt={name}
                fill={true}
                sizes="(max-width: 639px) 80vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 22vw"
              />
            </div>

            <div
              className="mb-6 mt-4 flex w-full items-center justify-between transition-all duration-200 ease-in-out sm:absolute sm:-top-44 sm:mb-0 sm:mt-0 
             sm:flex-col sm:justify-center sm:group-hover:translate-y-52"
            >
              <h2 className="w-4/5 text-lg font-bold text-neutral-950 sm:mb-3 sm:w-11/12 sm:text-center sm:text-xl md:text-2xl xl:text-[1.65rem] leading-tight">
                {name}
              </h2>
              {/* <p className="mb-1 hidden text-base font-normal text-neutral-400 sm:hidden">
                Built with
              </p> */}
              <div className="flex items-center gap-2 sm:mb-5">
                {/* <p className="mb-1 hidden text-base font-semibold text-neutral-400 sm:block">
                  Built with
                </p> */}

                {project.icons.map((skills, i) => {
                  const ProjectSkills = skillIcons[skills.iconCode];
                  return (
                    <ProjectSkills
                      key={i}
                      className="h-[20px] w-[20px] text-neutral-400"
                    />
                  );
                })}
              </div>
              <p className="hidden text-base font-semibold text-primary underline decoration-2 underline-offset-4 hover:text-neutral-950 hover:decoration-primary sm:block">
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
