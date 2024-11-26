
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Work = () => (
  <div className="work-page min-h-screen flex flex-col bg-gray-100">
    <Header />
    <main className="flex-grow p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Work</h1>
      <p className="text-lg text-gray-700">Showcasing our diverse projects and achievements.</p>
    </main>
    <Footer />
  </div>
);

export default Work;
