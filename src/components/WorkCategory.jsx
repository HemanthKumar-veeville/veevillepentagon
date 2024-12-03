import React from "react";

export function WorkCategory({ title, count, imageUrl }) {
  return (
    <div className="group cursor-pointer">
      <div className="flex items-baseline mb-3">
        <h3 className="text-[28px] leading-[1.2] font-normal text-black">
          {title}
        </h3>
        <span className="text-[15px] leading-[1.2] font-normal text-black/60 ml-2 relative top-[-4px]">
          {count}
        </span>
      </div>
      <div className="relative overflow-hidden">
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
      </div>
    </div>
  );
}
