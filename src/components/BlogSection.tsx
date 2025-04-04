import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { blogPosts } from '../data/newBlogPosts';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');

  // Get 6 unique posts and sort them
  const displayPosts = [...blogPosts]
    .filter((post, index, self) => 
      index === self.findIndex((p) => p.id === post.id)
    )
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'latest' ? dateB - dateA : dateA - dateB;
    })
    .slice(0, 6);

  const handleSort = () => {
    setSortBy(prev => prev === 'latest' ? 'oldest' : 'latest');
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-32 min-h-screen flex items-center"
    >
      {/* Gradient Effects */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Explore the latest insights on AI, web development, and software engineering
            </p>
          </div>
          <button
            onClick={handleSort}
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-primary transition-colors rounded-lg border border-gray-700/50 hover:border-primary/50"
          >
            <ArrowUpDown className="w-4 h-4" />
            {sortBy === 'latest' ? 'Sort by Oldest' : 'Sort by Latest'}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <BlogCard
                key={post.id}
                {...post}
                featured={false}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-primary hover:text-primary-light transition-colors duration-300"
          >
            View all articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
