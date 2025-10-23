import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 py-12 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-black font-bold text-xl">V</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-500">AtualizaVet</h3>
            </div>
            <p className="text-gray-300 mb-4">
              O maior evento de atualização veterinária do país. 
              Conectando profissionais e promovendo o conhecimento.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                aria-label="Instagram"
              >
                📱
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                aria-label="Facebook"
              >
                📘
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                aria-label="LinkedIn"
              >
                💼
              </motion.a>
              <motion.a
                href="https://wa.me/554792712672"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                aria-label="WhatsApp"
              >
                💬
              </motion.a>
            </div>
          </div>

          {/* Informações do Evento */}
          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-4">📅 Informações do Evento</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Local: A definir
              </li>
              <li className="flex items-center">
                <span className="mr-2">📅</span>
                Data: 24 de Setembro (Quarta-feira)
              </li>
              <li className="flex items-center">
                <span className="mr-2">⏰</span>
                Horário: 18:30 às 22:30
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎫</span>
                Entrada: Gratuita
              </li>
              <li className="flex items-center">
                <span className="mr-2">🏆</span>
                Certificado: 4 horas
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold text-yellow-500 mb-4">📞 Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>Organização:</strong><br />
                Equipe AtualizaVet
              </li>
              <li>
                <strong>WhatsApp:</strong><br />
                <a 
                  href="https://wa.me/554792712672" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  (47) 9271-2672
                </a>
              </li>
              <li>
                <strong>E-mail:</strong><br />
                <a 
                  href="mailto:contato@atualizavet.com.br" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  contato@atualizavet.com.br
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          >
            <p>
              © 2024 AtualizaVet. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Termos de Uso
              </a>
            </div>
          </motion.div>
        </div>

        {/* Badge de Edição */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full font-bold">
            🎉 9ª Edição - Tradição em Excelência
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;