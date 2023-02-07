"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useRouterPush from "@/hooks/useRouterPush";

export default function Filter() {
  const techButtons = [
    "Vue",
    "JavaScript",
    "React JS",
    "Strapi",
    "Tailwind CSS",
  ];
  const [tags, setTags] = useState([]);

  // const {} = useRouterPush(techButtons, tags)

  const router = useRouter();

  const handleClick = (tech) => {
    tags.includes(tech)
      ? setTags(tags.filter((tag) => tag !== tech))
      : setTags((current) => [...current, tech]);
  };

  useEffect(() => {
    if (tags.length === 0) {
      router.push(`/`);
    } else {
      router.push(`/?tag=${tags}`);
    }
  }, [tags]);

  return (
    <>
      <div className="flex justify-start">
        <div className="">
          {techButtons.map((tech) => (
            <button
              className=" mr-3 bg-gray-300 p-1 text-xs"
              onClick={() => {
                handleClick(tech);
              }}
              key={tech}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
