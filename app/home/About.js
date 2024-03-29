"use client";

import Image from "next/image";
import portret from "../../public/portret/portret-gray-23.jpg";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const item = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <>
      <div id="about" className="relative top-36"></div>

      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={item}
        className="about-container mx-6 mb-12 mt-40 rounded-2xl bg-neutral-100 py-12 md:py-20"
      >
 
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 px-6 md:grid-cols-8 md:px-12">
          <div className="about-text md:col-span-8 xl:col-span-5 xl:row-span-2 2xl:col-span-5">
            <h2 className="header-title mb-4 text-4xl font-bold leading-normal text-primary">About Me</h2>
            <p className="text-lg leading-normal">
              Hi, I&apos;m Mick, an experienced graphic designer, dtp-operator, and aspiring web developer
              from Antwerp. Thanks for stopping by, I hope you enjoy having a look around on my portfolio website.
              <br></br>
              <br></br>
              Here you can find some of the projects made recently with new skills I gained during a
              seven-month full-time Junior Web Developer training at BeCode Antwerp, a graduation project at
              HackYourFuture Antwerp and my first internship at Webit. They represent the first steps I have been taking
              in my ambition of becoming a full stack developer with an emphasis on front-end. More projects can be
              found on my{" "}
              <a href="https://github.com/MickDellaert" target="_blank" rel="noreferrer" className="font-bold">
                Github
              </a>{" "}
              profile.
              <br></br>
              <br></br>
              Up until now I have been working in the graphic design industry, mainly for printed output. During my{" "}
              <a
                href="https://www.linkedin.com/in/mick-dellaert"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                career
              </a>{" "}
              I have worked on a broad range of projects: making layouts for books, magazines, advertisements, and
              newspapers; designing packaging, POS materials, logos, exhibition stands, interactive magazines, websites,
              and illustrations.
              <br></br>
              <br></br>
              Currently, I would love to add a more dynamic and interactive dimension to my skills and enter the world
              of web development with its endless possibilities and exciting prospects. At the moment I am actively
              looking for a job or an internship, hoping to contribute and complete my new knowledge in a fresh position
              and continue my journey. If I sparked your interest, don&apos;t hesitate to{" "}
              <a href="mailto: mickdellaert@yahoo.com" className="font-bold">
                contact
              </a>{" "}
              me.
            </p>
          </div>
          <div className="portrait mt-6 md:col-span-3 md:mt-6 xl:col-span-2 xl:col-start-7 xl:mt-0 2xl:col-span-2 2xl:col-start-7">
            <Image
              src={portret}
              alt={"mick"}
              width={800}
              height={800}
              className={"image rounded-2xl"}
              placeholder="blur"
            />
          </div>
          <div className="contact my-6 self-end text-xl font-bold text-primary md:col-span-4 md:mb-0 xl:col-span-2 xl:col-start-7 2xl:col-span-2 2xl:col-start-7">
            <h1 className="mb-4 text-4xl leading-normal text-primary">Contact</h1>
            <a
              className="contact-link leading-relaxed hover:text-primary"
              href="https://www.linkedin.com/in/mick-dellaert"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="contact-link block leading-relaxed hover:text-primary"
              href="https://github.com/MickDellaert"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a className="contact-link block leading-relaxed hover:text-primary" href="tel: +32488244705">
              0488 244 705
            </a>

            <a className="contact-link leading-relaxed hover:text-primary" href="mailto: mickdellaert@yahoo.com">
              mickdellaert@gmail.com
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
