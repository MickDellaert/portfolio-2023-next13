"use client";
import Loading from "../../loading";
import Link from "next/link";
import useSWR from "swr";
// import Image from "next/image";
import SingleProjectHeader from "@/components/project-detail/ProjectDetailHeader";
import SingleProjectImage from "@/components/project-detail/ProjectDetailImage";
import ProjectDetailBottomNav from "@/components/project-detail/ProjectDetailBottomNav";

import jsonData from "../../../json/data.json";

// import projectData from "../../json/data.json";

const fetcher = (url) => fetch(url).then((res) => res.json());

export async function generateStaticParams() {
  const { data } = useSWR("/api/staticdata", fetcher);

  return data.projects.map((project) => {
    project: toString(project.urlName);
  });
}

function ProjectDetail({ params }) {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const projectDetail = data.projects.filter(
    (project) => project.urlName.toString() === params.id
  );

  const singleProject = projectDetail[0];

  return (
    <>
      <div className="mx-auto mt-40 mb-16 max-w-screen-2xl px-8">
        <SingleProjectHeader singleProject={singleProject} />
        <SingleProjectImage singleProject={singleProject} />
        <ProjectDetailBottomNav singleProject={singleProject} data={jsonData} />
      </div>
    </>
  );
}

export default ProjectDetail;
