import React, { useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { Target, AlertCircle, Layout, MessageCircle, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

// Memoize os itens estáticos
const problems = [
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Tráfego Desperdiçado",
    description: "Você paga por visitantes que nunca convertem em clientes"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Páginas que Repelem",
    description: "Design ultrapassado que afasta visitantes em segundos"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Mensagem Confusa",
    description: "Seu cliente não entende o valor real do seu produto"
  }
];

// Memoize os itens estáticos
const solutions = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Tráfego Ultra-segmentado",
    description: "Atrai apenas visitantes com alta probabilidade de conversão"
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Landing Pages Hipnóticas",
    description: "Design que prende a atenção e conduz à ação"
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Copywriting Persuasivo",
    description: "Mensagens que conectam diretamente com desejos e dores"
  }
];

// Componente de partícula otimizado
const Particle = memo(({ className, animate, style }) => (
  <motion.div
    className={className}
    animate={animate}
    transition={{
      repeat: Infinity,
      duration: Math.random() * 10 + 15,
      ease: "linear"
    }}
    style={style}
  />
));

const ProblemSolutionSection = memo(({ y2 }) => {
  // Memoize as partículas para evitar recálculos
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, index) => {
      const isRed = index % 2 === 0;
      const size = Math.floor(Math.random() * 10) + 3;
      
      return (
        <Particle
          key={`particle-${index}`}
          className={`absolute rounded-full ${isRed ? 'bg-red-500/20' : 'bg-blue-500/20'}`}
          animate={{
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`
            ]
          }}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            filter: `blur(${Math.random() + 0.5}px)`,
            background: isRed 
              ? "linear-gradient(to bottom right, rgba(239, 68, 68, 0.3), rgba(255, 155, 0, 0.1))" 
              : "linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.1))",
          }}
        />
      );
    });
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-black via-black to-black">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-blue-900/10"
        style={{ y: y2 }}
      />
      
      {/* Animated radial gradient background */}
      <motion.div 
        className="absolute inset-0 z-1"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(239, 68, 68, 0.4) 0%, transparent 50%, rgba(59, 130, 246, 0.4) 100%)"
        }}
      />
      
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Problems */}
          <div className="relative space-y-8">
            {/* Red glow effect for problems side */}
            <div className="absolute -inset-10 bg-gradient-to-br from-red-600/10 to-orange-600/5 rounded-full blur-3xl -z-10" />
            
            {/* Pulsing background effect */}
            <motion.div
              className="absolute -inset-10 bg-gradient-to-br from-red-600/5 to-orange-600/10 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-left space-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-white">Por que seu</div>
              <motion.div 
                className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent pb-2 inline-block"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Marketing Digital
              </motion.div>
              <motion.div 
                className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent pb-4 inline-block"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                style={{ backgroundSize: "200% 100%" }}
              >
                está falhando?
              </motion.div>
            </motion.h2>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    x: 5, 
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={`p-3 rounded-lg flex-shrink-0 ${
                      index === 0 ? 'bg-red-900/30 text-red-400' : 
                      index === 1 ? 'bg-orange-900/30 text-orange-400' : 
                      'bg-amber-900/30 text-amber-400'
                    }`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {problem.icon}
                  </motion.div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-medium text-white">{problem.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mt-1">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4 text-left"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="group bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 
                           text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-red-500/20 mr-auto
                           relative overflow-hidden"
              >
                <span className="relative z-10">Resolver Problemas</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "overlay" }}
                  animate={{ x: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </motion.div>
          </div>
          
          {/* Right side - Solutions */}
          <motion.div
            className="relative max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Blue glow effect for solutions side */}
            <div className="absolute -inset-10 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl -z-10" />
            
            {/* Additional pulsing glow */}
            <motion.div 
              className="absolute -inset-10 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl -z-10"
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
            
            <motion.div 
              className="relative rounded-xl border border-blue-500/30 p-7 bg-gradient-to-br from-blue-950/40 to-purple-950/40 backdrop-blur-sm shadow-xl shadow-blue-500/5"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                rotate: [0, 2, 0, -2, 0],
                boxShadow: "0 30px 60px -10px rgba(0,0,0,0.3), 0 18px 36px -18px rgba(0,0,0,0.33)",
                borderColor: "rgba(59, 130, 246, 0.5)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Glow effect */}
              <div className="absolute -z-10 inset-0 rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
              </div>
              
              {/* Shimmering effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
                style={{ backgroundSize: "200% 100%" }}
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating orbs */}
              <motion.div
                className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/0 blur-xl"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-16 -left-12 w-36 h-36 rounded-full bg-gradient-to-tr from-purple-400/30 to-blue-400/0 blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.3, 1],
                  x: [0, -10, 0],
                  y: [0, 10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 9,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <div className="flex flex-col items-start">
                <motion.div 
                  className="flex justify-start items-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="p-4 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300"
                    animate={{ 
                      boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 15px rgba(59, 130, 246, 0.5)", "0 0 0 rgba(59, 130, 246, 0)"] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 180],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <Sparkles className="w-8 h-8" />
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-white text-left mb-6 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent pb-3 inline-block"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  A Solução Definitiva
                </motion.h2>
                
                <div className="space-y-4 w-full">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-2 text-left"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      whileHover={{ 
                        x: -5, 
                        backgroundColor: "rgba(59, 130, 246, 0.05)",
                        borderRadius: "8px",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div 
                        className="p-2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/20 text-blue-300"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 10,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {solution.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-lg md:text-xl font-medium text-blue-100 pb-1 inline-block">{solution.title}</h3>
                        <p className="text-sm md:text-base text-blue-200/60">{solution.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default memo(ProblemSolutionSection);
