
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
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
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
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
    },
    {
      title: "Modern Design Systems with Tailwind CSS",
      excerpt: "Build flexible and consistent design systems using Tailwind CSS. This guide explores component patterns, dark mode support, and design token integration.",
      date: "March 25, 2024",
      readTime: "5 min read",
      category: "UI/UX",
      slug: "modern-design-systems-tailwind",
      image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Advanced TypeScript Patterns for React",
      excerpt: "Level up your React applications with advanced TypeScript patterns. Learn to leverage generics, utility types, and discriminated unions for type-safe components.",
      date: "March 10, 2024",
      readTime: "9 min read",
      category: "TypeScript",
      slug: "advanced-typescript-patterns",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-navy text-slate" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="section-title text-lightSlate"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Latest Articles
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          {/* Featured Post */}
          <FeaturedBlogPost {...featuredPost} />
          
          {/* Mobile Carousel for posts */}
          <div className="block lg:hidden mb-8">
            <h3 className="text-xl font-bold text-lightSlate mb-6">More Articles</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {posts.map((post, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <BlogCard {...post} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 bg-navy border-teal text-teal" />
              <CarouselNext className="right-1 bg-navy border-teal text-teal" />
            </Carousel>
          </div>
          
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
            {posts.slice(0, 3).map((post, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
