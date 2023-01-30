"use client";
import Loading from "../../loading";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";

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
      <div className="max-w-7xl mx-auto">
        <h1>{singleProject.name}</h1>
        <Link
          href={singleProject.linkLive}
          className="livelink text-gray-500 hover:text-green-600 mr-6"
          target="_blank"
          rel="noreferrer"
        >
          {singleProject.linkName}
        </Link>
        <Link
          href={singleProject.linkGit}
          className="gitlink text-gray-500 hover:text-green-600"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </Link>
        <div className="pics grid auto-cols-fr lg:grid-flow-col">
          {singleProject.detailImage.map((detailUrl) => {
            return (
              <>
                <div key={detailUrl}>
                  <Image
                    // layout="responsive"
                    // objectFit="contain"
                    width={1200}
                    height={1200}
                    alt={singleProject.name}
                    src={detailUrl}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="project-navbuttons h-16 py-3">
        <Link
          href={`/project/${singleProject.id - 1}`}
          className="text-gray-500 hover:text-green-600"
        >
          {singleProject.id > 1 ? "Previous" : ""}
        </Link>
        <Link
          href={`/project/${singleProject.id + 1}`}
          className="text-gray-500 hover:text-green-600"
        >
          {singleProject.id < data.projects.length ? "Next" : ""}
        </Link>
      </div>
    </>
  );
}

export default ProjectDetail;
