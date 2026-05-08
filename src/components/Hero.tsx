import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Gauge, Cpu, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background with motion */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2670" 
            className="w-full h-full object-cover opacity-40 " 
            alt="Sports Car" 
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
        <div className="absolute inset-0 bg-brand-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.8em] text-brand-gold uppercase">
              NYC & NJ LUXURY REGISTRY
            </span>
            <div className="h-[1px] w-12 bg-brand-gold"></div>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[15vw] md:text-[10vw] font-display font-black italic tracking-tighter leading-[0.85] text-white uppercase mb-12"
          >
            DRIVE <br /> <span className="text-outline text-white/10 group-hover:text-white/20 transition-all">LIMITLESS</span>
          </motion.h1>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 mb-16"
          >
            <p className="max-w-md text-sm md:text-base text-white/50 uppercase tracking-widest font-medium leading-relaxed italic">
              Premium car rental experiences in NYC & NJ. Elevate your drive with our elite collection of luxury vehicles.
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="group relative px-12 py-5 bg-brand-gold text-black font-display font-black uppercase text-sm tracking-[0.4em] overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Browse Fleet <ArrowRight size={18} />
              </span>
              <motion.div 
                whileHover={{ x: '100%' }}
                className="absolute inset-0 bg-white/20 -translate-x-full" 
              />
            </button>
            <button className="px-12 py-5 border border-white/20 text-white font-display font-black uppercase text-sm tracking-[0.4em] hover:bg-white hover:text-brand-black transition-all">
              Request Rental
            </button>
          </motion.div>
        </div>

        {/* Floating Stats or Details */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-1 border-t border-white/10 pt-12">
          {[
            { icon: <Gauge size={18} />, label: "POWER", value: "800+ BHP" },
            { icon: <Cpu size={18} />, label: "TECH", value: "NEXT-GEN" },
            { icon: <Zap size={18} />, label: "SPEED", value: "3.2S 0-100" },
            { icon: <ArrowRight size={18} />, label: "FLEET", value: "EXOTIC" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + (i * 0.1) }}
              className="flex flex-col gap-2 p-4"
            >
              <div className="flex items-center gap-2 text-brand-gold">
                {item.icon}
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-60 font-mono">{item.label}</span>
              </div>
              <span className="text-xl font-display font-black italic uppercase italic">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold">SCROLL</span>
        <div className="h-12 w-[1px] bg-white"></div>
      </motion.div>
    </section>
  );
}
