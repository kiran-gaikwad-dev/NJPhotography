import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    event: 'Wedding',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for getting in touch! We will get back to you shortly.');
    setFormData({ name: '', phone: '', event: 'Wedding', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-dark text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Create <br /><span className="text-gold italic">Magic Together</span></h2>
            <div className="w-16 h-1 bg-gold mb-8" />
            <p className="text-gray-400 font-light leading-relaxed mb-12">
              Whether you're planning a grand wedding or looking for a professional modeling portfolio, we're here to capture your best moments. Drop us a message, and let's start planning your dream shoot.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-full bg-gray-900 group-hover:bg-gold transition-colors duration-300">
                  <Phone size={24} className="text-gold group-hover:text-dark transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Call Us</h4>
                  <p className="text-lg font-serif">+91 92261 44315</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-full bg-gray-900 group-hover:bg-gold transition-colors duration-300">
                  <Mail size={24} className="text-gold group-hover:text-dark transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Email Us</h4>
                  <p className="text-lg font-serif">bookings@njphotofilms.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-full bg-gray-900 group-hover:bg-gold transition-colors duration-300">
                  <MapPin size={24} className="text-gold group-hover:text-dark transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Location</h4>
                  <p className="text-md font-serif hover:text-gold transition-colors cursor-pointer">Near Bus stand 1st floor , adjacent to kumbhar cloth stores Bevnoor,  Jath sangli 416404</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#050505] p-8 md:p-12 border border-gray-900 shadow-2xl relative"
          >
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold opacity-50 m-4" />

            <h3 className="text-2xl font-serif mb-8 text-white">Book Your Shoot</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="+91..."
                  />
                </div>
                <div>
                  <label htmlFor="event" className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">Event Type</label>
                  <select
                    id="event"
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    className="w-full bg-[#050505] border-b border-gray-700 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Pre-Wedding">Pre-Wedding</option>
                    <option value="Modeling">Modeling Portfolio</option>
                    <option value="Baby Shoot">Baby Shoot</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">Tell Us About Your Event</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Dates, locations, specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-yellow-500 text-dark font-bold uppercase tracking-widest py-4 transition-colors duration-300 flex items-center justify-center gap-2 mt-8"
              >
                Send Request
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Map Embed */}
        <div className="mt-24 w-full h-[450px] overflow-hidden border border-gray-900 shadow-2xl rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d322.8068847044809!2d75.04284474012051!3d17.206615620784046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6b3f22c43f0f9%3A0xcbd1e6a78c33216b!2s624V%2BM6X%2C%20Bevanur%2C%20Maharashtra%20416404!5e1!3m2!1sen!2sin!4v1773669243622!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
