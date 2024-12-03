import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Assuming Header exists
import Footer from "../components/Footer"; // Assuming Footer exists
import { WorkHeader } from "../components/WorkHeader"; // Assuming WorkHeader exists
import { WorkGrid } from "../components/WorkGrid"; // Assuming WorkGrid exists
import { categories } from "../assets/constants"; // Assuming categories data exists

const Work = () => {
  const [activeTab, setActiveTab] = useState("client");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="mt-36 mx-auto px-4 lg:px-16">
        {/* Work Header */}
        <WorkHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Work Grid */}
        <div className="mt-12 grid gap-8">
          <WorkGrid categories={categories} />
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default Work;
