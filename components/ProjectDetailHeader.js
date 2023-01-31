import Link from "next/link";

function ProjectDetailHeader({singleProject}) {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">{singleProject.name}</h2>
      <p className="text-xl mb-6">{singleProject.description}</p>
      <Link 
        href={singleProject.linkLive}
        className="livelink text-lg font-bold text-gray-500 hover:text-green-600 mr-6"
        target="_blank"
        rel="noreferrer"
      >
        {singleProject.linkName}
      </Link>
      <Link
        href={singleProject.linkGit}
        className="gitlink text-lg font-bold text-gray-500 hover:text-green-600"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </Link>
    </>
  );
}

export default ProjectDetailHeader;
