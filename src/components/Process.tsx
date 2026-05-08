import React from 'react';
import { motion } from 'motion/react';
import { Target, MessageSquare, ShieldCheck, Truck, Key } from 'lucide-react';

export default function Process() {
  const steps = [
    { title: "CHOOSE CAR", desc: "Browse our premium fleet of luxury vehicles.", icon: <Target size={24} /> },
    { title: "CONTACT US", desc: "VIP booking or submit a request for availability.", icon: <MessageSquare size={24} /> },
    { title: "VERIFICATION", desc: "Quick confirmation process with minimal docs.", icon: <ShieldCheck size={24} /> },
    { title: "ELITE DELIVERY", desc: "We deliver across the tri-state area to your door.", icon: <Truck size={24} /> },
    { title: "ENJOY DRIVE", desc: "Hit the road in style and pure performance.", icon: <Key size={24} /> }
  ];

  return (
    <section className="bg-brand-dark py-32 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <h2 className="text-[20vw] font-black italic rotate-90 origin-top-right whitespace-nowrap text-white">PROTOCOL</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <span className="text-brand-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block font-mono italic">OPERATIONAL_GUIDE</span>
            <h2 className="text-6xl md:text-8xl font-display font-black italic uppercase italic tracking-tighter leading-none mb-8">
              HOW IT <br /> <span className="text-outline text-white/10">WORKS.</span>
            </h2>
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest font-medium leading-relaxed italic">
              From inquiry to ignition, we've streamlined the luxury rental experience for maximum performance.
            </p>
          </div>

          <div className="hidden lg:flex flex-col gap-4 mt-20 p-8 border border-white/5 bg-white/5 backdrop-blur-sm">
            <span className="text-brand-gold font-mono text-[10px] font-bold tracking-[0.3em] uppercase">SYSTEM_ALERT</span>
            <p className="text-xs text-white/60 leading-relaxed font-mono italic">ALL VEHICLES ARE FULLY INSURED AND DOT COMPLIANT IN THE US. NO DEPOSIT REQUIRED ON SELECT MODELS.</p>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              className="bg-brand-black p-12 flex flex-col justify-between group transition-all h-[300px]"
            >
              <div className="flex justify-between items-start">
                <span className="text-5xl font-mono font-black italic opacity-10 group-hover:opacity-100 group-hover:text-brand-gold transition-all">0{i+1}</span>
                <div className="text-brand-gold opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  {step.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-black italic uppercase italic tracking-wider mb-4 opacity-10 group-hover:opacity-100 transition-all">
                  {step.title}
                </h3>
                <p className="text-xs text-white/40 uppercase tracking-widest font-medium leading-relaxed italic group-hover:text-white/80 transition-all">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Filler to keep grid aligned or for special offer */}
          <div className="bg-brand-gold p-12 flex flex-col justify-center items-center text-center gap-6">
            <h3 className="text-3xl font-display font-black italic uppercase italic text-black leading-none">NO DEPOSIT <br /> REQUIRED.</h3>
            <button className="px-8 py-3 bg-brand-black text-white text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
              Book Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
