import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project({ id, urlName, name, description, mainImage }) {
  return (
    <>
      <Link className="" href={`/project/${urlName}` } >
        <div className="bg-green-200 rounded-lg overflow-hidden">
          {/* <h1 className="text-xl font-bold">{name}</h1>
          <p>{description}</p> */}
          <Image className="rounded-lg" src={mainImage} alt={name} width={800} height={800} />
        </div>
      </Link>
    </>
  );
}

export default Project;
