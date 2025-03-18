import React, { useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { CheckCircle2, ArrowRight, TrendingUp, UsersIcon, Target } from 'lucide-react';
import { Badge, Button } from '../ui';

const MethodologySection = ({ y2 }) => {
  const steps = [
    {
      number: "01",
      title: "Captação Estratégica",
      description: "Implementamos estratégias avançadas de tráfego qualificado, utilizando segmentação precisa e targeting comportamental para atrair visitantes com alta probabilidade de conversão.",
      features: [
        "Micro-targeting avançado",
        "Algoritmos de machine learning",
        "Segmentação comportamental",
        "Otimização de campanhas em tempo real"
      ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      color: "blue",
      direction: "right"
    },
    {
      number: "02",
      title: "Conversão Hipnótica",
      description: "Nossas landing pages utilizam princípios avançados de neuromarketing e psicologia persuasiva para criar experiências de conversão irresistíveis e altamente eficazes.",
      features: [
        "Copywriting persuasivo",
        "Design centrado em conversão",
        "A/B testing automatizado",
        "Gatilhos mentais estratégicos"
      ],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      color: "purple",
      direction: "left"
    },
    {
      number: "03",
      title: "Escala e Otimização",
      description: "Utilizando dados e análises avançadas, identificamos oportunidades de crescimento e otimização contínua, escalando seus resultados de forma sustentável e previsível.",
      features: [
        "Analytics avançado",
        "Funil de vendas otimizado",
        "Automação de processos",
        "Dashboards personalizados"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      color: "cyan",
      direction: "right"
    }
  ];
  
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        text: "text-blue-400",
        bg: "bg-blue-500/20",
        border: "border-blue-500/30",
        glow: "bg-blue-500/30"
      },
      purple: {
        text: "text-purple-400",
        bg: "bg-purple-500/20",
        border: "border-purple-500/30",
        glow: "bg-purple-500/30"
      },
      cyan: {
        text: "text-cyan-400",
        bg: "bg-cyan-500/20",
        border: "border-cyan-500/30",
        glow: "bg-cyan-500/30"
      }
    };
    
    return colors[color] || colors.blue;
  };

  return (
    <section className="relative py10 px-4 bg-black overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"
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
          duration: 8,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle at center, rgba(37, 99, 235, 0.3) 0%, transparent 70%)"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm backdrop-blur-sm">
              Metodologia Exclusiva
            </div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-white">O </span>
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 pb-1 inline-block relative z-10">Sistema Comprovado</span>
              <motion.span 
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-xl z-0" 
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </span>
            <span className="text-white"> em 3 Etapas</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-400 max-w-5xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nossa abordagem revolucionária que transforma visitantes aleatórios em clientes fiéis e promotores da sua marca
          </motion.p>
        </div>
        
        {/* Timeline line in center (only visible on desktop) */}
        <motion.div 
          className="hidden lg:block absolute left-1/2 top-[250px] bottom-20 w-1 bg-blue-500/50"
          initial={{ height: 0 }}
          whileInView={{ height: "auto" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated dots on timeline */}
          {[0, 1, 2].map((i) => (
            <motion.div 
              key={i}
              className="absolute w-4 h-4 bg-blue-500 rounded-full -left-1.5"
              style={{ top: `${20 + i * 33}%` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + (i * 0.2), duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-400"
                animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => {
            const colorClasses = getColorClasses(step.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${step.direction === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20`}
              >
                {/* Image side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute -inset-1 rounded-xl ${colorClasses.glow} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                  <motion.div 
                    className="relative overflow-hidden rounded-xl aspect-video"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className={`absolute bottom-6 ${step.direction === 'left' ? 'right-6' : 'left-6'} ${colorClasses.text} text-5xl md:text-7xl font-bold`}
                      whileHover={{ 
                        scale: 1.1, 
                        textShadow: `0 0 15px ${step.color === 'blue' ? 'rgba(59, 130, 246, 0.7)' : step.color === 'purple' ? 'rgba(139, 92, 246, 0.7)' : 'rgba(6, 182, 212, 0.7)'}` 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.number}
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Content side */}
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                  <motion.h3 
                    className={`text-3xl font-bold ${colorClasses.text} text-left`}
                    whileInView={{ 
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)", 
                        `0 0 8px ${step.color === 'blue' ? 'rgba(59, 130, 246, 0.5)' : step.color === 'purple' ? 'rgba(139, 92, 246, 0.5)' : 'rgba(6, 182, 212, 0.5)'}`, 
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3, 
                      ease: "easeInOut"
                    }}
                    viewport={{ once: false, amount: 1 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-lg text-left"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {step.description}
                  </motion.p>
                  
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        initial={{ opacity: 0, x: step.direction === 'left' ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center gap-3 group/feature"
                        whileHover={{ x: step.direction === 'left' ? -5 : 5 }}
                      >
                        <motion.div 
                          className={`${colorClasses.bg} ${colorClasses.text} rounded-full p-1 flex-shrink-0`}
                          whileHover={{ scale: 1.1, backgroundColor: step.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : step.color === 'purple' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(6, 182, 212, 0.3)' }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle2 className="w-5 h-5" />
                        </motion.div>
                        <motion.span 
                          className="text-white"
                          whileHover={{ color: step.color === 'blue' ? 'rgb(96, 165, 250)' : step.color === 'purple' ? 'rgb(167, 139, 250)' : 'rgb(34, 211, 238)' }}
                        >
                          {feature}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {step.number === "01" && (
                    <div className="mt-6 flex justify-start">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button 
                          className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-6 py-3 flex items-center gap-2 group transition-all duration-300 relative overflow-hidden"
                        >
                          <motion.span 
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ mixBlendMode: "overlay" }}
                            animate={{ x: ["0%", "100%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          />
                          <span>Saber Mais sobre Captação Estratégica</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  )}
                  
                  {step.number === "02" && (
                    <div className="mt-6 flex justify-start">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button 
                          className="bg-purple-500 text-white hover:bg-purple-600 rounded-full px-6 py-3 flex items-center gap-2 group transition-all duration-300 relative overflow-hidden"
                        >
                          <motion.span 
                            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ mixBlendMode: "overlay" }}
                            animate={{ x: ["0%", "100%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          />
                          <span>Saber Mais sobre Conversão Hipnótica</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  )}
                  
                  {step.number === "03" && (
                    <div className="mt-6 flex justify-start">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button 
                          className="bg-cyan-500 text-white hover:bg-cyan-600 rounded-full px-6 py-3 flex items-center gap-2 group transition-all duration-300 relative overflow-hidden"
                        >
                          <motion.span 
                            className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ mixBlendMode: "overlay" }}
                            animate={{ x: ["0%", "100%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          />
                          <span>Saber Mais sobre Escala e Otimização</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
