import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import NewsCard from "../components/NewsCard";

const newsData = [
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 1",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 26, 2024",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 2",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 25, 2024",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 3",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 24, 2024",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 4",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 23, 2024",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 5",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 22, 2024",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 6",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 21, 2024",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 7",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 20, 2024",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 8",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 19, 2024",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 9",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 18, 2024",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "News Title 10",
    excerpt: "Short description of the news article.",
    metadata: "By Author | Nov 17, 2024",
  },
];

// Generate random span values
const getRandomSpan = () => {
  const spans = [
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
  ];
  return spans[Math.floor(Math.random() * spans.length)];
};

// Generate reversed isHorizontal logic
const getIsHorizontal = (index) => {
  return index % 2 !== 0; // Reversed logic: odd-indexed cards are horizontal
};

const NewsPage = () => {
  return (
    <>
      <Header />
      <div className="mt-20 mx-auto px-16">
        {/* Page Title */}
        <SectionTitle title="Latest News" />

        {/* News Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto"
          style={{
            gridAutoFlow: "dense", // Fill gaps dynamically
          }}
        >
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              {...news}
              isHorizontal={getIsHorizontal(index)} // Dynamic reversed isHorizontal logic
              className={getRandomSpan()} // Random span values for full dynamism
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
