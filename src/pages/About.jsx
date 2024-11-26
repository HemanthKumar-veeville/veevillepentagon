
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => (
  <div className="about-page min-h-screen flex flex-col bg-gray-100">
    <Header />
    <main className="flex-grow p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-700">Learn more about our history, mission, and team.</p>
    </main>
    <Footer />
  </div>
);

export default About;
