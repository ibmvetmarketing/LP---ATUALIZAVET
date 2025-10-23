import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

interface ScheduleItem {
  time: string;
  title: string;
  speaker: string;
  description: string;
  icon: React.ReactNode;
}

const scheduleItems: ScheduleItem[] = [
  {
    time: '18:30 às 19:15',
    title: 'Coquetel de boas-vindas',
    speaker: 'Organização',
    description: 'Recepção com coquetel de boas-vindas',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16l-7 7v6H11v-6L4 4z" fill="currentColor"/>
        <rect x="10" y="17" width="4" height="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    time: '19:15 às 19:25',
    title: 'Apresentação do evento',
    speaker: 'Dr. Mello',
    description: 'Abertura e apresentação do evento',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="7" r="3" fill="currentColor"/>
        <rect x="6" y="10" width="4" height="7" rx="1" fill="currentColor"/>
        <path d="M12 12h6v2h-6z" fill="currentColor"/>
      </svg>
    )
  },
  {
    time: '19:25 às 19:55',
    title: 'USG Intervencionista',
    speaker: 'Dra. Pamella Amororim',
    description: 'Ultrassonografia intervencionista na prática',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="6" width="8" height="6" rx="2" fill="currentColor"/>
        <path d="M13 9h6" stroke="currentColor" strokeWidth="2" />
        <path d="M16 7c1.5 1 1.5 3 0 4" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    )
  },
  {
    time: '19:55 às 20:25',
    title: 'Suspeito de Hipercortisolismo, como triar esse paciente?',
    speaker: 'Dr. Greicy Duarte',
    description: 'Abordagem diagnóstica e triagem do hipercortisolismo',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 12c0-3 3-5 6-5s6 2 6 5-3 5-6 5-6-2-6-5z" fill="currentColor"/>
        <circle cx="12" cy="12" r="2" fill="#111" />
      </svg>
    )
  },
  {
    time: '20:25 às 20:55',
    title: 'Comunicação no digital: o segredo de quem quer se destacar',
    speaker: 'Dr. Tuani Rosa',
    description: 'Estratégias de comunicação no ambiente digital',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h12v9H9l-5 4V5z" fill="currentColor"/>
        <circle cx="15.5" cy="9" r="1.5" fill="#111"/>
        <path d="M18 6l3 3-3 3" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    )
  }
];

const Schedule: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section ref={containerRef} className="py-20 section-padding bg-gradient-to-b from-blue-900 to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="container-max"
        style={{ y, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 relative"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(255, 193, 7, 0.5)"
            }}
          >
            📅 <motion.span
              className="text-yellow-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Cronograma
            </motion.span> do Evento
          </motion.h2>
          <div className="relative">
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto relative z-10"
              whileHover={{
                scale: 1.02,
                color: "#fbbf24"
              }}
            >
              Uma programação completa com os melhores especialistas da medicina veterinária
            </motion.p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent rounded-lg"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          {scheduleItems.map((item, index) => {
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);
            const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
            const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  mouseX.set(e.clientX - centerX);
                  mouseY.set(e.clientY - centerY);
                }}
                onMouseLeave={() => {
                  mouseX.set(0);
                  mouseY.set(0);
                }}
              >
                {/* Linha conectora */}
                {index < scheduleItems.length - 1 && (
                  <motion.div 
                    className="absolute left-6 top-20 w-0.5 h-16 bg-yellow-500/30 z-0"
                    animate={{
                      scaleY: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                )}
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-500/20 rounded-full"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                <div className="flex items-start space-x-6 mb-8">
                  {/* Horário e Ícone */}
                  <motion.div 
                    className="flex-shrink-0 text-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center mb-2 relative z-10"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(251, 191, 36, 0)",
                          "0 0 0 10px rgba(251, 191, 36, 0.1)",
                          "0 0 0 0 rgba(251, 191, 36, 0)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <span className="sr-only">{item.title}</span>
                      {item.icon}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>
                    <motion.div 
                      className="bg-primary border-2 border-yellow-500 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-yellow-500 font-bold text-sm">{item.time}</span>
                    </motion.div>
                  </motion.div>

                  {/* Conteúdo */}
                  <motion.div
                    className="flex-1 bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-blue-500/5 to-yellow-500/5 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.h3 
                      className="text-xl font-bold text-yellow-500 mb-2 relative z-10"
                      whileHover={{
                        color: "#fbbf24",
                        x: 10
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white font-medium mb-2 relative z-10"
                      whileHover={{
                        color: "#f3f4f6",
                        x: 5
                      }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    >
                      👨‍⚕️ {item.speaker}
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 relative z-10"
                      whileHover={{
                        color: "#e5e7eb",
                        x: 5
                      }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-yellow-500/20 border border-yellow-500 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              🎓 Certificado de Participação Incluso
            </h3>
            <p className="text-lg text-white mb-6">
              Todos os participantes receberão certificado de 4 horas de atividade complementar, 
              válido para comprovação de educação continuada.
            </p>
            <motion.button
              onClick={() => {
                const formElement = document.getElementById('lead-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📝 Garantir Minha Vaga Agora
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Schedule;