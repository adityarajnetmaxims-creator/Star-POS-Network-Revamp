
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const industries = [
    { 
      name: 'Dynamic Dining', 
      desc: 'Master your floor plan. Integrated tableside ordering and lightning-fast kitchen flow.',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', 
      icon: '🍽️' 
    },
    { 
      name: 'High-Volume Bars', 
      desc: 'Split checks in seconds and handle the rush with Clover’s elite payment hardware.',
      img: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800', 
      icon: '🍸' 
    },
    { 
      name: 'Curated Retail', 
      desc: 'Beautiful displays for your boutique. Effortless inventory and customer loyalty built-in.',
      img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800', 
      icon: '🛍️' 
    },
    { 
      name: 'Smart ATM Ops', 
      desc: 'Boost foot traffic and generate effortless surcharge revenue with NextATM placement.',
      img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800', 
      icon: '🏧' 
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />
      
      {/* Industry Solutions - Aspirational Grid */}
      <section className="py-32 bg-slate-50/40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Vertical Expertise</h2>
              <p className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">Your Industry. <br/><span className="text-blue-600 italic">Our Solution.</span></p>
            </div>
            <Link to="/solutions" className="bg-white px-10 py-5 rounded-3xl font-bold text-slate-900 border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-xl transform hover:-translate-y-1">
              View Product Catalog
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {industries.map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-[50px] overflow-hidden shadow-sm hover:shadow-3xl transition-all duration-700 border border-slate-100 flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur p-4 rounded-3xl shadow-2xl text-3xl group-hover:rotate-12 transition-transform">
                    {item.icon}
                  </div>
                </div>
                <div className="p-12 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-5">{item.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">{item.desc}</p>
                  <Link 
                    to={item.name === 'Smart ATM Ops' ? '/solutions#atm' : '/solutions'} 
                    className="flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all"
                  >
                    Explore Features <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* Epic Hardware Spotlight */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[80px] p-12 lg:p-32 flex flex-col lg:flex-row items-center gap-24 relative">
             {/* Abstract Geometric Decoration */}
             <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
             </div>
             
             <div className="lg:w-1/2 text-white relative z-10">
                <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">Hardware Spotlight</span>
                <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">Tools of the <br/> Trade.</h2>
                <p className="text-2xl text-slate-400 mb-14 max-w-lg leading-relaxed font-medium">
                   From the sleek Clover Station to high-security ATM terminals, we provide the physical heartbeat of your business.
                </p>
                <div className="flex flex-wrap gap-6">
                   <Link to="/contact" className="bg-blue-600 text-white px-12 py-6 rounded-[32px] font-black shadow-3xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 transform hover:-translate-y-1">
                      Get Pricing
                   </Link>
                   <Link to="/solutions" className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-[32px] font-black hover:bg-white/10 transition-all backdrop-blur-md">
                      See Hardware
                   </Link>
                </div>
             </div>
             
             <div className="lg:w-1/2 relative z-10">
                <div className="relative group">
                   <img 
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200" 
                    alt="Premium POS Hardware" 
                    className="w-full rounded-[60px] shadow-2xl transform lg:scale-110 lg:rotate-3 group-hover:rotate-0 transition-all duration-1000 border border-white/10"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-3xl hidden md:block">
                     <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Response Time</p>
                     <p className="text-4xl font-black text-slate-900 tracking-tighter">&lt; 0.5s</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* High-Contrast Social Proof */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h3 className="text-slate-900 text-4xl lg:text-5xl font-black tracking-tight mb-4">You're in great company.</h3>
            <p className="text-slate-500 font-medium text-lg">We partner with global leaders to secure your success.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32 opacity-30 hover:opacity-100 transition-all duration-700">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Clover_Logo_2022.svg" className="h-10 lg:h-12" alt="Clover" />
             <div className="font-black text-3xl lg:text-4xl text-slate-900 tracking-tighter uppercase">Aldelo</div>
             <div className="font-black text-3xl lg:text-4xl text-slate-900 italic uppercase">NextATM</div>
             <div className="font-black text-3xl lg:text-4xl text-slate-900 uppercase">Hiopos</div>
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-14 lg:h-16" alt="Mastercard" />
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-white p-20 lg:p-32 rounded-[100px] shadow-2xl shadow-slate-200 border border-slate-100">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Ready to start?</h2>
            <p className="text-2xl text-slate-500 mb-16 font-medium leading-relaxed">No hidden fees. Just world-class tech and human support 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-14 py-7 rounded-[40px] font-black text-xl shadow-2xl shadow-blue-200 transition-all active:scale-95 transform hover:-translate-y-1">
                Let's Talk Business
              </Link>
              <Link to="/solutions" className="bg-slate-900 text-white px-14 py-7 rounded-[40px] font-black text-xl shadow-2xl shadow-slate-200 transition-all active:scale-95 transform hover:-translate-y-1">
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
