
import React from 'react';

const MainContent = () => (
  <main className="content p-8 bg-gray-100">
    <section className="homeSlider space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">Explore Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <article className="homeSlider__slide bg-white rounded shadow overflow-hidden">
          <a
            aria-label="Marina Bay Sands"
            href="/work/marina-bay-sands"
            className="block"
          >
            <img
              src="/assets/images/MW_Overlooked_Blog_Images_1.jpg"
              alt="Marina Bay Sands Project"
              className="w-full h-auto"
            />
          </a>
        </article>
        <article className="homeSlider__slide bg-white rounded shadow overflow-hidden">
          <a
            aria-label="Another Project"
            href="/work/another-project"
            className="block"
          >
            <img
              src="/assets/images/Poetry-Pentagram-TrabuccoCampos-01.jpg"
              alt="Another Project"
              className="w-full h-auto"
            />
          </a>
        </article>
        <article className="homeSlider__slide bg-white rounded shadow overflow-hidden">
          <a
            aria-label="Third Project"
            href="/work/third-project"
            className="block"
          >
            <img
              src="/assets/images/Abridge_CaseStudy_01copy.jpg"
              alt="Third Project"
              className="w-full h-auto"
            />
          </a>
        </article>
      </div>
    </section>
  </main>
);

export default MainContent;
