import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import localVideo from '../images/nj_vedio.mp4';

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Candid', 'Modeling', 'Baby'];

const portfolioItems = [
  { id: 1, category: 'Wedding', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80', title: 'The Royal Wedding' },
  { id: 3, category: 'Modeling', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80', title: 'Editorial Look' },
  { id: 4, category: 'Candid', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80', title: 'Pure Joy' },
  { id: 5, category: 'Baby', src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80', title: 'First Steps' },
  { id: 6, category: 'Wedding', src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80', title: 'Vows' },
  { id: 7, category: 'Modeling', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80', title: 'Studio Lights' },
  { id: 8, category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80', title: 'Mountain Romance' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Profile
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            viewport={{ once: true }}
            className="h-1 w-16 bg-gold mx-auto mb-8"
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'text-gold border-b-2 border-gold' 
                    : 'text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-500'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Simulation (using simple CSS grid for now) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative overflow-hidden cursor-pointer aspect-[3/4] sm:aspect-square md:aspect-[3/4]"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-gold text-xs uppercase tracking-widest mb-2 border border-gold px-3 py-1">{item.category}</span>
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram Reel Embed for Wedding Section */}
        <AnimatePresence>
          {(activeCategory === 'All' || activeCategory === 'Wedding') && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-16 flex justify-center w-full overflow-hidden"
            >
              <div className="w-full max-w-[500px] bg-black rounded-lg flex justify-center shadow-2xl overflow-hidden aspect-[9/16]">
                <video 
                  src={localVideo} 
                  className="w-full h-full object-contain"
                  controls 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
              <h3 className="text-white font-serif text-2xl mb-1">{selectedImage.title}</h3>
              <p className="text-gold text-sm tracking-widest uppercase">{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
