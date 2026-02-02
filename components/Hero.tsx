
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[60%] h-full bg-gradient-to-br from-blue-50/70 via-white to-white rounded-bl-[160px] hidden lg:block"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-indigo-100/30 rounded-full blur-[80px] animate-pulse"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-center lg:text-left z-10 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-blue-600/10 text-blue-700 px-5 py-2 rounded-full font-bold text-[11px] uppercase tracking-[0.15em] mb-10 border border-blue-200/50">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Empowering 5,000+ Modern Merchants
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-10 tracking-tighter">
              Commerce <br/>
              <span className="text-blue-600">Made Human.</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-14 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
              Accept any payment, delight every customer, and scale your dream business with the world's most intuitive POS systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link 
                to="/solutions" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-6 rounded-[28px] font-bold transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-4 group active:scale-95 transform hover:-translate-y-1"
              >
                Explore Solutions
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link 
                to="/contact" 
                className="bg-white border-2 border-slate-100 hover:border-blue-600 hover:text-blue-600 text-slate-700 text-lg px-12 py-6 rounded-[28px] font-bold transition-all flex items-center justify-center active:scale-95 shadow-sm hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Custom Quote
              </Link>
            </div>
            
            <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Clover_Logo_2022.svg" alt="Clover" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
              <div className="font-black text-xl text-slate-900 tracking-tighter uppercase">Aldelo</div>
              <div className="font-black text-xl text-slate-900 italic uppercase">NextATM</div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 p-3 bg-white rounded-[70px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1400&h=1600" 
                alt="Aspirational POS Setup" 
                className="w-full h-[650px] object-cover rounded-[62px] shadow-inner"
              />
              
              {/* Floating Live Simulation Widget: Sales */}
              <div className="absolute top-12 -right-10 bg-white/90 backdrop-blur-2xl p-7 rounded-[38px] shadow-2xl border border-white/50 animate-float hidden md:block">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
                    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Live Revenue</p>
                    <p className="text-3xl font-black text-slate-900 leading-none">$1,842.50</p>
                    <div className="flex items-center gap-1.5 mt-2">
                       <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                       <p className="text-[11px] text-green-600 font-bold uppercase">Streaming Live</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live Simulation Widget: Team */}
              <div className="absolute bottom-16 -left-12 bg-slate-900 text-white p-9 rounded-[44px] shadow-3xl hidden md:block max-w-[300px] transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Team Status</span>
                </div>
                <div className="space-y-6">
                   <div className="flex justify-between items-center group cursor-default">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">JD</div>
                         <span className="text-sm font-bold text-slate-200">Jenna D.</span>
                      </div>
                      <span className="text-[10px] bg-green-500/20 px-2 py-1 rounded text-green-400 font-bold">Active</span>
                   </div>
                   <div className="flex justify-between items-center opacity-50">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold">MK</div>
                         <span className="text-sm font-bold text-slate-400">Mark K.</span>
                      </div>
                      <span className="text-[10px] bg-slate-700/30 px-2 py-1 rounded text-slate-400 font-bold">Break</span>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Background Accent Mesh */}
            <div className="absolute -bottom-14 -right-14 w-full h-full bg-blue-600/5 -z-10 rounded-[70px] transform rotate-3"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
