"use client";
import Loading from "../../loading";
import Link from "next/link";
import useSWR from "swr";
// import Image from "next/image";
import SingleProjectHeader from "@/components/project-detail/ProjectDetailHeader";
import SingleProjectImage from "@/components/project-detail/ProjectDetailImage";
import ProjectDetailBottomNav from "@/components/project-detail/ProjectDetailBottomNav";

import jsonData from "../../../json/data.json"

// import CustomLink from "@/components/CustomLink";

// import projectData from "../../json/data.json";

// const fetcher = (url) => fetch(url).then((res) => res.json());

function ProjectDetail({ params }) {
  // console.log(params);
  // const { data, error } = useSWR("/api/staticdata", fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <Loading />;

  const projectDetail = jsonData.projects.filter(
    (project) => project.urlName.toString() === params.id
  );

  const singleProject = projectDetail[0];

  return (
    <>
      <div className="mx-auto mt-40 mb-16 max-w-screen-2xl px-8">
        <SingleProjectHeader singleProject={singleProject} />
        <SingleProjectImage singleProject={singleProject} />

        <div className="project-navbuttons flex justify-between">
          <ProjectDetailBottomNav singleProject={singleProject} data={jsonData} />
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
