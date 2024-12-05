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


  const [linkVisibility, setLinkVisibility] = useState([false, false, false, false]);

  const links = [
    { href: "#profile", label: "Home" },
    { href: "#experience", label: "Experiences" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    links.forEach((_, index) => {
      setTimeout(() => {
        setLinkVisibility((prev) =>
          prev.map((visible, i) => (i === index ? true : visible))
        );
      }, index * 500);
    });
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${isScrolled ? "bg-white/75 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 items-center">
        <div className="flex justify-center h-16 items-center">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 transition ease-in-out hover:scale-110 duration-300 hover:text-gray-500 ${linkVisibility[index] ? "opacity-100 duration-500" : "opacity-0"}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
