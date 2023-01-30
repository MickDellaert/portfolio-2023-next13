import Link from "next/link";
function ProjectDetailBottomNav({ singleProject, data }) {
  return (
    <>
      <Link
        href={`/project/${singleProject.id - 1}`}
        className="text-gray-500 hover:text-green-600"
      >
        {singleProject.id > 1 ? "Previous" : ""}
      </Link>
      <Link
        href={`/project/${singleProject.id + 1}`}
        className="text-gray-500 hover:text-green-600"
      >
        {singleProject.id < data.projects.length ? "Next" : ""}
      </Link>
    </>
  );
}

export default ProjectDetailBottomNav;
