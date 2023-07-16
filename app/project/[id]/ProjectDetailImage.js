"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import { CldImage } from "next-cloudinary";

function ProjectDetailImage({ singleProject }) {
  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={item}
      className="pics mb-4 mt-6 grid gap-8 sm:mt-8 md:grid-cols-2"
    >
      {singleProject.images.map((image, i) => {
        return (
          <div key={i} className="relative aspect-square">
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
    </motion.div>
  );
}

export default ProjectDetailImage;
