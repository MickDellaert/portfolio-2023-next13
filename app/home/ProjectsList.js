"use client";

import Project from "./Project";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function ProjectsList({ projects }) {
  const searchParams = useSearchParams();
  const selectedProjects = searchParams.get("filter");

  const filteredProjects = filterProjects();
  const combinedAndSorted = combineAndSort();

  function filterProjects() {
    let filtered = [];

    if (selectedProjects) {
      filtered = projects.filter((project) => project.icons.some((icon) => selectedProjects.includes(icon.iconName)));
    }
    return filtered;
  }

  function combineAndSort() {
    let combinedArray = [...filteredProjects, ...projects];
    return Array.from(new Set(combinedArray));
  }

  return (
    <>
      <ul className="mt-6 grid gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {combinedAndSorted.map((project, i) => (
          <motion.li layout key={project.id}>
            <Project key={project.id} project={project} index={i} filteredProjects={filteredProjects} />
          </motion.li>
        ))}
      </ul>
    </>
  );
}
