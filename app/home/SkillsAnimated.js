"use client";

import skillIcons from "@/components/skillIcons";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const SkillsAnimated = ({ icons }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

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
          className="mx-auto flex w-[90%] flex-wrap justify-center xl:w-3/4 2xl:w-4/6"
        >
          {icons.map((skill, i) => {
            const HomeSkills = skillIcons[skill.iconCode];
            return (
              <motion.div key={i} variants={item} className="group flex basis-1/4 flex-col py-1 md:basis-1/6">
                <HomeSkills
                  key={i}
                  className="m-auto h-10 w-10 cursor-pointer fill-neutral-400 group-hover:fill-primary md:h-12 md:w-12"
                />
                <h4 className="mb-6 mt-1 h-4 text-center text-sm font-semibold text-primary opacity-0 group-hover:block group-hover:opacity-100 md:text-base">
                  {skill.iconName}
                </h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};
