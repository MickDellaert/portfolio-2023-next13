"use client";

import { useState } from "react";
import useNavigation from "@/hooks/useNavigation";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

function ProjectsFilter({ uniqueTechNames }) {
  const searchParams = useSearchParams();
  let activeTags = searchParams.get("filter");

  const [filters, setFilters] = useState([]);
  const useNavigate = useNavigation(filters, setFilters);

  const handleClick = (techName) => {
    filters.includes(techName)
      ? setFilters(filters.filter((selectedFilter) => selectedFilter !== techName))
      : setFilters((current) => [...current, techName]);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div className="relative z-50 flex items-center justify-start ">
        <motion.div className="" initial="hidden" animate="visible" variants={container}>
          {uniqueTechNames.map((techName) => (
            <motion.button
              variants={item}
              className={`mb-2 mr-2 h-6 rounded-lg px-2 py-px text-[0.60rem] font-semibold leading-none 
              drop-shadow-lg sm:mr-3 sm:px-2 sm:py-1 sm:text-xs md:hover:bg-primary md:hover:text-white
              ${activeTags?.includes(techName) ? "bg-primary text-white" : "bg-neutral-50"}`}
              onClick={() => {
                handleClick(techName);
              }}
              key={techName}
            >
              {techName}
            </motion.button>
          ))}
          {filters.length > 0 && (
            <button
              onClick={() => setFilters([])}
              className="mb-2 mr-3 h-6 rounded-lg border-2 border-primary px-2 py-1 text-xs font-semibold leading-none 
              text-primary md:hover:bg-primary md:hover:text-white"
            >
              Clear
            </button>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

export default ProjectsFilter;
