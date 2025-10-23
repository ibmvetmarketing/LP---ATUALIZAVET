import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

const AddressSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const address = "Rua 10, 303 - Centro, Balneário Camboriú - SC";
  // URL de incorporação sem necessidade de API Key, com encodeURIComponent correto
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&hl=pt-BR&output=embed`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=driving`;

  const locationInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: address,
      action: () => window.open(googleMapsDirectionsUrl, '_blank')
    },
    {
      icon: Clock,
      title: "Horário do Evento",
      content: "8h às 18h",
      action: null
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-primary to-blue-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container-max">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 relative"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(234, 179, 8, 0.5)"
            }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Localização do Evento
            </span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Venha nos visitar no coração de Balneário Camboriú
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MapPin className="text-yellow-500" size={28} />
                Informações do Local
              </h3>
              
              <div className="space-y-6">
                {locationInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className={`group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                      info.action ? 'hover:bg-white/10 cursor-pointer' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-black" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {info.content}
                      </p>
                    </div>
                    {info.action && (
                      <Navigation 
                        className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" 
                        size={16} 
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Botão de Direções */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                onClick={() => window.open(googleMapsDirectionsUrl, '_blank')}
                className="w-full mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-6 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(234, 179, 8, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation size={20} />
                Como Chegar
              </motion.button>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                {/* Mapa incorporado usando URL de busca */}
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="384"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Localização AtualizaVet"
                />
                
                {/* Overlay com informações */}
                <motion.div
                  className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="text-yellow-500" size={16} />
                    <span className="text-sm font-semibold">AtualizaVet</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">
                    Centro, Balneário Camboriú
                  </p>
                </motion.div>

                {/* Botão de zoom */}
                <motion.button
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-black p-2 rounded-lg shadow-lg transition-all duration-300"
                  onClick={() => window.open(googleMapsDirectionsUrl, '_blank')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Navigation size={16} />
                </motion.button>
              </div>
            </div>

            {/* Informação adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 text-center"
            >
              <p className="text-gray-300 text-sm">
                📍 Localização central com fácil acesso
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Estacionamento disponível nas proximidades
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-gray-300 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Não perca esta oportunidade única de atualização profissional!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(234, 179, 8, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Garantir Minha Vaga
            </motion.button>
            <motion.button
              className="border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(googleMapsDirectionsUrl, '_blank')}
            >
              Ver no Maps
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AddressSection;