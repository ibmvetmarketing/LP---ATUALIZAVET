import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Declaração TypeScript para o elemento wistia-player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': {
        'media-id'?: string;
        seo?: string;
        aspect?: string;
        autoplay?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

interface VideoItem {
  id: string;
  titleLeft: string;
  titleLeftHighlight: string;

  titleRight: string;
  titleRightHighlight: string;
  ctaPlay: string;
  ctaText: string;
  ctaButton: string;
  artUrl?: string; // imagem de arte do palestrante
  videoUrl?: string; // URL do vídeo (YouTube embed)
  focusPosition?: string; // posição para focar somente o rosto
  isWistiaVideo?: boolean; // indica se é um vídeo Wistia
  wistiaMediaId?: string; // ID do vídeo Wistia
  backgroundSize?: string; // tamanho customizado do background
}

const videos: VideoItem[] = [
  {
    id: 'pamella',
    titleLeft: 'Menos de',
    titleLeftHighlight: '1 minuto',
    titleRight: '',
    titleRightHighlight: 'DÊ O PLAY!',
    ctaPlay: 'DÊ O PLAY!',
    ctaText: 'Este não é apenas um evento. É um convite para transformares a tua vida e os teus negócios.',
    ctaButton: 'EU NÃO VOU FICAR DE FORA!',
    artUrl: 'https://i.postimg.cc/SRwX3k2q/Whats-App-Image-2025-10-13-at-13-17-17.jpg',
    isWistiaVideo: true,
    wistiaMediaId: 'vetfdk0jwp',
    focusPosition: '50% 18%'
  },
  {
    id: 'tuani',
    titleLeft: 'Menos de',
    titleLeftHighlight: '1 minuto',
    titleRight: '',
    titleRightHighlight: 'DÊ O PLAY!',
    ctaPlay: 'DÊ O PLAY!',
    ctaText: 'Este não é apenas um evento. É um convite para transformares a tua vida e os teus negócios.',
    ctaButton: 'EU NÃO VOU FICAR DE FORA!',
    artUrl: 'https://i.postimg.cc/8cqF9NJF/Whats-App-Image-2025-10-16-at-13-51-04.jpg',
    isWistiaVideo: true,
    wistiaMediaId: 'qrm0f7temq',
    focusPosition: '50% 22%',
    backgroundSize: 'auto 110%'
  }
];

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" opacity="0.8" />
    <polygon points="20,16 20,32 34,24" fill="#ffffff" />
  </svg>
);

const VideosSection: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    // Adicionar scripts do Wistia ao head do documento
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);

    const embedScript = document.createElement('script');
    embedScript.src = 'https://fast.wistia.com/embed/qrm0f7temq.js';
    embedScript.async = true;
    embedScript.type = 'module';
    document.head.appendChild(embedScript);

    // Segundo script de embed para o primeiro card (vetfdk0jwp)
    const embedScript2 = document.createElement('script');
    embedScript2.src = 'https://fast.wistia.com/embed/vetfdk0jwp.js';
    embedScript2.async = true;
    embedScript2.type = 'module';
    document.head.appendChild(embedScript2);

    // Adicionar estilos CSS para os players Wistia
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='qrm0f7temq']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/qrm0f7temq/swatch'); 
        display: block; 
        filter: blur(5px); 
      }
      wistia-player[media-id='vetfdk0jwp']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/vetfdk0jwp/swatch'); 
        display: block; 
        filter: blur(5px); 
      }
    `;
    document.head.appendChild(style);

    // Cleanup function para remover scripts quando o componente for desmontado
    return () => {
      document.head.removeChild(playerScript);
      document.head.removeChild(embedScript);
      document.head.removeChild(embedScript2);
      document.head.removeChild(style);
    };
  }, []);

  // Acionar autoplay do Wistia quando o card entrar em reprodução
  useEffect(() => {
    if (!playingId) return;
    const item = videos.find(v => v.id === playingId);
    if (item && item.isWistiaVideo && item.wistiaMediaId) {
      try {
        (window as any)._wq = (window as any)._wq || [];
        (window as any)._wq.push({
          id: item.wistiaMediaId,
          onReady: function(video: any) {
            try { video.play(); } catch (e) {}
          }
        });
      } catch (e) {}
    }
  }, [playingId]);

  return (
    <section className="py-20 section-padding bg-gradient-to-b from-blue-900 to-primary relative overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">Palestrantes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mt-2"
          >
            Assista aos recados e conheça quem vai marcar presença.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((item, index) => {
            const isPlaying = playingId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/40 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              >
                {/* Poster/Overlay */}
                <div className="relative aspect-video">
                  {/* Arte do palestrante como background à direita */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: item.artUrl ? `url(${item.artUrl})` : undefined,
                      backgroundSize: item.backgroundSize || 'cover',
                      backgroundPosition: item.focusPosition || 'right center',
                      backgroundRepeat: 'no-repeat',
                      filter: 'brightness(0.85)'
                    }}
                  />

                  {/* Máscara escurecida para legibilidade */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />

                  {/* Texto à esquerda e direita, seguindo o estilo do mock */}
                  <div className="absolute inset-0 flex items-center justify-between p-6 md:p-8">
                    <div className="max-w-[55%]">
                      <p className="text-white text-lg md:text-xl font-semibold leading-tight">
                        {item.titleLeft}
                        <span className="block text-3xl md:text-4xl font-extrabold text-yellow-400">{item.titleLeftHighlight}</span>
                        <span className="text-white"> para assistir</span>
                      </p>
                    </div>
                    {(item.titleRight || item.titleRightHighlight) && (
                      <div className="text-right max-w-[40%]">
                        <p className="text-white text-lg md:text-xl font-semibold leading-tight">
                          {item.titleRight}
                          <span className="block text-3xl md:text-4xl font-extrabold text-red-400">{item.titleRightHighlight}</span>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Botão Play central */}
                  {!isPlaying && (
                    <button
                      onClick={() => setPlayingId(item.id)}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/30 hover:bg-white/20 transition"
                      aria-label={`Reproduzir vídeo de ${item.id}`}
                    >
                      <PlayIcon className="w-16 h-16" />
                    </button>
                  )}

                  {/* Vídeo em reprodução */}
                  <AnimatePresence>
                    {isPlaying && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        {item.isWistiaVideo && item.wistiaMediaId ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <wistia-player 
                               media-id={item.wistiaMediaId}
                               seo="false" 
                               aspect="0.5625"
                               autoplay="true"
                               style={{
                                 width: '324px',
                                 height: '576px',
                                 maxWidth: '100%',
                                 maxHeight: '100%'
                               }}
                             />
                          </div>
                        ) : item.videoUrl ? (
                          <iframe
                            className="w-full h-full"
                            src={item.videoUrl}
                            title={`Vídeo ${item.id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full">
                            <p className="text-center text-white">Vídeo não disponível</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA abaixo do vídeo */}
                <div className="p-6 bg-black/30 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-300 text-sm md:text-base">
                      {item.ctaText}
                    </p>
                    <motion.button
                      onClick={() => {
                        const formElement = document.getElementById('lead-form');
                        if (formElement) {
                          formElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="btn-primary text-sm md:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.ctaButton}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <img
             src="https://i.postimg.cc/gcS7vd5v/Whats-App-Image-2025-10-23-at-14-31-08.jpg"
             alt="Palestrantes do ATUALIZAVET"
             className="w-full max-w-3xl h-auto rounded-2xl shadow-2xl border border-white/10"
             loading="lazy"
           />
        </motion.div>
      </div>
    </section>
  );
};

export default VideosSection;