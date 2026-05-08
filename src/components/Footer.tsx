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
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
        <div className="lg:col-span-1">
          <img 
            src="https://scontent-lga3-3.cdninstagram.com/v/t51.2885-19/505417205_17842471845515248_5353410966034901104_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby42NTAuYzIifQ&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2gE3skDcslDtkC_ORT3Yof3igB7H_KCAns7nEqYwERzVcjt0YHbTZovgKmemnn-iHus&_nc_ohc=sCeqxFyUy4AQ7kNvwEVEZaE&_nc_gid=_SHnF-5YMq8ClJ9D13t2Jw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af7k_0VgeW9-hn9dbUnCA6LAJzxybHTZHz1jN_7V09MvSw&oe=6A03DE33&_nc_sid=22de04" 
            alt="LVElite Motors Logo" 
            className="h-16 w-auto mb-10 rounded-full"
          />
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-loose italic mb-10">
            Premium luxury car rentals in NYC & NJ. Elevate your drive with the tri-state's premier automotive collection.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="p-3 border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-brand-gold font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-10 italic">QUICK_LINKS</h4>
          <ul className="flex flex-col gap-6">
            {quickLinks.map(link => (
              <li key={link}>
                <a href="#" className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-gold transition-colors italic italic-hover">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-brand-gold font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-10 italic">CATEGORIES</h4>
          <ul className="flex flex-col gap-6">
            {categories.map(cat => (
              <li key={cat}>
                <a href="#" className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-gold transition-colors italic">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-brand-gold font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-10 italic">CONTACT_US</h4>
          <ul className="flex flex-col gap-8">
            <li className="flex items-start gap-4 group">
              <Phone size={18} className="text-brand-gold" />
              <a href="#" className="text-xs font-bold uppercase tracking-widest leading-tight group-hover:text-brand-gold transition-colors italic">
                +1 (NYC) LUX-ELITE
              </a>
            </li>
            <li className="flex items-start gap-4 group">
              <Mail size={18} className="text-brand-gold" />
              <a href="mailto:info@lvelitemotors.com" className="text-xs font-bold uppercase tracking-widest leading-tight group-hover:text-brand-gold transition-colors italic">
                info@lvelitemotors.com
              </a>
            </li>
            <li className="flex items-start gap-4 group">
              <MapPin size={18} className="text-brand-gold" />
              <p className="text-xs font-bold uppercase tracking-widest leading-tight group-hover:text-brand-gold transition-colors italic">
                New York, NY | New Jersey
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-white/10">
        <p className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.2em]">
          © 2026 LVELITE MOTORS LLC. ALL RIGHTS RESERVED.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-4 text-[10px] font-mono font-bold text-brand-gold uppercase tracking-[0.4em] hover:text-white transition-colors"
        >
          BACK TO TOP <ArrowUp size={14} />
        </button>
      </div>
      
      {/* Visual background text */}
      <div className="absolute -bottom-24 -right-24 font-display font-black italic text-white/5 text-[30vw] pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap">
        ELITE
      </div>
    </footer>
  );
}
