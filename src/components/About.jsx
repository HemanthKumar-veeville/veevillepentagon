
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => (
  <div className="about-page bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <main className="main-content flex-grow p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-lg mb-4 text-gray-700">Learn more about our history and achievements.</p>
      <img
        src="/assets/images/gl_lalettura_01-7a0d13279f02b.jpg"
        alt="About Us Image"
        className="rounded shadow w-full md:w-1/2 mx-auto"
      />
    </main>
    <Footer />
  </div>
);

export default About;
