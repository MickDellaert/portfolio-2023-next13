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
        <div className="navbar-wrapper fixed z-20 top-0 left-0 right-0 w-full ">
          <div
            className={`navbar-container flex justify-between items-center h-20 mx-8  ${
              colorChange
                ? "bg-white border-b-2 border-white"
                : "bg-white border-b-2 border-primary"
            }`}
          >
            <div className="logo-container self-end mb-3">
              <div className="logo">
                <Link href="/"
                
                onClick={scrollToTop}>
                  {colorChange ? (
                    <Logo className=" w-9 h-9" />
                  ) : (
                    <Logo className="fill-primary w-9 h-9" />
                  )}
                </Link>
              </div>
            </div>

            <div className="navlinks self-end mb-3 ">
              <Link
                href="#projects"
                className={`${
                  colorChange
                    ? "text-black hover:text-primary"
                    : "text-primary hover:text-black"
                } font-bold mr-6`}
              >
                Projects
              </Link>
              <Link
                href="#about"
                className={`${
                  colorChange
                    ? "text-black hover:text-primary"
                    : "text-primary hover:text-black"
                } font-bold`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
