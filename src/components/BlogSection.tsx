import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogCard, { BlogPostProps } from './BlogCard';
import { ArrowRight } from 'lucide-react';


const featuredPost: BlogPostProps = {
  title: "Understanding the Future of AI Development in 2024",
  excerpt: "Artificial Intelligence continues to evolve at an unprecedented pace. In this comprehensive guide, we explore emerging trends, ethical considerations, and practical applications that are reshaping our world.",
  date: "May 10, 2024",
  readTime: "8 min read",
  category: "AI Development",
  slug: "understanding-future-ai-development-2024",
  image: "https://images.unsplash.com/photo-1677442135136-760c813a746d?q=80&w=2832&auto=format&fit=crop",
};

const posts: BlogPostProps[] = [
  {
    title: "Building 3D Animations with Three.js and React",
    excerpt: "Learn how to create stunning 3D animations for your web projects using Three.js and React. From basic setup to advanced techniques, explore interactive 3D development.",
    date: "April 22, 2024",
    readTime: "6 min read",
    category: "Web Development",
    slug: "building-3d-animations",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "The Ultimate Guide to CSS Grid Layout",
    excerpt: "Master CSS Grid with this comprehensive guide. Learn how to build responsive, modern layouts using grid templates, named areas, and advanced techniques.",
    date: "April 15, 2024",
    readTime: "8 min read",
    category: "CSS",
    slug: "css-grid-layout-guide",
    image: "https://images.unsplash.com/photo-1675348304916-f14ce5a65071?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "State Management in React: Beyond Redux",
    excerpt: "Discover modern state management approaches in React. Explore alternatives to Redux that provide improved developer experience and performance.",
    date: "April 5, 2024",
    readTime: "7 min read",
    category: "React",
    slug: "state-management-react",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Modern Design Systems with Tailwind CSS",
    excerpt: "Learn how to build flexible and scalable design systems with Tailwind CSS. This guide covers component patterns, theming, and best practices for UI consistency.",
    date: "March 25, 2024",
    readTime: "5 min read",
    category: "UI/UX",
    slug: "modern-design-systems-tailwind",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Advanced TypeScript Patterns for React",
    excerpt: "Level up your React applications with advanced TypeScript patterns. Learn about generics, utility types, and discriminated unions for robust type safety.",
    date: "March 10, 2024",
    readTime: "9 min read",
    category: "TypeScript",
    slug: "advanced-typescript-patterns",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop",
  }
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="blog" className="section-padding bg-navy text-slate" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="section-title text-lightSlate text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Latest Articles
        </motion.h2>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Featured Post */}
          <div className="mb-12">
            <FeaturedBlogPost {...featuredPost} />
          </div>

          {/* Grid Layout for Other Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/blog" className="btn-primary inline-block hover:scale-105 transition-transform">
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

// FeaturedBlogPost Component
export const FeaturedBlogPost = (props: BlogPostProps) => {
  return (
    <article className="group bg-navy rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 md:flex">
      {props.image && (
        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
          <img 
            src={props.image} 
            alt={props.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      )}
      <div className="p-6 md:w-3/5">
        <div className="flex justify-between items-center mb-3 text-xs font-mono">
          <span className="bg-teal/10 text-teal px-2 py-1 rounded">{props.category}</span>
          <span className="text-slate">{props.date} · {props.readTime}</span>
        </div>
        <h3 className="text-3xl font-bold text-lightSlate mb-4 group-hover:text-teal transition-colors">
          {props.title}
        </h3>
        <p className="text-slate mb-4">{props.excerpt}</p>
        <Link to={`/blog/${props.slug}`} className="flex items-center text-teal font-medium hover:underline">
          Read Full Article
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
