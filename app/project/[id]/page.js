// export const revalidate = 0;
// export const dynamic = "force-static";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import supabase from "../../../utils/supabase";

// import Loading from "../../loading";

import ProjectDetailHeader from "./ProjectDetailHeader";
import ProjectDetailImage from "./ProjectDetailImage";
import ProjectDetailBottomNav from "./ProjectDetailBottomNav";

export const metadata = {
  title: "Mick's projects"
}

export default async function ProjectDetail({ params: { id } }) {
   
  const { data } = await supabase
    .from("projects")
    .select(`urlName`)
    .order("id");

  const { data: singleData } = await supabase
    .from("projects")
    .select(`*, icons(*), images(*)`)
    .order("id")
    .order("id", { foreignTable: "images", ascending: true })
    .range(1, 2, { foreignTable: "images" })
    .match({ urlName: id })
    .single();

  console.log(singleData);

  // .match({ urlName: id })
  // .single();

  if (!data || !singleData) {
    notFound();
  }

  // const { data: test } = await supabase.from("projects").select("urlName");

  // if (!test) {
  //   notFound();
  // }

  // const projectFilter = data.filter((project) => id === project.urlName);
  // const singleProject = projectFilter[0];

  return (
    <>
      <div className="mx-auto mb-16 mt-24 max-w-screen-2xl px-6 pt-12">
        <ProjectDetailHeader singleProject={singleData} />
        <ProjectDetailImage singleProject={singleData} />
        <ProjectDetailBottomNav singleProject={singleData} data={data} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const { data } = await supabase
    .from("projects")
    .select("urlName")
    .order("id");

  return data.map((el) => ({
    id: el.urlName.toString(),
  }));
}
