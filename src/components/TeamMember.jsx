import React from "react";

const TeamMember = ({ name, location, image }) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-[4/5] w-full overflow-hidden bg-gray-900">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 grayscale"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-medium text-white">{name}</h3>
        <p className="mt-1 text-lg text-gray-400">{location}</p>
      </div>
    </div>
  );
};

export default TeamMember;
