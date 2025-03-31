import React, { useEffect, useRef, useState } from 'react';
import { SplineScene } from '@/components/ui/splite/component';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlask,
  SiPython,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiTensorflow,
  SiGithubactions,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const frontEndSkills = [
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-teal" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-teal" /> },
    { name: "React.js", icon: <SiReact className="w-6 h-6 text-teal" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-teal" /> },
  ];

  const backEndSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-teal" /> },
    { name: "Flask", icon: <SiFlask className="w-6 h-6 text-teal" /> },
    { name: "Java", icon: <DiJava className="w-6 h-6 text-teal" /> },
    { name: "Python", icon: <SiPython className="w-6 h-6 text-teal" /> },
    { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-teal" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-teal" /> },
  ];

  const toolSkills = [
    { name: "Docker", icon: <SiDocker className="w-6 h-6 text-teal" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="w-6 h-6 text-teal" /> },
    { name: "GitHub Actions", icon: <SiGithubactions className="w-6 h-6 text-teal" /> },
    { name: "SQL", icon: <span className="w-6 h-6 text-teal font-mono">SQL</span> },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-navy text-slate">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-lightSlate">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left Column: Text Content & Skills */}
          <div className="md:col-span-2">
            <div className={`space-y-4 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
              <p>
                Hello! I'm <strong>Adarsh Pradhan</strong>, an AI Software Engineer and Developer from India.
                I build scalable, innovative digital solutions using cutting-edge technology.
              </p>
              
              <p>
                Currently at <strong>Reality AI Lab</strong>, I've developed platforms like Teachify and a robust plagiarism detection system.
                Previously, I worked at Jspiders and taught at leading institutions.
              </p>
              
              <p>
                My technical toolkit spans modern Front End, Back End, and DevOps tools.
              </p>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-lightSlate mb-2">Front End</h3>
                <div className="flex flex-wrap gap-4">
                  {frontEndSkills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      {skill.icon}
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold text-lightSlate mt-6 mb-2">Back End</h3>
                <div className="flex flex-wrap gap-4">
                  {backEndSkills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      {skill.icon}
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold text-lightSlate mt-6 mb-2">Tools &amp; Others</h3>
                <div className="flex flex-wrap gap-4">
                  {toolSkills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      {skill.icon}
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: 3D Model */}
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="w-full h-[650px] mx-auto relative -mt-16">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
