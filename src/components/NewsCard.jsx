import React from "react";

const NewsCard = ({
  image,
  title,
  excerpt,
  metadata,
  className = "",
  isHorizontal = false,
}) => (
  <div
    className={`bg-white rounded-md overflow-hidden shadow-md flex ${
      isHorizontal ? "flex-row" : "flex-col"
    } ${className}`}
  >
    {/* Image Section */}
    <div
      className={`${isHorizontal ? "w-1/2" : "w-full"} h-auto flex-shrink-0`}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>

    {/* Content Section */}
    <div
      className={`p-4 ${
        isHorizontal ? "w-1/2" : "w-full"
      } flex flex-col justify-between`}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{excerpt}</p>
      <p className="text-xs text-gray-400 mt-2">{metadata}</p>
    </div>
  </div>
);

export default NewsCard;
