import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-container mx-auto px-6">
        <div className="flex h-16 flex-row items-center">
          <h1 className="text-sm font-semibold text-black">
            &copy; 2023 - Mick Dellaert - All rights reserved
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
