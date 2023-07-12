"use client";

import Project from "./Project";
import { useSearchParams } from "next/navigation";

export default function ProjectsList({ projects }) {
  const searchParams = useSearchParams();
  const selectedProjects = searchParams.get("filter");

  // console.log(projects)

  const filteredProjects = filterProjects();
  const combinedAndSorted = combineAndSort();

  function filterProjects() {
    let filtered = [];

    if (selectedProjects) {
      filtered = projects.filter((project) =>
        project.icons.some((icon) => selectedProjects.includes(icon.iconName))
      );
    }
    return filtered;
  }

  function combineAndSort() {
    let combinedArray = [...filteredProjects, ...projects];
    return Array.from(new Set(combinedArray));
  }

  return (
    <>
      <ul className="mt-6 grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {combinedAndSorted.map((project, i) => (
          <Project
            key={i}
            id={project.id}
            urlName={project.urlName}
            name={project.name}
            description={project.description}
            mainImage={project.images[0].url}
            selectedProjects={selectedProjects}
            projects={projects}
            project={project}
            filteredProjects={filteredProjects}
          />
        ))}
      </ul>
    </>
  );
}
