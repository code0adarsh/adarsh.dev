import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Menu as NavMenu, MenuItem, ProductItem } from '@/components/ui/navbar-menu';
import { Menu as LucideMenu, X } from 'lucide-react';

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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

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
                  <div className="text-sm grid grid-cols-2 gap-4 p-4 min-w-[450px]">
                    <ProductItem
                      title="Prepify"
                      href="https://github.com/code0adarsh/Prepify"
                      description="AI-powered interview preparation platform with real-time feedback"
                    />
                    <ProductItem
                      title="Teachify"
                      href="https://github.com/code0adarsh/teachify"
                      description="Interactive learning platform for computer science education"
                    />
                    <ProductItem
                      title="Research Agent"
                      href="https://github.com/code0adarsh/research-agent"
                      description="AI-powered research assistant for academic papers"
                    />
                    <ProductItem
                      title="Apple Clone"
                      href="https://github.com/code0adarsh/Apple-Clone"
                      description="Pixel-perfect clone of Apple's website with modern UI"
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

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-navy-light/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-xl text-slate hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
