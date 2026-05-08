import React from 'react';
import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { label: "ACTIVE_FLEET", value: "142" },
    { label: "TOTAL_SORTIES", value: "8,941" },
    { label: "AVERAGE_BHP", value: "640" },
    { label: "CLIENT_SAT", value: "99.8%" }
  ];

  return (
    <section className="relative w-full bg-brand-gold text-black py-0 overflow-hidden font-display italic">
      <div className="grid grid-cols-2 md:grid-cols-4 border-t-1 border-black/20">
        {stats.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: '#000000', color: '#D4AF37' }}
            className="border-r border-b border-black/10 p-12 flex flex-col justify-between transition-colors duration-300"
          >
            <span className="text-[10px] md:text-sm uppercase tracking-[0.2em] font-black leading-none mb-8 opacity-80 italic">
              {s.label}
            </span>
            <span className="text-7xl md:text-[8vw] font-black leading-none tracking-tighter italic">
              {s.value}
            </span>
          </motion.div>
        ))}
      </div>
      
      {/* Infinite Marquee */}
      <div className="h-20 bg-brand-black text-brand-gold flex items-center overflow-hidden border-y border-brand-gold/20">
        <div className="flex gap-24 animate-infinite-scroll whitespace-nowrap py-2">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center">
              <span className="text-[10px] uppercase font-black tracking-[1em]">SYSTEM_STABLE_DATA_FLOWING</span>
              <div className="w-2 h-2 bg-brand-gold rounded-full shadow-[0_0_10px_#D4AF37]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
