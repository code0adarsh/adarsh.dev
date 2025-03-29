
import React from 'react';
import BlogCard, { BlogPostProps } from './BlogCard';

const BlogSection = () => {
  const posts: BlogPostProps[] = [
    {
      title: "Building 3D Animations with Three.js and React",
      excerpt: "Learn how to create stunning 3D animations for your web projects using Three.js with React components.",
      date: "May 15, 2023",
      readTime: "6 min read",
      category: "Development",
      slug: "building-3d-animations",
    },
    {
      title: "The Ultimate Guide to CSS Grid Layout",
      excerpt: "Master the CSS Grid Layout system with this comprehensive guide covering all the features and practical examples.",
      date: "April 28, 2023",
      readTime: "8 min read",
      category: "CSS",
      slug: "css-grid-layout-guide",
    },
    {
      title: "State Management in React: Beyond Redux",
      excerpt: "Explore modern approaches to state management in React applications and alternatives to Redux.",
      date: "March 12, 2023",
      readTime: "7 min read",
      category: "React",
      slug: "state-management-react",
    }
  ];

  return (
    <section id="blog" className="section-padding bg-navy text-slate">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-lightSlate">
          Latest Blog Posts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        
        <div className="text-center">
          <a href="/blog" className="btn-primary inline-block">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
