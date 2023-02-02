import Link from "next/link";
import ProjectSkills from "./ProjectSkills";

function ProjectDetailHeader({ singleProject }) {
  return (
    <>
      <div className="mr-[30vw] mb-8">
        <h2 className="text-4xl font-bold mb-4">{singleProject.name}</h2>
        <p className="text-lg">{singleProject.description}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 fill-primary">
          <p className="text-gray-400">Built with:</p>
          <ProjectSkills singleProject={singleProject} />
        </div>
        <div>
          <Link
            href={singleProject.linkLive}
            className="livelink text-regular font-bold text-gray-400 hover:text-primary mr-4"
            target="_blank"
            rel="noreferrer"
          >
            {singleProject.linkName}
          </Link>
          <Link
            href={singleProject.linkGit}
            className="gitlink text-regular font-bold text-gray-400 hover:text-primary"
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
