"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 items-center">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Pedro Barbosa</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 felx items-baselin space-x-4">
              <a href="#home" className="px-3 py-2 hover:text-gray-600">Home</a>
              <a href="#experience" className="px-3 py-2 hover:text-gray-600">Experience</a>
              <a href="#projects" className="px-3 py-2 hover:text-gray-600">Projects</a>
              <a href="#contact" className="px-3 py-2 hover:text-gray-600">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
