'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ['/netvision-3.jpeg', '/netvision-2.jpeg','/netvision-1.jpeg','/netvision-4.jpeg','/netvision-5.jpeg','/netvision-6.jpeg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5s for smoother experience
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-black"
    >
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Overlay Gradient for Better Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight drop-shadow-lg">
            Trusted Solar Experts in
            <span className="block text-yellow-400 mt-1">Kerala & Tamil Nadu</span>
            Since 2011
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Delivering premium solar power solutions for Residential, Institutional,
            and Industrial sectors — specializing in Installation, Commissioning,
            and Advanced Signalling Systems.
          </p>

          <button
            onClick={scrollToContact}
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>Get Free Quote</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? 'bg-yellow-500 scale-110'
                : 'bg-white/70 hover:bg-yellow-400'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
