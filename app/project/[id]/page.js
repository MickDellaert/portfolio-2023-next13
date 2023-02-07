export const revalidate = 0;

import supabase from "../../../utils/supabase";
import { notFound } from "next/navigation";

// import Loading from "../../loading";

import ProjectDetailHeader from "./ProjectDetailHeader";
import ProjectDetailImage from "./ProjectDetailImage";
import ProjectDetailBottomNav from "./ProjectDetailBottomNav";

export default async function ProjectDetail({ params: { id } }) {
  const { data } = await supabase
    .from("projects")
    .select(`*, icons(*), images(*)`)
    .order("id");

  // .match({ urlName: id })
  // .single();

  if (!data) {
    notFound();
  }

  // console.log(id)

  const projectFilter = data.filter((project) => id === project.urlName);
  const singleProject = projectFilter[0];

  // console.log(projectFilter);
  // console.log(singleProject);

  return (
    <>
      <pre className="mt-[100px] text-sm">
        {/* {JSON.stringify(singleProject, null, 2)} */}
      </pre>

      <div className="mx-auto mt-40 mb-16 max-w-screen-2xl px-8">
        <ProjectDetailHeader singleProject={singleProject} />
        <ProjectDetailImage singleProject={singleProject} />
        <ProjectDetailBottomNav singleProject={singleProject} data={data} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const { data: projects } = await supabase
    .from("projects")
    .select("id")
    .order("id");
  return projects?.map((id) => ({
    id: id.id.toString(),
  }));
}
