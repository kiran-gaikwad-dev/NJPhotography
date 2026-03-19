import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/60 z-10" />

      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 font-serif tracking-widest text-gold text-sm md:text-lg uppercase"
        >
          Nikhil Jadhav's Photography
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Capturing Moments <br /><span className="italic text-gray-300 font-light">That Last Forever.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-widest uppercase"
        >
          ᴡᴇᴅᴅɪɴɢ | ᴘʀᴇ-ᴡᴇᴅᴅɪɴɢ | ᴄᴀɴᴅɪᴅ | ᴍᴏᴅᴇʟɪɴɢ | ʙᴀʙʏꜱʜᴏᴏᴛ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-gold hover:bg-yellow-500 text-dark font-semibold tracking-wider uppercase text-sm transition-all duration-300 w-full sm:w-auto text-center"
          >
            View Profile
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-dark font-semibold tracking-wider uppercase text-sm transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Play size={18} />
            Book Photoshoot
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-gray-500 uppercase tracking-widest text-xs mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
