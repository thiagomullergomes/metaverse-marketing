import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../ui';

const TestimonialsSection = ({ activeTestimonial, setActiveTestimonial }) => {
  const testimonials = [
    {
      text: "Tentamos várias agências antes, mas nenhuma entregou resultados nem perto disso. A estratégia de tráfego pago combinada com landing pages hipnóticas revolucionou nosso negócio. Já expandimos para 3 novos mercados.",
      name: "Ana Silva",
      role: "Diretora de Marketing",
      company: "Growth Marketing",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      metrics: [
        { label: "ROI", value: "+250%" },
        { label: "CONVERSÃO", value: "28%" },
        { label: "ESCALABILIDADE", value: "3X" }
      ]
    },
    {
      text: "Nossa empresa aumentou em 320% o número de leads qualificados após implementar a metodologia exclusiva. Os resultados foram rápidos e consistentes, superando todas as nossas expectativas iniciais.",
      name: "Carlos Mendes",
      role: "CEO",
      company: "Tech Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      metrics: [
        { label: "ROI", value: "+180%" },
        { label: "CONVERSÃO", value: "32%" },
        { label: "ESCALABILIDADE", value: "2.5X" }
      ]
    },
    {
      text: "Depois de 3 meses utilizando a plataforma, conseguimos reduzir nosso custo de aquisição em 42% enquanto aumentamos o volume de clientes qualificados. O suporte técnico foi excepcional durante todo o processo.",
      name: "Mariana Costa",
      role: "CMO",
      company: "E-commerce Pro",
      image: "https://randomuser.me/api/portraits/women/64.jpg",
      metrics: [
        { label: "ROI", value: "+210%" },
        { label: "CONVERSÃO", value: "24%" },
        { label: "ESCALABILIDADE", value: "4X" }
      ]
    },
    {
      text: "Implementamos a estratégia e vimos resultados imediatos. Nossa taxa de engajamento aumentou 175% no primeiro mês e as vendas cresceram consistentemente desde então. A metodologia realmente funciona.",
      name: "Roberto Almeida",
      role: "Fundador",
      company: "Digital Growth",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      metrics: [
        { label: "ROI", value: "+195%" },
        { label: "CONVERSÃO", value: "27%" },
        { label: "ESCALABILIDADE", value: "3.2X" }
      ]
    },
    {
      text: "A transformação foi completa. Antes lutávamos para conseguir leads de qualidade, agora temos um fluxo constante de clientes ideais. Nossa equipe de vendas está mais motivada e os resultados financeiros falam por si.",
      name: "Patricia Lima",
      role: "Diretora Comercial",
      company: "SaaS Solutions",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      metrics: [
        { label: "ROI", value: "+230%" },
        { label: "CONVERSÃO", value: "30%" },
        { label: "ESCALABILIDADE", value: "2.8X" }
      ]
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      
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
          background: "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.4) 0%, transparent 70%)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm mb-4">
              Histórias de Sucesso
            </div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-white">As</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 pb-1 inline-block">Transformações</span>{" "}
            <span className="text-white">que Criamos</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left side - Controls */}
          <motion.div 
            className="lg:sticky lg:top-32 space-y-8 self-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                O que Nossos Clientes Dizem
              </h3>
              <p className="text-sm md:text-base text-gray-300 text-left">
                Empresários de diversos segmentos que transformaram seus negócios com nossa metodologia exclusiva.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 py-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-purple-500 w-4' : 'bg-gray-600'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
            
            <div>
              <Button
                className="group relative overflow-hidden bg-transparent text-white px-6 py-3 rounded-full flex items-center gap-2 border border-purple-500/30 hover:border-purple-500/60"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500 font-medium">
                  Ver Mais Histórias
                </span>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          
          {/* Right side - Testimonials */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                activeTestimonial === index && (
                  <motion.div
                    key={index}
                    className="rounded-xl p-8 border border-purple-800/30 bg-purple-950/30 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-16 relative">
                      <div className="text-purple-400 text-6xl absolute -top-8 left-0 opacity-30">"</div>
                      <p className="text-white text-base md:text-lg leading-relaxed z-10 relative pl-6 text-left">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {testimonial.metrics.map((metric, idx) => (
                        <div key={idx} className="p-4 bg-purple-900/40 rounded-lg border border-purple-800/30">
                          <p className="text-purple-300 text-xs mb-1 text-left">{metric.label}</p>
                          <p className="text-white font-bold text-lg md:text-xl text-left">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4 text-left">
                        <p className="text-white font-medium">{testimonial.name}</p>
                        <p className="text-purple-300 text-xs md:text-sm">{testimonial.role}</p>
                        <p className="text-gray-400 text-xs md:text-sm">{testimonial.company}</p>
                      </div>
                      <div className="ml-auto">
                        <div className="flex">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-purple-300 fill-purple-300" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
