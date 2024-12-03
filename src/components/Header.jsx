import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { Search } from "lucide-react";
import VeevilleLogo from "./svg/VeevilleLogo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

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
          <div
            className="text-[#B00020] font-bold text-4xl md:text-5xl cursor-pointer"
            onClick={() => navigate("/")} // Navigate to home on click
          >
            <VeevilleLogo fillColour="#B00020" />
          </div>

          <div className="flex justify-between items-center p-6">
            <nav className="flex space-x-8 text-gray-500 text-lg">
              <button
                onClick={() => navigate("/work")}
                className="hover:opacity-75 font-sans"
              >
                WORK
              </button>
              <button
                onClick={() => navigate("/about")}
                className="hover:opacity-75 font-sans"
              >
                ABOUT
              </button>
              <button
                onClick={() => navigate("/news")}
                className="hover:opacity-75 font-sans"
              >
                NEWS
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="hover:opacity-75 font-sans"
              >
                CONTACT
              </button>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
