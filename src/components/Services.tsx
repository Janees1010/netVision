'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Home, Building, Settings, Calculator, ArrowRight, Users } from 'lucide-react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Home,
      title: "Solar Power Systems",
      description: "Design, Supply, and Installation of On-Grid, Hybrid, and Off-Grid solar power plants for Resedential, institutions, and businesses.",
      features: ["On-Grid", "Hybrid", "off-Grid"]
    },
    {
      icon: Building,
      title: "Solar Lighting & Signaling",
      description: "Complete solutions for solar street lights and traffic signaling systems across urban and rural infrastructure.",
      features: [
        "trafic signal",
        "pedestial crossing signal system",
        "fixed mode",
        "vehical actuated mode",
        "area trafic control mode "
      ]
    },
    {
      icon: Settings,
      title: "Panels & Inverter Supply",
      description: "Supply and integration of top-tier Mono PERC, TopCon panels, and inverters like string, micro, and hybrid models.",
      features: ["power electronics", "home invertors", "online ups", "higher kv"]
    },
    {
      icon: Calculator,
      title: "Government Subsidy",
      description: "Support for PM Surya Ghar Yojana, including documentation, bank tie-ups, and subsidy disbursement guidance.",
      features: [
        "loan assistant support in low intetest rate subsidy",
        "quick and quality instalation",
        "regular maintainance support",
      ]
    }
  ];

  const partners = ["Eastman", "Growatt"];

  return (
    <>
      {/* Services Section */}
      <section id="services" ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From solar power plant Installations to traffic signaling and government-subsidized rooftop systems, Net Vision delivers complete solar solutions you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-gray-50 rounded-2xl p-8 hover:bg-green-50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-green-100 group-hover:bg-green-200 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <ArrowRight className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Power Up with Solar?</h3>
              <p className="text-lg opacity-90 mb-8">
                Join hundreds across Kerala and Tamil Nadu already benefiting from solar energy installed by Net Vision.
              </p>
              <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                Get Your Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Users className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Business Partners
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are proud to collaborate with industry-leading partners who share our vision and values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className={`p-6 bg-white rounded-2xl  shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold text-gray-800">{partner}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
