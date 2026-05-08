import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Globe } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Chauffeur', href: '#chauffeur' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://zmccarrental.com/assets/zmc-logo-white-header-DQD2EXKW.png" 
            alt="ZMC Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-display text-sm font-medium tracking-widest uppercase hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+971567733228" 
            className="flex items-center gap-2 px-6 py-2 bg-brand-red text-white font-display text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-white hover:text-brand-black transition-all"
          >
            <Phone size={14} />
            +971 56 773 3228
          </a>
          <button className="text-white hover:text-brand-red p-2">
            <Globe size={20} />
          </button>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-display text-lg font-bold tracking-widest uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+971567733228" 
              className="flex justify-center items-center gap-2 w-full py-4 bg-brand-red text-white font-display text-sm font-bold tracking-[0.2em] uppercase rounded-sm"
            >
              <Phone size={18} />
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
