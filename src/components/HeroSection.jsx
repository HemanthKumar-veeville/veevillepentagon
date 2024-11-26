import React, { useState } from "react";

const HeroSection = () => {
  // Array of video details
  const videos = [
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Elephant Dream",
      description: "A surreal tale about freedom, control, and technology.",
      color: "#FF5722", // Video background color
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Big Buck Bunny",
      description: "The story of a giant rabbit who seeks revenge.",
      color: "#FF9900",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      title: "Sintel",
      description: "A journey through a magical world of dragons.",
      color: "#FF3300",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      title: "Bull Run",
      description: "Exploring thrilling adventures of the past.",
      color: "#00BFFF",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      title: "Tears of Steel",
      description: "A futuristic love story.",
      color: "#00CC99",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Blazing Trails",
      description: "A fiery tale of courage and passion.",
      color: "#6600FF",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title: "Bigger Fun",
      description: "A whimsical journey through the world of imagination.",
      color: "#FF0033",
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title: "Joy Rides",
      description: "Adventures filled with thrill and excitement.",
      color: "#9933FF",
    },
  ];

  // State for currently active video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Handlers for navigation
  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <section
      className="relative h-screen w-full overflow-hidden group"
      style={{ backgroundColor: currentVideo.color }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        key={currentVideoIndex} // Ensures the video restarts when the source changes
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={currentVideo.src} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <h1 className="text-[#B00020] font-bold text-4xl md:text-5xl">
            Pentagram
          </h1>
          <nav className="flex space-x-8 text-white text-lg ">
            <a href="/work" className="hover:opacity-75 font-sans">
              WORK
            </a>
            <a href="/about" className="hover:opacity-75 font-sans">
              ABOUT
            </a>
            <a href="/news" className="hover:opacity-75 font-sans">
              NEWS
            </a>
            <a href="/contact" className="hover:opacity-75 font-sans">
              CONTACT
            </a>
          </nav>
        </header>

        {/* Video Title and Description */}
        <div className="flex-1 flex items-end p-6">
          <div>
            <h1 className="text-white font-bold text-6xl mb-4">
              {currentVideo.title}
            </h1>
            <p className="text-white text-2xl">{currentVideo.description}</p>
          </div>
        </div>

        {/* Middle Arrows */}
        <button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Video Count */}
        <div className="absolute bottom-6 right-6 text-white text-lg font-semibold">
          {currentVideoIndex + 1} / {videos.length}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
