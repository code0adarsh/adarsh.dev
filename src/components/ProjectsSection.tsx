import React, { useState, useRef } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion, useInView } from "framer-motion";
import { useMemo } from 'react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const projects: ProjectProps[] = [
    {
      title: "AI-Powered Portfolio Builder",
      description: "A comprehensive platform that helps developers create stunning portfolios using AI recommendations. Features include customizable templates, project showcases, and integrated analytics.",
      tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "OpenAI"],
      github: "https://github.com/code0adarsh",
      demo: "https://demo.com",
      featured: true,
      image: "https://images.unsplash.com/photo-1677442135136-760c813a746d?q=80&w=2832&auto=format&fit=crop"
    },
    {
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights.",
      tags: ["React", "Redux", "Express", "MySQL", "Chart.js"],
      github: "https://github.com/code0adarsh",
      demo: "https://demo.com",
      featured: true,
      reversed: true,
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "AIRA - AI Research Assistant",
      description: "An advanced AI assistant that helps researchers gather, analyze, and synthesize information from various sources. Features natural language processing and customizable research workflows.",
      tags: ["Python", "TensorFlow", "React", "Flask", "MongoDB"],
      github: "https://github.com/code0adarsh/AIRA",
      demo: "https://github.com/code0adarsh/AIRA",
      featured: true,
      image: "https://images.unsplash.com/photo-1681492805688-224c1074dcf2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Prepify AI",
      description: "AI-powered career preparation platform helping students and professionals prepare for interviews with personalized learning paths and mock interviews.",
      tags: ["React", "Node.js", "Google AI", "Firebase"],
      github: "https://github.com/code0adarsh",
      demo: "https://github.com/code0adarsh",
      featured: true,
      reversed: true,
      image: "https://images.unsplash.com/photo-1675348304916-f14ce5a65071?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Teaching Platform",
      description: "Interactive platform for computer science education featuring code execution, collaborative projects, and personalized learning paths.",
      tags: ["React", "Express", "MongoDB", "WebSockets"],
      github: "https://github.com/code0adarsh",
      demo: "https://github.com/code0adarsh",
      image: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=2080&auto=format&fit=crop"
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and predictive analytics.",
      tags: ["React", "D3.js", "Express", "WebSockets"],
      github: "https://github.com/code0adarsh",
      demo: "https://github.com/code0adarsh",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop"
    }
  ];
  
  const categories = ['all', 'react', 'node.js', 'python', 'mongodb'];
  
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (filter === 'all') return true;
      return project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase());
    });
  }, [filter, projects]);
  
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-navy text-slate" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-title text-lightSlate"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Things I've Built
        </motion.h2>
        
        <div className="mb-12">
          <motion.div 
            className="flex justify-center flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold text-lightSlate mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Other Noteworthy Projects
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {otherProjects.map((project, index) => (
              <motion.div 
                key={index} 
                className={`${index % 5 === 0 ? 'md:col-span-8' : 'md:col-span-4'} ${
                  index % 5 === 1 ? 'md:row-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <ProjectCard {...project} bentoStyle={true} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
