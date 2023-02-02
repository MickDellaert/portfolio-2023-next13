import Link from "next/link";
import ProjectSkills from "./ProjectSkills";

function ProjectDetailHeader({ singleProject }) {
  return (
    <>
      <div className="xl:mr-[30vw] mb-8">
        <h2 className="text-4xl font-bold mb-4">{singleProject.name}</h2>
        <p className="text-lg">{singleProject.description}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex sm:flex-row gap-2 fill-primary">
          <p className="hidden sm:block text-base text-gray-400">Built with:</p>
          <div className="flex gap-2">
          <ProjectSkills singleProject={singleProject} />
          </div>
        </div>
        <div className="flex items-end">
          <Link
            href={singleProject.linkLive}
            className="livelink text-sm font-bold sm:text-base text-gray-400 hover:text-primary mr-4"
            target="_blank"
            rel="noreferrer"
          >
            {singleProject.linkName}
          </Link>
          <Link
            href={singleProject.linkGit}
            className="gitlink text-sm font-bold sm:text-base text-gray-400 hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailHeader;
