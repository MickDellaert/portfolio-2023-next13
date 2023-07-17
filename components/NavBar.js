"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect, useRef, Fragment } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      // transition: {
      //   ease: "easeIn",
      //   delay: 1,
      //   duration: 1
      // },
    },
  };

  return (
    <Fragment>
      <nav id="home">
        <motion.div
          initial="hidden"
          animate={hidden ? "hidden" : "visible"}
          variants={item}
          className="navbar-wrapper fixed left-0 right-0 top-0 z-20 w-full "
        >
          <div className={`navbar-container mx-6 flex h-16 sm:h-20 items-center justify-between`}>
            <div className="logo-container mb-3 self-end">
              <div className="logo ">
                <Link href="/" onClick={scrollToTop}>
                  <Logo className="h-8 w-8 sm:h-9 sm:w-9 fill-neutral-950 transition" />
                </Link>
              </div>
            </div>

            <div className="navlinks mb-3 self-end text-base font-[650] sm:text-lg">
              <Link
                href="/#projects"
                scroll={false}
                className="relative mr-3 inline-block font-semibold text-neutral-950 transition-all duration-100 before:absolute
                before:left-[0%] before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0 before:bg-primary before:transition-all
                before:duration-[400ms] before:ease-out  hover:text-primary hover:before:scale-x-100 hover:after:hidden sm:mr-8"
              >
                Projects
              </Link>
              <Link
                href="/#skills"
                scroll={false}
                className="relative mr-3 inline-block font-semibold text-neutral-950 transition-all duration-100 before:absolute
                before:left-[0%] before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0 before:bg-primary before:transition-all
                before:duration-[400ms] before:ease-out  hover:text-primary hover:before:scale-x-100 hover:after:hidden sm:mr-8"
              >
                Skills
              </Link>

              <Link
                href="/#about"
                scroll={false}
                className="relative inline-block font-semibold text-neutral-950 transition-all duration-100 before:absolute before:left-[0%]
                before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0 before:bg-primary before:transition-all before:duration-[400ms]
                before:ease-out hover:text-primary  hover:before:scale-x-100 hover:after:hidden"
              >
                About
              </Link>
            </div>
            {/* <div className="navlinks mb-3 self-end font-semibold">
              <Link
                href="/#projects"
                scroll={false}
                className={`${
                  colorChange
                    ? "text-neutral-950 opacity-0 transition hover:text-neutral-950"
                    : "text-neutral-950 transition hover:text-primary"
                } mr-3 sm:mr-6`}
              >
                Projects
              </Link>
              <Link
                href="/#skills"
                scroll={false}
                className={`${
                  colorChange
                    ? "text-neutral-950 opacity-0 transition hover:text-neutral-950"
                    : "text-neutral-950 transition hover:text-primary"
                } mr-3 sm:mr-6`}
              >
                Skills
              </Link>

              <Link
                href="/#about"
                scroll={false}
                className={`${
                  colorChange
                    ? "text-neutral-950 opacity-0 hover:text-neutral-950"
                    : "text-neutral-950 hover:text-primary"
                }`}
              >
                About
              </Link>
            </div> */}
          </div>
        </motion.div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
