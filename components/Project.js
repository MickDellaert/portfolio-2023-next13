import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project({ id, name, description, mainImage }) {
  return (
    <>
      <Link className="bg-green-400" href={`/project/${id}`}>
        <div className="bg-green-200 rounded-lg">
          <h1 className="text-xl font-bold">{name}</h1>
          <p>{description}</p>
          <Image src={mainImage} alt={name} width={400} height={400} />
        </div>
      </Link>
    </>
  );
}

export default Project;
