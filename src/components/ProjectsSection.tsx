import React, { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: ProjectProps[] = [
    {
      title: "AI-Powered Portfolio Builder",
      description: "A comprehensive platform that helps developers create stunning portfolios using AI recommendations. Features include customizable templates, project showcases, and integrated analytics.",
      tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "OpenAI"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights.",
      tags: ["React", "Redux", "Express", "MySQL", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      reversed: true
    },
    {
      title: "3D Interactive Product Visualizer",
      description: "A three.js based web application that allows users to visualize and customize products in 3D before purchase.",
      tags: ["Three.js", "React", "WebGL", "Firebase"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Travel Companion App",
      description: "A modern travel companion application that helps users plan trips, discover attractions, and share experiences.",
      tags: ["Next.js", "GraphQL", "Prisma", "TailwindCSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and predictive analytics.",
      tags: ["React", "D3.js", "Express", "WebSockets"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Smart Home Controller",
      description: "An IoT dashboard for controlling smart home devices with voice commands, automation rules, and energy usage statistics.",
      tags: ["React", "Node.js", "MQTT", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];
  
  const categories = ['all', 'react', 'node.js', 'three.js', 'next.js'];
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase());
  });
  
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-navy text-slate">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-lightSlate">
          Things I've Built
        </h2>
        
        <div className="mb-12">
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-colors ${
                  filter === category 
                    ? 'bg-teal/20 text-teal' 
                    : 'bg-transparent text-slate hover:text-teal'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Featured Projects */}
          <div className="mb-20">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
              />
            ))}
          </div>
          
          {/* Other Projects Grid */}
          <h3 className="text-2xl font-bold text-lightSlate mb-8 text-center">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
