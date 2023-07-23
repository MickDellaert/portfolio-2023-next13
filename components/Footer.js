import skillIcons from "@/utils/skillIcons";

import { Tooltip } from "./Tooltip";

const Footer = () => {
  return (
    <>
      <footer className="footer-container mx-auto px-6">
        <div className="flex h-16 w-full flex-row items-center justify-between text-sm font-semibold">
          <h4 className=" text-neutral-950">&copy; 2023 - Mick Dellaert</h4>
          <div className="relative ml-2 flex items-center gap-1 sm:gap-2">
            <p className="hidden sm:block text-neutral-400">Built with</p>
            <Tooltip tooltip={"Next JS"} tipDirection={"top left"} >
              <skillIcons.SiNextdotjs className="h-5 w-5 fill-neutral-400 sm:hover:fill-primary" />
            </Tooltip>
            <Tooltip tooltip={"Tailwind CSS"} tipDirection={"top left"}>
              <skillIcons.SiTailwindcss className="h-5 w-5 fill-neutral-400 sm:hover:fill-primary " />
            </Tooltip>
            <Tooltip tooltip={"Supabase"} tipDirection={"top left"}>
              <skillIcons.SiSupabase className="h-5 w-5 fill-neutral-400 sm:hover:fill-primary " />
            </Tooltip>
            <Tooltip tooltip={"Framer Motion"} tipDirection={"top left"}>
              <skillIcons.SiFramer className="h-5 w-5 fill-neutral-400 sm:hover:fill-primary " />
            </Tooltip>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
