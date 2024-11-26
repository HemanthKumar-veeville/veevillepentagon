
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => (
  <div className="contact-page bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <main className="main-content flex-grow p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
      <p className="text-lg text-gray-700">Feel free to reach out through our email or phone.</p>
      <img
        src="/assets/images/ps_shakeshack_01-e3f61c9b5d12f.jpg"
        alt="Contact Us Image"
        className="rounded shadow w-full md:w-1/2 mx-auto"
      />
    </main>
    <Footer />
  </div>
);

export default Contact;
