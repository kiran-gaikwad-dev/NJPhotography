import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="font-serif text-3xl font-bold tracking-wider text-white mb-4 flex items-center justify-center md:justify-start">
              <img src={logo} alt="Logo" loading="lazy" className="h-12 w-auto mr-3 object-contain" />
              <span><span className="text-gold">nj.</span>photo_films</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Capturing moments that last forever. Specializing in luxury wedding, pre-wedding, candid, and modeling photography.
            </p>
          </div>

          {/* Links Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-serif text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-gold transition-colors">Profile</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-serif text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-gold" />
                <span>+91 92261 44315</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Instagram size={18} className="text-gold" />
                <a href="https://www.instagram.com/nj.photo_films/?hl=en" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">@nj.photo_films</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-gold" />
                <span>info@njphotofilms.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 max-w-xs">
                <MapPin size={24} className="text-gold mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Near Bus stand 1st floor, adjacent to kumbhar cloth stores Bevnoor, Jath sangli 416404</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} nj.photo_films. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed by KG solutions</p>
        </div>
      </div>
    </footer>
  );
}
