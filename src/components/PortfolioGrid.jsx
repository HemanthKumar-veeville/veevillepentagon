import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "MotoGP",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80",
    link: "/projects/motogp",
    description: "Official MotoGP Racing Championship",
  },
  {
    title: "Sister",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&q=80",
    link: "/projects/sister",
    description: "Brand Identity Design",
  },
  {
    title: "Harley-Davidson Museum",
    image:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80",
    link: "/projects/harley-davidson",
    description: "Museum Architecture & Design",
  },
  {
    title: "Saks Fifth Avenue",
    image:
      "https://images.unsplash.com/photo-1581775231124-4f70b0c21f26?auto=format&fit=crop&q=80",
    link: "/projects/saks",
    description: "Luxury Retail Experience",
  },
  {
    title: "Helions Publishing",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80",
    link: "/projects/helions",
    description:
      "Brand identity for a publishing house founded by Jack Davison",
  },
];

const ProjectsGrid = ({ isRight = true }) => {
  const gridProjects = isRight ? projects : [...projects].reverse();
  const featuredProject = isRight ? gridProjects[4] : gridProjects[0];
  const gridItems = isRight ? gridProjects.slice(0, 4) : gridProjects.slice(1);

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[540px]">
        {isRight ? (
          <>
            {/* Left side: 50% */}
            <div className="lg:col-span-1 grid grid-cols-2 gap-4 h-full">
              {gridItems.map((project, index) => (
                <div key={index} className="h-[260px]">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
            {/* Right side: 50% */}
            <div className="lg:col-span-1 h-full">
              <ProjectCard {...featuredProject} isLarge />
            </div>
          </>
        ) : (
          <>
            {/* Left side: 50% */}
            <div className="lg:col-span-1 h-full">
              <ProjectCard {...featuredProject} isLarge />
            </div>
            {/* Right side: 50% */}
            <div className="lg:col-span-1 grid grid-cols-2 gap-4 h-full">
              {gridItems.map((project, index) => (
                <div key={index} className="h-[260px]">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ProjectsGrid.propTypes = {
  isRight: PropTypes.bool,
};

export default ProjectsGrid;
