import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const categories = ["SUV", "Luxury Sedan", "Supercars", "Convertible"];
  const quickLinks = ["Home", "Fleet", "Rent with Driver", "About Us", "Request Rental"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black pt-32 pb-12 border-t border-white/5 font-display overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
        <div className="lg:col-span-1">
          <img 
            src="https://zmccarrental.com/assets/zmc-logo-white-header-DQD2EXKW.png" 
            alt="ZMC Logo" 
            className="h-10 w-auto mb-10"
          />
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-loose italic mb-10">
            Premium car rental services in Dubai. Drive luxury, drive performance, drive ZMC.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="p-3 border border-white/10 hover:border-brand-red hover:text-brand-red transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-brand-red font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-10 italic">QUICK_LINKS</h4>
          <ul className="flex flex-col gap-6">
            {quickLinks.map(link => (
              <li key={link}>
                <a href="#" className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-red transition-colors italic italic-hover">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-brand-red font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-10 italic">CATEGORIES</h4>
          <ul className="flex flex-col gap-6">
            {categories.map(cat => (
              <li key={cat}>
                <a href="#" className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-red transition-colors italic">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-brand-red font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-10 italic">CONTACT_US</h4>
          <ul className="flex flex-col gap-8">
            <li className="flex items-start gap-4 group">
              <Phone size={18} className="text-brand-red" />
              <a href="tel:+971567733228" className="text-xs font-bold uppercase tracking-widest leading-tight group-hover:text-brand-red transition-colors italic">
                +971 56 773 3228
              </a>
            </li>
            <li className="flex items-start gap-4 group">
              <Mail size={18} className="text-brand-red" />
              <a href="mailto:info@zmccarrental.com" className="text-xs font-bold uppercase tracking-widest leading-tight group-hover:text-brand-red transition-colors italic">
                info@zmccarrental.com
              </a>
            </li>
            <li className="flex items-start gap-4 group">
              <MapPin size={18} className="text-brand-red" />
              <p className="text-xs font-bold uppercase tracking-widest leading-tight group-hover:text-brand-red transition-colors italic">
                Dubai, United Arab Emirates
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-white/10">
        <p className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.2em]">
          © 2026 ZMC CAR RENTAL LLC. ALL RIGHTS RESERVED.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-4 text-[10px] font-mono font-bold text-brand-red uppercase tracking-[0.4em] hover:text-white transition-colors"
        >
          BACK TO TOP <ArrowUp size={14} />
        </button>
      </div>
      
      {/* Visual background text */}
      <div className="absolute -bottom-24 -right-24 font-display font-black italic text-white/5 text-[30vw] pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap">
        ZMC
      </div>
    </footer>
  );
}
