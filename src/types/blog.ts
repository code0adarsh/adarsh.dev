export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  tags?: string[];
}

export type BlogCategory = 'AI' | 'Web Dev' | 'Development' | 'Technology'; 