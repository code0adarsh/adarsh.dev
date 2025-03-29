
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy py-8 px-6 text-center text-slate">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center space-x-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-teal transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-teal transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-teal transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="mailto:hello@example.com" 
            className="text-slate hover:text-teal transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <p className="font-mono text-sm">
          Designed & Built by John Doe | {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
