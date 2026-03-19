import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import photo1 from '../images/nj_photo.jpg';
import photo2 from '../images/nj_photo1.jpg';

const igPosts = [
  photo1,
  photo2,
  photo1,
  photo2,
  photo1,
  photo2,
];

export default function InstagramFeed() {
  return (
    <section className="pb-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-t border-gray-900 pt-24">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Follow The Journey</h2>
            <p className="text-gray-400 font-light">Join us on Instagram for daily updates and behind the scenes.</p>
          </div>
          <a
            href="https://www.instagram.com/nj.photo_films/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="mt-6 md:mt-0 px-6 py-3 border border-gray-700 hover:border-gold text-gray-300 hover:text-gold transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-sm"
          >
            <Instagram size={18} />
            @nj.photo_films
          </a>
        </div>

        <div className="relative w-full overflow-hidden mt-8">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...igPosts, ...igPosts].map((src, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/nj.photo_films/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="block relative w-64 md:w-80 aspect-square overflow-hidden group flex-shrink-0"
              >
                <img
                  src={src}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Instagram post"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram size={40} className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
