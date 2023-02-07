"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

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
          {singleProject.id < data.length ? "Next →" : ""}
        </Link>
      </div>
    </>
  );
}

export default ProjectDetailBottomNav;