"use client";

import React from "react";
import { useState } from "react";
import useNavigation from "@/hooks/useNavigation";
import { useSearchParams } from "next/navigation";

function TagButtons({ icons }) {
  const searchParams = useSearchParams();
  const activeTags = searchParams.get("tag");

  const [tags, setTags] = useState([]);

  const useNavigate = useNavigation(tags, setTags);

  // const iconTest = [
  //   { iconName: "JavaScript", clicked: false },
  //   { iconName: "Strapi", clicked: false },
  //   { iconName: "React JS", clicked: false },
  // ];

  console.log(tags)

  const handleClick = (tech) => {
    const singleIcon = tech.iconName;

    tags.includes(tech)
      ? setTags(tags.filter((tag) => tag !== tech))
      : setTags((current) => [...current, tech]);
  };

  return (
    <>
      <div className="flex items-center justify-start">
        {tags.length > 0 && <button onClick={() => setTags([])} className="mr-3 mb-2 rounded-lg py-1 px-2 text-[12px] border-primary border-2 hover:bg-primary">Clear</button>}

        <div className="">
          {icons.map((icon) => (
            <button
              className={`mr-3 mb-2 rounded-lg py-1 px-2 text-[12px] hover:bg-primary ${
                activeTags?.includes(icon) ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => {
                handleClick(icon);
              }}
              key={icon.id}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default TagButtons;
