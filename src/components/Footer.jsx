import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#ffffff] w-full mt-auto">
      {/* View All Projects - Separate Top Section */}
      <div className="w-full text-center mb-20">
        <a
          onClick={() => navigate("/work")}
          className="footer-link-projects hover:opacity-70 transition-opacity"
        >
          VIEW ALL PROJECTS
        </a>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <a
              href="/newsletter"
              className="footer-link hover:opacity-70 transition-opacity"
            >
              Subscribe to our Newsletter
            </a>
            <a
              href="/privacy"
              className="footer-link hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </a>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link hover:opacity-70 transition-opacity"
            >
              X
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link hover:opacity-70 transition-opacity"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8">
          <p className="footer-text">
            © 1972 – {new Date().getFullYear()} Pentagram
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
