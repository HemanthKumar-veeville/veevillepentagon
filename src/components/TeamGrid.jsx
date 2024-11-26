import React from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Chief Design Officer",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Former Apple Design Director driving innovation in digital product design.",
    expertise: ["Design Leadership", "Product Strategy", "Innovation"],
    social: {
      linkedin: "sarahchen",
      twitter: "sarahchen_design",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Design Systems",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Pioneering scalable design systems for Fortune 500 companies.",
    expertise: ["Design Systems", "Component Libraries", "Documentation"],
  },
  {
    name: "Emma Schmidt",
    role: "Sustainability Director",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: "Leading initiatives in sustainable design and ethical practices.",
    expertise: ["Sustainable Design", "Environmental Impact", "Ethical Design"],
  },
  {
    name: "Kai Nakamura",
    role: "Innovation Lead",
    location: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    bio: "Exploring the intersection of design and emerging technologies.",
    expertise: ["AI Design", "Future Technologies", "Design Innovation"],
  },
  {
    name: "Priya Patel",
    role: "Head of Accessibility",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Champion for inclusive design and digital accessibility standards.",
    expertise: ["Accessibility", "Inclusive Design", "WCAG Standards"],
  },
  {
    name: "Lars Nielsen",
    role: "Design Operations Director",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400",
    bio: "Optimizing design workflows and team collaboration globally.",
    expertise: ["DesignOps", "Process Optimization", "Team Management"],
  },
  {
    name: "Isabella Romano",
    role: "Design Ethics Lead",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400",
    bio: "Establishing ethical frameworks for design decisions.",
    expertise: ["Ethics", "Privacy Design", "Social Impact"],
  },
  {
    name: "David Park",
    role: "Experience Director",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Crafting memorable user experiences for global brands.",
    expertise: ["UX Strategy", "Service Design", "Customer Journey"],
  },
  {
    name: "Sofia Martinez",
    role: "Brand Design Lead",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Creating cohesive brand experiences across platforms.",
    expertise: ["Brand Design", "Visual Identity", "Brand Strategy"],
  },
  {
    name: "Yuki Tanaka",
    role: "Creative Technology Director",
    location: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    bio: "Bridging design and technology through innovative solutions.",
    expertise: ["Creative Technology", "Prototyping", "Innovation"],
  },
  {
    name: "Oliver Thompson",
    role: "Immersive Design Lead",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400",
    bio: "Pioneering AR/VR experiences and spatial computing.",
    expertise: ["AR/VR", "Spatial Design", "Interactive Design"],
  },
  {
    name: "Mei Lin",
    role: "Typography Director",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?auto=format&fit=crop&q=80&w=400",
    bio: "Developing custom typefaces and typography systems.",
    expertise: ["Typography", "Type Design", "Visual Systems"],
  },
  {
    name: "Felix Weber",
    role: "Motion Design Director",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?auto=format&fit=crop&q=80&w=400",
    bio: "Creating compelling motion design narratives.",
    expertise: ["Motion Design", "Animation", "Visual Effects"],
  },
  {
    name: "Rachel Kim",
    role: "Research Director",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    bio: "Leading user research and behavioral insights.",
    expertise: ["User Research", "Behavioral Design", "Analytics"],
  },
  {
    name: "James Wilson",
    role: "Design Technology Lead",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400",
    bio: "Developing tools and systems for design automation.",
    expertise: ["Design Tools", "Automation", "Development"],
  },
  {
    name: "Alexandra Schmidt",
    role: "Service Design Director",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=400",
    bio: "Designing end-to-end service experiences.",
    expertise: ["Service Design", "Customer Experience", "Journey Mapping"],
  },
  {
    name: "Hiroshi Tanaka",
    role: "Product Design Lead",
    location: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    bio: "Leading product design strategy and execution.",
    expertise: ["Product Design", "UX/UI", "Design Strategy"],
  },
  {
    name: "Nina Patel",
    role: "Design Education Lead",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=400",
    bio: "Developing design education and mentorship programs.",
    expertise: ["Design Education", "Mentorship", "Skill Development"],
  },
  {
    name: "Thomas Weber",
    role: "Design Systems Engineer",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Building technical foundations for design systems.",
    expertise: ["Frontend Development", "Design Systems", "Architecture"],
  },
  {
    name: "Lisa Chen",
    role: "Content Design Lead",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
    bio: "Crafting user-centered content strategies.",
    expertise: ["Content Strategy", "UX Writing", "Information Architecture"],
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
