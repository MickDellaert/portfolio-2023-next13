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

  return (
    <Fragment>
      <nav>
        <div className="navbar-wrapper fixed top-0 left-0 right-0 w-full z-10 bg-white">
          <div
            className={`navbar-container flex justify-between items-center h-20 max-w-[90%] sm:max-w-[96%]  mx-auto ${
              colorChange
                ? "bg-white border-b-2 border-white"
                : "bg-white border-b-2 border-emerald-500"
            }`}
          >
            <div className="logo-container self-end mb-3">
              <div className="logo ">
                <Link href="/" passHref>
                  <Image
                    className=""
                    src={
                      colorChange
                        ? "/MD_logo/MD_logo_courier_prime_green.svg"
                        : "/MD_logo/MD_logo_courier_prime_black.svg"
                    }
                    alt="logo"
                    width={24}
                    height={24}
                  />
                  {/* <Image src="/MD_logo_courier.svg" alt="" width={30} height={30} /> */}
                </Link>
              </div>
            </div>

            <div className="navlinks self-end mb-3 ">
              <Link
                href="/#projects"
                passHref
                className={`${
                  colorChange
                    ? "text-green-500 hover:text-black"
                    : "text-black hover:text-green-500"
                }`}
              >
                Projects
              </Link>
              <Link
                href="/#about"
                passHref
                className={`${
                  colorChange
                    ? "text-green-500 hover:text-black"
                    : "text-black hover:text-green-500"
                }`}
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
