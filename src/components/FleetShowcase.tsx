import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function FleetShowcase() {
  const categories = [
    { name: "Supercars", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" },
    { name: "Convertible", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2670" },
    { name: "SUV", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2670" },
    { name: "Luxury Sedan", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2670" }
  ];

  const cars = [
    { n: "SF90", b: "Ferrari", color: "red" },
    { n: "REVUELTO", b: "Lamborghini", color: "black" },
    { n: "MC20", b: "Maserati", color: "blue" },
    { n: "ARTURA", b: "McLaren", color: "orange" },
    { n: "DB12", b: "Aston Martin", color: "green" },
  ];

  return (
    <section id="fleet" className="bg-brand-black pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-brand-red text-xs font-black tracking-[0.5em] uppercase mb-4 block">EXOTIC COLLECTION</span>
          <h2 className="text-6xl md:text-8xl font-display font-black italic uppercase tracking-tighter leading-none">
            THE <span className="text-outline text-white/20">FLEET.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm text-white/40 uppercase tracking-widest font-medium leading-relaxed italic">
          Meticulously maintained luxury cars and supercars at your fingertips in Dubai.
        </p>
      </div>

      {/* Horizontal Scroll Fleet */}
      <div className="relative overflow-x-auto snap-x flex gap-1 pb-12 cursor-grab active:cursor-grabbing px-6 md:px-24 scrollbar-hide">
        {cars.map((item, i) => (
          <motion.div 
            key={i} 
            className="min-w-[80vw] md:min-w-[40vw] h-[60vh] border border-white/5 bg-brand-gray/50 p-12 flex flex-col justify-between snap-center group hover:bg-brand-red hover:text-white transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              <span className="text-sm font-black uppercase tracking-[0.3em] font-mono group-hover:text-black/40">Entry_{i+1}</span>
              <span className="px-3 py-1 border border-white/10 text-[10px] uppercase font-black tracking-widest group-hover:border-black/20 group-hover:text-black">Available</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-6xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity group-hover:text-black/10 uppercase tracking-tighter">
                {item.b}
              </span>
              <div className="flex justify-between items-end">
                <span className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase">
                  {item.n}
                </span>
                <ArrowRight size={64} className="opacity-10 group-hover:opacity-100 group-hover:-rotate-45 transition-all text-black" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Brands Ticker */}
      <div className="py-24 border-y border-white/5 bg-brand-dark/50">
        <div className="flex gap-24 items-center overflow-hidden">
          <div className="flex gap-24 animate-infinite-scroll whitespace-nowrap min-w-full items-center">
            {["FERRARI", "LAMBORGHINI", "PORSCHE", "ROLLS-ROYCE", "MERCEDES", "BMW", "CADILLAC", "MC LAREN"].map((brand, i) => (
              <span key={i} className="text-2xl md:text-4xl font-display font-black italic opacity-10 hover:opacity-100 hover:text-brand-red transition-all cursor-default">
                {brand}
              </span>
            ))}
            {/* Mirror for infinite scroll */}
            {["FERRARI", "LAMBORGHINI", "PORSCHE", "ROLLS-ROYCE", "MERCEDES", "BMW", "CADILLAC", "MC LAREN"].map((brand, i) => (
              <span key={i+'2'} className="text-2xl md:text-4xl font-display font-black italic opacity-10 hover:opacity-100 hover:text-brand-red transition-all cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="relative aspect-[3/4] overflow-hidden group cursor-pointer border border-white/5">
            <img 
              src={cat.img} 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700" 
              alt={cat.name} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-4">
              <span className="text-brand-red font-mono text-[10px] font-bold tracking-widest">{`0${i+1}_SERIES`}</span>
              <h3 className="text-4xl font-display font-black italic uppercase italic tracking-tighter">{cat.name}</h3>
              <div className="flex items-center gap-2 text-white/40 group-hover:text-brand-red transition-colors">
                <span className="text-[10px] font-bold tracking-widest uppercase">View Fleet</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
