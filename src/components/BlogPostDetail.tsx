import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Custom renderers for markdown to enhance typography and spacing
const markdownComponents: Partial<Components> = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-5xl font-bold text-lightSlate my-6" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-4xl font-bold text-lightSlate my-5" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-3xl font-bold text-lightSlate my-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-lg text-slate my-3" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-teal hover:underline" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc ml-6 my-3 text-slate" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal ml-6 my-3 text-slate" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="my-1" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className="border-l-4 border-teal pl-4 italic my-4 text-slate" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="my-6 rounded-lg" alt={props.alt || ''} {...props} />
  ),
};

interface BlogPost {
  id: string;
  title: string;
  content: string; // markdown content
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'understanding-future-ai-development-2024',
    title: "Understanding the Future of AI Development in 2024",
    content: `
## The Evolution of AI Technologies

Artificial Intelligence is evolving at an unprecedented pace. In this guide, we explore emerging trends, ethical considerations, and practical applications.

## Key Trends in AI Development

- **Multimodal AI:** Systems that process text, images, and audio together.
- **Generative AI:** Tools that create new content like art or code.
- **Edge AI:** Processing on local devices for improved privacy.
- **AI Governance:** Ensuring ethical development and deployment.

## Ethical Considerations

Bias, privacy, and misuse are challenges that need proactive attention.

## Practical Applications

AI is revolutionizing:
- **Healthcare:** Diagnostic tools and personalized treatments.
- **Finance:** Fraud detection and risk assessment.
- **Education:** Personalized learning and automated grading.

## Conclusion

The future of AI is bright—careful planning and ethical oversight will ensure that AI benefits humanity.
    `,
    date: "May 10, 2024",
    readTime: "8 min read",
    category: "AI Development",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a746d?q=80&w=2832&auto=format&fit=crop"
  },
  // ...other posts
];

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.id === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Adarsh Pradhan`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-navy text-white">
        <Navbar />
        <div className="pt-20 max-w-4xl mx-auto px-6 py-20">
          <Link to="/blog" className="inline-flex items-center text-teal hover:underline mb-6">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Articles
          </Link>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-red-500 mb-4">Blog post not found</h1>
            <p className="text-lg text-slate mb-6">
              The post you're looking for doesn't exist or may have been removed.
            </p>
            <Link to="/blog" className="btn-primary">Browse all articles</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <div className="pt-20 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-6 py-10 bg-navy/95 rounded-lg shadow-lg"
        >
          <Link to="/blog" className="inline-flex items-center text-teal hover:underline mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Articles
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-lightSlate mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-slate mb-8 space-x-4">
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center text-sm">
              <Tag className="h-4 w-4 mr-1" />
              <span className="bg-teal/10 text-teal px-2 py-1 rounded">{post.category}</span>
            </div>
          </div>
          
          {post.image && (
            <div className="w-full h-[300px] md:h-[500px] mb-8 overflow-hidden rounded-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}
          
          <div className="prose prose-lg md:prose-xl max-w-none text-slate">
            <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;
