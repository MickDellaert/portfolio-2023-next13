"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useState, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

import skillIcons from "@/components/skillIcons";

function Project({ filteredProjects, project, i }) {
  const notSmall = useMediaQuery("(min-width: 640px)");
  const [hover, setHover] = useState(-1);
  const elementRef = useRef([]);

  const SetHoverStateOn = (i) => {
    setHover(i);
  };
  const SetHoverStateOff = () => {
    setHover(-1);
  };

  // console.log(project.color);

  return (
    <>
      <Link className="relative" href={`/project/${project.urlName}`}>
        <div
          className="group cursor-default sm:cursor-pointer"
          onMouseLeave={SetHoverStateOff}
          onMouseEnter={() => SetHoverStateOn(i)}
        >
          <div className="relative overflow-hidden rounded-2xl @container sm:group-hover:bg-[#d1f4fe]">
            <div
              className={`group relative aspect-square h-full w-full overflow-hidden rounded-2xl bg-neutral-100 ease-in-out
              `}
              style={
                hover === i
                  ? {
                      backgroundColor: `#${project.color}`,
                    }
                  : { transition: "background-color 0.2s ease" }
              }
            >
              <Image
                src={project.images[0].url}
                alt={project.name}
                fill={true}
                sizes="(max-width: 639px) 80vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 22vw"
                className={`rounded-2xl drop-shadow-xl filter  ${
                  filteredProjects.length === 0
                    ? "grayscale-0"
                    : filteredProjects.includes(project)
                    ? "grayscale-0"
                    : "opacity-75 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                }`}
                style={
                  hover === i && notSmall
                    ? {
                        transform: `translateY(${elementRef.current[i]?.offsetHeight - 5}px) `,
                        transition: "0.32s ease-out",
                      }
                    : { transition: "0.32s ease-in" }
                }
              />
            </div>

            <div
              ref={(ref) => (elementRef.current[i] = ref)}
              className="mb-6 mt-4 flex w-full items-center justify-between transition-all 
              sm:absolute sm:-top-full sm:mb-0 sm:mt-0 sm:flex-col sm:justify-center sm:ease-in-out"
              style={
                hover === i
                  ? {
                      top: `0px`,
                      transition: "all 0.28s ease-out",
                    }
                  : {
                      // top: `translateY ${elementRef.current[i]?.offsetHeight}px`,
                      transition: "all 0.48s ease-in",
                    }
              }
            >
              <h2
                className="w-4/5 text-lg font-bold leading-tight text-neutral-950 
                sm:mb-3 sm:mt-5 sm:w-11/12 sm:px-3 sm:text-center sm:text-[8.2cqi]"
              >
                {project.name}
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
                  return <ProjectSkills key={i} className="h-[20px] w-[20px] fill-neutral-600" />;
                })}
              </div>
              {/* <p
                className="hidden text-sm font-semibold text-neutral-950 underline decoration-1 underline-offset-4  
              hover:text-neutral-950 hover:decoration-2 sm:block"
              >
                Find out more →
              </p> */}
              <p
                className="relative inline-block text-[4.4cqi] font-semibold text-neutral-600 transition-all duration-100
            before:absolute before:left-[0%] before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0 before:bg-neutral-950 before:transition-all
            before:duration-[400ms] before:ease-out 
            after:absolute after:left-[0%] after:top-full after:block after:h-0.5 after:w-[100%] 
            after:bg-neutral-600 hover:text-neutral-950 hover:before:scale-x-100 hover:after:hidden"
              >
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
