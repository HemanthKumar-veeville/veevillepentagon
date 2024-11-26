import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NewsPage from "./pages/News";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route / to the Index page */}
        <Route path="/" element={<Index />} />
        <Route path="/work" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
