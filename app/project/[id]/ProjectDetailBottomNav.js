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

  // console.log(nextProject)
  // console.log(singleProject.id)

  return (
    <>
      <div className="project-navbuttons flex justify-between font-semibold">
        <Link
          href={`/project/${previousProject}`}
          scroll={false}
          className="text-regular text-neutral-500 hover:text-primary"
        >
          {singleProject.id > 1 ? (
            <div className="flex gap-2">
              <p className="rotate-90">↓</p>Previous
            </div>
          ) : (
            ""
          )}
        </Link>
        <Link href={`/project/${nextProject}`} className="text-regular text-neutral-500 hover:text-primary">
          {singleProject.id < data.length ? (
            <div className="flex gap-2">
              Next <p className="rotate-90">↑</p>
            </div>
          ) : (
            ""
          )}
        </Link>
      </div>
    </>
  );
}

export default ProjectDetailBottomNav;
