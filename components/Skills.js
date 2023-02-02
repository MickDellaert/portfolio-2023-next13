import useSWR from "swr";
import Loading from "@/app/loading";
import * as ReactIcons from "react-icons/si";

import Image from "next/image";

import { motion } from "framer-motion";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Skills() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  // console.log(data);
  return (
    <>
      <div className="mx-auto mt-32">
        <h2 className="text-4xl font-black text-center mb-6">Skills</h2>

        <div className="flex justify-center flex-wrap w-50 h-50 gap-2">
          {data.skills.map((skill, i) => {
            const HomeSkills = ReactIcons[skill.Icon];
            return <HomeSkills key={i} className="w-12 h-12 fill-gray-400 hover:fill-primary cursor-pointer" />;
          })}
        </div>

        {/* <div className="flex justify-center gap-2 ">
          {data.tech.map((tech) => (
            <Image
              className="fill-blue-500"
              key={tech.id}
              src={tech.url}
              alt={tech.name}
              width={50}
              height={50}
            />
          ))}
        </div> */}

        {/* {skills.map((skill) => {
          const Icon = skill.Icon;
          return (
            <>
              <p>{skill.name}</p>
              <Icon className=" fill-blue-500 w-8 h-8" />
            </>
          );
        })} */}
      </div>
    </>
  );
}

export default Skills;
