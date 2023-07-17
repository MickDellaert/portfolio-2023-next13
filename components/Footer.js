import skillIcons from "@/components/skillIcons";

const Footer = () => {
  return (
    <>
      <footer className="footer-container mx-auto px-6">
        <div className="flex h-16 w-full flex-row items-center justify-between text-sm font-semibold">
          <h4 className=" text-neutral-950">
            &copy; 2023 - Mick Dellaert
            {/* &copy; 2023 - Mick Dellaert - All rights reserved */}
          </h4>
          <div className="ml-2 flex items-center gap-1 text-neutral-400 sm:gap-2">
            Made with <skillIcons.SiNextdotjs /> <skillIcons.SiTailwindcss /> <skillIcons.SiSupabase />{" "}
            <skillIcons.SiFramer />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
