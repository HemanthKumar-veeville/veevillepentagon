
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Work = () => (
  <div className="work-page bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <main className="main-content flex-grow p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="project bg-white rounded shadow overflow-hidden">
          <img
            src="/assets/images/Poetry-Pentagram-TrabuccoCampos-01.jpg"
            alt="Poetry Project"
            className="w-full h-auto"
          />
        </article>
        <article className="project bg-white rounded shadow overflow-hidden">
          <img
            src="/assets/images/ps_shakeshack_01-69665a05f2ac3.jpg"
            alt="Shake Shack Project"
            className="w-full h-auto"
          />
        </article>
        <article className="project bg-white rounded shadow overflow-hidden">
          <img
            src="/assets/images/Abridge_CaseStudy_01copy.jpg"
            alt="Abridge Case Study"
            className="w-full h-auto"
          />
        </article>
      </div>
    </main>
    <Footer />
  </div>
);

export default Work;
