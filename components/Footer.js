import skillIcons from "@/components/skillIcons";


const Footer = () => {
  return (
    <>
      <footer className="footer-container mx-auto px-6">
        <div className="flex h-16 flex-row items-center">
          <h1 className="text-sm font-semibold text-gray-950">
            &copy; 2023 - Mick Dellaert - Built with 
            {/* &copy; 2023 - Mick Dellaert - All rights reserved */}
          </h1>
          <div className="flex ml-2 gap-2"><skillIcons.SiNextdotjs/> <skillIcons.SiTailwindcss/> <skillIcons.SiSupabase/></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
