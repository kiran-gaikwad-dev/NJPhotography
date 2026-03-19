import { motion } from 'framer-motion';
import { Camera, Heart, Star, Sparkles, Baby, Video } from 'lucide-react';

const services = [
  {
    icon: <Heart size={32} className="text-gold mb-6" />,
    title: 'Wedding Photography',
    description: 'Cinematic storytelling of your big day, capturing every emotion, ritual, and celebration.'
  },
  {
    icon: <Camera size={32} className="text-gold mb-6" />,
    title: 'Pre-Wedding Shoot',
    description: 'Romantic and concept-based couples sessions in picturesque locations before the big day.'
  },
  {
    icon: <Star size={32} className="text-gold mb-6" />,
    title: 'Candid Photography',
    description: 'Unposed, natural moments that catch the true essence and spontaneous joy of your events.'
  },
  {
    icon: <Sparkles size={32} className="text-gold mb-6" />,
    title: 'Modeling Portfolio',
    description: 'Professional high-fashion and editorial style shoots to build a standout modeling comp card.'
  },
  {
    icon: <Baby size={32} className="text-gold mb-6" />,
    title: 'Baby Photoshoot',
    description: 'Adorable, safe, and creative setups for newborns, toddlers, and maternity sessions.'
  },
  {
    icon: <Video size={32} className="text-gold mb-6" />,
    title: 'Cinematic Photography',
    description: 'Breathtaking cinematic shots that turn ordinary moments into extraordinary visual masterpieces.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            My Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            viewport={{ once: true }}
            className="h-1 w-16 bg-gold mx-auto mb-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-dark p-10 border border-gray-900 hover:border-gold transition-colors duration-500 group"
            >
              <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 text-white group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
