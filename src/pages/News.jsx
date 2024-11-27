import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import NewsCard from "../components/NewsCard";

export const newsData = [
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    title:
      "AI Breakthrough: New Language Model Achieves Human-Level Understanding",
    excerpt:
      "Scientists develop a revolutionary AI system capable of understanding context and nuance in human communication with unprecedented accuracy.",
    metadata: "By Sarah Chen | Mar 15, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80&w=800",
    title: "SpaceX Successfully Launches First Civilian Mission to Mars",
    excerpt:
      "Historic milestone as private space company sends first civilian crew on a journey to the Red Planet.",
    metadata: "By Michael Rodriguez | Mar 14, 2024",
    category: "Space",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    title: "Global Climate Summit Yields Ambitious Carbon Reduction Targets",
    excerpt:
      "World leaders agree to accelerate renewable energy adoption and phase out fossil fuels by 2040.",
    metadata: "By Emma Thompson | Mar 13, 2024",
    category: "Environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800",
    title:
      "Quantum Computing Milestone: Error-Free Quantum Processor Developed",
    excerpt:
      "Researchers achieve breakthrough in quantum computing stability, paving way for practical applications.",
    metadata: "By David Kumar | Mar 12, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    title: "Revolutionary Cancer Treatment Shows 90% Success Rate in Trials",
    excerpt:
      "New immunotherapy approach demonstrates unprecedented results in treating advanced-stage cancers.",
    metadata: "By Dr. Lisa Wang | Mar 11, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    title: "Electric Vehicle Sales Surpass Traditional Cars for First Time",
    excerpt:
      "Global shift to electric mobility accelerates as EV sales reach historic milestone in major markets.",
    metadata: "By James Morrison | Mar 10, 2024",
    category: "Automotive",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    title: "Breakthrough in Nuclear Fusion Energy Generation",
    excerpt:
      "Scientists achieve sustained nuclear fusion reaction, marking major progress toward unlimited clean energy.",
    metadata: "By Robert Chang | Mar 9, 2024",
    category: "Science",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    title: "Ancient City Discovered Beneath Amazon Rainforest",
    excerpt:
      "Archaeologists uncover massive pre-Columbian settlement using advanced LiDAR technology.",
    metadata: "By Maria Garcia | Mar 8, 2024",
    category: "Archaeology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    title: "Major Breakthrough in Alzheimer's Treatment",
    excerpt:
      "New drug shows promising results in reversing memory loss in early-stage Alzheimer's patients.",
    metadata: "By Dr. John Smith | Mar 7, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    title: "Cybersecurity Alert: Major Tech Companies Unite Against AI Threats",
    excerpt:
      "Leading tech firms form alliance to combat sophisticated AI-powered cyber attacks.",
    metadata: "By Alex Turner | Mar 6, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    title: "First Human Settlement on Moon Set for 2026",
    excerpt:
      "International space agencies announce timeline for permanent lunar base establishment.",
    metadata: "By Chris Anderson | Mar 5, 2024",
    category: "Space",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    title: "Revolutionary Battery Technology Triples EV Range",
    excerpt:
      "New solid-state battery technology promises to transform electric vehicle industry.",
    metadata: "By Jennifer Lee | Mar 4, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    title:
      "AI Breakthrough: New Language Model Achieves Human-Level Understanding",
    excerpt:
      "Scientists develop a revolutionary AI system capable of understanding context and nuance in human communication with unprecedented accuracy.",
    metadata: "By Sarah Chen | Mar 15, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    title: "Universal Cancer Vaccine Shows Promise",
    excerpt:
      "Revolutionary mRNA vaccine effective against multiple cancer types in trials.",
    metadata: "By Dr. Rachel Kim | Feb 25, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
    title: "Brain-Computer Interface Enables Paralyzed Patients to Walk",
    excerpt:
      "Groundbreaking neural implant technology restores mobility in spinal cord injury patients.",
    metadata: "By Dr. Marcus Wong | Feb 24, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&q=80&w=800",
    title: "Ocean Cleanup Project Removes 50% of Pacific Garbage Patch",
    excerpt:
      "Innovative floating system successfully halves the size of ocean plastic waste accumulation.",
    metadata: "By Laura Martinez | Feb 23, 2024",
    category: "Environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544333323-ce11fa0ca5a6?auto=format&fit=crop&q=80&w=800",
    title: "Flying Cars Receive FAA Certification",
    excerpt:
      "First commercial flying car model approved for both road and air travel in the US.",
    metadata: "By Tom Bradley | Feb 22, 2024",
    category: "Transportation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800",
    title: "Asteroid Mining Company Extracts Rare Earth Metals",
    excerpt:
      "First successful commercial extraction of valuable minerals from near-Earth asteroid.",
    metadata: "By Jessica Chang | Feb 21, 2024",
    category: "Space",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    title: "Digital Currency Replaces Cash in Major Economy",
    excerpt:
      "First G7 nation completes transition to fully digital central bank currency.",
    metadata: "By Robert Fischer | Feb 20, 2024",
    category: "Finance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=800",
    title: "Gene Editing Cures Genetic Heart Disease",
    excerpt:
      "CRISPR therapy successfully treats inherited cardiac conditions in clinical trials.",
    metadata: "By Dr. Emily Watson | Feb 19, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548407260-da850faa41e3?auto=format&fit=crop&q=80&w=800",
    title: "Vertical Farms Feed Million in Urban Centers",
    excerpt:
      "Revolutionary indoor farming system provides sustainable food source for major cities.",
    metadata: "By Daniel Park | Feb 18, 2024",
    category: "Agriculture",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
    title: "Self-Healing Materials Transform Construction",
    excerpt:
      "New concrete formula repairs cracks automatically, extending infrastructure lifespan.",
    metadata: "By Sarah Johnson | Feb 17, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    title: "Water Found on Europa's Surface",
    excerpt:
      "NASA confirms presence of liquid water on Jupiter's moon, boosting chances of extraterrestrial life.",
    metadata: "By Dr. Alan Carter | Feb 16, 2024",
    category: "Space",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
    title: "AI System Predicts Earthquakes",
    excerpt:
      "Machine learning algorithm successfully forecasts seismic activity one week in advance.",
    metadata: "By Dr. Lisa Chen | Feb 15, 2024",
    category: "Science",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    title: "Ancient Human Species Discovered",
    excerpt:
      "New hominin fossils reveal previously unknown branch of human evolution.",
    metadata: "By Prof. Michael Brown | Feb 14, 2024",
    category: "Science",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    title: "Quantum Encryption Becomes Standard",
    excerpt:
      "Major tech companies implement quantum-safe security protocols globally.",
    metadata: "By Alex Wong | Feb 13, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    title: "Artificial Wombs Support Premature Babies",
    excerpt:
      "Medical breakthrough allows extremely premature infants to develop normally outside the womb.",
    metadata: "By Dr. Sarah Martinez | Feb 12, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800",
    title: "Carbon Capture Technology Goes Mainstream",
    excerpt:
      "Direct air capture facilities remove gigatons of CO2 from atmosphere annually.",
    metadata: "By James Wilson | Feb 11, 2024",
    category: "Environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    title: "Neural Link Enhances Human Memory",
    excerpt:
      "Brain-computer interface successfully augments memory formation and recall.",
    metadata: "By Dr. Kevin Zhang | Feb 10, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
    title: "First Interstellar Message Received",
    excerpt:
      "Radio astronomers detect artificial signal from nearby star system.",
    metadata: "By Dr. Maria Rodriguez | Feb 9, 2024",
    category: "Space",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    title: "Personalized Cancer Vaccines Show Success",
    excerpt:
      "AI-designed immunotherapy treatments achieve remission in terminal patients.",
    metadata: "By Dr. Robert Kim | Feb 8, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    title: "Fusion Power Plant Goes Online",
    excerpt:
      "First commercial fusion reactor begins providing clean energy to power grid.",
    metadata: "By Dr. Thomas Anderson | Feb 7, 2024",
    category: "Energy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    title: "Quantum Computer Breaks Encryption",
    excerpt:
      "256-bit encryption cracked in hours, raising cybersecurity concerns.",
    metadata: "By Edward Chen | Feb 6, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    title: "Lost City Found in Amazon",
    excerpt: "Advanced radar reveals massive pre-Columbian urban complex.",
    metadata: "By Dr. Isabella Santos | Feb 5, 2024",
    category: "Archaeology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    title: "Brain Mapping Project Completed",
    excerpt:
      "Scientists create first complete digital map of human neural connections.",
    metadata: "By Dr. James Lee | Feb 4, 2024",
    category: "Science",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    title: "Quantum Internet Goes Live",
    excerpt:
      "First intercontinental quantum network enables unhackable communication.",
    metadata: "By Dr. Sarah Wong | Feb 3, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    title: "Mars Sample Return Success",
    excerpt:
      "First Martian rocks arrive on Earth, revealing signs of ancient life.",
    metadata: "By Michael Anderson | Feb 2, 2024",
    category: "Space",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    title: "Flying Taxis Launch in Major Cities",
    excerpt:
      "Electric vertical takeoff vehicles begin commercial passenger service.",
    metadata: "By Jennifer Park | Feb 1, 2024",
    category: "Transportation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=800",
    title: "Universal Flu Vaccine Developed",
    excerpt:
      "Single shot provides lifetime protection against all influenza strains.",
    metadata: "By Dr. Robert Chen | Jan 31, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800",
    title: "Ocean Thermal Energy Takes Off",
    excerpt:
      "Floating power plants convert temperature differences into clean electricity.",
    metadata: "By Dr. Maria Kim | Jan 30, 2024",
    category: "Energy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    title: "Artificial Synapses Match Brain Efficiency",
    excerpt:
      "New neuromorphic computing chip operates with human brain's energy efficiency.",
    metadata: "By Dr. Thomas Lee | Jan 29, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    title: "Aging Reversal Treatment Approved",
    excerpt:
      "FDA clears first therapy shown to reverse biological aging markers.",
    metadata: "By Dr. Emily Chen | Jan 28, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    title: "Global Forest Restoration Milestone",
    excerpt:
      "One trillion trees planted worldwide, exceeding global restoration goals.",
    metadata: "By David Wilson | Jan 27, 2024",
    category: "Environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800",
    title: "Quantum Teleportation Breakthrough",
    excerpt: "Scientists achieve instant matter transfer at molecular level.",
    metadata: "By Dr. Alan Zhang | Jan 26, 2024",
    category: "Physics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
    title: "Lunar Mining Operations Begin",
    excerpt: "First helium-3 shipment arrives from Moon's surface.",
    metadata: "By Sarah Anderson | Jan 25, 2024",
    category: "Space",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    title: "Memory Transfer Between Brains",
    excerpt:
      "Direct brain-to-brain knowledge transfer achieved in laboratory setting.",
    metadata: "By Dr. Michael Wang | Jan 24, 2024",
    category: "Neuroscience",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    title: "AI Solves Protein Folding Challenge",
    excerpt:
      "Machine learning system predicts all possible protein structures.",
    metadata: "By Dr. Lisa Chen | Jan 23, 2024",
    category: "Science",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
    title: "Wireless Electricity Goes Global",
    excerpt:
      "Long-distance wireless power transmission becomes commercially viable.",
    metadata: "By James Thompson | Jan 22, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&q=80&w=800",
    title: "Ocean Current Power Generation",
    excerpt:
      "Underwater turbines harness Gulf Stream energy for coastal cities.",
    metadata: "By Dr. Robert Wilson | Jan 21, 2024",
    category: "Energy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544333323-ce11fa0ca5a6?auto=format&fit=crop&q=80&w=800",
    title: "Self-Replicating Robots Created",
    excerpt:
      "Machines demonstrate ability to produce improved versions of themselves.",
    metadata: "By Dr. Sarah Park | Jan 20, 2024",
    category: "Robotics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800",
    title: "First Space Hotel Opens",
    excerpt: "Commercial space station welcomes first tourist guests.",
    metadata: "By Thomas Chen | Jan 19, 2024",
    category: "Space",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    title: "Global Internet Coverage Complete",
    excerpt: "Satellite network provides free basic internet access worldwide.",
    metadata: "By Maria Rodriguez | Jan 18, 2024",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    title: "Artificial Organs End Transplant Waiting Lists",
    excerpt:
      "3D-printed organs eliminate need for donor organs in major hospitals.",
    metadata: "By Dr. John Kim | Jan 17, 2024",
    category: "Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548407260-da850faa41e3?auto=format&fit=crop&q=80&w=800",
    title: "Desert Greening Project Success",
    excerpt: "Sahara transformation creates new agricultural regions.",
    metadata: "By Dr. Ahmed Hassan | Jan 16, 2024",
    category: "Environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
    title: "Mind Reading Device Aids Communication",
    excerpt: "Neural interface allows direct thought-to-text conversion.",
    metadata: "By Dr. Emily Wong | Jan 15, 2024",
    category: "Technology",
  },
];

const NewsPage = () => {
  const renderedIndices = new Set(); // To track already rendered indices

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="mt-20 mx-auto px-4 lg:px-16">
        {/* Page Title */}
        <SectionTitle title="Latest News" />

        {/* News Grid */}
        <div className="grid gap-8">
          {newsData.map((news, index) => {
            if (renderedIndices.has(index)) return null; // Skip already rendered

            // Mark the current index
            renderedIndices.add(index);

            // Calculate secondary indices for stacked cards
            const secondaryIndices = [index + 1, index + 2].filter(
              (i) => i < newsData.length && !renderedIndices.has(i)
            );

            // Add secondary indices to rendered set
            secondaryIndices.forEach((i) => renderedIndices.add(i));

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
              >
                {/* First Column: Single card */}
                <div className="col-span-1">
                  <NewsCard
                    {...news}
                    isHorizontal={false}
                    className="shadow-md rounded-md overflow-hidden transform hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Second Column: Stacked cards */}
                {secondaryIndices.length > 0 && (
                  <div className="col-span-1 grid grid-rows-2 gap-6">
                    {secondaryIndices.map((secIndex) => (
                      <NewsCard
                        key={secIndex}
                        {...newsData[secIndex]}
                        isHorizontal={true}
                        className="shadow-md rounded-md overflow-hidden transform hover:scale-105 transition duration-300 h-[19rem]"
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default NewsPage;
