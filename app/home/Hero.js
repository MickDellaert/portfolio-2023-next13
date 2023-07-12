"use client";

// import { Archivo } from "next/font/google";
// const mainFont = Archivo({ subsets: ["latin"] });

// import { Red_Hat_Display } from "next/font/google";
// const mainFont = Red_Hat_Display({ subsets: ["latin"] });

// import useWindowSize from "use-window-size-v2";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const TEXTS = [
  "web",
  "creative",
  "front-end",
  "skilled",
  "full stack",
  "dedicated",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  // const { width, height } = useWindowSize(10); // wait 100ms for the resize events
  // const { width, height } = useWindowDimensions();

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

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
    <>
      <div
        className={`mt-48 flex h-[35vh] flex-col sm:h-[45vh] very-short:mt-20 short:mt-32 short:h-[52vh]`}
        style={{
          transform: `translateY(${offset * 0.2}px)`,
        }}
      >
        <h1
          className={`header-title text-neutral-950 text-clamp-mobile font-bold leading-snug sm:text-clamp very-short:text-clamp-very-short`}
        >
          Hello, I&apos;m <span className="text-primary">Mick Dellaert</span>,{" "}
          <br className={`hidden sm:block`} />
          <span className="whitespace-nowrap">a graphic designer </span>on{" "}
          <span className="sm:whitespace-nowrap"> a journey </span>{" "}
          <br className={`hidden sm:block`} />
          <span className="whitespace-nowrap">of becoming </span>{" "}
          <span>
            a
            <span className="whitespace-nowrap text-primary">
              {" "}
              <TextTransition springConfig={presets.wobbly} delay={0} inline>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>{" "}
              developer
            </span>
          </span>
          .
        </h1>

        <h1 className=" mb-10 animate-bounce text-clamp-mobile font-bold leading-snug text-primary sm:text-clamp">
          ↓
        </h1>

        {/* <h2 className="mt-8 mb-8 text-base leading-normal sm:w-4/6 md:text-[1.3vw]">
        Here you can have a look at some of the projects I have been working on
        during my journey of becoming a web-developer
      </h2> */}
      </div>
    </>
  );
};

export default Hero;
