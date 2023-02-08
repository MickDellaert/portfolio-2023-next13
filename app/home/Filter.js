// "use client";

// export const dynamic = "auto";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import useRouterPush from "@/hooks/useRouterPush";
// import { usePathname, useSearchParams } from "next/navigation";
// import Tags from "./Tags";

// export default function Filter() {
//   // const searchParams = useSearchParams();
//   // const filterParam = searchParams.get("tag");

//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const techButtons = [
//     "Vue",
//     "JavaScript",
//     "React JS",
//     "Strapi",
//     "Tailwind CSS",
//   ];

//   const [tags, setTags] = useState([]);

//   // const {} = useRouterPush(techButtons, tags)
//   const router = useRouter();

//   const testTag = searchParams.get("tag");

//   // console.log(searchParams.toString());
//   // console.log(searchParams.get("tag"));
//   // searchParams.toString();

//   const handleClick = (tech) => {
//     tags.includes(tech)
//       ? setTags(tags.filter((tag) => tag !== tech))
//       : setTags((current) => [...current, tech]);
//   };

//   useEffect(() => {
//     router.push(`/?tag=${tags}`);

//     if (tags.length === 0) {
//       router.push(`/`);
//     }
//   }, [tags]);

//   useEffect(() => {
//     if (testTag) {
//       router.push(`/?tag=${testTag}`);
//     }

//     if (!testTag) {
//       setTags([]);
//     }
//   }, [pathname, searchParams]);

//   return (
//     <>
//       <div className="flex justify-start">
//         <div className="">
//           {techButtons.map((tech) => (
//             <button
//               className=" mr-3 bg-gray-300 p-1 text-xs"
//               onClick={() => {
//                 handleClick(tech);
//               }}
//               key={tech}
//             >
//               {tech}
//             </button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
