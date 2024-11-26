import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1590787996529-a542c86ca267?auto=format&fit=crop&q=80"
      >
        <source
          src="https://brand-assets.stackblitz.com/pentagram-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-[1400px] mx-auto w-full px-6 pb-24">
          <div className="relative">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Rivian
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-3xl">
              A custom typeface for the American electric vehicle manufacturer
              reflects its spirit of innovation and adventure
            </p>
            <div className="absolute bottom-0 right-0 text-white text-xl">
              5 / 8
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
