import React from "react";

const OfficeCard = ({
  city,
  time,
  email,
  phone,
  address,
  description,
  directions,
  image,
}) => {
  return (
    <div className="space-y-4">
      {/* Image */}
      <img
        src={image}
        alt={`${city} office`}
        className="w-full h-auto rounded-md"
      />

      {/* Office Details */}
      <h2 className="text-2xl font-semibold text-gray-900">{city}</h2>
      <p className="text-sm text-gray-600">{time}</p>
      <p className="text-sm text-blue-600">
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p className="text-sm text-gray-600">{phone}</p>
      <p className="whitespace-pre-line text-sm text-gray-600">{address}</p>
      <p className="text-sm text-gray-600">{description}</p>
      <p>
        <a href={directions} className="text-sm text-blue-600 hover:underline">
          Get directions &rarr;
        </a>
      </p>
    </div>
  );
};

export default OfficeCard;
