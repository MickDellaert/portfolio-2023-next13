import skillIcons from "@/utils/skillIcons";
import { Tooltip } from "@/components/Tooltip";

function ProjectSkills({ singleProject }) {
  return (
    <>
      {singleProject.icons.map((skills, i) => {
        const ProjectSkills = skillIcons[skills.iconCode];
        return (
          <Tooltip key={i} tooltip={skills.iconName} tipDirection={"top right"}>
            <ProjectSkills className="h-6 w-6 fill-neutral-400 hover:fill-primary" />
          </Tooltip>
        );
      })}
    </>
  );
}

export default ProjectSkills;
