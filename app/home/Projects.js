"use client";

import supabase from "@/utils/supabase";
import Project from "./Project";
import TagButtons from "./TagButtons";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Projects({ projects, uniqueIcons }) {
  const searchParams = useSearchParams();
  const selectedProjects = searchParams.get("filter");
  // const selectedProjectsArray = selectedProjects
  //   ? selectedProjects.split(",")
  //   : [];

  // const [filteredProjects, setFilteredProjects] = useState([]);
  // const [newProjects, setNewProjects] = useState(projects);

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

  // useEffect(() => {
  //   if (selectedProjects) {
  //     setFilteredProjects(
  //       projects.filter((project) =>
  //         project.icons.some((icon) => selectedProjects.includes(icon.iconName))
  //       )
  //     );
  //   } else {
  //     setFilteredProjects([]);
  //   }
  // }, [selectedProjects]);

  // useEffect(() => {
  //   let combinedArray = [...filteredProjects, ...projects];
  //   let sortedProjects = Array.from(new Set(combinedArray));

  //   setNewProjects(sortedProjects);
  // }, [filteredProjects]);

  // const filterAndSort = (projects, selectedProjects) => {
  //   let filteredTemp = [];

  //   if (selectedProjects) {
  //     filteredTemp = projects.filter((project) =>
  //       project.icons.some((icon) => selectedProjects.includes(icon.iconName))
  //     );
  //   }
  //   if (projects) {
  //     let combinedArray = [...filteredTemp, ...projects];
  //     let sortedProjects = Array.from(new Set(combinedArray));

  //     return sortedProjects;
  //   }
  // };

  // useEffect(() => {
  //   filterAndSort(projects, selectedProjects);
  // }, [selectedProjects]);

  return (
    <>
      {/* <TagButtons tags={tags} setTags={setTags} /> */}
      <div id="projects" className="relative -top-8"></div>

      <TagButtons icons={uniqueIcons} />

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
