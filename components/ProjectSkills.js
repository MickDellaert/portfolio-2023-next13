import React from "react";
import * as ReactIcons from "react-icons/si";

function ProjectSkills({ singleProject }) {
  return (
    <>

      {singleProject.Icon.map((skills) => {
        const ProjectSkills = ReactIcons[skills];
        return (
          <>
            <ProjectSkills className="w-[24px] h-[24px] fill-gray-400"/>
          </>
        );
      })}
    </>
  );
}

export default ProjectSkills;
