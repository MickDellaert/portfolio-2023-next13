import Link from "next/link";

function SingleProjectHeader({singleProject}) {
  return (
    <>
      <h1>{singleProject.name}</h1>
      <Link
        href={singleProject.linkLive}
        className="livelink text-gray-500 hover:text-green-600 mr-6"
        target="_blank"
        rel="noreferrer"
      >
        {singleProject.linkName}
      </Link>
      <Link
        href={singleProject.linkGit}
        className="gitlink text-gray-500 hover:text-green-600"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </Link>
    </>
  );
}

export default SingleProjectHeader;
