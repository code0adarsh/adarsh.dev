
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  reversed?: boolean;
  bentoStyle?: boolean;
}

const ProjectCard = ({
  title,
  description,
  tags,
  github,
  demo,
  image,
  featured = false,
  reversed = false,
  bentoStyle = false
}: ProjectProps) => {
  
  if (bentoStyle) {
    return (
      <div className="relative h-full bg-navy rounded-lg border border-teal/10 overflow-hidden group hover:border-teal/30 transition-all duration-300">
        {/* Background Image without dark overlay */}
        {image && (
          <div className="absolute inset-0 z-0">
            <img 
              src={image} 
              alt={title} 
              onError={(e) => {
                e.currentTarget.onerror = null; // prevents looping
                e.currentTarget.src = "https://source.unsplash.com/random/800x600/?technology";
              }}
              className="w-full h-full object-cover object-center opacity-100 transition-all duration-500 scale-100 group-hover:scale-110" 
            />
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-bold text-lightSlate mb-2 group-hover:text-teal transition-colors">
              {title}
            </h3>
            <p className="text-slate mb-4 line-clamp-3">{description}</p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-xs font-mono text-slate bg-navy/60 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="text-xs font-mono text-slate bg-navy/60 px-2 py-1 rounded-full">
                  +{tags.length - 3}
                </span>
              )}
            </div>
            
            <div className="flex gap-4">
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lightSlate hover:text-teal transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={20} />
                </a>
              )}
              
              {demo && (
                <a 
                  href={demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lightSlate hover:text-teal transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  if (featured) {
    return (
      <div className={cn(
        "relative grid md:grid-cols-12 gap-4 items-center",
        "mb-16 last:mb-0"
      )}>
        {/* Project Image */}
        <div className={cn(
          "col-span-12 md:col-span-7 relative z-10 rounded-lg overflow-hidden",
          reversed ? "md:order-1" : "md:order-2"
        )}>
          <div className="relative group">
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/70 group-hover:bg-navy/40 transition-colors duration-300 z-10"></div>
            
            {/* Image */}
            <div className="aspect-video bg-slate-700 overflow-hidden">
              {image ? (
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-teal font-mono">
                  Project Image
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Project Content */}
        <div className={cn(
          "col-span-12 md:col-span-6 md:col-start-1 relative z-20 p-6",
          reversed ? "md:order-2 md:text-left" : "md:order-1 md:text-right"
        )}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-teal text-sm mb-2">Featured Project</div>
            <h3 className="text-2xl font-bold text-lightSlate mb-4">{title}</h3>
            
            <div className="bg-navy shadow-xl rounded-lg p-6 mb-4">
              <p className="text-slate">{description}</p>
            </div>
            
            <ul className={cn(
              "flex flex-wrap gap-x-4 gap-y-2 text-xs mb-6 text-slate font-mono",
              reversed ? "justify-start" : "md:justify-end"
            )}>
              {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
            
            <div className={cn(
              "flex gap-4",
              reversed ? "justify-start" : "md:justify-end"
            )}>
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lightSlate hover:text-teal transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={20} />
                </a>
              )}
              
              {demo && (
                <a 
                  href={demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lightSlate hover:text-teal transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
  
  // Regular card for grid layout
  return (
    <div className="bg-navy rounded-lg overflow-hidden shadow-lg hover:translate-y-[-5px] transition-all duration-300 h-full border border-teal/10 hover:border-teal/30">
      <div className="relative group">
        {/* Image */}
        <div className="aspect-video bg-slate-800">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-teal font-mono">
              Project Image
            </div>
          )}
        </div>
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition-opacity duration-300">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={24} />
            </a>
          )}
          
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal hover:text-white transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-lightSlate mb-2">{title}</h3>
        <p className="text-slate mb-4 line-clamp-3">{description}</p>
        
        <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-slate font-mono mt-auto">
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
