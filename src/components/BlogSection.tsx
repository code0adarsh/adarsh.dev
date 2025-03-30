
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
}

const BlogCard = ({ title, excerpt, date, readTime, category, slug, image }: BlogPostProps) => {
  return (
    <motion.article 
      className="bg-navy border border-teal/10 rounded-lg overflow-hidden hover:border-teal/30 transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.7)' }}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-mono text-teal bg-teal/10 px-2 py-1 rounded">{category}</span>
          <span className="text-xs text-slate">{date} · {readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-lightSlate mb-2 line-clamp-2">{title}</h3>
        <p className="text-slate mb-4 flex-grow line-clamp-3">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="flex items-center text-teal font-medium group">
          Read More 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
};

const FeaturedBlogPost = ({ title, excerpt, date, readTime, category, slug, image }: BlogPostProps) => {
  return (
    <motion.article 
      className="bg-navy border border-teal/10 rounded-lg overflow-hidden hover:border-teal/30 transition-all duration-300 md:flex mb-8"
      whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.7)' }}
    >
      {image && (
        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      <div className="p-6 md:w-3/5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-mono text-teal bg-teal/10 px-2 py-1 rounded">{category}</span>
          <span className="text-xs text-slate">{date} · {readTime}</span>
        </div>
        <h3 className="text-2xl font-bold text-lightSlate mb-3">{title}</h3>
        <p className="text-slate mb-4">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="flex items-center text-teal font-medium group">
          Read Full Article 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
};

const BlogSection = () => {
  const featuredPost: BlogPostProps = {
    title: "Understanding the Future of AI Development in 2024",
    excerpt: "Artificial Intelligence continues to evolve at an unprecedented pace. In this comprehensive guide, we explore the emerging trends, ethical considerations, and practical applications of AI technologies that are shaping our digital landscape.",
    date: "May 10, 2024",
    readTime: "8 min read",
    category: "AI Development",
    slug: "understanding-future-ai-development-2024",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a746d?q=80&w=2832&auto=format&fit=crop"
  };

  const posts: BlogPostProps[] = [
    {
      title: "Building 3D Animations with Three.js and React",
      excerpt: "Learn how to create stunning 3D animations for your web projects using Three.js with React components. This step-by-step guide covers everything from basic setup to advanced techniques.",
      date: "April 22, 2024",
      readTime: "6 min read",
      category: "Web Development",
      slug: "building-3d-animations",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "The Ultimate Guide to CSS Grid Layout",
      excerpt: "Master the CSS Grid Layout system with this comprehensive guide covering all the features and practical examples. Transform your design skills with modern layout techniques.",
      date: "April 15, 2024",
      readTime: "8 min read",
      category: "CSS",
      slug: "css-grid-layout-guide",
      image: "https://images.unsplash.com/photo-1675348304916-f14ce5a65071?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "State Management in React: Beyond Redux",
      excerpt: "Explore modern approaches to state management in React applications and alternatives to Redux. Discover how to choose the right solution for your specific use case.",
      date: "April 5, 2024",
      readTime: "7 min read",
      category: "React",
      slug: "state-management-react",
      image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  // Animation variants
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
    <section id="blog" className="section-padding bg-navy text-slate">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="section-title text-lightSlate"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Latest Articles
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Featured Post */}
          <FeaturedBlogPost {...featuredPost} />
        </motion.div>
        
        {/* Regular Posts */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {posts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <BlogCard {...post} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
