"use client";

import skillIcons from "@/utils/skillIcons";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

export const SkillsAnimated = ({ icons }) => {
  const notSmall = useMediaQuery("(min-width: 640px)");

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // console.log(`${icons[0]?.level}%`);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        staggerChildren: 0.03,
      },
    },
  };

  const title = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };

  const skillContainer = {
    invisible: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const skillIcon = notSmall
    ? {
        invisible: { opacity: 1 },
        visible: { opacity: 0 },
      }
    : { invisible: { opacity: 1 }, visible: { opacity: 1 } };

  // const skillIcon = {
  //   invisible: { opacity: 1 },
  //   visible: { opacity: 0 },
  // };

  const skillDetails = {
    invisible: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const skillWidth = {
    invisible: { width: "0%" },
    visible: (i) => ({ width: `${icons[i].level}%` }),
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <>
      <div id="skills" className="relative top-36"></div>

      <div className="mx-auto mt-40">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={title}
          className="mb-12 text-center text-4xl"
        >
          Skills
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="mx-auto flex w-[96%] flex-wrap justify-center xl:w-3/4 2xl:w-4/6"
        >
          {icons.map((skill, i) => {
            const HomeSkills = skillIcons[skill.iconCode];
            return (
              <motion.div key={i} variants={item} className="group flex h-28 basis-1/4 flex-col py-1 md:basis-1/6">
                <motion.div
                  className="relative h-full sm:cursor-pointer"
                  initial="invisible"
                  whileHover="visible"
                  variants={skillContainer}
                >
                  <motion.div className="flex h-full flex-col justify-center" variants={skillIcon}>
                    <HomeSkills className="m-auto h-10 w-10  fill-neutral-400 md:h-12 md:w-12" />
                  </motion.div>

                  <motion.div
                    variants={skillDetails}
                    className="absolute left-0 top-0 hidden h-full w-full flex-col justify-between rounded-lg bg-neutral-50 p-4 drop-shadow-xl sm:flex"
                  >
                    <div className="flex h-7 items-center">
                      <HomeSkills className="mr-3 h-7 w-7 fill-primary" />
                      <h3 className="text-base font-bold leading-tight">{skill.iconName}</h3>
                    </div>
                    <hr className="bg-neutral-50"></hr>
                    <div className="mb-1.5 flex flex-col justify-end">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-normal text-neutral-950">Skill level</h3>
                        <h3 className="text-base font-bold text-neutral-950">{`${skill.level}%`}</h3>
                      </div>
                      <div className="relative w-full">
                        <div className="absolute h-1.5 w-full rounded-lg bg-neutral-200"></div>
                        <motion.div
                          custom={i}
                          variants={skillWidth}
                          className={`absolute h-1.5 rounded-lg bg-primary`}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};
