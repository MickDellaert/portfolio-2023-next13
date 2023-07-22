"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["web", "creative", "front-end", "skilled", "full stack", "dedicated"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

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

  const item = {
    hidden: { opacity: 0, y: -70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // ease: "easeIn",
        delay: 0.2,
        duration: 0.65,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        className={`mt-36 flex h-[35vh] flex-col sm:mt-48 sm:h-[45vh] shortandwide:mt-32 shortandwide:h-[52vh] very-short:mt-20`}
        style={{
          transform: `translateY(${offset * 0.2}px)`,
        }}
      >
        <h1
          className={`header-title text-clamp-mobile font-[680] leading-snug text-neutral-950 sm:text-clamp very-short:text-clamp-very-short`}
        >
          Hello, I&apos;m <span className="text-primary">Mick Dellaert</span>, <br className={`hidden sm:block`} />
          <span className="whitespace-nowrap">a graphic designer </span>on{" "}
          <span className="sm:whitespace-nowrap"> a journey </span> <br className={`hidden sm:block`} />
          <span className="whitespace-nowrap">of becoming </span>{" "}
          <span>
            a
            <span className="whitespace-nowrap text-primary">
              {" "}
              <TextTransition springConfig={presets.gentle} inline>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>{" "}
              developer
            </span>
          </span>
          .
        </h1>

        <h1 className=" mb-10 animate-bounce text-clamp-mobile font-bold leading-snug text-primary sm:text-clamp">↓</h1>
      </motion.div>
    </>
  );
};

export default Hero;
