import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      date: "JAN 14 // 2025",
      title: "Best Supercars for a Hamptons Weekend",
      excerpt: "Discover the ultimate supercar rental experience for your next trip to the Hamptons. From Lamborghini to Ferrari, drive the best.",
      category: "GUIDES"
    },
    {
      date: "JAN 07 // 2025",
      title: "Luxury Rental Protocols in NYC",
      excerpt: "Everything you need to know about renting luxury vehicles in New York and New Jersey, including insurance and parking tips.",
      category: "COMPLIANCE"
    },
    {
      date: "DEC 27 // 2024",
      title: "Concierge vs Self-Drive in Manhattan",
      excerpt: "We compare our premium concierge delivery service with self-drive options to help you navigate the city in style.",
      category: "SERVICES"
    }
  ];

  return (
    <section id="blog" className="bg-brand-black px-6 py-32 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div>
            <span className="text-brand-gold text-xs font-black tracking-[0.5em] uppercase mb-4 block font-mono italic">THE_CHRONICLE</span>
            <h2 className="text-6xl md:text-9xl font-display font-black italic uppercase italic tracking-tighter leading-[0.8] mb-0">
              INSIGHTS <br /> <span className="text-outline text-white/20">& REPORTS.</span>
            </h2>
          </div>
          <button className="flex items-center gap-4 px-10 py-5 border border-white/20 hover:bg-brand-gold hover:text-black transition-all group font-display font-black uppercase text-xs tracking-[0.4em]">
            VIEW ALL POSTS <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}
              className="bg-brand-black p-12 flex flex-col justify-between group cursor-pointer border border-white/5 gap-12"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.3em]">{post.date}</span>
                <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-[0.3em] font-black italic">{post.category}</span>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-black italic uppercase italic tracking-tight mb-6 leading-tight group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-white/40 uppercase tracking-widest font-medium leading-relaxed italic line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                <span className="text-[10px] font-black tracking-widest uppercase text-white/60 group-hover:text-brand-gold transition-colors">Read Article</span>
                <div className="h-[1px] w-12 bg-brand-gold"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
