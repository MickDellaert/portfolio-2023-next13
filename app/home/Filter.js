"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useRouterPush from "@/hooks/useRouterPush";

export default function Filter() {
  const techButtons = ["Vue", "JavaScript", "React JS", "Strapi", "Tailwind CSS"];
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
      router.push(`/`, { shallow: true });
    } else {
      router.push(`/?tag=${tags}`, { shallow: true });
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