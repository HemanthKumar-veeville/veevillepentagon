
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const News = () => (
  <div className="news-page bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <main className="main-content flex-grow p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="news-item bg-white rounded shadow overflow-hidden">
          <img
            src="/assets/images/MW_Overlooked_Blog_Images_1-218c99981d258.jpg"
            alt="MW Overlooked Blog"
            className="w-full h-auto"
          />
        </article>
        <article className="news-item bg-white rounded shadow overflow-hidden">
          <img
            src="/assets/images/Poetry-Pentagram-TrabuccoCampos-01-5719f05ec9801.jpg"
            alt="Poetry News"
            className="w-full h-auto"
          />
        </article>
      </div>
    </main>
    <Footer />
  </div>
);

export default News;
