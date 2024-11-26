import React from "react";
import ProjectsGrid from "../components/PortfolioGrid";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const projects = [
  {
    title: "Apple Vision Pro Experience",
    image:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/apple-vision",
    description:
      "Revolutionary spatial computing interface design for Apple's groundbreaking mixed reality device",
    category: "Spatial Computing",
    year: "2024",
    client: "Apple",
    location: "Cupertino",
    awards: ["Red Dot: Best of the Best 2024", "iF Gold Award 2024"],
    team: 48,
  },
  {
    title: "Nike Digital Sport Experience",
    image:
      "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/nike-digital",
    description:
      "Integrated digital ecosystem connecting Nike's apps, retail, and training platforms",
    category: "Sports Technology",
    year: "2024",
    client: "Nike",
    location: "Portland",
    awards: ["Webby Award 2024"],
    team: 42,
  },
  {
    title: "Mercedes-Benz VISION EQXX",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/mercedes-vision",
    description:
      "Digital interface and experience design for the revolutionary electric concept car",
    category: "Automotive",
    year: "2024",
    client: "Mercedes-Benz",
    location: "Stuttgart",
    awards: ["Automotive Design Excellence 2024"],
    team: 35,
  },
  {
    title: "Chanel Atelier Digital",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/chanel-atelier",
    description:
      "Virtual haute couture experience showcasing craftsmanship and heritage",
    category: "Luxury Fashion",
    year: "2024",
    client: "Chanel",
    location: "Paris",
    awards: ["LVMH Innovation Award 2024"],
    team: 28,
  },
  {
    title: "SpaceX Mission Control",
    image:
      "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/spacex-control",
    description:
      "Next-generation mission control interface for Starship operations",
    category: "Space Technology",
    year: "2024",
    client: "SpaceX",
    location: "Hawthorne",
    team: 45,
  },
  {
    title: "Rolex Watchmaking Journey",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/rolex-digital",
    description:
      "Immersive digital experience showcasing century-old watchmaking expertise",
    category: "Luxury Heritage",
    year: "2024",
    client: "Rolex",
    location: "Geneva",
    awards: ["Luxury Digital Excellence 2024"],
    team: 32,
  },
  {
    title: "Goldman Sachs Next",
    image:
      "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/goldman-digital",
    description:
      "Advanced financial analytics and trading platform for institutional clients",
    category: "Financial Technology",
    year: "2024",
    client: "Goldman Sachs",
    location: "New York",
    team: 52,
  },
  {
    title: "Philips Healthcare AI",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/philips-health",
    description: "AI-powered medical imaging and diagnostics interface",
    category: "Healthcare",
    year: "2024",
    client: "Philips",
    location: "Amsterdam",
    awards: ["Healthcare Technology Innovation 2024"],
    team: 44,
  },
  {
    title: "Disney+ Immersive",
    image:
      "https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/disney-plus",
    description:
      "Next-generation streaming platform with interactive storytelling",
    category: "Entertainment",
    year: "2024",
    client: "Disney",
    location: "Burbank",
    awards: ["Streaming Innovation Award 2024"],
    team: 56,
  },
  {
    title: "Ritz-Carlton Digital Concierge",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/ritz-digital",
    description: "AI-powered luxury hospitality platform",
    category: "Hospitality",
    year: "2024",
    client: "Ritz-Carlton",
    location: "Global",
    team: 29,
  },
  {
    title: "Spotify Immersive Audio",
    image:
      "https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/spotify-spatial",
    description:
      "Spatial audio experience with interactive music visualization",
    category: "Music Technology",
    year: "2024",
    client: "Spotify",
    location: "Stockholm",
    awards: ["Music Tech Innovation 2024"],
    team: 34,
  },
  {
    title: "CERN Particle Visualizer",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/cern-visual",
    description: "Interactive platform for particle physics data visualization",
    category: "Scientific Research",
    year: "2024",
    client: "CERN",
    location: "Geneva",
    awards: ["Scientific Visualization Award 2024"],
    team: 37,
  },
  {
    title: "Bentley Configurator",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/bentley-config",
    description: "Ultra-luxury vehicle customization platform",
    category: "Automotive Luxury",
    year: "2024",
    client: "Bentley",
    location: "Crewe",
    team: 31,
  },
  {
    title: "Louis Vuitton Heritage",
    image:
      "https://images.unsplash.com/photo-1549637642-90187f64f420?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/lv-heritage",
    description:
      "Digital archive and storytelling platform for 170 years of luxury heritage",
    category: "Luxury",
    year: "2024",
    client: "Louis Vuitton",
    location: "Paris",
    awards: ["Digital Luxury Award 2024"],
    team: 36,
  },
  {
    title: "NASA Mars Experience",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/nasa-mars",
    description: "Interactive platform for Mars exploration data and missions",
    category: "Space Exploration",
    year: "2024",
    client: "NASA",
    location: "Houston",
    awards: ["Space Communication Award 2024"],
    team: 43,
  },
  {
    title: "Siemens Industry 5.0",
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/siemens-industry",
    description: "Next-generation industrial automation interface",
    category: "Industrial Technology",
    year: "2024",
    client: "Siemens",
    location: "Munich",
    team: 47,
  },
  {
    title: "Hermès Artisan Studio",
    image:
      "https://images.unsplash.com/photo-1459257868276-5e65389e2722?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/hermes-artisan",
    description: "Virtual craftsmanship experience platform",
    category: "Luxury Craft",
    year: "2024",
    client: "Hermès",
    location: "Paris",
    awards: ["Craft Digital Innovation 2024"],
    team: 33,
  },
  {
    title: "McLaren Racing Insights",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/mclaren-racing",
    description: "F1 racing analytics and fan engagement platform",
    category: "Motorsport",
    year: "2024",
    client: "McLaren",
    location: "Woking",
    team: 39,
  },
  {
    title: "Patek Philippe Collection",
    image:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/patek-digital",
    description: "Digital catalogue and heritage platform for fine timepieces",
    category: "Luxury Watches",
    year: "2024",
    client: "Patek Philippe",
    location: "Geneva",
    awards: ["Horology Digital Excellence 2024"],
    team: 27,
  },
  {
    title: "Metropolitan Opera Digital",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/met-opera",
    description: "Virtual opera experience with interactive features",
    category: "Performing Arts",
    year: "2024",
    client: "Metropolitan Opera",
    location: "New York",
    team: 35,
  },
  {
    title: "Dior Haute Couture",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/dior-couture",
    description: "Virtual fashion experience and archive",
    category: "Fashion",
    year: "2024",
    client: "Dior",
    location: "Paris",
    awards: ["Fashion Digital Innovation 2024"],
    team: 34,
  },
  {
    title: "Lamborghini Revuelto",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/lambo-revuelto",
    description: "Digital launch platform for hybrid supercar",
    category: "Automotive",
    year: "2024",
    client: "Lamborghini",
    location: "Sant'Agata Bolognese",
    team: 38,
  },
  {
    title: "Four Seasons Journey",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/fourseasons-digital",
    description: "Luxury travel planning and experience platform",
    category: "Hospitality",
    year: "2024",
    client: "Four Seasons",
    location: "Toronto",
    awards: ["Hospitality Digital Excellence 2024"],
    team: 31,
  },
  {
    title: "Steinway Digital Hall",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/steinway-hall",
    description: "Virtual concert hall and piano selection experience",
    category: "Music",
    year: "2024",
    client: "Steinway & Sons",
    location: "New York",
    team: 29,
  },
  {
    title: "Christie's NFT Platform",
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/christies-nft",
    description: "Digital art auction and NFT marketplace",
    category: "Digital Art",
    year: "2024",
    client: "Christie's",
    location: "London",
    awards: ["Digital Art Innovation 2024"],
    team: 42,
  },
  {
    title: "Cartier Time Art",
    image:
      "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/cartier-time",
    description: "Interactive journey through watchmaking heritage",
    category: "Luxury Heritage",
    year: "2024",
    client: "Cartier",
    location: "Paris",
    team: 35,
  },
  {
    title: "Apple Vision Pro Experience",
    image:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/apple-vision",
    description:
      "Revolutionary spatial computing interface design for Apple's groundbreaking mixed reality device",
    category: "Spatial Computing",
    year: "2024",
    client: "Apple",
    location: "Cupertino",
    awards: ["Red Dot: Best of the Best 2024", "iF Gold Award 2024"],
    team: 48,
  },
  {
    title: "Nike Digital Sport Experience",
    image:
      "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/nike-digital",
    description:
      "Integrated digital ecosystem connecting Nike's apps, retail, and training platforms",
    category: "Sports Technology",
    year: "2024",
    client: "Nike",
    location: "Portland",
    awards: ["Webby Award 2024"],
    team: 42,
  },
  {
    title: "Mercedes-Benz VISION EQXX",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/mercedes-vision",
    description:
      "Digital interface and experience design for the revolutionary electric concept car",
    category: "Automotive",
    year: "2024",
    client: "Mercedes-Benz",
    location: "Stuttgart",
    awards: ["Automotive Design Excellence 2024"],
    team: 35,
  },
  {
    title: "Chanel Atelier Digital",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
    link: "/projects/chanel-atelier",
    description:
      "Virtual haute couture experience showcasing craftsmanship and heritage",
    category: "Luxury Fashion",
    year: "2024",
    client: "Chanel",
    location: "Paris",
    awards: ["LVMH Innovation Award 2024"],
    team: 28,
  },
];

const Index = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <HeroSection />
    <main className="flex-1 py-12">
      <ProjectsGrid isRight={false} projects={projects.slice(0, 5)} />
      <ProjectsGrid isRight={true} projects={projects.slice(5, 10)} />
      <ProjectsGrid isRight={false} projects={projects.slice(10, 15)} />
      <ProjectsGrid isRight={true} projects={projects.slice(15, 20)} />
      <ProjectsGrid isRight={false} projects={projects.slice(20, 25)} />
      <ProjectsGrid isRight={true} projects={projects.slice(25, 30)} />
    </main>
    <Footer />
  </div>
);

export default Index;
