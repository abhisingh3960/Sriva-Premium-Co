import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b-2 px-6 md:px-12">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-semibold text-pink-400">
          <Link href={"/"}>
            <span>Sriva </span>
            <span>Premium </span>
            <span>Co</span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-6 text-lg font-semibold">
          <Link className="hover:text-pink-400 transition-all duration-300" href={"/"}>Home</Link>
          <Link className="hover:text-pink-400 transition-all duration-300" href={"/about"}>About</Link>
          <Link className="hover:text-pink-400 transition-all duration-300" href={"/contact"}>Contact Us</Link>
          <Link href={"/login"}>
            <button className="bg-pink-400 px-4 py-2 text-white rounded-md hover:bg-pink-500 transition-all duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 text-lg font-semibold bg-white shadow-md p-4">
          <Link className="hover:text-pink-400 transition-all duration-300" href={"/"}>Home</Link>
          <Link className="hover:text-pink-400 transition-all duration-300" href={"/about"}>About</Link>
          <Link className="hover:text-pink-400 transition-all duration-300" href={"/contact"}>Contact Us</Link>
          <Link href={"/login"}>
            <button className="bg-pink-400 px-4 py-2 text-white rounded-md hover:bg-pink-500 transition-all duration-300 w-full">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
