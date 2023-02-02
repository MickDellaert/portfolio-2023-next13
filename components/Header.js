import Hero from "./Hero";
import Navbar from "./NavBar";
function Header() {
  return (
    <header className="header-container flex w-full flex-col justify-center">
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
