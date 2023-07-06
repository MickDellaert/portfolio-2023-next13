"use client";

import { useState } from "react";
import useNavigation from "@/hooks/useNavigation";
import { useSearchParams } from "next/navigation";

function TagButtons({ icons }) {
  const searchParams = useSearchParams();
  let activeTags = searchParams.get("filter");

  const [tags, setTags] = useState([]);

  const useNavigate = useNavigation(tags, setTags);

  const handleClick = (tech) => {
    tags.includes(tech)
      ? setTags(tags.filter((tag) => tag !== tech))
      : setTags((current) => [...current, tech]);
  };

  return (
    <>
      <div className="relative z-50 flex items-center justify-start ">
        <div className="">
          {icons.map((icon) => (
            <button
              className={`mr-2 sm:mr-3 mb-2 h-6 rounded-lg py-px px-2 sm:py-1 sm:px-2 text-[0.60rem] sm:text-xs font-bold leading-none md:hover:bg-primary md:hover:text-white 
              ${
                activeTags?.includes(icon)
                  ? "bg-primary text-white" : "bg-gray-300"
              }`}
              onClick={() => {handleClick(icon); }}
              key={icon.id}
            >
              {icon}
            </button>
          ))}
          {tags.length > 0 && (
            <button
              onClick={() => setTags([])}
              className="mr-3 mb-2 h-6 rounded-lg border-2 border-primary py-1 px-2 text-xs font-bold leading-none text-primary md:hover:bg-primary md:hover:text-white"
            >
              Clear
            </button>
          )}
          {/* {tags.length === 0 && (
            <button
              onClick={() => setTags([])}
              className="mr-3 mb-2 h-6 rounded-lg border-2 text-primary border-primary py-1 px-2 text-xs font-bold leading-none hover:bg-primary hover:text-white"
            >
              Show all
            </button>
          )} */}
        </div>
      </div>
    </>
  );
}

export default TagButtons;
