import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">EcoSpace</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#features" className="nav-link">Features</a>
              <a href="#dashboard" className="nav-link">Dashboard</a>
              <a href="#marketplace" className="nav-link">Marketplace</a>
              <a href="#team" className="nav-link">Team</a>
              <a href="#about" className="nav-link">About</a>
              <button className="ml-4 px-6 py-2 rounded-full bg-primary text-white hover:bg-primary-light transition-colors">
                Request Demo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
          <a href="#features" className="mobile-nav-link">Features</a>
          <a href="#dashboard" className="mobile-nav-link">Dashboard</a>
          <a href="#marketplace" className="mobile-nav-link">Marketplace</a>
          <a href="#team" className="mobile-nav-link">Team</a>
          <a href="#about" className="mobile-nav-link">About</a>
          <button className="w-full mt-4 px-6 py-2 rounded-full bg-primary text-white hover:bg-primary-light transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;