import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types/blog';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps extends BlogPost {
  featured?: boolean;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  category,
  image,
  author,
  featured = false,
  className = '',
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/50 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <Link to={`/blog/${id}`} className="flex-1 p-6 relative z-10">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                {category}
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
              </div>
            </div>

            <div className={`relative mb-6 overflow-hidden rounded-2xl ${
              featured ? 'aspect-[21/9]' : 'aspect-[16/9]'
            }`}>
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/0 transition-colors duration-500 z-10" />
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className={`mb-3 font-bold leading-tight text-gray-100 transition-colors duration-300 group-hover:text-primary ${
              featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
            }`}>
              {title}
            </h3>

            <p className="mb-6 text-base text-gray-400 line-clamp-3">
              {excerpt}
            </p>
          </div>

          <div className="flex items-center">
            <img
              src="https://github.com/adarsh-pradhan.png"
              alt={author}
              className="h-10 w-10 rounded-full ring-2 ring-gray-700/50 group-hover:ring-primary/50 transition-all duration-300"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-200">{author}</p>
              <p className="text-sm text-gray-400">Software Engineer</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
