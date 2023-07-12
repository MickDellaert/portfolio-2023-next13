import skillIcons from "@/components/skillIcons";

const Footer = () => {
  return (
    <>
      <footer className="footer-container mx-auto px-6">
        <div className="flex h-16 w-full flex-row items-center justify-between">
          <h4 className="text-sm font-semibold text-neutral-950">
            &copy; 2023 - Mick Dellaert
            {/* &copy; 2023 - Mick Dellaert - All rights reserved */}
          </h4>
          <div className="ml-2 flex items-center gap-2 text-neutral-400">
            Built with <skillIcons.SiNextdotjs /> <skillIcons.SiTailwindcss />{" "}
            <skillIcons.SiSupabase />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
