
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SolutionsPage: React.FC = () => {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState('processing');

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const atmServices = [
    {
      id: 'processing',
      title: 'Transaction Processing',
      badge: 'Secure & Timely',
      description: 'Nationwide technical team and relationships with multiple vendors ensure accurate identify identifying the best processing solution. Enjoy 24-hour cash settlement for business days and Monday settlement for weekend activity.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
      features: ['24hr Cash Settlement', 'Wireless Solutions', 'Nationwide Tech Support', 'Secure Communication']
    },
    {
      id: 'financing',
      title: 'Leasing & Financing',
      badge: 'Flexible Capital',
      description: 'Ownership without the upfront capital. We offer competitive leasing for eligible applicants, with daily payments as affordable as a few dollars for well-qualified customers.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
      features: ['Low Daily Payments', 'Competitive Interest', 'Fast Approvals', 'Preserve Working Capital']
    },
    {
      id: 'monitoring',
      title: 'Terminal Monitoring',
      badge: 'Real-Time Insights',
      description: 'Our Smartphone ATM App and online management portals enable business owners to oversee daily transactions in real-time, maximizing visibility and minimizing downtime.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
      features: ['Mobile App Access', 'Real-time Alerts', 'Online Management Portal', 'Accurate Data Reporting']
    },
    {
      id: 'branding',
      title: 'Branding & Signage',
      badge: 'Marketing Edge',
      description: 'Boost transaction volume through strategic signage and custom ATM wraps. Stand out from competitors and reinforce your business identity with high-quality implementation.',
      image: 'https://images.unsplash.com/photo-1591197172021-c1538abcad2b?auto=format&fit=crop&q=80&w=1200',
      features: ['Custom ATM Wraps', 'Exterior Signage', 'Increased Foot Traffic', 'Brand Reinforcement']
    },
    {
      id: 'armored',
      title: 'Armored Vault Cash',
      badge: 'Enterprise Logistics',
      description: 'The Vault Cash Program provides comprehensive cash management, including armored carrier service and forecasting, allowing you to focus your capital on business growth.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200',
      features: ['Full-service Loading', 'Armored Delivery', 'Cash Forecasting', 'Risk Mitigation']
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* --- SOLUTIONS HERO --- */}
      <section className="pt-44 pb-32 bg-slate-50 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.02] rounded-bl-[200px] -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 animate-fade-in">
              <span className="bg-blue-600/10 text-blue-700 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-10 inline-block border border-blue-200/50">
                Technology Portfolio 2025
              </span>
              <h1 className="text-7xl lg:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">
                Integrated <br/><span className="text-blue-600">Growth.</span>
              </h1>
              <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Bridging the gap between hardware power and software intelligence for the modern entrepreneur.
              </p>
            </div>
            <div className="lg:w-1/2">
               <div className="relative rounded-[70px] overflow-hidden shadow-[0_60px_100px_-30px_rgba(0,0,0,0.15)]">
                  <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200" className="w-full h-[600px] object-cover" alt="Digital Business Solutions" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOFTWARE ECOSYSTEM --- */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center mb-44">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter">POS Software <br/> Ecosystems.</h2>
              <p className="text-xl text-slate-500 mb-14 leading-relaxed font-medium">
                We empower your operations with elite platforms including **Clover**, **Aldelo Express**, and **Hiopos**. From tableside ordering to multi-store retail analytics, our software stays ahead of the curve.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-16">
                 {[
                   { label: 'Restaurant', val: 'Aldelo' },
                   { label: 'Retail', val: 'Hiopos' },
                   { label: 'All-in-one', val: 'Clover' },
                   { label: 'Kiosk', val: 'Star Kiosk' }
                 ].map((item, idx) => (
                    <div key={idx} className="p-8 bg-slate-50 rounded-[40px] border border-slate-100">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{item.label}</p>
                       <p className="text-2xl font-black text-slate-900">{item.val}</p>
                    </div>
                 ))}
              </div>
              <Link to="/contact" className="bg-blue-600 text-white px-12 py-6 rounded-[32px] font-black shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 inline-block">
                Request a Live Demo
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1200" className="rounded-[80px] shadow-3xl" alt="SaaS UI" />
                 <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-10 rounded-[40px] shadow-3xl hidden md:block">
                    <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">Cloud Status</p>
                    <div className="flex items-center gap-4">
                       <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                       <span className="font-bold">Sync Complete</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ATM SERVICES MASTER --- */}
      <section id="atm" className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
           <svg width="100%" height="100%"><pattern id="grid-atm-v2" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid-atm-v2)" /></svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
             <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-16 h-px bg-blue-500"></div>
                   <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">ATM & Transaction Processing</span>
                </div>
                <h2 className="text-6xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">Extensive ATM <br/> Solutions.</h2>
                <p className="text-2xl text-slate-400 font-medium leading-relaxed">Identifying the processing solution that best serves your interests while streamlining your entire operations.</p>
             </div>
             <div className="flex items-center gap-4 bg-white/5 p-6 rounded-[40px] border border-white/10">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center font-black italic">Next</div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Network Provider</p>
                   <p className="text-xl font-black text-white">NextATM Certified</p>
                </div>
             </div>
          </div>

          {/* Interactive Navigation Grid */}
          <div className="grid md:grid-cols-5 gap-4 mb-20">
             {atmServices.map((service) => (
                <button 
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`p-8 rounded-[40px] text-center transition-all duration-500 flex flex-col items-center justify-center gap-3 border ${
                    activeTab === service.id 
                    ? 'bg-blue-600 border-blue-500 shadow-3xl shadow-blue-500/20' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <span className={`text-xs font-black uppercase tracking-widest ${activeTab === service.id ? 'text-white' : 'text-slate-500'}`}>
                    {service.id}
                  </span>
                  <p className="font-bold text-sm">{service.title.split(' ')[0]}</p>
                </button>
             ))}
          </div>

          {/* Detailed Service Block */}
          <div className="bg-white/5 rounded-[80px] p-10 lg:p-24 border border-white/10 backdrop-blur-xl relative mb-32 group">
             {atmServices.map((service) => service.id === activeTab && (
                <div key={service.id} className="grid lg:grid-cols-2 gap-24 items-center animate-fade-in">
                   <div>
                      <span className="bg-blue-600 text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest mb-10 inline-block shadow-lg">
                         {service.badge}
                      </span>
                      <h3 className="text-5xl font-black mb-8 leading-tight tracking-tight">{service.title}</h3>
                      <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                         {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                         {service.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 text-slate-100 font-bold">
                               <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-blue-500">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                               </div>
                               {feat}
                            </div>
                         ))}
                      </div>
                      <Link to="/contact" className="text-blue-500 font-black flex items-center gap-3 hover:gap-6 transition-all uppercase tracking-widest text-sm">
                         Contact Expert <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </Link>
                   </div>
                   <div className="relative">
                      <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img src={service.image} className="rounded-[60px] shadow-3xl w-full h-[550px] object-cover border border-white/10 transform transition-all duration-1000" alt={service.title} />
                   </div>
                </div>
             ))}
          </div>

          {/* KIOSK FOCUS BLOCK */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="relative">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" className="rounded-[80px] shadow-3xl border border-white/5" alt="Self-Service Kiosk" />
                <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-2xl p-8 rounded-[40px] border border-white/10 shadow-2xl">
                   <p className="text-6xl font-black text-white">4K</p>
                   <p className="text-[10px] font-black uppercase text-blue-400 tracking-widest">Touch Display</p>
                </div>
             </div>
             <div>
                <h2 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">Self-Service <br/> Kiosks.</h2>
                <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
                   Managing all aspects of kiosk operations is challenging. Our equipment boasts cutting-edge technology, HD screens, and self-service solutions adaptable to any environment. We possess the expertise to effectively oversee your entire portfolio.
                </p>
                <div className="space-y-6 mb-16">
                   <div className="flex items-center gap-4 text-slate-300 font-bold">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      Full Compliance Management
                   </div>
                   <div className="flex items-center gap-4 text-slate-300 font-bold">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      Integrated Processing Tasks
                   </div>
                   <div className="flex items-center gap-4 text-slate-300 font-bold">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      Custom Branding Options
                   </div>
                </div>
                <Link to="/contact" className="bg-white text-slate-900 px-12 py-6 rounded-[32px] font-black shadow-2xl shadow-blue-500/10 hover:bg-blue-50 transition-all active:scale-95 inline-block">
                   Explore Kiosk Placement
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* --- REASSURANCE SECTION --- */}
      <section className="py-44 bg-white text-center">
         <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-5xl font-black text-slate-900 mb-10 tracking-tight leading-none">Maximize Visibility. <br/> <span className="text-blue-600">Minimize Downtime.</span></h2>
            <p className="text-2xl text-slate-500 mb-16 leading-relaxed font-medium">Through the delivery of accurate and timely data, our aim is to identify the advantages that confer significant growth for our valued clients.</p>
            <div className="flex flex-wrap justify-center gap-10 opacity-30">
               <div className="font-black text-3xl uppercase tracking-tighter">Clover</div>
               <div className="font-black text-3xl italic uppercase tracking-tighter">NextATM</div>
               <div className="font-black text-3xl uppercase tracking-tighter">Aldelo</div>
               <div className="font-black text-3xl uppercase tracking-tighter">Hiopos</div>
            </div>
         </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SolutionsPage;
