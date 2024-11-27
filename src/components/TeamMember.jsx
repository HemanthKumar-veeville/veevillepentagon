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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold mb-1">{name}</h3>
          <p className="text-sm text-gray-200">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
