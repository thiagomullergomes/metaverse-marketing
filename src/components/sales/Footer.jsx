import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-black pt-12 pb-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          {/* Coluna 1: Logo e Redes Sociais */}
          <div className="max-w-xs">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Metaverse<span className="text-blue-500">Marketing</span>
            </h3>
            <div className="flex space-x-5 mb-4">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-all transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-all transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-all transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs md:text-sm text-gray-500">
              Transformando visitantes em clientes fiéis através de estratégias inovadoras.
            </p>
          </div>
          
          {/* Coluna 2: Links Úteis */}
          <div className="md:text-center">
            <h4 className="text-sm md:text-base font-semibold text-white mb-4">Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {['Home', 'Serviços', 'Sobre', 'Blog', 'FAQ', 'Contato'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-xs md:text-sm text-gray-500 hover:text-blue-400 transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-sm md:text-base font-semibold text-white mb-4">Contato</h4>
            <a 
              href="mailto:contato@metaversemarketing.com" 
              className="flex items-center text-gray-500 hover:text-blue-400 transition-all group"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:text-blue-400" />
              <span className="text-xs md:text-sm">contato@metaversemarketing.com</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600">
            {currentYear} MetaverseMarketing. Todos os direitos reservados.
          </p>
          <motion.p 
            className="text-gray-600 text-xs flex items-center mt-3 md:mt-0"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            Feito com <Heart className="w-3 h-3 text-red-400 mx-1 animate-pulse" /> por Metaverse Marketing
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
