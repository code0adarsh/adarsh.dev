import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/newBlogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.id === slug);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Adarsh Pradhan`;
    }
  }, [post]);

  // Extract headings from content for table of contents using useMemo
  const headings = useMemo(() => {
    return post?.content.match(/<h[2-3][^>]*>(.*?)<\/h[2-3]>/g)?.map(heading => {
      const level = heading.match(/<h([2-3])/)?.[1];
      const text = heading.replace(/<[^>]+>/g, '');
      return { level, text, id: text.toLowerCase().replace(/[^a-z0-9]+/g, '-') };
    }) || [];
  }, [post?.content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white dark:bg-gray-950 pt-24">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
              <Link to="/blog" className="text-primary hover:text-primary/80 transition-colors">
                Return to Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-950 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-300 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Table of Contents Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <div className="sticky top-32 p-4 lg:p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-4 lg:mb-6">
                  Table of Contents
                </h3>
                <nav className="space-y-1 lg:space-y-2">
                  {headings.map(({ text, id, level }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`block ${
                        level === '2' ? 'pl-0' : 'pl-4'
                      } py-2 text-sm transition-colors duration-200 ${
                        activeSection === id
                          ? 'text-primary font-medium'
                          : 'text-gray-300 hover:text-white'
                      } hover:bg-gray-800/50 rounded-lg px-3 lg:px-4`}
                    >
                      {text}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Main Content */}
            <div className="w-full max-w-3xl mx-auto lg:mx-0 space-y-8">
              {/* Article Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-800/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
                  <img
                    src={post.image || 'https://source.unsplash.com/random/1200x630?technology'}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent pt-16 sm:pt-24">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm mb-3 sm:mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-300 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="text-gray-300 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {post.title}
                    </h1>
                  </div>
                </div>
              </motion.div>

              {/* Article Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white prose prose-base sm:prose-lg prose-invert max-w-none
                  prose-headings:text-white
                  prose-p:text-gray-200
                  prose-a:text-primary hover:prose-a:text-primary/80
                  prose-strong:text-white
                  prose-ul:text-gray-200
                  prose-ol:text-gray-200
                  prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-800 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                  prose-code:text-primary prose-code:bg-gray-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:break-words
                  prose-img:rounded-lg prose-img:shadow-md prose-img:w-full prose-img:max-w-full
                  prose-blockquote:text-gray-300 prose-blockquote:border-primary
                  [&>*]:relative [&>*]:z-10
                  [&_pre_code]:!bg-transparent [&_pre_code]:!p-0 [&_pre_code]:!text-gray-200
                  [&_pre]:!whitespace-pre [&_pre]:!overflow-x-auto [&_pre]:scrollbar-thin [&_pre]:scrollbar-track-gray-800 [&_pre]:scrollbar-thumb-gray-700
                  [&_table]:w-full [&_table]:overflow-x-auto [&_table]:block [&_table]:max-w-full
                  [&_iframe]:w-full [&_iframe]:max-w-full"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Note */}
              <div className="mt-12 p-4 sm:p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://github.com/adarsh-pradhan.png"
                    alt={post.author}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="text-white font-medium">{post.author}</h4>
                    <p className="text-gray-400 text-sm">Software Engineer</p>
                  </div>
                </div>
                <p className="text-sm mb-4">Check out my recent articles:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {blogPosts
                    .filter(p => p.id !== post.id)
                    .slice(0, 2)
                    .map(relatedPost => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <h4 className="font-medium text-primary">{relatedPost.title}</h4>
                        <p className="text-sm text-gray-400">{relatedPost.excerpt.split('.')[0]}</p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPostPage; 