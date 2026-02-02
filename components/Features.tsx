
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Cloud Intelligence',
      description: 'Monitor your sales, labor costs, and inventory from your phone. Data that speaks your language.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
      ),
      color: 'blue'
    },
    {
      title: 'Swift Funding',
      description: 'Wait less for your money. We offer next-day funding for most merchants with zero hidden fees.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      color: 'green'
    },
    {
      title: 'Elite Support',
      description: 'Real humans, available 24/7/365. If your hardware goes down, we have a technician on-site fast.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      ),
      color: 'indigo'
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Core Advantage</h2>
          <p className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight">Simple. Powerful. <br/> <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Reliable.</span></p>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Stop juggling twenty different tools. Star POS integrates your entire business workflow into one sleek interface.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="group p-12 rounded-[48px] bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 border border-transparent hover:border-slate-100 flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center mb-10 transition-all duration-500 group-hover:rotate-12 shadow-lg ${
                f.color === 'blue' ? 'bg-blue-600 text-white shadow-blue-200' : 
                f.color === 'green' ? 'bg-green-600 text-white shadow-green-200' : 
                'bg-indigo-600 text-white shadow-indigo-200'
              }`}>
                {f.icon}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
