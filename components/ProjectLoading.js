import React from "react";

export const ProjectLoading = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {[...Array(14).keys()].map((i) => (
          <div
            className="mb-2 mr-2 h-6 w-14 shrink-0 animate-pulse rounded-lg bg-neutral-100 sm:mr-3 md:w-16"
            key={i}
          ></div>
        ))}
      </div>
      <ul className="mt-6 grid gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {[...Array(12).keys()].map((i) => (
          <div className="aspect-square animate-pulse rounded-2xl bg-neutral-100" key={i}></div>
        ))}
      </ul>
    </>
  );
};
