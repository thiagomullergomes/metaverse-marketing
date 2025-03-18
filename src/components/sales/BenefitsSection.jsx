import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Rocket, Trophy, Clock, ArrowRight, CreditCard, Users, ChevronRight } from 'lucide-react';
import { Badge, Button } from '../ui';

const BenefitsSection = ({ y3 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const benefits = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Conversões Maximizadas",
      description: "Aumento significativo na taxa de conversão do seu funil de vendas.",
      value: "5X",
      color: "green"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Crescimento Acelerado",
      description: "Escalabilidade rápida e consistente para seu negócio digital.",
      value: "300%",
      color: "blue"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Liderança de Mercado",
      description: "Posicionamento premium em relação aos seus concorrentes.",
      value: "TOP 1%",
      color: "purple"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Implementação Rápida",
      description: "Resultados visíveis em tempo recorde sem longos processos.",
      value: "7 dias",
      color: "yellow"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Redução de Custos",
      description: "Menor investimento por lead e maior retorno por cliente.",
      value: "-40%",
      color: "red"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audiência Qualificada",
      description: "Atração de clientes ideais com alto potencial de conversão.",
      value: "Tier A",
      color: "pink"
    }
  ];
  
  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: "bg-green-500/20",
        text: "text-green-400",
        border: "border-green-500/30",
        glow: "bg-green-500/30"
      },
      blue: {
        bg: "bg-blue-500/20",
        text: "text-blue-400",
        border: "border-blue-500/30",
        glow: "bg-blue-500/30"
      },
      purple: {
        bg: "bg-purple-500/20",
        text: "text-purple-400",
        border: "border-purple-500/30",
        glow: "bg-purple-500/30"
      },
      yellow: {
        bg: "bg-yellow-500/20",
        text: "text-yellow-400",
        border: "border-yellow-500/30",
        glow: "bg-yellow-500/30"
      },
      red: {
        bg: "bg-red-500/20",
        text: "text-red-400",
        border: "border-red-500/30",
        glow: "bg-red-500/30"
      },
      pink: {
        bg: "bg-pink-500/20",
        text: "text-pink-400",
        border: "border-pink-500/30",
        glow: "bg-pink-500/30"
      }
    };
    
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"
        style={{ y: y3 }}
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
          duration: 7.5,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(74, 222, 128, 0.4) 0%, transparent 70%)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="px-3 py-1 bg-green-500/10 text-green-300">
              <span>Benefícios Transformadores</span>
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Impulsione 
            <span className="text-gradient bg-gradient-to-r from-green-400 to-green-200 ml-2">
              Seus Resultados
            </span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const colorClasses = getColorClasses(benefit.color);
            
            return (
              <motion.div
                key={index}
                className={`relative p-6 rounded-xl border ${colorClasses.border} bg-black/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect on hover */}
                <motion.div 
                  className={`absolute inset-0 -z-10 rounded-xl ${colorClasses.glow} blur-xl opacity-0`}
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colorClasses.bg} ${colorClasses.text}`}>
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {benefit.icon}
                    </motion.div>
                  </div>
                  <div className={`text-2xl font-bold ${colorClasses.text}`}>
                    {benefit.value}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-6">{benefit.description}</p>
                
                <div className="absolute bottom-6 right-6">
                  <button className={`p-2 rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-blue-400 text-white px-8 py-4 rounded-full text-base md:text-lg flex items-center gap-2 group">
            Quero Estes Benefícios Agora
            <span className="group-hover:translate-x-1 transition-transform">
              <ChevronRight className="w-5 h-5" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
