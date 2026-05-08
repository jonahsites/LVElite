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
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://scontent-lga3-3.cdninstagram.com/v/t51.2885-19/505417205_17842471845515248_5353410966034901104_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby42NTAuYzIifQ&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2gE3skDcslDtkC_ORT3Yof3igB7H_KCAns7nEqYwERzVcjt0YHbTZovgKmemnn-iHus&_nc_ohc=sCeqxFyUy4AQ7kNvwEVEZaE&_nc_gid=_SHnF-5YMq8ClJ9D13t2Jw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af7k_0VgeW9-hn9dbUnCA6LAJzxybHTZHz1jN_7V09MvSw&oe=6A03DE33&_nc_sid=22de04" 
            alt="LVElite Motors Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 rounded-full"
          />
          <span className="font-serif italic font-bold text-xl tracking-tighter text-brand-gold">LVELITE</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-display text-sm font-medium tracking-widest uppercase hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            className="flex items-center gap-2 px-6 py-2 bg-brand-gold text-black font-display text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-white hover:text-brand-black transition-all"
          >
            <Phone size={14} />
            ORDER NOW
          </a>
          <button className="text-white hover:text-brand-gold p-2">
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
              href="#" 
              className="flex justify-center items-center gap-2 w-full py-4 bg-brand-gold text-black font-display text-sm font-bold tracking-[0.2em] uppercase rounded-sm"
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
