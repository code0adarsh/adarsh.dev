
import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  category,
  slug,
  image
}: BlogPostProps) => {
  return (
    <div className="group bg-navy rounded-lg overflow-hidden shadow-lg hover:translate-y-[-5px] transition-all duration-300">
      {/* Image Section */}
      <div className="aspect-video bg-slate-700 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center text-teal font-mono">
            Blog Post Image
          </div>
        )}
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-teal/80 text-navy px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-center text-xs text-slate mb-2 font-mono">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-lightSlate mb-3 group-hover:text-teal transition-colors">
          {title}
        </h3>
        
        <p className="text-slate mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <a 
          href={`/blog/${slug}`} 
          className="inline-flex items-center text-teal hover:underline font-mono"
        >
          Read More
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
