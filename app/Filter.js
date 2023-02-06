"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useRouterPush from "@/hooks/useRouterPush";

export default function Filter() {
  const techButtons = ["Vue", "JavaScript", "React JS", "HTML5", "CSS3"];
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
      router.push(`/static?`);
    } else {
      router.push(`/static?tag=${tags}`);
    }
  }, [tags]);

  return (
    <>
      {techButtons.map((tech) => (
        <button
          className=" mr-3 bg-primary p-1"
          onClick={() => {
            handleClick(tech);
          }}
          key={tech}
        >
          {tech}
        </button>
      ))}

      <p>{tags}</p>
    </>
  );
}
