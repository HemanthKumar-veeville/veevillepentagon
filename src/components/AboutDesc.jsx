import React from "react";

const AboutDesc = () => {
  return (
    <div className="bg-black text-white py-16 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16">
        {/* Left Column: Heading */}
        <div>
          <h1 className="text-5xl font-bold">About Pentagram</h1>
        </div>

        {/* Right Column: Description */}
        <div className="space-y-6">
          <p>
            Veeville is a multi-disciplinary, independently owned design studio.
          </p>
          <p>
            Our work encompasses graphics and identity, strategy and
            positioning, products and packaging, exhibitions and installations,
            websites and digital experiences, advertising and communications,
            data visualizations and typefaces, sound and motion. Our 22 partners
            are all practicing designers, and whether working collaboratively or
            independently, they do so in friendship.
          </p>
          <p>
            Our structure is unique. We are the only major design studio where
            the owners of the business are the creators of the work and serve as
            the primary contact for every client. This reflects our conviction
            that great design cannot happen without passion, intelligence
            and—above all—personal commitment, and is demonstrated by a
            portfolio that spans five decades, many industries, and clients of
            every size.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDesc;
