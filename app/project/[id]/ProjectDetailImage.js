import Image from "next/image";
import React from "react";

function ProjectDetailImage({ singleProject }) {
  return (
    <div className="pics mt-6 mb-4 grid auto-cols-fr gap-8 lg:grid-flow-col">
      {singleProject.detailImage.map((detailUrl, i) => {
        return (
          <div key={i}>
            <Image
              className="rounded-2xl"
              key={singleProject.id}
              width={1200}
              height={1200}
              alt={singleProject.name}
              src={detailUrl}
              // priority={true}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectDetailImage;
