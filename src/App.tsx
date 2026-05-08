import React from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import Stats from './components/Stats.tsx';
import FleetShowcase from './components/FleetShowcase.tsx';
import Process from './components/Process.tsx';
import Blog from './components/Blog.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import { motion } from 'motion/react';
import { Shield, CheckCircle, Clock, Truck, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  return (
    <main className="bg-brand-black min-h-screen text-white font-display">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Fleet Showcase */}
      <FleetShowcase />
      
      {/* Process / How it works */}
      <Process />
      
      {/* Why Choose ZMC Section */}
      <section id="why-choose" className="py-32 bg-brand-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
            <div className="p-12 border border-white/5 md:col-span-2 lg:col-span-1 bg-brand-red flex flex-col justify-center">
              <h2 className="text-6xl md:text-8xl font-black italic uppercase italic tracking-tighter leading-none text-black mb-8">
                WHY <br /> ZMC?
              </h2>
              <p className="text-black/80 text-sm font-bold uppercase tracking-widest leading-relaxed italic">
                The standard for luxury automotive experiences in the heart of Dubai.
              </p>
            </div>
            
            {[
              { title: "FULLY INSURED", icon: <Shield size={32} />, desc: "Comprehensive insurance on every vehicle for peace of mind." },
              { title: "RTA COMPLIANT", icon: <CheckCircle size={32} />, desc: "Licensed and fully regulated according to UAE laws." },
              { title: "NO HIDDEN CHARGES", icon: <ShieldCheck size={32} />, desc: "Transparent pricing with no surprise fees on checkout." },
              { title: "24/7 SUPPORT", icon: <Clock size={32} />, desc: "Round-the-clock service any day of the week." },
              { title: "FREE DELIVERY", icon: <Truck size={32} />, desc: "Citywide delivery across Dubai provided at no cost." }
            ].map((item, i) => (
              <div key={i} className="p-12 border border-white/5 hover:bg-white/5 transition-all group">
                <div className="text-brand-red mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black italic uppercase italic mb-4 tracking-wider">{item.title}</h3>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-loose italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-brand-dark overflow-hidden relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-brand-red text-xs font-black tracking-[0.5em] uppercase mb-4 block font-mono italic">CLIENT_REVIEWS</span>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase italic tracking-tighter leading-none">
              RATED <span className="text-brand-red italic">5 STARS</span>
            </h2>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 snap-x px-4 scrollbar-hide">
             {[
               { n: "Ahmed R.", t: "Absolutely fantastic service! The Range Rover was immaculate. Free delivery was a huge plus." },
               { n: "Sarah M.", t: "Best car rental in Dubai. Professional team and the Lamborghini was a dream to drive!" },
               { n: "James K.", t: "Rented a Mercedes S-Class with driver. Punctual, polite, and the car was spotless." },
               { n: "Michael T.", t: "Great selection of luxury cars. The booking process was smooth and hassle-free." }
             ].map((rev, i) => (
               <motion.div 
                key={i}
                className="min-w-[300px] md:min-w-[450px] p-12 bg-white/5 border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between"
               >
                 <div className="mb-12 flex gap-1">
                   {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 bg-brand-red"></div>)}
                 </div>
                 <p className="text-xl md:text-2xl font-display font-medium italic italic mb-12 tracking-tight">"{rev.t}"</p>
                 <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-brand-red"></div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">{rev.n}</span>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black italic text-white/[0.02] pointer-events-none select-none tracking-tighter">
          EXCELLENCE
        </div>
      </section>

      {/* Blog Section */}
      <Blog />

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </main>
  );
}
