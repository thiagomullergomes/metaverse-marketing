import React, { useState, useEffect, useMemo, useCallback } from 'react';
import HeroSection from './HeroSection';
import ProblemSolutionSection from './ProblemSolutionSection';
import ResultsSection from './ResultsSection';
import BenefitsSection from './BenefitsSection';
import TestimonialsSection from './TestimonialsSection';
import MethodologySection from './MethodologySection';
import CTASection from './CTASection';
import FloatToTop from './FloatToTop';

const SalesPage = () => {
  // Use useState com valor inicial para evitar cálculos repetidos
  const [scrollYProgress, setScrollYProgress] = useState(0);
  
  // Memoize os valores de parallax para evitar recálculos desnecessários
  const { y1, y2, y3, y4 } = useMemo(() => ({
    y1: scrollYProgress * 150,  // Parallax suave para o Hero
    y2: scrollYProgress * 100,  // Parallax sutil para ProblemSolution
    y3: scrollYProgress * 120,  // Parallax médio para Results
    y4: scrollYProgress * 80,   // Parallax leve para Methodology
  }), [scrollYProgress]);
  
  // Use useCallback para a função de scroll para evitar recriações
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    setScrollYProgress(scrollPercent);
  }, []);
  
  useEffect(() => {
    // Adicionar listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Limpeza para evitar vazamentos de memória
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  // Apenas renderizar se o componente estiver montado
  return (
    <div className="bg-black text-white min-h-screen">
      <HeroSection scrollYProgress={scrollYProgress} y1={y1} />
      <ProblemSolutionSection y2={y2} />
      <ResultsSection y3={y3} />
      <MethodologySection y4={y4} />
      <TestimonialsSection />
      <BenefitsSection />
      <CTASection />
      <FloatToTop />
    </div>
  );
};

// Exportar componente memoizado para evitar renderizações desnecessárias
export default React.memo(SalesPage);

export {
  HeroSection,
  ProblemSolutionSection,
  ResultsSection,
  BenefitsSection,
  TestimonialsSection,
  MethodologySection,
  CTASection,
  FloatToTop
};
