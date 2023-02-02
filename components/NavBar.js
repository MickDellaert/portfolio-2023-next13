"use client";

import Image from "next/image";
import Link from "next/link";
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
        <div className="navbar-wrapper fixed z-20 top-0 left-0 right-0 w-full  bg-white">
          <div
            className={`navbar-container flex justify-between items-center h-20 mx-8  ${
              colorChange
                ? "bg-white border-b-2 border-white"
                : "bg-white border-b-2 border-primary"
            }`}
          >
            <div className="logo-container self-end mb-3">
              <div className="logo">
                <Link href="#home">
                  <Image
                    className=""
                    src={
                      colorChange
                        ? "/MD_logo/MD_logo_courier_prime_green.svg"
                        : "/MD_logo/MD_logo_courier_prime_black.svg"
                    }
                    alt="logo"
                    width={20}
                    height={20}
                    onClick={scrollToTop}
                  />
                  {/* <Image src="/MD_logo_courier.svg" alt="" width={30} height={30} /> */}
                </Link>
              </div>
            </div>

            <div className="navlinks self-end mb-3 ">
              <Link
                href="#projects"
                className={`${
                  colorChange
                    ? "text-primary hover:text-black"
                    : "text-black hover:text-primary"
                } font-bold mr-6`}
              >
                Projects
              </Link>
              <Link
                href="#about"
                className={`${
                  colorChange
                    ? "text-primary hover:text-black"
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
