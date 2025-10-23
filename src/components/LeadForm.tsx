import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, X } from 'lucide-react';

interface LeadFormProps {
  onClose?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    instagram: '',
    city: '',
    formation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar se todos os campos obrigatórios estão preenchidos
    const errors = [];
    
    if (!formData.name.trim()) {
      errors.push('Nome');
    }
    if (!formData.email.trim()) {
      errors.push('Email');
    }
    if (!formData.whatsapp.trim()) {
      errors.push('WhatsApp');
    }
    if (!formData.instagram.trim()) {
      errors.push('Instagram');
    }
    if (!formData.city.trim()) {
      errors.push('Cidade');
    }
    if (!formData.formation) {
      errors.push('Formação');
    }
    
    if (errors.length > 0) {
      alert(`Por favor, preencha os seguintes campos obrigatórios: ${errors.join(', ')}`);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirecionar para WhatsApp
    const message = `Olá! Me inscrevi no AtualizaVet através do site. Meus dados: Nome: ${formData.name}, Email: ${formData.email}, WhatsApp: ${formData.whatsapp}, Instagram: ${formData.instagram}, Formação: ${formData.formation}`;
    const whatsappUrl = `https://wa.me/554792712672?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      id="lead-form"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-md"
    >
      {/* Header com Logo */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-t-2xl p-4 sm:p-6 text-center relative">
        <button 
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-white hover:text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-lg"
          title="Fechar formulário"
        >
          <X size={20} />
        </button>
          
          <div className="flex justify-center items-center">
            <img 
              src="https://i.postimg.cc/DwyV58w7/Logo-Original3.png" 
              alt="Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-b-2xl p-4 sm:p-6">
          <h2 className="text-gray-800 text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-center">
            Preencha o formulário para<br />
            garantir sua vaga:
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
            />

            <input
              type="tel"
              name="whatsapp"
              placeholder="Digite seu Whatsapp (Com DDD)"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
            />

            <input
              type="text"
              name="instagram"
              placeholder="Seu Instagram (@usuario)"
              value={formData.instagram}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
            />

            <input
              type="text"
              name="city"
              placeholder="Sua cidade"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
            />

            {/* Campo de Formação */}
            <div className="space-y-3">
              <label className="block text-gray-700 text-sm font-medium">Formação</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="formation"
                    value="Estudante de Medicina veterinária"
                    checked={formData.formation === 'Estudante de Medicina veterinária'}
                    onChange={handleInputChange}
                    required
                    className="mr-3 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700 text-sm">Estudante de Medicina veterinária</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="formation"
                    value="Médico recém formado"
                    checked={formData.formation === 'Médico recém formado'}
                    onChange={handleInputChange}
                    className="mr-3 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700 text-sm">Médico recém formado</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="formation"
                    value="Médico formado(a)"
                    checked={formData.formation === 'Médico formado(a)'}
                    onChange={handleInputChange}
                    className="mr-3 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700 text-sm">Médico formado(a)</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="formation"
                    value="Outro"
                    checked={formData.formation === 'Outro'}
                    onChange={handleInputChange}
                    className="mr-3 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700 text-sm">Outro</span>
                </label>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isSubmitting ? 'ENVIANDO...' : 'GARANTIR MINHA VAGA!'}
            </motion.button>
          </form>

          <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
            <Lock size={16} className="mr-2" />
            <span>Seus dados estão seguros!</span>
          </div>
        </div>
    </motion.div>
  );
};

export default LeadForm;