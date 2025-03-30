import React, { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: ProjectProps[] = [
    {
      title: "AI-Powered Portfolio Builder",
      description: "A comprehensive platform that helps developers create stunning portfolios using AI recommendations. Features include customizable templates, project showcases, and integrated analytics.",
      tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "OpenAI"],
      github: "https://github.com/code0adarsh",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights.",
      tags: ["React", "Redux", "Express", "MySQL", "Chart.js"],
      github: "https://github.com/code0adarsh",
      demo: "https://demo.com",
      featured: true,
      reversed: true
    },
    {
      title: "AIRA - AI Research Assistant",
      description: "An advanced AI assistant that helps researchers gather, analyze, and synthesize information from various sources. Features natural language processing and customizable research workflows.",
      tags: ["Python", "TensorFlow", "React", "Flask", "MongoDB"],
      github: "https://github.com/code0adarsh/AIRA",
      demo: "https://github.com/code0adarsh/AIRA",
      featured: true
    },
    {
      title: "Prepify AI",
      description: "AI-powered career preparation platform helping students and professionals prepare for interviews with personalized learning paths and mock interviews.",
      tags: ["React", "Node.js", "Google AI", "Firebase"],
      github: "https://github.com/code0adarsh",
      demo: "https://github.com/code0adarsh",
      featured: true,
      reversed: true
    },
    {
      title: "Teaching Platform",
      description: "Interactive platform for computer science education featuring code execution, collaborative projects, and personalized learning paths.",
      tags: ["React", "Express", "MongoDB", "WebSockets"],
      github: "https://github.com/code0adarsh",
      demo: "https://github.com/code0adarsh"
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and predictive analytics.",
      tags: ["React", "D3.js", "Express", "WebSockets"],
      github: "https://github.com/code0adarsh",
      demo: "https://github.com/code0adarsh"
    }
  ];
  
  const categories = ['all', 'react', 'node.js', 'python', 'mongodb'];
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase());
  });
  
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding bg-navy text-slate">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="section-title text-lightSlate"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Things I've Built
        </motion.h2>
        
        <div className="mb-12">
          <motion.div 
            className="flex justify-center flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ToggleGroup type="single" value={filter} onValueChange={(value) => value && setFilter(value)}>
              {categories.map(category => (
                <ToggleGroupItem 
                  key={category} 
                  value={category}
                  className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
                    filter === category 
                      ? 'bg-teal/20 text-teal border border-teal/20' 
                      : 'bg-transparent text-slate hover:text-teal border border-transparent'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </motion.div>
          
          <motion.div 
            className="mb-20"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold text-lightSlate mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Other Noteworthy Projects
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {otherProjects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="https://github.com/code0adarsh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block hover:scale-105 transition-transform"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
