// export const revalidate = 0;
// export const dynamic = "force-static";

import { notFound } from "next/navigation"
import supabase from "../../../utils/supabase";

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

  // const { data: test } = await supabase.from("projects").select("urlName");

  // if (!test) {
  //   notFound();
  // }

  const projectFilter = data.filter((project) => id === project.urlName);
  const singleProject = projectFilter[0];

  return (
    <>
      <div className="mx-auto mt-24 mb-16 max-w-screen-2xl px-6 pt-12">
        <ProjectDetailHeader singleProject={singleProject} />
        <ProjectDetailImage singleProject={singleProject} />
        <ProjectDetailBottomNav singleProject={singleProject} data={data} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const { data } = await supabase
    .from("projects")
    .select("urlName")
    .order("id");

  // console.log(testdata);

  return data.map((el) => ({
    id: el.urlName.toString(),
  }));
}
