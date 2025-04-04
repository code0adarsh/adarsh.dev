import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  Check,
  ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';
import { blogPosts } from '@/data/newBlogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from './BlogCard';
import { SplashCursor } from '@/components/ui/splash-cursor';

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const post = blogPosts.find((p) => p.id === id);
  
  const relatedPosts = post
    ? blogPosts
        .filter(
          (p) =>
            p.id !== post.id &&
            (p.category === post.category ||
              p.tags?.some((tag) => post.tags?.includes(tag)))
        )
        .slice(0, 3)
    : [];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Adarsh Pradhan`;
    }

    const handleScroll = () => {
      const headings = document.querySelectorAll('h2, h3');
      let currentSection = '';

      headings.forEach((heading) => {
        const top = heading.getBoundingClientRect().top;
        if (top < 100) {
          currentSection = heading.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  const handleShare = async (platform: string) => {
    const shareText = `Check out "${post?.title}" by Adarsh Pradhan`;
    let shareLink = '';

    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          window.location.href
        )}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy URL:', err);
        }
        return;
    }

    if (shareLink) {
      window.open(shareLink, '_blank', 'noopener,noreferrer');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-4xl font-bold text-gray-200">Post not found</h1>
      </div>
    );
  }

  // Extract headings from content for table of contents
  const headings: { id: string; title: string; level: number }[] = [];
  const contentWithIds = post.content.replace(
    /^(#{2,3})\s+(.+)$/gm,
    (match, hashes, title) => {
      const level = hashes.length;
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      headings.push({ id, title, level });
      return `<h${level} id="${id}">${title}</h${level}>`;
    }
  );

  // Convert markdown content to HTML
  const htmlContent = contentWithIds
    .replace(/\n\n/g, '</p><p>') // Convert paragraphs
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // Bold text
    .replace(/\*(.+?)\*/g, '<em>$1</em>') // Italic text
    .replace(/`(.+?)`/g, '<code>$1</code>') // Inline code
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" class="w-full rounded-lg my-8" />') // Images
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:text-primary-light">$1</a>'); // Links

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black"
    >
      <SplashCursor />
      
      {/* Gradient Effects */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[800px] h-[500px] bg-primary/30 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-400 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to blog
        </Link>

        <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block sticky top-24 h-fit">
            <nav className="space-y-1">
              <p className="text-sm font-medium text-gray-400 mb-4">Table of Contents</p>
              {headings.map(({ id, title, level }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block py-2 pl-${(level - 2) * 4} text-sm ${
                    activeSection === id
                      ? 'text-primary font-medium'
                      : 'text-gray-400 hover:text-gray-200'
                  } transition-colors`}
                >
                  {level === 3 && (
                    <ChevronRight className="inline w-4 h-4 mr-1 opacity-50" />
                  )}
                  {title}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <article className="relative">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="mb-8">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 leading-tight mb-6">
                  {post.title}
                </h1>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://github.com/adarsh-pradhan.png"
                      alt={post.author}
                      className="w-12 h-12 rounded-full ring-2 ring-gray-700"
                    />
                    <div>
                      <p className="text-gray-200 font-medium">{post.author}</p>
                      <p className="text-gray-400 text-sm">Software Engineer</p>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="bg-gray-800/50 backdrop-blur-sm p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                      aria-label="Share article"
                    >
                      <Share2 className="w-5 h-5 text-gray-300" />
                    </button>

                    {showShareMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl z-10 border border-gray-700/50">
                        <div className="p-2 space-y-1">
                          <button
                            onClick={() => handleShare('twitter')}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700/50 rounded-lg transition-colors"
                          >
                            <Twitter className="w-4 h-4 mr-3" />
                            Share on Twitter
                          </button>
                          <button
                            onClick={() => handleShare('linkedin')}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700/50 rounded-lg transition-colors"
                          >
                            <Linkedin className="w-4 h-4 mr-3" />
                            Share on LinkedIn
                          </button>
                          <button
                            onClick={() => handleShare('facebook')}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700/50 rounded-lg transition-colors"
                          >
                            <Facebook className="w-4 h-4 mr-3" />
                            Share on Facebook
                          </button>
                          <button
                            onClick={() => handleShare('copy')}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700/50 rounded-lg transition-colors"
                          >
                            {copied ? (
                              <Check className="w-4 h-4 mr-3 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 mr-3" />
                            )}
                            {copied ? 'Copied!' : 'Copy link'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative aspect-[21/9] mb-12 overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div
                className="prose prose-lg prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-300 prose-a:text-primary hover:prose-a:text-primary-light prose-strong:text-gray-200 prose-code:text-primary prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-gray-700/50"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-800">
                <h2 className="text-2xl font-bold text-gray-100 mb-8">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="group block"
                    >
                      <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-xl">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-lg font-medium text-gray-200 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostDetail;
