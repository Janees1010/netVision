'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Over a Decade of Experience',
      description: 'Established in 2011 with 14+ years of solar expertise across Kerala and Tamil Nadu.',
    },
    {
      icon: Users,
      title: 'Diverse Client Base',
      description: 'Serving Residential, Healthcare, Hospitality, Educational Institutions, Financial Institutions, IT Parks, Panchayats, and Government Institutions.',
    },
    {
      icon: Zap,
      title: 'Complete Solar Solutions',
      description: 'From on-grid, off-grid and hybrid systems',
    },
    {
      icon: Shield,
      title: 'Trusted and Reliable',
      description: 'Recognized for timely project completion, bank-supported loans, and after-sales support.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Net Vision</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 text-justify max-w-3xl mx-auto leading-relaxed">
            Net Vision is a Trivandrum-based company, established on 11th November 2011, specializing
            in the supply, installation, and commissioning of solar power systems, power electronics,
            and signaling equipment. With operations across Kerala and southern Tamil Nadu, we are
            committed to delivering sustainable and smart energy solutions to a broad spectrum of clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-green-800 rounded-2xl p-8 md:p-12 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                At Net Vision, we aim to accelerate the shift to sustainable energy by providing
                reliable, affordable, and advanced solar solutions. Our mission is to empower
                institutions, communities, and households with clean energy systems that drive
                both environmental and economic benefits.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">14+ yrs</div>
                <div className="text-base opacity-90">Industry Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">Statewide</div>
                <div className="text-base opacity-90">Project Presence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
