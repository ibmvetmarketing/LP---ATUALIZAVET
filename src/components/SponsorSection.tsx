import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  { src: 'https://i.postimg.cc/9FdSf6sQ/fn-logo-1.png', alt: 'Patrocinador 1' },
  { src: 'https://i.postimg.cc/j5WXKZJg/image.webp', alt: 'Patrocinador 2' },
  { src: 'https://i.postimg.cc/xCkRYtbp/logo-vetex.png', alt: 'Patrocinador 3' },
  { src: 'https://i.postimg.cc/N0RJZQZ5/Captura-de-tela-2025-10-23-114646-removebg-preview-1.png', alt: 'Dana Jalecos' },
  { src: 'https://i.postimg.cc/zXm1sQRw/Whats-App-Image-2025-10-23-at-11-17-26-removebg-preview.png', alt: 'Patrocinador 5' },
];

const SponsorSection: React.FC = () => {
  return (
    <section className="section-padding py-8 bg-black/30">
      <div className="container-max">
        {/* Título acima dos patrocinadores */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">Patrocinadores</span>
        </motion.h2>

        {/* Grid de logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center"
        >
          {sponsors.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-full"
           >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-12 md:h-16 w-auto object-contain drop-shadow"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorSection;