import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project({ id, urlName, name, description, mainImage }) {
  return (
    <>
      <Link className="relative" href={`/project/${urlName}`}>
        <div className="grid-image-container rounded-lg overflow-hidden">
          {/* <h1 className="text-xl font-bold">{name}</h1>
          <p>{description}</p> */}
          <Image
            className="rounded-lg grid-image"
            src={mainImage}
            alt={name}
            width={800}
            height={800}
          />

          <div className="grid-overlay absolute rounded-lg ">
            <div className="grid-title text-3xl text-center font-black text-primary p-12">
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
