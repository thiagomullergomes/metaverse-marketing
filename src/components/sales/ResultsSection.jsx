import React, { useState, useRef, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart3, Target, Crown, Users, LucideLayoutGrid, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

// Componente de resultado otimizado
const ResultItem = memo(({ result, index, activeCard, mousePosition, handleMouseMove, handleMouseLeave, cardRef }) => (
  <motion.div
    ref={cardRef}
    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full flex flex-col relative overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    onMouseMove={(e) => handleMouseMove(e, index)}
    onMouseLeave={handleMouseLeave}
  >
    {/* Efeito de brilho que segue o mouse */}
    {activeCard === index && (
      <>
        <motion.div 
          className="absolute pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${result.glowColor} 0%, transparent 70%)`,
            top: -100,
            left: -100,
            right: -100,
            bottom: -100
          }}
        />
        
        {/* Efeito externo pulsante */}
        <motion.div 
          className="absolute -inset-5 rounded-2xl pointer-events-none z-[-1]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1], 
            scale: [0.8, 1.05, 0.8],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            background: `linear-gradient(135deg, ${result.externalGlow || result.glowColor} 0%, transparent 80%)`,
            filter: "blur(20px)"
          }}
        />
        
        {/* Cantos brilhantes */}
        <motion.div 
          className="absolute w-10 h-10 top-0 left-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ 
            background: `radial-gradient(circle, ${result.glowColor} 0%, transparent 70%)`,
            filter: "blur(10px)"
          }}
        />
        <motion.div 
          className="absolute w-10 h-10 bottom-0 right-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ 
            background: `radial-gradient(circle, ${result.glowColor} 0%, transparent 70%)`,
            filter: "blur(10px)"
          }}
        />
      </>
    )}
    
    {/* Borda com brilho no hover */}
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 pointer-events-none -z-10">
      <div className={`absolute -inset-1 ${result.glowBorder} rounded-xl blur-lg`}></div>
    </div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${result.color} ${result.textColor} flex-shrink-0`}>
          {result.icon}
        </div>
        <h3 className={`font-medium text-lg md:text-xl ${result.textColor}`}>{result.title}</h3>
      </div>
      
      <p className="text-sm md:text-base text-gray-400 mb-6 flex-grow">{result.description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <h4 className={`text-2xl md:text-3xl font-bold ${result.textColor}`}>
          {result.value}
        </h4>
        <div className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        </div>
      </div>
    </div>
  </motion.div>
));

// Memoizados para evitar recálculos
const results = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "ROI Multiplicado",
    description: "Cada real investido retorna 5x mais que as campanhas tradicionais",
    value: "5X",
    color: "from-green-500/30 to-green-500/5",
    textColor: "text-green-400",
    glowColor: 'rgba(74, 222, 128, 0.15)',
    glowBorder: 'bg-green-500/20',
    externalGlow: 'rgba(74, 222, 128, 0.15)'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Conversões Elevadas",
    description: "Taxa de conversão até 3x maior que a média do mercado",
    value: "300%",
    color: "from-blue-500/30 to-blue-500/5",
    textColor: "text-blue-400",
    glowColor: 'rgba(56, 189, 248, 0.15)',
    glowBorder: 'bg-blue-500/20',
    externalGlow: 'rgba(56, 189, 248, 0.15)'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Tempo de Resposta",
    description: "Resultados visíveis em dias, não meses como métodos antigos",
    value: "7 dias",
    color: "from-purple-500/30 to-purple-500/5",
    textColor: "text-purple-400",
    glowColor: 'rgba(168, 85, 247, 0.15)',
    glowBorder: 'bg-purple-500/20',
    externalGlow: 'rgba(168, 85, 247, 0.15)'
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Autoridade no Mercado",
    description: "Posicione-se como líder incontestável em seu segmento",
    value: "#1",
    color: "from-yellow-500/30 to-yellow-500/5",
    textColor: "text-yellow-400",
    glowColor: 'rgba(251, 191, 36, 0.15)',
    glowBorder: 'bg-yellow-500/20',
    externalGlow: 'rgba(251, 191, 36, 0.15)'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Tráfego Qualificado",
    description: "Visitantes pré-dispostos a comprar, não apenas curiosos",
    value: "Premium",
    color: "from-orange-500/30 to-orange-500/5",
    textColor: "text-orange-400",
    glowColor: 'rgba(255, 140, 0, 0.15)',
    glowBorder: 'bg-orange-500/20',
    externalGlow: 'rgba(255, 140, 0, 0.15)'
  },
  {
    icon: <LucideLayoutGrid className="w-6 h-6" />,
    title: "Design Diferenciado",
    description: "Landing pages que se destacam da concorrência genérica",
    value: "Único",
    color: "from-pink-500/30 to-pink-500/5",
    textColor: "text-pink-400",
    glowColor: 'rgba(255, 82, 148, 0.15)',
    glowBorder: 'bg-pink-500/20',
    externalGlow: 'rgba(255, 82, 148, 0.15)'
  }
];

// Componente principal memoizado
const ResultsSection = memo(({ y3 }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(1);
  const cardsRef = useRef([]);

  const handleMouseMove = (e, index) => {
    if (!cardsRef.current[index]) return;
    
    const card = cardsRef.current[index];
    const rect = card.getBoundingClientRect();
    
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    setActiveCard(index);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
    setOpacity(0);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{
          background: 'radial-gradient(ellipse at center, rgba(22, 78, 99, 0.3) 0%, rgba(8, 21, 43, 0.7) 70%)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle at center, rgba(34, 197, 94, 0.35) 0%, transparent 70%)"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-green-500/20 text-green-400 text-sm mb-4">
              Benefícios Transformadores
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className="text-green-400">Seus Resultados</span>
            </h2>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Nunca Mais Serão os Mesmos
            </h3>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {results.map((result, index) => (
            <ResultItem
              key={index}
              result={result}
              index={index}
              activeCard={activeCard}
              mousePosition={mousePosition}
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              cardRef={el => cardsRef.current[index] = el}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            className="group bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 
                       text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg shadow-green-500/20"
          >
            Quero Estes Benefícios Agora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

export default memo(ResultsSection);
