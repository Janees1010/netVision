'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/netvision-1.jpeg',
    '/netvision-2.jpeg',
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Sliding Background */}
      <div className="absolute w-full inset-0 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
                height: '100%',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto drop-shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            Trusted Solar Experts in
            <span className="block text-yellow-400">Kerala & Tamil Nadu</span>
            Since 2011
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 animate-fade-in-delay px-4">
            Delivering premium Solar power Solutions for Residential, Institutions,
            and Industries Specializing in Installation, Commissioning, and
            Signaling systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2 px-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'bg-yellow-500' : 'bg-white opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 sm:bottom-18 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
