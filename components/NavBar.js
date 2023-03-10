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
        <div className="navbar-wrapper fixed top-0 left-0 right-0 z-20 w-full ">
          <div
            className={`navbar-container mx-8 flex h-20 items-center justify-between`}
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
                    <Logo className="h-9 w-9 fill-black transition" />
                  )}
                </Link>
              </div>
            </div>

            <div className="navlinks mb-3 self-end ">
              <Link
                href="#projects"
                className={`${
                  colorChange
                    ? "text-black opacity-0 hover:text-black transition"
                    : "text-black hover:text-primary transition"
                } mr-6 font-bold`}
              >
                Projects
              </Link>
              <Link
                href="#about"
                className={`${
                  colorChange
                    ? "text-black opacity-0 hover:text-black"
                    : "text-black hover:text-primary"
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
