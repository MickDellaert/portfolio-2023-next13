"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { useState, Fragment } from "react";

const Navbar = () => {
  // const router = useRouter();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <nav id="home">
        <div className="navbar-wrapper fixed left-0 right-0 top-0 z-20 w-full ">
          {/* <div className={`navbar-container mx-6 flex h-20 items-center justify-between`}> */}
          <div
            className={`${
              colorChange
                ? "mx-6 flex h-20 items-center justify-between opacity-0 transition-all "
                : "mx-6 flex h-20 items-center justify-between opacity-100 transition-all"
            } mr-3 sm:mr-6`}
          >
            {/* ${
              colorChange
                ? "border-b-2 border-white bg-white"
                : "border-b-2 border-primary bg-white"
            } */}
            <div className="logo-container mb-3 self-end">
              <div className="logo">
                <Link href="/" onClick={scrollToTop}>
                  {colorChange ? (
                    <Logo className=" h-9 w-9 opacity-0 transition" />
                  ) : (
                    <Logo className="h-9 w-9 fill-neutral-950 transition" />
                  )}
                </Link>
              </div>
            </div>

            <div className="navlinks mb-3 self-end font-semibold">
              <Link
                href="/#projects"
                scroll={false}
                className="relative mr-3 inline-block text-base font-semibold text-neutral-950 transition-all duration-100 before:absolute
                before:left-[0%] before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0 before:bg-primary before:transition-all
                before:duration-[400ms] before:ease-out  hover:text-primary hover:before:scale-x-100 hover:after:hidden sm:mr-8 sm:text-lg"
              >
                Projects
              </Link>
              <Link
                href="/#skills"
                scroll={false}
                className="relative mr-3 inline-block text-base font-semibold text-neutral-950 transition-all duration-100 before:absolute
                before:left-[0%] before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0 before:bg-primary before:transition-all
                before:duration-[400ms] before:ease-out  hover:text-primary hover:before:scale-x-100 hover:after:hidden sm:mr-8 sm:text-lg"
              >
                Skills
              </Link>

              <Link
                href="/#about"
                scroll={false}
                className="relative inline-block text-base font-semibold text-neutral-950 transition-all duration-100 before:absolute before:left-[0%]
                before:top-full before:block before:h-0.5 before:w-[100%] before:scale-x-0 before:bg-primary before:transition-all before:duration-[400ms]
                before:ease-out hover:text-primary  hover:before:scale-x-100 hover:after:hidden sm:text-lg"
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
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
