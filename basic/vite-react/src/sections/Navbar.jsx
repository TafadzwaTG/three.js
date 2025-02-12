import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a hover:text-gray-400 transition-all duration-300 ease-in-out">
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="./" className="text-white font-bold text-3xl uppercase tracking-wider hover:text-gray-400 transition-colors duration-300">
            TafadzwaTG
          </a>
          <button 
            onClick={toggleMenu} 
            className="text-white sm:hidden block focus:outline-none" 
            aria-label="Toggle menu"
          >
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>
          <nav className="sm:flex hidden space-x-10">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={`nav-sidebar transition-all duration-300 ease-in-out bg-black ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="p-6 text-white">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
