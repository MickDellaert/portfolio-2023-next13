"use client";

import React from "react";
import { useState } from "react";
import useNavigation from "@/hooks/useNavigation";
import { useSearchParams } from "next/navigation";

function TagButtons({ icons }) {
  const [tags, setTags] = useState([]);

  const useNavigate = useNavigation(tags, setTags);

  const searchParams = useSearchParams();
  const activeTags = searchParams.get("tag");

  // const iconTest = [
  //   { iconName: "JavaScript", clicked: false },
  //   { iconName: "Strapi", clicked: false },
  //   { iconName: "React JS", clicked: false },
  // ];

  const handleClick = (tech) => {
    const singleIcon = tech.iconName;

    tags.includes(singleIcon)
      ? setTags(tags.filter((tag) => tag !== singleIcon))
      : setTags((current) => [...current, singleIcon]);
  };

  
  return (
    <>
      <div className="flex justify-start">
        <div className="">
          {icons.map((icon) => (
            <button
              className={`mr-3 mb-2 rounded-lg py-1 px-2 text-[12px] hover:bg-primary ${
                activeTags?.includes(icon.iconName) ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => {
                handleClick(icon);
              }}
              key={icon.id}
            >
              {icon.iconName}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default TagButtons;
