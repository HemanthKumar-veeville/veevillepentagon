import React from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Andrea Trabucco-Campos",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80",
  },
  {
    name: "Jon Hewitt",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80",
  },
  {
    name: "Astrid Stavro",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
  },
  {
    name: "Luke Powell",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
  },
  {
    name: "Andrea Trabucco-Campos",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80",
  },
  {
    name: "Jon Hewitt",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80",
  },
  {
    name: "Astrid Stavro",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
  },
  {
    name: "Luke Powell",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
  },
  {
    name: "Andrea Trabucco-Campos",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80",
  },
  {
    name: "Jon Hewitt",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80",
  },
  {
    name: "Astrid Stavro",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
  },
  {
    name: "Luke Powell",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
  },
  {
    name: "Andrea Trabucco-Campos",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80",
  },
  {
    name: "Jon Hewitt",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80",
  },
  {
    name: "Astrid Stavro",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
  },
  {
    name: "Luke Powell",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
  },
  {
    name: "Andrea Trabucco-Campos",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80",
  },
  {
    name: "Jon Hewitt",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80",
  },
  {
    name: "Astrid Stavro",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
  },
  {
    name: "Luke Powell",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
  },
];

const TeamGrid = () => {
  return (
    <div className="bg-black py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
