import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Menu as NavMenu, MenuItem, ProductItem } from '@/components/ui/navbar-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Disable scrolling when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const sections = [
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'blog', name: 'Blog' },
    { id: 'home', name: 'Home' },
  ];

  // Enhanced scroll function: if element is not found, redirect to home with hash.
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust offset as needed
        behavior: 'smooth',
      });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 py-4 px-6 transition-all duration-300",
          scrolled ? "bg-navy/90 backdrop-blur-md shadow-md" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Home button: scrolls to home */}
          <a
            onClick={() => scrollToSection('home')}
            className="cursor-pointer text-2xl font-bold text-teal"
          >
            Adarsh.dev
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <NavMenu setActive={setActive}>
              <span
                onClick={() => scrollToSection('about')}
                className="cursor-pointer px-4 text-slate hover:text-teal transition-colors"
              >
                About
              </span>
              <span onClick={() => scrollToSection('projects')}>
                <MenuItem setActive={setActive} active={active} item="Projects">
                  <div className="text-sm grid grid-cols-2 gap-6 p-4 min-w-[500px]">
                    <ProductItem
                      title="AIRA"
                      href="https://github.com/code0adarsh/AIRA"
                      src="https://images.unsplash.com/photo-1677442135136-760c813a746d?q=80&w=2832&auto=format&fit=crop"
                      description="AI Research Assistant integrating 5 modular features"
                    />
                    <ProductItem
                      title="Prepify AI"
                      href="https://github.com/code0adarsh"
                      src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop"
                      description="AI-powered career platform with React, Node.js, and Google Generative AI"
                    />
                    <ProductItem
                      title="Teaching Platform"
                      href="https://github.com/code0adarsh"
                      src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop"
                      description="Teaching platform for CS courses with personalized approach"
                    />
                    <ProductItem
                      title="Portfolio"
                      href="https://github.com/code0adarsh"
                      src="https://images.unsplash.com/photo-1675348304916-f14ce5a65071?q=80&w=2070&auto=format&fit=crop"
                      description="Personal portfolio showcasing skills and projects"
                    />
                  </div>
                </MenuItem>
              </span>
              {isHomePage ? (
                <span
                  onClick={() => scrollToSection('blog')}
                  className="cursor-pointer px-4 text-slate hover:text-teal transition-colors"
                >
                  Blog
                </span>
              ) : (
                <Link to="/blog" className="px-4 text-slate hover:text-teal transition-colors">
                  Blog
                </Link>
              )}
              <span
                onClick={() => scrollToSection('footer')}
                className="cursor-pointer px-4 text-slate hover:text-teal transition-colors"
              >
                Contact
              </span>
            </NavMenu>

            <div className="flex space-x-4 ml-8">
              <a
                href="https://github.com/code0adarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/adarshpradhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://x.com/codedemon5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-teal"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-navy/95 p-6 flex flex-col justify-center items-center transition-transform duration-300 backdrop-blur-md md:hidden">
          {/* X button */}
          <button className="absolute top-4 right-4 text-teal" onClick={toggleMenu} aria-label="Close Menu">
            <FaTimes size={24} />
          </button>
          <div className="flex flex-col space-y-6 text-center">
            {isHomePage ? (
              <>
                <span onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-lg text-slate hover:text-teal transition-colors cursor-pointer">
                  <span className="text-teal mr-1">01.</span>About
                </span>
                <span onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-lg text-slate hover:text-teal transition-colors cursor-pointer">
                  <span className="text-teal mr-1">02.</span>Projects
                </span>
                <span onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }} className="text-lg text-slate hover:text-teal transition-colors cursor-pointer">
                  <span className="text-teal mr-1">03.</span>Blog
                </span>
                <span onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }} className="text-lg text-slate hover:text-teal transition-colors cursor-pointer">
                  <span className="text-teal mr-1">04.</span>Contact
                </span>
              </>
            ) : (
              <>
                <span onClick={() => { setIsMenuOpen(false); scrollToSection('about'); }} className="text-lg text-slate hover:text-teal transition-colors cursor-pointer">
                  <span className="text-teal mr-1">01.</span>About
                </span>
                <span onClick={() => { setIsMenuOpen(false); scrollToSection('projects'); }} className="text-lg text-slate hover:text-teal transition-colors cursor-pointer">
                  <span className="text-teal mr-1">02.</span>Projects
                </span>
                <span onClick={() => { setIsMenuOpen(false); }} className="text-lg text-slate hover:text-teal transition-colors cursor-pointer">
                  <span className="text-teal mr-1">03.</span>Blog
                </span>
                <span onClick={() => { setIsMenuOpen(false); scrollToSection('footer'); }} className="text-lg text-slate hover:text-teal transition-colors cursor-pointer">
                  <span className="text-teal mr-1">04.</span>Contact
                </span>
              </>
            )}
          </div>
          <div className="flex space-x-6 mt-12">
            <a
              href="https://github.com/code0adarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/adarshpradhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/codedemon5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
