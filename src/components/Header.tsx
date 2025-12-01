import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-2">
        <div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
  <img
    src="/logo.png"
    alt="Net Vision Logo"
    style={{
      height: '66px',
      width: '66px',
      objectFit: 'contain',
      transition: 'transform 0.3s ease',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  />

  <span
    style={{
      fontFamily: "'Cinzel', 'Times New Roman', serif",
      fontWeight: 700,
      fontSize: '1.6rem',
      letterSpacing: '0.5px',
      color: isScrolled ? '#14532d' : '#14532d',
      transition: 'color 0.3s ease, transform 0.3s ease',
      transform: 'skewX(-6deg)', // <-- slight right tilt
      display: 'inline-block',
    }}
  >
    NET VISION
  </span> 
</div>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors duration-300 hover:text-green-600 text-sm lg:text-base ${
                isScrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors duration-300 hover:text-green-600 text-sm lg:text-base ${
                isScrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors duration-300 hover:text-green-600 text-sm lg:text-base ${
                isScrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-green-600 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 text-sm lg:text-base"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 p-2 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-800 hover:text-green-600 transition-colors duration-300 text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-800 hover:text-green-600 transition-colors duration-300 text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-800 hover:text-green-600 transition-colors duration-300 text-left py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 text-center mt-2"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
