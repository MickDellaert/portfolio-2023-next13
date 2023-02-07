"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

import supabase from "@/utils/supabase";

function ProjectDetailBottomNav({ singleProject }) {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const [previousProject, setPreviousProject] = useState(singleProject.urlName);
  const [nextProject, setNextProject] = useState(singleProject.urlName);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from("projects").select();
      setProjects(data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (singleProject.id > 1) {
        setPreviousProject(projects[singleProject.id - 2].urlName);
      }

      if (singleProject.id < projects.length) {
        setNextProject(projects[singleProject.id].urlName);
      }
    }
  }, [projects, singleProject.id]);

  if (isLoading) return <p>Loading</p>;

  console.log(projects[2].id);

  return (
    <>
      <div className="project-navbuttons flex justify-between">
        <Link
          href={`/project/${previousProject}`}
          scroll={false}
          className="text-regular font-bold text-gray-400 hover:text-primary"
        >
          {singleProject.id > 1 ? "← Previous" : ""}
        </Link>
        <Link
          href={`/project/${nextProject}`}
          className="text-regular font-bold text-gray-400 hover:text-primary"
        >
          {singleProject.id < projects.length ? "Next →" : ""}
        </Link>
      </div>
    </>
  );
}

export default ProjectDetailBottomNav;
