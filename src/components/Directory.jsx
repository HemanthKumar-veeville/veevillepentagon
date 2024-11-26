import React from "react";

const associates = [
  "Shigeto Akiyama",
  "Hamlet Auyeung",
  "Laura Berglund",
  "Nav Bhatia",
  "Don Bilodeau",
  "Yoon-Young Chai",
  "Cleber de Campos",
  "Tiffany Fenner",
  "Ceyrilia Francis-Kirton",
  "Stan Goodman",
  "Johannes Grimmond",
  "Marielle Gross",
  "Jase Hueser",
  "Alex Hulme",
  "Jenny Hung",
  "Ashley Johnson",
  "Mira Khandpur",
  "Kurt Koepfle",
  "Kimberley Langham",
  "Jack Llewellyn",
  "Tamara McKenna",
  "Greg Morrison",
  "Delta Murphy",
  "Alice Murray",
  "Jane Plüer",
  "Kirstin Rocke-Huber",
  "Sonja Scharrer",
  "Jonny Sikov",
  "Leah Speakman",
  "Stu Taylor",
  "Kim Walker",
  "Sherri Whitmarsh",
  "Romilly Winter",
];

const partnersEmeriti = [
  "Lorenzo Apicella",
  "James Biber",
  "Howard Brown",
  "Robert Brunner",
  "Theo Crosby",
  "Alan Fletcher",
  "Colin Forbes",
  "Bob Gill",
  "Kenneth Grange",
  "April Greiman",
  "Fernando Gutiérrez",
  "Peter Harrison",
  "Ron Herron",
  "David Hillman",
  "Kit Hinrichs",
  "Linda Hinrichs",
  "Mervyn Kurlansky",
  "Sascha Lobe",
  "Etan Manasse",
  "John McConnell",
  "David Pelham",
  "Woody Pirtle",
  "David Pocknell",
  "Naresh Ramchandani",
  "William Russell",
  "Peter Saville",
  "Neil Shakery",
  "Astrid Stavro",
  "Lisa Strausfeld",
  "Yuri Suzuki",
  "Daniel Weil",
  "Lowell Williams",
];

const Directory = () => {
  return (
    <div className="bg-black text-white py-16 px-16">
      {/* Associates Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Associates</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {associates.map((name, index) => (
            <p key={index} className="text-sm">
              {name}
            </p>
          ))}
        </div>
      </section>

      {/* Partners Emeriti Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Partners Emeriti</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partnersEmeriti.map((name, index) => (
            <p key={index} className="text-sm">
              {name}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Directory;
