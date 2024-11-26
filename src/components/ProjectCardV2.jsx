import React from "react";

const ProjectCard = ({ title, count, logo, altText }) => {
  return (
    <div>
      {/* Title Section */}
      <div className="flex items-baseline space-x-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-gray-500 text-lg font-semibold">{count}</span>
      </div>

      {/* Logo Section */}
      <div className="mt-4">
        <img src={logo} alt={altText || `${title} logo`} className="w-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
