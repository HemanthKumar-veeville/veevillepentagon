import React from "react";
import Header from "../components/Header"; // Reuse the existing Header component
import Footer from "../components/Footer"; // Reuse the existing Footer component
import OfficeCard from "../components/OfficeCard"; // Import the reusable OfficeCard component

const offices = [
  {
    city: "New York",
    time: "01:28 am",
    email: "newyork@designstudio.com",
    phone: "+1 212 683 7000",
    address: "250 Park Avenue South\nNew York, NY 10003\nUnited States",
    description:
      "Our New York studio occupies the top two floors of a historic Beaux-Arts building in the vibrant Flatiron District, offering panoramic views of Manhattan's iconic skyline. The open-plan space features original architectural details blended with contemporary design elements.",
    directions: "https://goo.gl/maps/QKBnFwGYQKGS8JENA",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&q=80&w=1200",
    coordinates: {
      lat: 40.7406,
      lng: -73.9865,
    },
  },
  {
    city: "London",
    time: "06:28 am",
    email: "london@designstudio.com",
    phone: "+44 20 7229 3477",
    address: "11 Needham Road\nNotting Hill\nLondon W11 2RP\nUnited Kingdom",
    description:
      "Housed in a beautifully restored Victorian dairy building in Notting Hill, our London studio combines industrial heritage with modern design sensibilities. The space features exposed brick walls, original steel beams, and abundant natural light through restored skylights.",
    directions: "https://goo.gl/maps/2Z9v7x8o6X9XQ1at8",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200",
    coordinates: {
      lat: 51.5149,
      lng: -0.1967,
    },
  },
  {
    city: "Berlin",
    time: "07:28 am",
    email: "berlin@designstudio.com",
    phone: "+49 30 27 87 61 0",
    address: "Geisbergstrasse 8\nBerlin 10777\nGermany",
    description:
      "Our Berlin studio is located in a landmark Bauhaus-inspired building in the creative heart of Schöneberg. The space reflects the city's industrial heritage with high ceilings, concrete floors, and floor-to-ceiling windows overlooking the vibrant neighborhood.",
    directions: "https://goo.gl/maps/4Q4Z4Z4Z4Z4Z4Z4Z4",
    image:
      "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=1200",
    coordinates: {
      lat: 52.4938,
      lng: 13.3428,
    },
  },
  {
    city: "Tokyo",
    time: "02:28 pm",
    email: "tokyo@designstudio.com",
    phone: "+81 3 6721 0766",
    address: "5-4-3 Minami-Aoyama\nMinato-ku\nTokyo 107-0062\nJapan",
    description:
      "Located in the sophisticated Aoyama district, our Tokyo studio occupies a minimalist space designed by renowned architect Kengo Kuma. The studio seamlessly blends Japanese aesthetic principles with contemporary design, featuring traditional materials and modern technology.",
    directions: "https://goo.gl/maps/5X5X5X5X5X5X5X5X5",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200",
    coordinates: {
      lat: 35.6646,
      lng: 139.7147,
    },
  },
  {
    city: "Singapore",
    time: "01:28 pm",
    email: "singapore@designstudio.com",
    phone: "+65 6222 7000",
    address: "71 Club Street\n#03-01\nSingapore 069444",
    description:
      "Our Singapore studio is housed in a carefully restored heritage shophouse in the historic Tanjong Pagar district. The three-story space combines traditional Peranakan architecture with contemporary design elements, creating a unique environment that bridges past and present.",
    directions: "https://goo.gl/maps/6X6X6X6X6X6X6X6X6",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200",
    coordinates: {
      lat: 1.2789,
      lng: 103.8456,
    },
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
