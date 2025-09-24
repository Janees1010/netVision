'use client';

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-green-800 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            Trusted Solar Experts in
            <span className="block text-yellow-400">Kerala & Tamil Nadu</span>
            Since 2011
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 animate-fade-in-delay px-4">
            Delivering premium solar power solutions for Resedential, institutions,
            and industries—specializing in Installation, Commissioning, and
            signaling systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2 px-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={18} />
            </button>
{/* ~ */}
          </div>

          <div className="mt-8 py-3 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center animate-fade-in-delay-3 px-4">
            <div className="bg-black bg-opacity-20 rounded-lg p-4 sm:p-5 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1">13+</div>
              <div className="text-sm sm:text-base opacity-90">Years Experience</div>
            </div>
            <div className="bg-black bg-opacity-20 rounded-lg p-4 sm:p-5 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1">100+</div>
              <div className="text-sm sm:text-base opacity-90">Major Installations</div>
            </div>
            <div className="bg-black bg-opacity-20 rounded-lg p-4 sm:p-5 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1">Kerala & TN</div>
              <div className="text-sm sm:text-base opacity-90">Statewide Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
