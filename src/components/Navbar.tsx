import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Profile', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="font-serif text-2xl font-bold tracking-wider text-white flex items-center">
              <img src={logo} alt="nj.photo_films logo" className="h-10 w-auto mr-2 object-contain" />
              <span><span className="text-gold">nj.</span>photo_films</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-lg absolute w-full left-0 mt-4 py-4 px-4 shadow-xl border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-gold transition-colors duration-200 text-lg uppercase tracking-wider font-medium text-center block"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
