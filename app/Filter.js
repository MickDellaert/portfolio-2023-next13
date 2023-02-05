"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Filter() {
  const router = useRouter();

  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (tags.length === 0) {
      router.push(`/static?`);
    } else {
      router.push(`/static?tag=${tags}`);
    }
  }, [tags]);

  const techButtons = ["Vue", "JavaScript", "React JS", "HTML5", "CSS3"];

  const handleClick = (val) => {
    tags.includes(val)
      ? setTags(tags.filter((tag) => tag !== val))
      : setTags((current) => [...current, val]);
  };

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
