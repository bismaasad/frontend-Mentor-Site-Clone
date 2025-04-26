import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(`/${path}`);
    setMenuOpen(false); 
  };

  return (
    <div>
      <header className="text-gray-800 body-font bg-gray-100 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-5">
          <a
            href="https://www.frontendmentor.io/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <img
              src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-desktop.svg&w=256&q=75"
              alt="Frontend Mentor Logo"
              className="w-40 h-8"
            />
          </a>
          <button
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links - Hidden on Small Screens */}
          <nav className="hidden md:flex space-x-5">
            <button className="hover:text-gray-900 font-bold" onClick={() => handleNavigation('learning')}>
              LEARNING PATHS
            </button>
            <button className="hover:text-gray-900 font-bold">CHALLENGES</button>
            <button className="hover:text-gray-900 font-bold">SOLUTIONS</button>
            <button className="hover:text-gray-900 font-bold" onClick={() => handleNavigation('articles')}>ARTICLES</button>
            <button className="hover:text-gray-900 font-bold">UNLOCK PRO</button>

            {/* GitHub Login Button */}
            <button
              className="bg-black text-white font-bold py-1 px-3 hover:bg-gray-800 rounded-full"
              onClick={() => handleNavigation('login')}
            >
              LOG IN WITH GITHUB
              <i className="fa-brands fa-square-github p-1 ml-2 text-2xl"></i>
            </button>
          </nav>
        </div>

        {/* Mobile Menu - Opens as White Box */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col items-center space-y-4 md:hidden">
            <button className="hover:text-gray-900 font-bold w-full text-center py-2" onClick={() => handleNavigation('learning')}>
              LEARNING PATHS
            </button>
            <button className="hover:text-gray-900 font-bold w-full text-center py-2">CHALLENGES</button>
            <button className="hover:text-gray-900 font-bold w-full text-center py-2">SOLUTIONS</button>
            <button className="hover:text-gray-900 font-bold w-full text-center py-2">ARTICLES</button>
            <button className="hover:text-gray-900 font-bold w-full text-center py-2">UNLOCK PRO</button>

            {/* GitHub Login Button */}
            <button
              className="bg-black text-white  text-sm font-bold py-2 px-4 hover:bg-gray-800 rounded-full w-6/12 text-center"
              onClick={() => handleNavigation('login')}
            >
              LOG IN WITH GITHUB
              <i className="fa-brands fa-square-github p-1 ml-2 text-2xl"></i>
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
