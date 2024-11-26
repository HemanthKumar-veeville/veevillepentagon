import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Directory from "../components/Directory";
import AboutDesc from "../components/AboutDesc";
import TeamGrid from "../components/TeamGrid";

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-1">
        <Header />
        <AboutDesc />
        <TeamGrid />
        <Directory />
      </main>
      <div className="mx-auto px-16 pb-8 bg-black text-white w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <button
              onClick={() => navigate("/newsletter")}
              className="footer-link hover:opacity-70 transition-opacity"
            >
              Subscribe to our Newsletter
            </button>
            <button
              onClick={() => navigate("/privacy")}
              className="footer-link hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </button>
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
    </div>
  );
};

export default About;
