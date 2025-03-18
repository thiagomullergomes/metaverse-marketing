import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, Target, Zap, Badge as LucideBadge } from 'lucide-react';
import { Button, Badge } from '../ui';

// Componentes memoizados para melhorar o desempenho
const AnimatedGlobe = memo(({ className }) => (
  <motion.div
    animate={{ 
      scale: [1, 1.2, 1],
      rotate: [0, 5, 0],
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className}
  >
    <Globe className="w-5 h-5 text-white" />
  </motion.div>
));

// Componente base com memoização
const HeroSection = memo(({ scrollYProgress, y1 }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24">
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black/80"
        style={{ y: y1 }}
      />
      
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="inline-block mb-6"
            >
              <Badge
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 text-lg rounded-full border border-blue-400/40 shadow-lg shadow-blue-700/30 flex items-center overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatedGlobe className="mr-2 flex-shrink-0" />
                <span className="font-medium">Nova Era do Marketing</span>
              </Badge>
            </motion.div>
            
            <div className="relative mb-6">
              <motion.h1
                className="text-6xl lg:text-8xl font-bold leading-tight"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-400 to-purple-500">
                  Meta
                </span>
                <span className="relative z-10 transform inline-block text-white">
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50"></span>
                  <span className="relative">verse</span>
                </span>
                <span className="block text-4xl lg:text-5xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 pb-2">
                  Tráfego & Landing Pages
                </span>
              </motion.h1>

              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 blur-3xl rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, transparent 70%)"
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-blue-100/80 mb-10 max-w-xl"
            >
              Descubra como <span className="font-semibold text-white">multiplique seus resultados</span> através de experiências digitais que hipnotizam visitantes e os transformam em clientes fiéis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 
                           text-xl px-12 py-4 rounded-3xl hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] 
                           transition-all duration-500"
              >
                <span className="relative z-10 flex items-center">
                  Iniciar Jornada
                  <motion.div
                    animate={{ 
                      x: [0, 5, 0],
                      rotate: [0, 15, 0],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-3"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:pl-12"
          >
            <div className="relative z-10 perspective-1000 max-w-md mx-auto">
              <motion.div
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 3, 0, -3, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="relative"
              >
                <div className="relative w-full h-full transform-gpu">
                  {/* 3D Landing Page Mockup - Reduced size */}
                  <div className="relative p-1.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-6 shadow-2xl overflow-hidden max-w-[280px] mx-auto">
                    <div className="bg-gray-900 rounded-xl overflow-hidden aspect-[9/16] shadow-inner">
                      <div className="p-1.5 bg-gradient-to-b from-gray-800 to-gray-900">
                        <div className="flex space-x-1 mb-3">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="bg-blue-900/30 backdrop-blur-sm h-24 rounded-lg mb-3"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-white/10 rounded-full w-3/4"></div>
                          <div className="h-3 bg-white/10 rounded-full w-1/2"></div>
                        </div>
                      </div>
                      <div className="p-1.5">
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="bg-blue-700/20 backdrop-blur-sm h-24 rounded-lg"></div>
                          <div className="bg-purple-700/20 backdrop-blur-sm h-24 rounded-lg"></div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="h-3 bg-white/10 rounded-full"></div>
                          <div className="h-3 bg-white/10 rounded-full w-4/5"></div>
                          <div className="h-3 bg-white/10 rounded-full w-2/3"></div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-10 rounded-lg w-1/2 mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements around the mockup */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="absolute inset-[2px] bg-black rounded-xl flex items-center justify-center">
                      <Target className="w-7 h-7 text-cyan-400" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-300 rounded-xl"
                    animate={{ 
                      y: [0, 10, 0],
                      x: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="absolute inset-[2px] bg-black rounded-xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-pink-400" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-md"
                    animate={{ 
                      x: [0, 15, 0],
                      rotate: [0, -15, 0],
                    }}
                    transition={{ 
                      duration: 7, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div className="absolute inset-[2px] bg-black rounded-md flex items-center justify-center">
                      <LucideBadge className="w-8 h-8 text-yellow-400" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Glowing backdrop */}
            <div className="absolute -inset-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-14 border-2 border-blue-400/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-blue-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
});

export default memo(HeroSection);
