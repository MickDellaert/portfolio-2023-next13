"use client";

import React from "react";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, useSpring } from "framer-motion";

export const TextAnimation = ({ children, index }) => {
  const widthRef = useRef();
  const spring = useSpring(0, { transition: { duration: 5 }, bounce: 0.4 });

  useEffect(() => {
    if (widthRef.current) {
      const { width } = widthRef.current.getBoundingClientRect();
      const widthOffset = widthRef.current.offsetWidth;

      spring.set(width);
    }
  }, [children, spring]);

  const itemThree = {
    hidden: { opacity: 0, y: "75%", transition: { duration: 1, bounce: 0.5 } },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1, bounce: 0.5 } },
    exit: { opacity: 0, y: "-65%", position: "absolute", transition: { type: "spring", duration: 1, bounce: 0.5 } },
    // transition: { type: "spring",  bounce: 0.3 }
  };

  return (
    <>
      <motion.div
        className="whitespace-nowrap bg-white"
        style={{
          display: "inline-flex",
          width: index > 0 ? spring : "auto",
        }}
      >
        <AnimatePresence>
          <motion.div
            key={index}
            variants={itemThree}
            initial={index > 0 ? "hidden" : false}
            animate={index > 0 ? "show" : ""}
            exit="exit"
            className="whitespace-nowrap"
            style={{
              display: "inline-flex",
            }}
            ref={widthRef}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};
