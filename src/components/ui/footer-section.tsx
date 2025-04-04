"use client"

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaPaperPlane, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footerdemo() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-navy text-slate overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div className="relative">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-lightSlate">Stay Connected</h2>
            <p className="mb-6 text-sm sm:text-base">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-12 backdrop-blur-sm bg-navy/80 border-teal/20 text-white"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-teal transition-transform hover:scale-105"
              >
                <FaPaperPlane className="h-4 w-4 text-navy" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightSlate">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-teal">
                Home
              </a>
              <a href="#about" className="block transition-colors hover:text-teal">
                About
              </a>
              <a href="#projects" className="block transition-colors hover:text-teal">
                Projects
              </a>
              <a href="#blog" className="block transition-colors hover:text-teal">
                Blog
              </a>
              <a
                href="https://github.com/code0adarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-teal"
              >
                GitHub
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightSlate">Contact Me</h3>
            <address className="space-y-2 text-sm not-italic text-slate">
              <p>India</p>
              <p>Phone: (+91) 8018041789</p>
              <p>Email: pradhanadarsh001@gmail.com</p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightSlate">Follow Me</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/adarshpradhan/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/code0adarsh" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/whos.adarsh" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/codedemon5" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">X</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-teal/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate">© 2025 Adarsh Pradhan. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="transition-colors hover:text-teal text-slate">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-teal text-slate">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-teal text-slate">
                Cookie Settings
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
