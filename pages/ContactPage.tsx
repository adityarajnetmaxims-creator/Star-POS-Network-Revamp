
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden">
      {/* Dynamic Hero Image for Contact */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full -z-10 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover" 
          alt="Aspirational Business Environment" 
        />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="bg-blue-600/10 text-blue-700 px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-10 inline-block border border-blue-100">
              Merchant Partnerships
            </span>
            <h1 className="text-7xl lg:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Let's talk <br/> <span className="text-blue-600">Growth.</span></h1>
            <p className="text-2xl text-slate-500 mb-16 leading-relaxed font-medium">Whether you need a single terminal or an enterprise-wide rollout, our specialists are ready to architect your solution.</p>
            
            <div className="grid sm:grid-cols-2 gap-12 mb-20">
              <div className="group">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-3xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors shadow-2xl">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Direct Line</p>
                <p className="text-2xl font-black text-slate-900">(800) 555-STAR</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-3xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors shadow-2xl">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Inquiry Support</p>
                <p className="text-2xl font-black text-slate-900">sales@starposnetwork.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 opacity-40">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Clover_Logo_2022.svg" alt="Clover" className="h-6" />
               <div className="font-black text-xl text-slate-900 tracking-tighter">ALDELO</div>
               <div className="font-black text-xl text-slate-900 italic uppercase tracking-tighter">NextATM</div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-12 lg:p-20 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
              {submitted ? (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-24 h-24 bg-green-50 rounded-[40px] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-100">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">Request Sent.</h2>
                  <p className="text-xl text-slate-500 mb-10 font-medium">A specialist will reach out within 4 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="bg-slate-900 text-white px-10 py-5 rounded-3xl font-black hover:bg-blue-600 transition-all active:scale-95 shadow-xl">
                     New Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-600/10 focus:bg-white outline-none transition-all font-medium text-slate-900" placeholder="Alexander Hamilton" />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Business Email</label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-600/10 focus:bg-white outline-none transition-all font-medium text-slate-900" placeholder="alex@merchant.com" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                      <input required type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-600/10 focus:bg-white outline-none transition-all font-medium text-slate-900" placeholder="(555) 000-0000" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Industry Vertical</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-600/10 focus:bg-white outline-none transition-all font-medium text-slate-900 appearance-none cursor-pointer">
                      <option>Full-Service Restaurant</option>
                      <option>Quick-Service / Cafe</option>
                      <option>Boutique / High-End Retail</option>
                      <option>NextATM Placement</option>
                      <option>Enterprise Services</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Message</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-blue-600/10 focus:bg-white outline-none transition-all font-medium text-slate-900" placeholder="Tell us about your project requirements..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-7 rounded-[32px] shadow-3xl shadow-blue-200 transition-all active:scale-95 transform hover:-translate-y-1 text-xl">
                    Architect My Solution
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
