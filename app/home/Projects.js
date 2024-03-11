import supabase from "@/utils/supabase";
import { notFound } from "next/navigation";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsList from "./ProjectsList";

const { data: projects } = await supabase
  .from("projects")
  .select(`*, icons("*"), images("*")`)
  .order("id")
  .order("id", { foreignTable: "images", ascending: true })
  .limit(1, { foreignTable: "images" });

const { data: projectsTech } = await supabase.from("skills").select();

export default async function Projects() {

  if (!projects) {
    throw new Error("Failed to fetch data");
  }

  let allTechNames = projectsTech.map((tech) => tech.iconName);
  let uniqueTechNames = [...new Set(allTechNames)];

  return (
    <>
      <div id="projects" className="relative -top-8"></div>
      <ProjectsFilter uniqueTechNames={uniqueTechNames} />
      <ProjectsList projects={projects} />
    </>
  );
}
