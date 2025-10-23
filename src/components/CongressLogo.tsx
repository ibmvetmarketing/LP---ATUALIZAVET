import React from 'react';
import { motion } from 'framer-motion';

const CongressLogo: React.FC = () => {
  return (
    <section className="bg-transparent">
      <div className="container-max py-4 flex items-center justify-center">
        <motion.img
          src="https://i.postimg.cc/WbzSktWn/LOGO-EXPERIENCE-2025-PRETO-Prancheta-1.png"
          alt="Logomarca do congresso IBMvet Experience"
          className="h-10 md:h-14 lg:h-16 w-auto object-contain"
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  );
};

export default CongressLogo;