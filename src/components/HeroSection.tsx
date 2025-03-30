
import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';

// Use React's lazy loading
const ThreeScene = lazy(() => import('./ThreeScene'));

const HeroSection = () => {
  const [show3D, setShow3D] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setShow3D(!!gl);
    } catch (e) {
      setShow3D(false);
    }

    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = '1';
        subtitleRef.current.style.transform = 'translateY(0)';
      }
    }, 800);

    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.style.opacity = '1';
        ctaRef.current.style.transform = 'translateY(0)';
      }
    }, 1200);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-navy flex items-center justify-center">
      {show3D && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
        </div>
      )}
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        <div 
          ref={titleRef}
          className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="text-teal font-mono mb-6">Hi, my name is</div>
          <h1 className="text-5xl md:text-7xl font-bold text-lightSlate mb-4">
            Adarsh Pradhan
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6">
            I build things for the web.
          </h2>
        </div>
        
        <p 
          ref={subtitleRef}
          className="text-slate max-w-2xl mb-12 text-lg opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300"
        >
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently focused on AI-powered applications and full-stack development.
        </p>
        
        <div 
          ref={ctaRef}
          className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-500"
        >
          <a href="#projects" className="btn-primary inline-block font-mono">
            Check out my work!
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-teal">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
