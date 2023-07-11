import supabase from "@/utils/supabase";
import { notFound } from "next/navigation";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsList from "./ProjectsList";

const { data: projects } = await supabase
  .from("projects")
  .select(`*, icons("*"), images("*")`)
  .order("id");

const { data: projectsTech } = await supabase.from("skills").select();

if (!projects) {
  notFound();
}

let allTechNames = projectsTech.map((tech) => tech.iconName);
let uniqueTechNames = [...new Set(allTechNames)];

// console.log(projects)
console.log(projects[9].images);
// console.log(allTechNames);
// console.log(uniqueTechNames);

export default async function Projects() {
  return (
    <>
      <div id="projects" className="relative -top-8"></div>
      <ProjectsFilter uniqueTechNames={uniqueTechNames} />
      <ProjectsList projects={projects} />
    </>
  );
}
