import React from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: "MINIMUM AGE?", a: "Operational clearance requires 25+ with verified credentials." },
    { q: "INSURANCE?", a: "Comprehensive shield protocols active on all elite vehicles. Fully DOT compliant." },
    { q: "DELIVERY?", a: "Synchronized drop-off within NYC & NJ hub included. Concierge delivery available." },
    { q: "DEPOSIT?", a: "Refundable security hold applied. No deposit required on select models." }
  ];

  return (
    <section className="bg-brand-black px-6 py-32 border-b border-white/5 overflow-hidden font-display">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-between items-start mb-24 border-b border-white/10 pb-8">
          <div>
            <span className="text-brand-gold text-xs font-black tracking-[0.5em] uppercase mb-4 block font-mono italic">OPERATIONAL_DATA</span>
            <h2 className="text-6xl md:text-9xl font-black uppercase italic italic tracking-tighter leading-none">I N F O.</h2>
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/20 mt-12 self-end">System_Data_V6_PRTCL</span>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {faqs.map((item, i) => (
            <div 
              key={i} 
              className="group relative border border-white/5 p-12 hover:bg-brand-gold transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[350px]"
            >
              <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:text-black/20 text-4xl font-black italic italic-90">
                0{i+1}
              </div>
              <span className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter group-hover:text-black transition-colors leading-none mb-12">
                {item.q}
              </span>
              <div>
                <div className="h-1 w-12 bg-brand-gold group-hover:bg-black mb-6 transition-colors"></div>
                <p className="text-xs font-bold uppercase tracking-widest leading-loose opacity-40 group-hover:opacity-100 group-hover:text-black transition-all">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chauffeur Service Teaser */}
        <div className="w-full mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-white/10 bg-brand-dark overflow-hidden">
          <div className="lg:col-span-4 aspect-square lg:order-2 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2670" alt="Chauffeur" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div className="lg:col-span-8 p-12 md:p-24 flex flex-col justify-center lg:order-1">
            <span className="text-brand-gold text-xs font-black tracking-[0.5em] uppercase mb-8 block font-mono italic">EXCLUSIVE_SERVICE</span>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase italic tracking-tighter leading-none mb-12">
              CHAUFFEUR <br /> <span className="text-outline text-white/20">DRIVEN.</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                "Airport pickup & drop-off (JFK, EWR, LGA)",
                "Corporate & VIP events in Manhattan",
                "Professional licensed drivers",
                "City tours across the Tri-State area"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/60 italic">
                  <div className="h-1 w-4 bg-brand-gold"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-12 py-5 bg-brand-gold text-black font-display font-black uppercase text-sm tracking-[0.4em] w-fit hover:bg-white hover:text-brand-black transition-all">
              Request Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
