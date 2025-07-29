// src/components/Home.js

import React, { useState, useEffect } from 'react';

// THIS LINE IS CRUCIAL: Destructure scrollToSection from the props object
const Home = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen ma-16 pt-24 flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-pulse">
            Hello, I'm Philemon
          </h1>
          <div className="h-1 w-28 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full md-4"></div>
        </div>
        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light leading-relaxed max-w-2xl mx-auto">
          A Passionate Fullstack Web Developer specializing in modern, responsive, and dynamic web applications using **React.js**, **Laravel**, and **Node.js**.
          <br />
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            // Use the passed scrollToSection function
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
            View My Work
          </button>
          <button
            // Use the passed scrollToSection function
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            Get In Touch
          </button>
        </div>
        <a
          href="/MyPortfolio_philemonkipkemoi_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
          Download CV
        </a>
        <div className=" mt-10 animate-bounce">
          <svg className="w-8 h-8 text-purple-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;