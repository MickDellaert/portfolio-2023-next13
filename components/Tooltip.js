// import skillIconsTest from "./skillIconsTest";
"use client";

import { useState } from "react";

export const Tooltip = ({ children, tooltip, tipDirection }) => {
  const [toolTipDirection] = useState(tipDirection);

  const object = {};

  if (toolTipDirection.includes("top")) {
    object.spanposition = "-top-8 after:top-full";
    object.divpointerposition = "after:-top-[12px]";
  } else if (toolTipDirection.includes("bottom")) {
    object.spanposition = "-bottom-8 after:bottom-full ";
    object.divpointerposition = "after:-bottom-[12px] after:rotate-180";
  }

  if (toolTipDirection.includes("left")) {
    object.direction = `-right-2 `;
  } else if (toolTipDirection.includes("right")) {
    object.direction = `-left-2 `;
  }

  return (
    <div className="group">
      <div
        className={`${object.divpointerposition} 
      relative z-10 flex cursor-pointer 
      after:absolute after:left-[calc(50%-5px)] after:h-0 
      after:w-0 after:border-l-[5px] after:border-r-[5px] 
      after:border-t-[10px] after:border-l-transparent after:border-r-transparent 
      after:border-t-primary after:opacity-0 after:transition-all group-hover:after:opacity-100`}
      >
        <span
          className={`${object.spanposition} ${object.direction}
        absolute z-10 whitespace-nowrap rounded-xl bg-primary px-2 py-0.5 
        text-xs font-medium text-white opacity-0 transition-all group-hover:opacity-100`}
        >
          {tooltip}
        </span>
        {children}
      </div>
    </div>
  );
};
