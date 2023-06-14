import React from "react";
import * as ReactIcons from "react-icons/si";

function ProjectSkills({ singleProject }) {

  // console.log(singleProject.icons)
  return (
    <>
      {singleProject.icons.map((skills, i) => {
        const ProjectSkills = ReactIcons[skills.iconCode];
        return (
          <ProjectSkills key={i} className="h-[24px] w-[24px] fill-gray-400" />
        );
      })}

    </>
  );
}

export default ProjectSkills;
