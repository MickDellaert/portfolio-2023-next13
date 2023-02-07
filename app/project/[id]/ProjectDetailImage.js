"use client";

import Image from "next/image";
import React from "react";
import { CldImage } from "next-cloudinary";

function ProjectDetailImage({ singleProject }) {
  return (
    <div className="pics mt-6 mb-4 grid auto-cols-fr gap-8 lg:grid-flow-col">
      {singleProject.images.slice(1, 3).map((image, i) => {
        return (
          <div key={i}>
            <CldImage
              className="rounded-2xl"
              key={singleProject.id}
              width={800}
              height={800}
              alt={image.name}
              src={image.url}
              // priority={true}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectDetailImage;
