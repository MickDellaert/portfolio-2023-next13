import skillIcons from "@/components/skillIcons";

function ProjectSkills({ singleProject }) {
  return (
    <>
      {singleProject.icons.map((skills, i) => {
        const ProjectSkills = skillIcons[skills.iconCode];
        return (
          <ProjectSkills key={i} className="h-[24px] w-[24px] fill-neutral-500 hover:fill-primary" />
        );
      })}
    </>
  );
}

export default ProjectSkills;
