import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

function ProjectDetailBottomNav({ singleProject, data }) {
  const [previousProject, setPreviousProject] = useState(singleProject.urlName);
  const [nextProject, setNextProject] = useState(singleProject.urlName);

  useEffect(() => {
    if (singleProject.id > 1) {
      setPreviousProject(data.projects[singleProject.id - 2].urlName);
    }

    if (singleProject.id < data.projects.length) {
      setNextProject(data.projects[singleProject.id].urlName);
    }
  }, [data.projects, singleProject.id]);

  return (
    <>
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
        {singleProject.id < data.projects.length ? "Next →" : ""}
      </Link>
    </>
  );
}

export default ProjectDetailBottomNav;
