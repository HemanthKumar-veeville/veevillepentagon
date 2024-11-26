import React from "react";
import ProjectsGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 py-12">
        <ProjectsGrid isRight={false} />
        <ProjectsGrid isRight={true} />
        <ProjectsGrid isRight={false} />
        <ProjectsGrid isRight={true} />
        <ProjectsGrid isRight={false} />
        <ProjectsGrid isRight={true} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
