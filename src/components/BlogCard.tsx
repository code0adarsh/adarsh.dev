import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  image,
}: BlogPostProps) => {
  return (
    <article className="group bg-navy rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="w-full h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-xs text-slate mb-2 space-x-2 font-mono">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
          <span className="bg-teal/10 text-teal px-2 py-1 rounded">{category}</span>
        </div>
        <h3 className="text-2xl font-bold text-lightSlate mb-3 group-hover:text-teal transition-colors">
          {title}
        </h3>
        <p className="text-slate text-base mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`}
          className="inline-flex items-center text-teal font-medium hover:underline"
        >
          Read More
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
