import { motion } from 'framer-motion';
import nikhilImg from '../images/nikhil.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[3/4] max-w-md mx-auto relative z-10">
              <img
                src={nikhilImg}
                alt="Nikhil Jadhav"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Story Behind <br /><span className="text-gold italic">The Lens</span>
            </h2>
            <div className="w-16 h-1 bg-gold mb-8" />

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Hi, I'm <strong className="text-white font-serif">Nikhil Jadhav</strong>. Photography, to me, is more than just clicking a button—it’s about preserving the raw, unfiltered emotions that make life beautiful.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 font-light">
              With 5 years of experience, my team and I capture your most special moments and turn them into timeless cinematic memories. We blend naturally into your event so every smile, laugh, and emotion is beautifully preserved.
            </p>

            <div className="flex items-center gap-8 border-t border-gray-800 pt-8 mt-8">
              <div>
                <p className="text-gold text-4xl font-serif mb-1">5+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Years Experience</p>
              </div>
              <div>
                <p className="text-gold text-4xl font-serif mb-1">569+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Events Covered</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
