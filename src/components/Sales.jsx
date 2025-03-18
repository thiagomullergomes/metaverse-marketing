import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  HeroSection,
  ProblemSolutionSection,
  TestimonialsSection,
  MethodologySection,
  CTASection,
  FloatToTop,
  Footer
} from './sales/index';
import ResultsSection from './sales/ResultsSection';

const Sales = () => {
  // State hooks for interactive elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Ref for component
  const componentRef = useRef(null);
  
  // Framer Motion scroll hooks
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start start", "end end"]
  });
  
  // Motion values for cursor light effect
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 150 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 150 });
  const cursorRadius = useTransform(scrollYProgress, [0, 1], [250, 500]);
  
  // Parallax effects for different sections
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 50]);
  
  // Opacity effects for animations
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.8, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 0.8, 1]);
  
  // Rotation effects
  const rotating = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 15]
  );
  
  const springRotating = useSpring(rotating, {
    damping: 25,
    stiffness: 100
  });
  
  // Effect for mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      
      // Update motion values for smooth cursor following
      cursorX.set(clientX);
      cursorY.set(clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);
  
  // Effect for scroll position tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Effect for testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 5);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Generate random position for floating orbs
  const getRandomPosition = () => {
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 50 + 30,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    };
  };
  
  // Generate array of orbs
  const orbs = Array.from({ length: 30 }, () => getRandomPosition());
  
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden" ref={componentRef}>
      {/* Fixed cursor spotlight */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[5] opacity-70"
        style={{
          background: `radial-gradient(circle ${cursorRadius}px at ${cursorXSpring}px ${cursorYSpring}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Animated background matrix */}
      <motion.div
        className="absolute inset-0 bg-grid-blue-900/[0.03] bg-[size:50px_50px] z-[1]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgb(13, 37, 73, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(13, 37, 73, 0.1) 1px, transparent 1px)',
          rotate: springRotating,
          scale: useTransform(useMotionValue(scrollY), [0, 1000], [1, 1.2])
        }}
      />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden z-[2]">
        {orbs.map((orb, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle at center, ${
                ['rgba(59, 130, 246, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(236, 72, 153, 0.3)'][index % 3]
              }, transparent)`,
              filter: 'blur(8px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              repeat: Infinity,
              duration: orb.duration,
              delay: orb.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Main content sections */}
      <div className="relative z-10">
        <HeroSection scrollYProgress={scrollYProgress} y1={y1} />
        <ProblemSolutionSection y2={y2} />
        <ResultsSection y3={y3} />
        <TestimonialsSection activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} />
        <MethodologySection />
        <CTASection />
      </div>
      
      {/* Float to top button */}
      <FloatToTop scrollY={scrollY} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sales;
