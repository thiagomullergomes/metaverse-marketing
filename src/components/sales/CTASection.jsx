import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { Badge } from '../ui';

const CTASection = () => {
  const companyLogos = [
    {
      name: "TechCorp",
      image: "https://via.placeholder.com/100x40/2563eb/ffffff?text=TechCorp"
    },
    {
      name: "Innovate",
      image: "https://via.placeholder.com/100x40/4f46e5/ffffff?text=Innovate"
    },
    {
      name: "DigitalX",
      image: "https://via.placeholder.com/100x40/7e22ce/ffffff?text=DigitalX"
    },
    {
      name: "WebFuture",
      image: "https://via.placeholder.com/100x40/db2777/ffffff?text=WebFuture"
    },
    {
      name: "GrowthPlus",
      image: "https://via.placeholder.com/100x40/0891b2/ffffff?text=GrowthPlus"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated radial gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-transparent to-transparent z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3]
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
      
      <div className="container mx-auto px-4 relative z-20 max-w-5xl">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="px-3 py-1 bg-red-500/20 text-red-300">
              Vagas Limitadas - Apenas 2 Restantes
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Pronto para <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 pb-1 inline-block">Revolucionar</span> suas Vendas?
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Junte-se a dezenas de empresas que transformaram seu marketing digital com nossa metodologia exclusiva e resultados comprovados.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="mt-10"
          >
            <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white text-base md:text-lg font-medium px-10 py-5 rounded-full flex items-center gap-3 mx-auto relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 transition-transform duration-500 origin-left"></span>
              <span className="relative flex items-center gap-3">
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Rocket className="w-6 h-6" />
                </motion.span>
                Iniciar Transformação Digital Agora
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
