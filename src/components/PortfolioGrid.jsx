import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ isRight = true, projects }) => {
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
