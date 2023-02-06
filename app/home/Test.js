"use client";

import React from "react";
import { useState } from "react";

export default function Test() {
  const [tags, setTags] = useState(["bla"]);

  console.log(tags.length);

  if (Array.isArray(tags) && tags.length > 1) {
    setTags(tags.map((tag) => `tag=${tag}`).join("&"));
    console.log("doe ik iets?");
  } else if (tags.length < 2) {
    console.log("doe ik niets?");
    setTags(`tag=${tags}`);
  }

  // setTags(tags.map((bla) => `tag=${bla}`).join("&"));
  console.log(tags);
  console.log(tags.length);
  console.log(typeof tags);

  return (
    <>
      <div className="mt-[200px]">
        <p>{tags}</p>
        {/* {tags.map((bla) => (
          <p>{`tag=${bla}`}</p>
        ))} */}
        {/* <button onClick={() => setCount(count + 1)}>Count++</button> */}
      </div>
    </>
  );
}
