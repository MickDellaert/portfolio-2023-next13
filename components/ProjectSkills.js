import React from "react";
import * as ReactIcons from "react-icons/si";

function ProjectSkills({ singleProject }) {
  return (
    <>

      {singleProject.Icon.map((skills, i) => {
        const ProjectSkills = ReactIcons[skills];
        return (
            <ProjectSkills key={i} className="w-[24px] h-[24px] fill-gray-400"/>
        );
      })}
    </>
  );
}

export default ProjectSkills;
