// src/App.js

import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Home from './components/Home'; // Ensure this import is correct
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Make sure scrollToSection is defined HERE
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Also ensure this closes the mobile menu if it's open
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navbar (ensure your buttons here also correctly use scrollToSection) */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo />
            </div>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    // Verify this onClick is correct
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
            {/* Hamburger Menu Button */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 pb-2 border-t border-slate-800 mt-4">
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      // Verify this onClick is correct
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left px-4 py-3 text-slate-300 hover:text-purple-400 hover:bg-slate-800/50 transition-all duration-300 font-medium rounded-lg"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* THIS IS THE CRITICAL LINE FOR PASSING THE PROP */}
      <Home scrollToSection={scrollToSection} />

      <About />
      <Skills />
      <Projects />

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Philoo. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              {/* Social media SVGs */}
              <svg className="w-5 h-5 text-slate-500 hover:text-purple-400 transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16.004 2.003A13.996 13.996 0 0 0 2 16c0 2.477.648 4.851 1.874 6.961L2 30l7.222-1.831A13.928 13.928 0 0 0 16 30c7.72 0 14-6.279 14-14S23.72 2.003 16.004 2.003zm0 25.793c-2.175 0-4.29-.58-6.137-1.678l-.44-.261-4.283 1.087 1.138-4.177-.288-.459A11.957 11.957 0 0 1 4.001 16c0-6.627 5.372-11.999 12.003-11.999 6.628 0 12 5.372 12 11.999s-5.372 11.999-12 11.999zm6.47-8.57c-.354-.177-2.096-1.035-2.42-1.151-.324-.118-.56-.177-.797.177s-.916 1.151-1.123 1.386c-.206.235-.412.265-.766.088-.354-.177-1.493-.55-2.842-1.755-1.05-.937-1.756-2.09-1.963-2.443-.206-.353-.022-.544.154-.72.158-.157.354-.412.53-.618.176-.206.235-.353.353-.589.118-.236.059-.442-.03-.62-.088-.176-.797-1.921-1.092-2.634-.287-.688-.58-.59-.797-.601l-.677-.012c-.236 0-.618.088-.94.412s-1.233 1.204-1.233 2.938 1.264 3.411 1.44 3.646c.177.235 2.49 3.801 6.035 5.33.843.365 1.5.582 2.012.745.844.268 1.614.23 2.222.14.678-.1 2.096-.854 2.392-1.68.294-.825.294-1.532.206-1.68-.088-.147-.323-.236-.677-.412z" />
              </svg>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.27 1.05l-1.6 1.6a16 16 0 006.58 6.58l1.6-1.6a1 1 0 011.05-.27l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;