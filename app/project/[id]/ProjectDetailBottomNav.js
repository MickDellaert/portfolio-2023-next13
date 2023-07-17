"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function ProjectDetailBottomNav({ singleProject, data }) {
  const [previousProject, setPreviousProject] = useState(singleProject.urlName);
  const [nextProject, setNextProject] = useState(singleProject.urlName);

  useEffect(() => {
    if (singleProject.id > 1) {
      setPreviousProject(data[singleProject.id - 2].urlName);
    }

    if (singleProject.id < data.length) {
      setNextProject(data[singleProject.id].urlName);
    }
  }, [data, singleProject.id]);

  // console.log(nextProject)
  // console.log(singleProject.id)

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        className="project-navbuttons flex justify-between font-semibold"
      >
        <Link href={`/project/${previousProject}`} scroll={false} className="text-regular group">
          {singleProject.id > 1 ? (
            <div className="flex gap-2 text-neutral-400 hover:text-primary">
              <p className="rotate-90 text-neutral-400 group-hover:text-primary ">↓</p>
              Previous
            </div>
          ) : (
            ""
          )}
        </Link>
        <Link href={`/project/${nextProject}`} className="text-regular group">
          {singleProject.id < data.length ? (
            <div className="flex gap-2 text-neutral-400 group-hover:text-primary">
              Next <p className="rotate-90 text-neutral-400 group-hover:text-primary">↑</p>
            </div>
          ) : (
            ""
          )}
        </Link>
      </motion.div>
    </>
  );
}

export default ProjectDetailBottomNav;
