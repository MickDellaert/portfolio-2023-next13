"use client";

import { Manrope } from "@next/font/google";
const mainFont = Manrope({ subsets: ["latin"] });

import { useEffect, useState } from "react";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      // className="hero relative grid grid-cols-8 bg-white mx-6 md:mx-16 2xl:mx-40 my-8 md:my-20 lg:my-28 xl:mt-32 xl:mb-16 2xl:mt-44 2xl:mb-28"
      className="mb-16 flex grow flex-col "
      style={{
        transform: `translateY(${offset * 0.2}px)`,
      }}
    >
      <h1
        className={`header-title mt-24 text-[7vmin] font-bold leading-snug sm:text-[6.2vmin] xl:mr-[10vw] 2xl:mr-[18vw]`}
      >
        Hello! I&apos;m{" "}
        <span className="span-green text-primary">Mick Dellaert</span>,{" "}
        <span className="whitespace-nowrap"> an experienced </span>{" "}
        <span className="span-grey">graphic designer</span>{" "}
        <span className="span-nowrap">
          and <span className="span-grey">dtp-operator</span>,{" "}
        </span>{" "}
        <span className="span-nowrap">currently </span>{" "}
        <span className="whitespace-nowrap">
          on a{" "}
          <span className="span-green underlined text-primary">journey</span>{" "}
        </span>{" "}
        <span className="span-nowrap">of becoming </span>{" "}
        <span className="span-nowrap whitespace-nowrap">
          a{" "}
          <span className="span-green whitespace-nowrap text-primary">
            web developer
          </span>
          .
        </span>
      </h1>
      <h1 className=" animate-bounce text-[6.2vmin] font-bold text-primary">
        ↓
      </h1>

      {/* <h2 className="text-[1.6vw] mt-8 mr-40 ">Here you can have a look at some of the projects I have been working on during my journey of becoming a web-developer</h2> */}
    </div>
  );
};

export default Hero;
