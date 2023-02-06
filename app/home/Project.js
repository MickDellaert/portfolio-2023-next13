"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CldImage } from "next-cloudinary";


function Project({ id, urlName, name, description, mainImage }) {
  return (
    <>
      <Link className="relative" href={`/project/${urlName}`}>
        <div className="grid-image-container overflow-hidden rounded-2xl">
          {/* <h1 className="text-xl font-bold">{name}</h1>
          <p>{description}</p> */}
          <CldImage
            className="grid-image rounded-xl"
            src={mainImage}
            alt={name}
            width={800}
            height={800}
          />

          <div className="grid-overlay rounded-2xl ">
            <div className="grid-title p-8 text-center text-3xl font-black text-primary">
              <h2 className="mb-4">{name}</h2>
              <p className="text-base font-bold text-black underline decoration-2 underline-offset-2">
                Find out more
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Project;
