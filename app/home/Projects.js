"use client";

import supabase from "@/utils/supabase";
import Project from "./Project";
import TagButtons from "./TagButtons";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Projects({ projects, uniqueIcons }) {
  const [newProjects, setNewProjects] = useState(projects);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // const filteredProjects = []
  console.log(filteredProjects);

  const searchParams = useSearchParams();
  const selectedProjects = searchParams.get("tag");
  const selectedProjectsArray = selectedProjects
    ? selectedProjects.split(",")
    : [];

  // console.log(selectedProjects);
  // console.log(selectedProjectsArray)

  const filterSort = () => {};

  useEffect(() => {
    if (selectedProjects) {
      setFilteredProjects(
        projects.filter((project) =>
          project.icons.some((icon) => selectedProjects.includes(icon.iconName))
        )
      );
    } else {
      setFilteredProjects([]);
    }
  }, [selectedProjects]);

  useEffect(() => {
    let combinedArray = [...filteredProjects, ...projects];
    let sortedProjects = Array.from(new Set(combinedArray));

    setNewProjects(sortedProjects);
  }, [filteredProjects]);

  return (
    <>
      {/* <TagButtons tags={tags} setTags={setTags} /> */}

      <TagButtons icons={uniqueIcons} />

      <ul
        id="projects"
        className="mt-12 grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
      >
        {newProjects.map((project, i) => (
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
