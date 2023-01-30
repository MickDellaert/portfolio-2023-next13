"use client";
import Loading from "../../loading";
import Link from "next/link";
import useSWR from "swr";
// import Image from "next/image";
import SingleProjectHeader from "@/components/SingleProjectHeader";
import SingleProjectImage from "@/components/SingleProjectImage";
import ProjectDetailBottomNav from "@/components/ProjectDetailBottomNav";
// import CustomLink from "@/components/CustomLink";

// import projectData from "../../json/data.json";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProjectDetail({ params }) {
  console.log(params);
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const projectDetail = data.projects.filter(
    (project) => project.id.toString() === params.id
  );

  const singleProject = projectDetail[0];

  console.log(singleProject);
  // console.log(projectDetail.name);
  console.log(data.projects.length);

  return (
    <>
      <div className="max-w-[80%] mx-auto mt-40 mb-32">
        <SingleProjectHeader singleProject={singleProject} />
        <SingleProjectImage singleProject={singleProject} />

        <div className="project-navbuttons flex justify-between h-16 py-3">
          <ProjectDetailBottomNav singleProject={singleProject} data={data} />
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
