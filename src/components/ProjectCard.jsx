import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({
  title,
  image,
  link,
  description = "",
  isLarge = false,
}) => {
  return (
    <div className="relative group overflow-hidden h-full rounded-md">
      <a
        href={link}
        className="block w-full h-full relative overflow-hidden bg-black rounded-md"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          {description && (
            <p className="text-sm text-gray-200">{description}</p>
          )}
        </div>
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string,
  isLarge: PropTypes.bool,
};

export default ProjectCard;
