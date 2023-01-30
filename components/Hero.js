import { useEffect, useState } from "react";

import { DM_Sans } from "@next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });


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
      className="flex flex-col mb-4 h-[60vh] sm:h-[74vh]"

      style={{
        transform: `translateY(${offset * 0.2}px)`,
      }}
    >
      {/* <h1 className="header-title col-span-8 2xl:col-start-2 2xl:col-span-7 text-4xl leading-snug md:text-5xl md:leading-snug 2xl:text-6xl 2xl:leading-snug"> */}
      <h1 className={`header-title leading-snug  text-[6.2vmin] mr-[12vw] sm:mr-[0vw] 2xl:mr-[16vw]  mt-44 `}>

        Hello! I'm <span className="span-green text-emerald-600">Mick Dellaert</span>,{" "}
        <span className=""> an experienced </span>{" "}
        <span className="span-grey">graphic designer</span>{" "}
        <span className="span-nowrap">
          and <span className="span-grey">dtp-operator</span>,{" "}
        </span>{" "}
        <span className="span-nowrap">currently </span>{" "}
        <span className="">
          on a <span className="span-green text-emerald-600">journey</span>{" "}
        </span>{" "}
        <span className="span-nowrap">of becoming </span>{" "}
        <span className="span-nowrap">
          a <span className="span-green text-emerald-600 whitespace-nowrap">web developer</span>.
        </span>
      </h1>
      <h1 className=" text-[6.2vmin] font-bold text-emerald-600 animate-bounce">↓</h1>

      {/* <h2 className="text-[1.6vw] mt-8 mr-40 ">Here you can have a look at some of the projects I have been working on during my journey of becoming a web-developer</h2> */}
    </div>
  );
};

export default Hero;