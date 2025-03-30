
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Menu as NavMenu, MenuItem, ProductItem, HoveredLink } from '@/components/ui/navbar-menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

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
          Adarsh
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <NavMenu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col space-y-2 min-w-40">
                <Link to="/#home" className="text-slate hover:text-teal transition-colors">Welcome</Link>
                <Link to="/#about" className="text-slate hover:text-teal transition-colors">About Me</Link>
                <Link to="/#projects" className="text-slate hover:text-teal transition-colors">My Projects</Link>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="text-sm grid grid-cols-2 gap-6 p-4 min-w-[500px]">
                <ProductItem
                  title="AIRA"
                  href="https://github.com/code0adarsh/AIRA"
                  imgSrc="https://images.unsplash.com/photo-1677442135136-760c813a746d?q=80&w=2832&auto=format&fit=crop"
                  description="AI Research Assistant integrating 5 modular features"
                />
                <ProductItem
                  title="Prepify AI"
                  href="https://github.com/code0adarsh"
                  imgSrc="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop"
                  description="AI-powered career platform with React, Node.js, and Google Generative AI"
                />
                <ProductItem
                  title="Teaching Platform"
                  href="https://github.com/code0adarsh"
                  imgSrc="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop"
                  description="Teaching platform for CS courses with personalized approach"
                />
                <ProductItem
                  title="Portfolio"
                  href="https://github.com/code0adarsh"
                  imgSrc="https://images.unsplash.com/photo-1675348304916-f14ce5a65071?q=80&w=2070&auto=format&fit=crop"
                  description="Personal portfolio showcasing skills and projects"
                />
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-2 min-w-40">
                <a href="mailto:pradhanadarsh001@gmail.com" className="text-slate hover:text-teal transition-colors">Email</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">LinkedIn</a>
                <a href="https://github.com/code0adarsh" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">GitHub</a>
              </div>
            </MenuItem>
          </NavMenu>
          
          <div className="flex space-x-4 ml-8">
            <a href="https://github.com/code0adarsh" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
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
          "fixed inset-0 z-40 bg-navy/95 p-6 flex flex-col justify-center items-center transition-transform duration-300 backdrop-blur-md md:hidden",
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
          <a href="https://github.com/code0adarsh" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-teal transition-colors">
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
