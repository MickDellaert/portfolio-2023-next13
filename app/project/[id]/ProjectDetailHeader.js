"use client";

import Link from "next/link";
import ProjectSkills from "./ProjectSkills";

function ProjectDetailHeader({ singleProject }) {
  return (
    <>
      <div className="mb-8 xl:mr-[30vw]">
        <h2 className="mb-4 text-4xl font-bold text-neutral-950">{singleProject.name}</h2>
        <p className="text-lg">{singleProject.description}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 fill-primary sm:flex-row">
          <p className="hidden text-base text-neutral-400 sm:block">Built with:</p>
          <div className="flex gap-2">
            <ProjectSkills singleProject={singleProject} />
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href={singleProject.linkLive}
            className="livelink text-sm font-bold text-neutral-400 hover:text-primary sm:text-base"
            target="_blank"
            rel="noreferrer"
          >
            {singleProject.linkName}
          </Link>
          {singleProject.linkGit.includes("https") && (
            <Link
              href={singleProject.linkGit}
              className="gitlink text-sm font-bold text-neutral-400 hover:text-primary sm:text-base"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectDetailHeader;
