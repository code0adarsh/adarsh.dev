
import React, { useEffect, useRef } from 'react';
import { useInView } from '@react-three/drei';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = sectionRef.current ? window.innerHeight > sectionRef.current.getBoundingClientRect().top + 100 : false;
  
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js", 
    "Next.js", "Three.js", "CSS/SCSS", "Tailwind CSS"
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-navy text-slate">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-lightSlate">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <div className={`space-y-4 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
              <p>
                Hello! I'm John, a web developer passionate about creating beautiful digital experiences.
                My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a large corporation.
                My main focus these days is building accessible, inclusive products and digital experiences at Company Inc. for a variety of clients.
              </p>
              
              <p>
                I also recently launched a course that covers everything you need to build a web app with the MERN stack.
              </p>
              
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-teal mr-2">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-teal/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative">
                <div className="w-64 h-64 relative mx-auto border-2 border-teal rounded overflow-hidden">
                  <div className="absolute inset-0 bg-teal/10"></div>
                  <div className="h-full w-full bg-gray-800">
                    {/* Replace with actual image */}
                    <div className="h-full w-full flex items-center justify-center text-teal">
                      {/* Add your image here */}
                      <span className="font-mono">Profile Photo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
