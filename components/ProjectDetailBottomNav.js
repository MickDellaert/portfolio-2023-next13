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

  console.log(previousProject);
  console.log(nextProject);

  return (
    <>
      <Link
        href={`/project/${previousProject}`} scroll={false}
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

// const keys = Object.keys(data);

//   const test = data[keys[1]];

//   // console.log(data)
//   // console.log(singleProject.id)
//   // console.log(data.projects[2 + 1].urlName)
//   // console.log(data.projects[singleProject.id + 1].urlName)

//   // if (singleProject.id > 1) {
//   //   const previousProject = data.projects[singleProject.id - 2].urlName;
//   // }

//   const previousProject = data.projects[singleProject.id - 2].urlName;
//   const nextProject = data.projects[singleProject.id].urlName;

//   console.log(previousProject);
//   console.log(nextProject);

//   return (
//     <>
//       <Link
//         href={`/project/${previousProject}`}
//         className="text-gray-500 hover:text-green-600 font-bold"
//       >
//         {singleProject.id > 1 ? "← Previous" : ""}
//       </Link>
//       <Link
//         href={`/project/${nextProject}`}
//         className="text-gray-500 hover:text-green-600 font-black"
//       >
//         {singleProject.id < data.projects.length ? "Next →" : ""}
//       </Link>
//     </>
//   );
