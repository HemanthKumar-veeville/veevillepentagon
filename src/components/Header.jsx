import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className={`text-3xl font-bold ${
              isScrolled ? "text-[#FF0000]" : "text-white"
            }`}
          >
            Pentagram
          </a>

          <div className="flex items-center space-x-8">
            <a
              href="/work"
              className={`nav-link ${isScrolled ? "text-black" : "text-white"}`}
            >
              WORK
            </a>
            <a
              href="/about"
              className={`nav-link ${isScrolled ? "text-black" : "text-white"}`}
            >
              ABOUT
            </a>
            <a
              href="/news"
              className={`nav-link ${isScrolled ? "text-black" : "text-white"}`}
            >
              NEWS
            </a>
            <a
              href="/contact"
              className={`nav-link ${isScrolled ? "text-black" : "text-white"}`}
            >
              CONTACT
            </a>
            <button
              className={`hover:opacity-75 transition-opacity ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <Search size={24} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
