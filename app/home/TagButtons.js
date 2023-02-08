"use client";

import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import useNavigation from "@/hooks/useNavigation";

function TagButtons({ icons }) {
  const [tags, setTags] = useState([]);

  const useNavigate = useNavigation(tags, setTags);

  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const router = useRouter();
  // const testTag = searchParams.get("tag");

  let iconNames = icons.map((icon) => icon.iconName);

  console.log(iconNames);
  console.log(tags);

  const handleClick = (tech) => {
    tags.includes(tech)
      ? setTags(tags.filter((tag) => tag !== tech))
      : setTags((current) => [...current, tech]);
  };

  // useEffect(() => {
  //   router.push(`/?tag=${tags}`);

  //   console.log(tags);

  //   if (tags.length === 0) {
  //     router.push(`/`);
  //   }
  // }, [tags]);

  // useEffect(() => {
  //   if (testTag) {
  //     router.push(`/?tag=${testTag}`);
  //   }

  //   if (!testTag) {
  //     setTags([]);
  //   }
  // }, [pathname, searchParams]);

  return (
    <>
      <div className="flex justify-start">
        <div className="">
          {iconNames.map((icon) => (
            <button
              className={`mr-3 mb-2 rounded-lg py-1 px-2 text-[12px] hover:bg-primary ${
                tags.includes(icon) ? "bg-primary" : "bg-gray-300"
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
