import supabase from "@/utils/supabase";
import React from "react";
import Projects from "./ProjectsState";
import TagButtons from "./TagButtons";
import { notFound } from "next/navigation"

export default async function Tags({ children }) {
  const { data: icons } = await supabase.from("skills").select();

  console.log(icons);

  let iconsArray = icons.map((iconName) => iconName.iconName);
  let uniqueIcons = [...new Set(iconsArray)];
  console.log(uniqueIcons);

  if (!icons) {
    notFound();
  }

  return (
    <>
      <TagButtons icons={uniqueIcons} />
      {/* {children} */}
      {/* <Projects icons={icons}/> */}
    </>
  );
}
