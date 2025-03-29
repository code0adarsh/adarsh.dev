
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'blog', name: 'Blog' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      
      // Add shadow to navbar when scrolled
      if (currentPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Set active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element !== null);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 py-4 px-6 transition-all duration-300", 
        scrolled ? "bg-navy/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-teal">
          Portfolio
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {sections.map((section, index) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className={cn("nav-link", activeSection === section.id && "active")}
            >
              <span className="text-teal mr-1">{String(index + 1).padStart(2, '0')}.</span>
              {section.name}
            </a>
          ))}
          <div className="flex space-x-4 ml-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-teal" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-navy p-6 flex flex-col justify-center items-center transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 text-center">
          {sections.map((section, index) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className="text-lg text-slate hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-teal mr-1">{String(index + 1).padStart(2, '0')}.</span>
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex space-x-6 mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
