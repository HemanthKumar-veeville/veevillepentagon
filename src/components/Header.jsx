import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Detect any scroll activity
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "hidden" : "block"
      }`}
    >
      <div className="max-w-[1400px] mx-auto pb-6">
        <nav className="flex items-center justify-between">
          <h1 className="text-[#B00020] font-bold text-4xl md:text-5xl">
            Pentagram
          </h1>
          <header className="flex justify-between items-center p-6">
            <nav className="flex space-x-8 text-gray-500 text-lg ">
              <a href="/work" className="hover:opacity-75 font-sans">
                WORK
              </a>
              <a href="/about" className="hover:opacity-75 font-sans">
                ABOUT
              </a>
              <a href="/news" className="hover:opacity-75 font-sans">
                NEWS
              </a>
              <a href="/contact" className="hover:opacity-75 font-sans">
                CONTACT
              </a>
            </nav>
          </header>
        </nav>
      </div>
    </header>
  );
};

export default Header;
