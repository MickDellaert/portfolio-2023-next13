"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { motion, useInView, useAnimation } from "framer-motion";

import skillIcons from "@/components/skillIcons";
import { Tooltip } from "@/components/Tooltip";

function ProjectTest({ filteredProjects, project, i }) {
  const notSmall = useMediaQuery("(min-width: 640px)");
  const [hover, setHover] = useState(-1);
  const elementRef = useRef([]);

  const SetHoverStateOn = (i) => {
    setHover(i);
  };
  const SetHoverStateOff = () => {
    setHover(-1);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.2,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <>
      <Link className="relative" href={`/project/${project.urlName}`}>
        <div
          className="cursor-default sm:cursor-pointer"
          onMouseLeave={SetHoverStateOff}
          onMouseEnter={() => SetHoverStateOn(i)}
        >
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={item}
            className="relative rounded-2xl @container"
          >
            <div
              className={`insetshadow group relative aspect-square h-full w-full overflow-hidden rounded-2xl bg-neutral-50 ease-in-out
              `}
              style={
                hover === i && notSmall
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
                priority={project.id < 5}
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
            <div className="w-full sm:absolute sm:top-0 sm:aspect-square sm:overflow-hidden">
              <div
                ref={(ref) => (elementRef.current[i] = ref)}
                className="mb-6 mt-4 flex w-full items-center justify-between transition-all sm:absolute 
              sm:-top-full sm:mb-0 sm:mt-0 sm:flex-col sm:justify-center sm:opacity-0 sm:ease-in-out"
                style={
                  hover === i
                    ? {
                        top: `0px`,
                        transition: "all 0.28s ease-out",
                        opacity: "1",
                      }
                    : {
                        transition: "all 0.48s ease-in",
                      }
                }
              >
                <h3
                  className="w-3/4 text-xl leading-tight text-neutral-950 
                sm:mb-3 sm:mt-5 sm:w-11/12 sm:px-3 sm:text-center sm:text-[8.2cqi]"
                >
                  {project.name}
                </h3>

                <div className="flex items-center gap-x-1.5 sm:mb-5 sm:gap-x-2">
                  {project.icons.map((skills, i) => {
                    const ProjectSkills = skillIcons[skills.iconCode];
                    return !notSmall ? (
                      <Tooltip key={i} tooltip={skills.iconName} tipDirection={"bottom left"}>
                        <ProjectSkills key={i} className="h-5 w-5 fill-neutral-400 sm:fill-neutral-500" />
                      </Tooltip>
                    ) : (
                      <ProjectSkills key={i} className="h-5 w-5 fill-neutral-400 sm:fill-neutral-500" />
                    );
                  })}
                </div>

                <p
                  className="relative hidden text-[4.4cqi] font-semibold text-neutral-600 transition-all duration-100 
                before:absolute before:left-[0%] before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0
              before:bg-neutral-950 before:transition-all before:duration-[400ms] before:ease-out after:absolute 
                after:left-[0%] after:top-full after:block after:h-0.5 after:w-[100%] after:bg-neutral-600
              hover:text-neutral-950 hover:before:scale-x-100 hover:after:hidden sm:inline-block"
                >
                  Find out more
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Link>
    </>
  );
}

export default ProjectTest;
