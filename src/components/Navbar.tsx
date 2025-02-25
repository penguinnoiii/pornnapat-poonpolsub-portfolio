import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 w-screen bg-white">
        <div className="flex justify-between items-center px-8 py-7 md:p-12">
          <img className="max-w-20" src="/PG.png" alt="PG. Logo" />
          <img
            onClick={handleMenu}
            className="md:hidden cursor-pointer"
            src="/menu.png"
            alt="menu"
          />
          <div
            className={`${
              isMenuOpen ? "absolute" : "hidden"
            } max-md:fixed max-md:right-8 max-md:top-20 max-md:text-white max-md:space-y-5 max-md:p-6 max-md:bg-black md:flex md:relative md:space-x-5 text-[1rem] [&>p]:cursor-pointer [&>p]:hover:underline`}
          >
            <p>
              <a href="#home" onClick={closeMenu}>HOME</a>
            </p>
            <p>
              <a href="#about" onClick={closeMenu}>ABOUT</a>
            </p>
            <p>
              <a href="#skills" onClick={closeMenu}>SKILLS</a>
            </p>
            <p>
              <a href="#project" onClick={closeMenu}>PROJECT</a>
            </p>
            <p>
              <a href="#contact" onClick={closeMenu}>CONTACT</a>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
