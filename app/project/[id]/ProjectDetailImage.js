"use client";

import Image from "next/image";
import React from "react";
// import { CldImage } from "next-cloudinary";

function ProjectDetailImage({ singleProject }) {
  return (
    <div className="pics mt-6 mb-4 grid gap-8 md:grid-cols-2">
      {singleProject.images.map((image, i) => {
        return (
            <div key={i} className= "relative aspect-square">
              <Image
                className="rounded-2xl"
                key={singleProject.id}
                // width={1000}
                // height={1000}
                fill={true}
                sizes="(max-width: 767px) 100vw, 50vw"
                priority={true}
                alt={image.name}
                src={image.url}
              />
            </div>
        );
      })}
    </div>
  );
}

export default ProjectDetailImage;
