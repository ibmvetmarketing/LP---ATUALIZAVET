import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const editions = [
  'Edição 01', 'Edição 02', 'Edição 03', 'Edição 04', 'Edição 05',
  'Edição 06', 'Edição 07', 'Edição 08', 'Agora a 09'
];

const RotatingText: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <section ref={containerRef} className="py-16 overflow-hidden bg-gradient-to-r from-primary to-blue-900 relative">
      {/* Simplified Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="relative"
        style={{ scale, opacity }}
      >
        {/* Texto rotativo principal otimizado */}
        <div className="relative">
          {/* Camada de fundo simplificada */}
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex whitespace-nowrap absolute inset-0 blur-sm opacity-20"
          >
            {editions.map((edition, index) => (
              <div key={`blur-${index}`} className="flex items-center">
                <span className="text-4xl md:text-6xl font-bold text-yellow-300 mx-8">
                  {edition}
                </span>
                <span className="text-4xl md:text-6xl text-white mx-4">•</span>
              </div>
            ))}
          </motion.div>
          
          {/* Camada principal otimizada */}
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex whitespace-nowrap relative z-10"
          >
            {/* Sequência única otimizada */}
            {[...editions, ...editions].map((edition, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span 
                  className="text-4xl md:text-6xl font-bold mx-8 relative"
                  style={{
                    background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {edition}
                </motion.span>
                <span className="text-4xl md:text-6xl text-white/80 mx-4">•</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradientes nas bordas simplificados */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-primary to-transparent z-20" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-blue-900 to-transparent z-20" />
        
        {/* Efeito de luz central otimizado */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>


    </section>
  );
};

export default RotatingText;