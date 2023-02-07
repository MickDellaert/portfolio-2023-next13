// export const revalidate = 0;
export const dynamic = "force-static";

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

  const { data: test } = await supabase.from("projects").select("urlName");

  if (!test) {
    notFound();
  }

  const projectFilter = data.filter((project) => id === project.urlName);
  const singleProject = projectFilter[0];

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
  const { data: testdata } = await supabase
    .from("projects")
    .select("urlName")
    .order("id");

  console.log(testdata);

  return testdata.map((el) => ({
    id: el.urlName.toString(),
  })); 
}
