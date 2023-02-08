import supabase from "@/utils/supabase";
import React from "react";
import Projects from "./ProjectsState";
import TagButtons from "./TagButtons";

export default async function Tags({children}) {
  const { data: icons } = await supabase.from("icons").select();

  if (!icons) {
    notFound();
  }

  return (
    <>
      <TagButtons icons={icons} />
      {/* {children} */}
      {/* <Projects icons={icons}/> */}
    </>
  );
}
