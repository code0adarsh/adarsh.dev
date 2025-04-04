import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import BlogPostDetail from '@/components/BlogPostDetail';
import BlogPage from '@/pages/BlogPage';

// Sample blog posts data
const blogPosts = [
  {
    id: 'understanding-future-ai-development-2024',
    title: "Understanding the Future of AI Development in 2024",
    content: `
      <h2>The Evolution of AI Technologies</h2>
      <p>Artificial Intelligence continues to evolve at an unprecedented pace. In this comprehensive guide, we explore the emerging trends, ethical considerations, and practical applications of AI technologies that are shaping our digital landscape.</p>
      
      <p>The field of artificial intelligence has seen remarkable growth in recent years. From machine learning algorithms that power recommendation systems to complex neural networks capable of generating human-like text and images, AI is transforming industries across the board.</p>
      
      <h2>Key Trends in AI Development</h2>
      <p>Several key trends are emerging in the AI landscape:</p>
      <ul>
        <li><strong>Multimodal AI:</strong> Systems that can process and understand multiple types of data (text, images, audio) simultaneously.</li>
        <li><strong>Generative AI:</strong> Tools that can create new content, from art to code to written text.</li>
        <li><strong>Edge AI:</strong> AI processing that happens on local devices rather than in the cloud, enhancing privacy and reducing latency.</li>
        <li><strong>AI Governance:</strong> The development of frameworks to ensure AI systems are developed and deployed ethically.</li>
      </ul>
      
      <h2>Ethical Considerations</h2>
      <p>As AI becomes more powerful, ethical considerations become increasingly important. Issues such as bias in training data, privacy concerns, and the potential for misuse must be addressed proactively.</p>
      
      <p>Many organizations are now establishing ethics boards and guidelines for AI development. The European Union's AI Act, for instance, aims to regulate AI applications based on their potential risk.</p>
      
      <h2>Practical Applications</h2>
      <p>AI is finding applications across diverse sectors:</p>
      <ul>
        <li><strong>Healthcare:</strong> Diagnostic tools, drug discovery, personalized treatment plans</li>
        <li><strong>Finance:</strong> Fraud detection, algorithmic trading, risk assessment</li>
        <li><strong>Education:</strong> Personalized learning platforms, automated grading systems</li>
        <li><strong>Manufacturing:</strong> Predictive maintenance, quality control, supply chain optimization</li>
      </ul>
      
      <h2>The Future Landscape</h2>
      <p>Looking ahead, we can expect AI to become even more integrated into our daily lives. The development of more sophisticated language models, continued advances in computer vision, and the emergence of AI systems that can reason and plan will drive innovation across industries.</p>
      
      <p>However, challenges remain. Issues of computational resources, data quality, and ethical implementation will need to be addressed to realize the full potential of AI technologies.</p>
      
      <h2>Conclusion</h2>
      <p>The future of AI development is bright but requires thoughtful consideration of its implications. By fostering collaboration between technologists, policymakers, and ethicists, we can ensure that AI advances in ways that benefit humanity.</p>
    `,
    date: "May 10, 2024",
    readTime: "8 min read",
    category: "AI Development",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a746d?q=80&w=2832&auto=format&fit=crop"
  },
  {
    id: 'building-3d-animations',
    title: "Building 3D Animations with Three.js and React",
    content: `
      <h2>Introduction to 3D Web Development</h2>
      <p>Learn how to create stunning 3D animations for your web projects using Three.js with React components. This step-by-step guide covers everything from basic setup to advanced techniques.</p>
      
      <p>3D web development has transformed how we create interactive experiences on the web. With libraries like Three.js and its React wrapper react-three-fiber, developers can now create complex 3D scenes and animations with relatively straightforward code.</p>
      
      <h2>Getting Started with Three.js and React</h2>
      <p>Setting up a Three.js project with React involves a few key steps:</p>
      <pre><code>
      npm install three @react-three/fiber @react-three/drei
      </code></pre>
      
      <p>Once you have the dependencies installed, you can create your first 3D scene:</p>
      <pre><code>
      import { Canvas } from '@react-three/fiber'
      import { OrbitControls } from '@react-three/drei'
      
      function App() {
        return (
          &lt;Canvas&gt;
            &lt;ambientLight intensity={0.5} /&gt;
            &lt;spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /&gt;
            &lt;Box position={[-1.2, 0, 0]} /&gt;
            &lt;Box position={[1.2, 0, 0]} /&gt;
            &lt;OrbitControls /&gt;
          &lt;/Canvas&gt;
        )
      }
      
      function Box(props) {
        return (
          &lt;mesh {...props}&gt;
            &lt;boxGeometry args={[1, 1, 1]} /&gt;
            &lt;meshStandardMaterial color="orange" /&gt;
          &lt;/mesh&gt;
        )
      }
      </code></pre>
      
      <h2>Creating Animations</h2>
      <p>To animate 3D objects, you can use the useFrame hook provided by react-three-fiber:</p>
      <pre><code>
      import { useFrame } from '@react-three/fiber'
      import { useRef } from 'react'
      
      function RotatingBox(props) {
        const meshRef = useRef()
        
        useFrame((state, delta) => {
          meshRef.current.rotation.x += delta
          meshRef.current.rotation.y += delta * 0.5
        })
        
        return (
          &lt;mesh ref={meshRef} {...props}&gt;
            &lt;boxGeometry args={[1, 1, 1]} /&gt;
            &lt;meshStandardMaterial color="orange" /&gt;
          &lt;/mesh&gt;
        )
      }
      </code></pre>
      
      <h2>Adding Interactivity</h2>
      <p>You can make your 3D elements interactive using event handlers:</p>
      <pre><code>
      function InteractiveBox(props) {
        const [active, setActive] = useState(false)
        
        return (
          &lt;mesh
            {...props}
            onClick={() => setActive(!active)}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
            scale={active ? 1.5 : 1}
          &gt;
            &lt;boxGeometry args={[1, 1, 1]} /&gt;
            &lt;meshStandardMaterial color={active ? 'hotpink' : 'orange'} /&gt;
          &lt;/mesh&gt;
        )
      }
      </code></pre>
      
      <h2>Advanced Techniques</h2>
      <p>Once you're comfortable with the basics, you can explore more advanced techniques:</p>
      <ul>
        <li><strong>Physics:</strong> Use @react-three/cannon for physics simulations</li>
        <li><strong>Post-processing:</strong> Add effects like bloom, depth-of-field with @react-three/postprocessing</li>
        <li><strong>Custom shaders:</strong> Create custom materials with GLSL shaders</li>
        <li><strong>3D models:</strong> Import and animate 3D models with @react-three/drei's useGLTF hook</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>3D rendering can be resource-intensive, so optimization is key:</p>
      <ul>
        <li>Use instancing for repeated geometry</li>
        <li>Implement level-of-detail (LOD) for complex scenes</li>
        <li>Utilize frustum culling to avoid rendering off-screen objects</li>
        <li>Consider texture compression and mesh optimization</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Three.js and React provide a powerful combination for creating immersive 3D experiences on the web. By understanding the fundamental concepts and exploring advanced techniques, you can build stunning 3D animations that engage and delight users.</p>
    `,
    date: "April 22, 2024",
    readTime: "6 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'css-grid-layout-guide',
    title: "The Ultimate Guide to CSS Grid Layout",
    content: `
      <h2>Introduction to CSS Grid</h2>
      <p>Master the CSS Grid Layout system with this comprehensive guide covering all the features and practical examples. Transform your design skills with modern layout techniques.</p>
      
      <p>CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It allows you to organize content into rows and columns, and has transformed how we create complex layouts on the web.</p>
      
      <h2>Basic Grid Concepts</h2>
      <p>To create a grid, you simply need to apply <code>display: grid</code> to a container:</p>
      <pre><code>
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        gap: 20px;
      }
      </code></pre>
      
      <p>This creates a three-column grid with equal widths (1fr each) and automatically sized rows with a 20px gap between all items.</p>
      
      <h2>Placing Items on the Grid</h2>
      <p>Grid items can be placed precisely using properties like <code>grid-column</code> and <code>grid-row</code>:</p>
      <pre><code>
      .item {
        grid-column: 1 / 3; /* Start at line 1, end at line 3 */
        grid-row: 2 / 4; /* Start at line 2, end at line 4 */
      }
      </code></pre>
      
      <p>You can also use named areas for more intuitive layouts:</p>
      <pre><code>
      .container {
        display: grid;
        grid-template-areas:
          "header header header"
          "sidebar content content"
          "footer footer footer";
      }
      
      .header { grid-area: header; }
      .sidebar { grid-area: sidebar; }
      .content { grid-area: content; }
      .footer { grid-area: footer; }
      </code></pre>
      
      <h2>Responsive Grids</h2>
      <p>CSS Grid makes responsive design much simpler. You can use:</p>
      <pre><code>
      .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }
      </code></pre>
      
      <p>This creates as many columns as can fit in the container, where each column is at least 250px wide and expands to fill available space.</p>
      
      <h2>Grid Alignment</h2>
      <p>Control the alignment of items within the grid:</p>
      <pre><code>
      .container {
        display: grid;
        justify-items: center; /* Align items horizontally */
        align-items: center; /* Align items vertically */
      }
      
      .item {
        justify-self: start; /* Override for a specific item */
        align-self: end; /* Override for a specific item */
      }
      </code></pre>
      
      <h2>Advanced Techniques</h2>
      <p>CSS Grid offers several advanced techniques:</p>
      <ul>
        <li><strong>Masonry layouts:</strong> Create Pinterest-style layouts using auto-placement and span</li>
        <li><strong>Grid auto-flow:</strong> Control how auto-placed items flow with grid-auto-flow</li>
        <li><strong>Subgrids:</strong> Allow grid items to participate in the parent grid's rows/columns (newer browsers)</li>
        <li><strong>Implicit grids:</strong> Control how automatically created rows/columns behave</li>
      </ul>
      
      <h2>Combining Grid with Flexbox</h2>
      <p>For optimal layouts, you can combine Grid (for overall page structure) with Flexbox (for one-dimensional components):</p>
      <pre><code>
      .page {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto 1fr auto;
      }
      
      .navigation {
        display: flex;
        justify-content: space-between;
      }
      </code></pre>
      
      <h2>Browser Support</h2>
      <p>CSS Grid is now supported in all modern browsers. For older browsers, consider using feature queries:</p>
      <pre><code>
      @supports (display: grid) {
        .container {
          display: grid;
          /* grid properties */
        }
      }
      
      @supports not (display: grid) {
        .container {
          display: flex;
          /* fallback styles */
        }
      }
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>CSS Grid has revolutionized web layout, making previously complex designs simple to implement. By mastering these techniques, you'll be equipped to create sophisticated, responsive layouts for modern web applications.</p>
    `,
    date: "April 15, 2024",
    readTime: "8 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1675348304916-f14ce5a65071?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'state-management-react',
    title: "State Management in React: Beyond Redux",
    content: `
      <h2>The Evolving State Management Landscape</h2>
      <p>Explore modern approaches to state management in React applications and alternatives to Redux. Discover how to choose the right solution for your specific use case.</p>
      
      <p>While Redux has long been the go-to state management library for React applications, the ecosystem has evolved significantly in recent years. Modern React offers several alternatives that may be more appropriate depending on your application's needs.</p>
      
      <h2>React's Built-in State Management</h2>
      <p>Before reaching for external libraries, consider React's built-in capabilities:</p>
      
      <h3>useState and useReducer</h3>
      <p>For component-level state, <code>useState</code> is often sufficient:</p>
      <pre><code>
      function Counter() {
        const [count, setCount] = useState(0);
        return (
          &lt;button onClick={() => setCount(count + 1)}&gt;
            Count: {count}
          &lt;/button&gt;
        );
      }
      </code></pre>
      
      <p>For more complex state logic, <code>useReducer</code> provides Redux-like functionality:</p>
      <pre><code>
      function reducer(state, action) {
        switch (action.type) {
          case 'increment': return { count: state.count + 1 };
          case 'decrement': return { count: state.count - 1 };
          default: throw new Error();
        }
      }
      
      function Counter() {
        const [state, dispatch] = useReducer(reducer, { count: 0 });
        return (
          &lt;&gt;
            Count: {state.count}
            &lt;button onClick={() => dispatch({ type: 'increment' })}&gt;+&lt;/button&gt;
            &lt;button onClick={() => dispatch({ type: 'decrement' })}&gt;-&lt;/button&gt;
          &lt;/&gt;
        );
      }
      </code></pre>
      
      <h3>Context API</h3>
      <p>For sharing state across components, the Context API provides a way to pass data through the component tree without manually passing props:</p>
      <pre><code>
      const ThemeContext = createContext('light');
      
      function App() {
        const [theme, setTheme] = useState('light');
        return (
          &lt;ThemeContext.Provider value={theme}&gt;
            &lt;Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}&gt;
              Toggle Theme
            &lt;/Button&gt;
            &lt;ThemedComponent /&gt;
          &lt;/ThemeContext.Provider&gt;
        );
      }
      
      function ThemedComponent() {
        const theme = useContext(ThemeContext);
        return &lt;div className={theme}&gt;Themed Content&lt;/div&gt;;
      }
      </code></pre>
      
      <h2>Modern State Management Libraries</h2>
      
      <h3>Zustand</h3>
      <p>Zustand is a small, fast state management solution with a simple API:</p>
      <pre><code>
      import create from 'zustand';
      
      const useStore = create(set => ({
        bears: 0,
        increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 })
      }));
      
      function BearCounter() {
        const bears = useStore(state => state.bears);
        return &lt;h1&gt;{bears} around here...&lt;/h1&gt;;
      }
      
      function Controls() {
        const increasePopulation = useStore(state => state.increasePopulation);
        return &lt;button onClick={increasePopulation}&gt;Add bear&lt;/button&gt;;
      }
      </code></pre>
      
      <h3>Jotai</h3>
      <p>Jotai takes an atomic approach to state management:</p>
      <pre><code>
      import { atom, useAtom } from 'jotai';
      
      const countAtom = atom(0);
      
      function Counter() {
        const [count, setCount] = useAtom(countAtom);
        return (
          &lt;button onClick={() => setCount(c => c + 1)}&gt;
            Count: {count}
          &lt;/button&gt;
        );
      }
      </code></pre>
      
      <h3>Recoil</h3>
      <p>Recoil, developed by Facebook, provides a more flexible approach for complex state:</p>
      <pre><code>
      import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
      
      const textState = atom({
        key: 'textState',
        default: '',
      });
      
      const charCountState = selector({
        key: 'charCountState',
        get: ({get}) => {
          const text = get(textState);
          return text.length;
        },
      });
      
      function TextInput() {
        const [text, setText] = useRecoilState(textState);
        const count = useRecoilValue(charCountState);
        
        return (
          &lt;&gt;
            &lt;input value={text} onChange={e => setText(e.target.value)} /&gt;
            &lt;div&gt;Character Count: {count}&lt;/div&gt;
          &lt;/&gt;
        );
      }
      </code></pre>
      
      <h2>Data Fetching and State Management</h2>
      <p>Many modern applications combine state management with data fetching:</p>
      
      <h3>React Query / TanStack Query</h3>
      <p>For server state, React Query provides caching, background updates, and more:</p>
      <pre><code>
      import { useQuery, useMutation, QueryClient, QueryClientProvider } from 'react-query';
      
      function App() {
        const queryClient = new QueryClient();
        return (
          &lt;QueryClientProvider client={queryClient}&gt;
            &lt;TodoList /&gt;
          &lt;/QueryClientProvider&gt;
        );
      }
      
      function TodoList() {
        const { data, isLoading } = useQuery('todos', fetchTodos);
        
        if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
        
        return (
          &lt;ul&gt;
            {data.map(todo => (
              &lt;li key={todo.id}&gt;{todo.title}&lt;/li&gt;
            ))}
          &lt;/ul&gt;
        );
      }
      </code></pre>
      
      <h2>When to Use What</h2>
      <p>Choosing the right state management approach depends on your application's needs:</p>
      <ul>
        <li><strong>Local component state:</strong> useState</li>
        <li><strong>Complex component state:</strong> useReducer</li>
        <li><strong>Shared state (small-medium apps):</strong> Context + useReducer</li>
        <li><strong>Shared state (medium-large apps):</strong> Zustand, Jotai, or Recoil</li>
        <li><strong>Server state:</strong> React Query or SWR</li>
        <li><strong>Large, complex apps with strict requirements:</strong> Redux (with Redux Toolkit)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While Redux continues to be a robust solution for state management, the React ecosystem now offers many alternatives that may provide a better developer experience and performance characteristics for your specific use case. By understanding the tradeoffs between different approaches, you can make an informed decision that best suits your application's requirements.</p>
    `,
    date: "April 5, 2024",
    readTime: "7 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop"
  }
];

const BlogListing = () => {
  useEffect(() => {
    document.title = "Blog | Adarsh Pradhan";
  }, []);
  
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-navy text-slate">
          <div className="max-w-5xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-lightSlate mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Blog
            </motion.h1>
            <motion.p 
              className="text-xl text-slate mb-12 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Thoughts on web development, AI, and technology.
            </motion.p>
            
            <div className="space-y-12">
              {blogPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid md:grid-cols-[1fr_2fr] gap-6 border-b border-teal/10 pb-12"
                >
                  {post.image && (
                    <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-lg bg-navy border border-teal/10 h-60">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                    </Link>
                  )}
                  <div>
                    <div className="flex items-center text-sm text-slate mb-3 space-x-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span className="bg-teal/10 text-teal px-2 py-1 rounded">{post.category}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-2xl font-bold text-lightSlate mb-3 hover:text-teal transition-colors">{post.title}</h2>
                    </Link>
                    <p className="text-slate mb-4">
                      {post.content.replace(/<[^>]*>/g, '').substring(0, 200)}...
                    </p>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center text-teal hover:underline">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// This component conditionally renders either the blog listing or a specific post
const Blog = () => {
  const { id } = useParams();
  
  if (id) {
    return <BlogPostDetail />;
  }
  
  return <BlogPage />;
};

export default Blog;
