import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya & Rahul',
    text: 'Nikhil and his team are magicians. They managed to capture not just the visuals, but the very soul of our wedding day. Looking at the pictures brings tears of joy to my eyes.',
    type: 'Wedding'
  },
  {
    id: 2,
    name: 'Anjali Sharma',
    text: 'For my modeling portfolio, I needed someone who understood lighting and angles perfectly. Nikhil exceeded my expectations. The results were incredibly cinematic.',
    type: 'Modeling Portfolio'
  },
  {
    id: 3,
    name: 'Sneha & Karan',
    text: 'The pre-wedding shoot was so much fun! We are usually camera shy, but Nikhil made us feel so comfortable. The candid shots are exactly what we wanted.',
    type: 'Pre-Wedding'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background large quote icon */}
      <Quote className="absolute top-24 left-10 md:left-24 text-gray-900 w-64 h-64 -z-0 opacity-50" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold tracking-widest uppercase text-sm mb-4"
        >
          Love Notes
        </motion.p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-16">
          Client reviews
        </h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="px-8 md:px-16"
            >
              <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed mb-8 font-serif italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
              <h4 className="text-white text-lg font-medium tracking-wide">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">
                {testimonials[currentIndex].type}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gold transition-colors p-2"
          >
            <ChevronLeft size={36} strokeWidth={1} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gold transition-colors p-2"
          >
            <ChevronRight size={36} strokeWidth={1} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-gold w-8' : 'bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
