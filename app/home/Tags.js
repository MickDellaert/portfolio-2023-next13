import supabase from "@/utils/supabase";
import React from "react";
import TagButtons from "./TagButtons";

export default async function Tags() {
  const { data: icons } = await supabase.from("icons").select();

  if (!icons) {
    notFound();
  }

  return (
    <>
      <TagButtons icons={icons} />
    </>
  );
}
