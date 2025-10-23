import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar o botão após rolar 100px
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="btn-sticky md:hidden"
        >
          <motion.button
            onClick={scrollToForm}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                '0 4px 20px rgba(245, 158, 11, 0.3)',
                '0 4px 30px rgba(245, 158, 11, 0.5)',
                '0 4px 20px rgba(245, 158, 11, 0.3)'
              ]
            }}
            transition={{ 
              boxShadow: { 
                duration: 2, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }
            }}
          >
            <span className="text-lg">🎯</span>
            <span className="text-lg font-bold">Garantir Vaga Gratuita</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyButton;