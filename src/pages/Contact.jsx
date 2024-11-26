import React from "react";
import Header from "../components/Header"; // Reuse the existing Header component
import Footer from "../components/Footer"; // Reuse the existing Footer component
import OfficeCard from "../components/OfficeCard"; // Import the reusable OfficeCard component

const offices = [
  {
    city: "New York",
    time: "01:28 am",
    email: "newyork@pentagram.com",
    phone: "+1 212 683 7000",
    address: "250 Park Avenue South\nNew York, NY 10003\nUnited States",
    description:
      "Pentagram New York is in the top two floors of a 12-story building located on the border of Manhattan’s Flatiron District and the Union Square neighborhood.",
    directions: "#",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    city: "London",
    time: "06:28 am",
    email: "london@pentagram.com",
    phone: "+44 20 7229 3477",
    address: "11 Needham Road\nLondon W11 2RP\nUnited Kingdom",
    description:
      "Pentagram London is located in a former dairy on Needham Road, a leafy lane off Westbourne Grove in Notting Hill.",
    directions: "#",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    city: "Austin",
    time: "12:28 am",
    email: "austin@pentagram.com",
    phone: "+1 512 476 3076",
    address: "1634 East Cesar Chavez Street\nAustin, TX 78702\nUnited States",
    description:
      "Pentagram Austin is located in the bustling urban East Side neighborhood known for its restaurants, coffee shops, bars and deeply rooted Austin culture.",
    directions: "#",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
  {
    city: "Berlin",
    time: "07:28 am",
    email: "info@pentagram.de",
    phone: "+49 30 27 87 61 0",
    address: "Geisbergstrasse 8 / L2\nBerlin 10777\nGermany",
    description:
      "Pentagram Berlin is located in the Berlin Schöneberg district near KaDeWe, in a monument-protected red brick building that was formerly one of the largest post offices of its time.",
    directions: "#",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
  },
];

const Contact = () => {
  return (
    <>
      <Header /> {/* Reuse Header */}
      <div className="mt-20 px-6 lg:px-16 py-8">
        {/* Page Title */}
        <header className="text-left mb-16">
          <h1 className="text-[55px] font-medium text-gray-900 mb-4 leading-[60px]">
            Contact
          </h1>
        </header>

        {/* Office Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {offices.map((office, index) => (
            <OfficeCard key={index} {...office} />
          ))}
        </div>
      </div>
      <Footer /> {/* Reuse Footer */}
    </>
  );
};

export default Contact;
