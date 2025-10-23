import React from 'react';
import { motion } from 'framer-motion';

const TopPromoBar: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white"
      >
        <div className="container-max py-2 md:py-3 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-3">
          {/* Logomarca à esquerda */}
          <div className="flex md:justify-start justify-center">
            <img
              src="https://i.postimg.cc/GmrnkZNh/LOGO-EXPERIENCE-2025-BRANCO-Prancheta-1.png"
              alt="Logomarca IBMvet Experience"
              className="h-10 md:h-14 lg:h-16 w-auto object-contain drop-shadow"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Mensagem central: informações 2026 e garantia de menor preço */}
          <div className="text-center font-bold text-xs md:text-sm lg:text-base tracking-wider">
            <span className="uppercase block">IBMvet Experience 2026</span>
            <span className="uppercase block font-extrabold">GARANTA O MENOR PREÇO PARA O MAIOR EVENTO DA MEDICINA VETERINÁRIA</span>
          </div>

          {/* Apenas botão de CTA à direita */}
          <div className="flex items-center justify-center md:justify-end gap-2">
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Ir para o formulário e garantir meu ingresso"
              className="ml-2 shrink-0 bg-white text-red-600 font-bold py-1.5 px-3 md:py-2 md:px-4 rounded-md shadow-sm hover:bg-red-50 transition-colors"
            >
              Garantir meu ingresso
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TopPromoBar;