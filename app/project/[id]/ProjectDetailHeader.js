"use client";

import Link from "next/link";
import ProjectSkills from "./ProjectSkills";
import { motion } from "framer-motion";

function ProjectDetailHeader({ singleProject }) {
  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={item}>
        <div className="mb-20 xl:w-3/5">
          <h3 className="mb-4 text-3xl sm:text-4xl text-neutral-950">{singleProject.name}</h3>
          <p className="text-lg text-neutral-950">{singleProject.description}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2 fill-primary sm:flex-row">
            <p className="font-semibold hidden text-neutral-400 sm:block">Made with</p>
            <div className="flex gap-1 sm:gap-2">
              <ProjectSkills singleProject={singleProject} />
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href={singleProject.linkLive}
              className="relative inline-block text-base font-semibold text-neutral-400 transition-all duration-100
            before:absolute before:left-[0%] before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0 before:bg-primary before:transition-all
            before:duration-[400ms] before:ease-out 
            after:absolute after:left-[0%] after:top-full after:block after:h-0.5 after:w-[100%] 
            after:bg-neutral-400 after:transition-all hover:text-primary hover:before:scale-x-100 hover:after:hidden"
              target="_blank"
              rel="noreferrer"
            >
              {singleProject.linkName}
            </Link>
            {singleProject.linkGit.includes("https") && (
              <>
                {/* <Link
                href={singleProject.linkGit}
                className="gitlink text-base font-semibold text-neutral-400 underline decoration-primary 
              decoration-1 underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Link> */}
                <Link
                  href={singleProject.linkGit}
                  className="relative inline-block text-base font-semibold text-neutral-400 transition-all duration-100 duration-100
                before:absolute before:left-[0%] before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0 before:bg-primary
                before:transition-all before:duration-[400ms] before:ease-out after:absolute after:left-[0%] after:top-full after:block after:h-0.5 
                after:w-[100%] after:bg-neutral-400 after:transition-all hover:text-primary hover:before:scale-x-100 hover:after:hidden"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>Github</div>
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectDetailHeader;
