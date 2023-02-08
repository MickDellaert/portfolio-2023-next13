"use client";

import supabase from "@/utils/supabase";
import Project from "./Project";
import TagButtons from "./TagButtons";
import Tags from "./Tags";
import { useState } from "react";

export default function Projects() {
  const [tags, setTags] = useState([]);

  return (
    <>
      <TagButtons tags={tags} setTags={setTags} />
      <Project tags={tags} setTags={setTags} />

      <p>projects</p>
    </>
  );
}
