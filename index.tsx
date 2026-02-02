
import { GoogleGenAI } from "@google/genai";

// --- Types & Configuration ---
interface NavItem { name: string; path: string; }

const NAV_LINKS: NavItem[] = [
  { name: 'Home', path: '#/' },
  { name: 'Solutions', path: '#/solutions' },
  { name: 'ATM Services', path: '#/solutions#atm' },
  { name: 'Contact', path: '#/contact' },
];

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- State Management ---
let currentPath = window.location.hash || '#/';
let isAssistantOpen = false;
let messages: { role: 'user' | 'assistant'; content: string }[] = [
  { role: 'assistant', content: 'Hi! I’m the Star POS AI Assistant. How can I help with your payment or ATM needs today?' }
];
let isLoadingAI = false;
let activeAtmTab = 'processing';

// --- UI Components ---

const Header = () => `
  <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-8">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <a href="#/" class="flex items-center gap-3 group">
        <div class="bg-blue-600 p-2.5 rounded-2xl shadow-xl group-hover:rotate-12 transition-transform">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <span class="text-2xl font-black tracking-tighter uppercase">Star<span class="text-blue-600">POS</span></span>
      </a>

      <nav class="hidden md:flex items-center gap-10">
        ${NAV_LINKS.map(link => `
          <a href="${link.path}" class="text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:text-blue-600 ${currentPath.startsWith(link.path.split('#')[1]) ? 'text-blue-600' : 'text-slate-500'}">
            ${link.name}
          </a>
        `).join('')}
        <a href="#/contact" class="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-bold text-xs transition-all shadow-lg active:scale-95">
          Get Started
        </a>
      </nav>
    </div>
  </header>
`;

const HomeView = () => `
  <section class="relative pt-48 pb-32 overflow-hidden bg-white">
    <div class="absolute top-0 right-0 -z-10 w-[55%] h-full bg-blue-50/50 rounded-bl-[200px] hidden lg:block"></div>
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        <div class="lg:w-1/2">
          <div class="inline-flex items-center gap-3 bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest mb-8 border border-blue-200">
            Next-Gen Merchant Services
          </div>
          <h1 class="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
            Commerce <br/><span class="text-blue-600">Reimagined.</span>
          </h1>
          <p class="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            Accept any payment, optimize your floor plan, and grow your revenue with Star POS - the heartbeat of modern retail.
          </p>
          <div class="flex gap-4">
            <a href="#/solutions" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-3xl font-black transition-all shadow-2xl shadow-blue-200 flex items-center gap-3 group">
              Explore Tech
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
        <div class="lg:w-1/2 relative">
          <div class="p-3 bg-white rounded-[60px] shadow-3xl border border-slate-100 relative z-10">
            <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200" class="w-full h-[600px] object-cover rounded-[52px]" />
            <div class="absolute top-12 -right-8 bg-white/90 backdrop-blur-xl p-6 rounded-[32px] shadow-2xl border border-white/50 animate-float hidden md:block">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Revenue</p>
                  <p class="text-2xl font-black text-slate-900">$2,410.15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-32 bg-slate-900 text-white rounded-[100px] mx-4 -mt-10 mb-20 relative overflow-hidden">
    <div class="container mx-auto px-10">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span class="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Hardware Spotlight</span>
          <h2 class="text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-none">Built for the <br/> Pace of Business.</h2>
          <p class="text-xl text-slate-400 mb-12 font-medium">High-speed processors, end-to-end encryption, and sleek hardware that complements your store's aesthetic.</p>
          <div class="flex gap-6">
            <a href="#/contact" class="bg-blue-600 px-10 py-5 rounded-3xl font-black shadow-xl">Get Quote</a>
            <a href="#/solutions" class="border border-white/20 px-10 py-5 rounded-3xl font-black hover:bg-white/5 transition-all">Specifications</a>
          </div>
        </div>
        <div class="relative group">
          <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=1200" class="rounded-[50px] shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700" />
        </div>
      </div>
    </div>
  </section>
`;

const SolutionsView = () => `
  <section class="pt-44 pb-32 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl">
        <h1 class="text-7xl lg:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">
          Software <br/><span class="text-blue-600">Intelligence.</span>
        </h1>
        <p class="text-2xl text-slate-500 font-medium leading-relaxed mb-20">
          We partner with Clover, Aldelo, and Hiopos to bring you the gold standard in payment processing.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-10">
        <div class="bg-slate-50 p-12 rounded-[50px] border border-slate-100 hover:shadow-2xl transition-all">
          <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-200">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <h3 class="text-3xl font-black mb-6">Retail Power</h3>
          <p class="text-slate-500 leading-relaxed">Inventory tracking, customer loyalty, and multi-store management built directly into your terminal.</p>
        </div>
        <div class="bg-slate-50 p-12 rounded-[50px] border border-slate-100 hover:shadow-2xl transition-all">
          <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-200">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 class="text-3xl font-black mb-6">ATM Placement</h3>
          <p class="text-slate-500 leading-relaxed">Boost foot traffic and generate surcharge revenue with our nationwide ATM installation and monitoring.</p>
        </div>
        <div class="bg-slate-50 p-12 rounded-[50px] border border-slate-100 hover:shadow-2xl transition-all">
          <div class="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-200">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h3 class="text-3xl font-black mb-6">Full Security</h3>
          <p class="text-slate-500 leading-relaxed">EMV compliance, point-to-point encryption (P2PE), and 24/7 technical monitoring of all devices.</p>
        </div>
      </div>
    </div>
  </section>
`;

const ContactView = () => `
  <section class="pt-44 pb-32 bg-slate-50 min-h-screen">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row gap-20">
        <div class="lg:w-1/2">
          <h1 class="text-7xl lg:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Let's talk <br/> <span class="text-blue-600">Growth.</span></h1>
          <p class="text-2xl text-slate-500 mb-12 font-medium">Our specialists are standing by to architect your payment infrastructure.</p>
          <div class="space-y-8">
            <div class="flex items-center gap-6">
              <div class="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <span class="text-2xl font-black">(800) 555-STAR</span>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <form class="bg-white p-12 rounded-[50px] shadow-2xl space-y-8 border border-slate-100" onsubmit="event.preventDefault(); alert('Inquiry sent!');">
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
              <input type="text" class="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="Alexander Hamilton" />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Business Email</label>
              <input type="email" class="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="alex@merch.com" />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
              <textarea rows="4" class="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="Tell us about your business..."></textarea>
            </div>
            <button class="w-full bg-blue-600 text-white font-black py-6 rounded-[32px] shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all text-xl transform hover:-translate-y-1">
              Architect My Solution
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
`;

const AssistantWidget = () => `
  <div id="ai-assistant" class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    ${isAssistantOpen ? `
      <div class="w-[400px] h-[600px] bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300 mb-6">
        <div class="bg-blue-600 p-8 text-white flex justify-between items-center">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h3 class="font-black text-lg">Star AI Concierge</h3>
              <p class="text-[10px] text-blue-100 font-bold uppercase tracking-widest flex items-center gap-1">
                <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Active Now
              </p>
            </div>
          </div>
          <button onclick="window.toggleAssistant()" class="hover:bg-white/10 p-2 rounded-xl transition-colors">
             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <div id="messages-container" class="flex-grow overflow-y-auto p-8 space-y-6 bg-slate-50/50">
          ${messages.map(m => `
            <div class="flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}">
              <div class="max-w-[85%] p-5 rounded-[28px] text-sm font-medium leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-br-none shadow-xl shadow-blue-200' : 'bg-white text-slate-800 rounded-bl-none shadow-sm border border-slate-100'}">
                ${m.content}
              </div>
            </div>
          `).join('')}
          ${isLoadingAI ? `
            <div class="flex justify-start">
              <div class="bg-white p-5 rounded-[28px] rounded-bl-none shadow-sm flex gap-1">
                <div class="w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div class="w-2 h-2 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          ` : ''}
        </div>

        <form onsubmit="window.handleChatSubmit(event)" class="p-6 bg-white border-t border-slate-100 flex gap-3">
          <input id="chat-input" type="text" class="flex-grow bg-slate-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none text-sm font-medium" placeholder="Ask about POS or ATMs..." />
          <button type="submit" class="bg-blue-600 text-white p-4 rounded-2xl shadow-lg hover:bg-blue-700 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </form>
      </div>
    ` : ''}
    
    <button onclick="window.toggleAssistant()" class="bg-slate-900 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:bg-blue-600 transition-all duration-500 transform hover:scale-110 active:scale-90 flex items-center gap-3 group">
      <span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-black text-xs uppercase tracking-widest px-0 group-hover:px-2">Need Expert Help?</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="M16 10a4 4 0 1 0-8 0"/></svg>
    </button>
  </div>
`;

// --- Render & Logic ---

const render = () => {
  const app = document.getElementById('app');
  if (!app) return;

  let content = '';
  if (currentPath === '#/' || currentPath === '') content = HomeView();
  else if (currentPath.startsWith('#/solutions')) content = SolutionsView();
  else if (currentPath === '#/contact') content = ContactView();

  app.innerHTML = `
    <div class="flex flex-col min-h-screen">
      ${Header()}
      <main class="flex-grow">${content}</main>
      <footer class="bg-slate-950 text-slate-400 py-20">
        <div class="container mx-auto px-6 text-center">
          <span class="text-3xl font-black text-white tracking-tighter uppercase mb-8 block">Star<span class="text-blue-600">POS</span></span>
          <p class="max-w-2xl mx-auto mb-12">Empowering merchants with integrated payment ecosystems, nationwide technical support, and the world's most intuitive POS hardware.</p>
          <div class="flex justify-center gap-8 mb-12 opacity-40 grayscale">
            <span class="font-black text-xl uppercase">Clover</span>
            <span class="font-black text-xl uppercase italic">NextATM</span>
            <span class="font-black text-xl uppercase">Aldelo</span>
          </div>
          <div class="pt-10 border-t border-white/5 text-[10px] uppercase font-bold tracking-widest">
            © ${new Date().getFullYear()} Star POS Network. Merchant services provided by Star Financial Group.
          </div>
        </div>
      </footer>
      ${AssistantWidget()}
    </div>
  `;

  // Update Header scroll state
  const header = document.getElementById('main-header');
  window.onscroll = () => {
    if (window.scrollY > 50) {
      header?.classList.add('glass', 'shadow-2xl', 'py-4');
      header?.classList.remove('py-8');
    } else {
      header?.classList.remove('glass', 'shadow-2xl', 'py-4');
      header?.classList.add('py-8');
    }
  };

  // Scroll messages to bottom
  const container = document.getElementById('messages-container');
  if (container) container.scrollTop = container.scrollHeight;
};

// --- Global Handlers ---

window.addEventListener('hashchange', () => {
  currentPath = window.location.hash;
  render();
});

(window as any).toggleAssistant = () => {
  isAssistantOpen = !isAssistantOpen;
  render();
};

(window as any).handleChatSubmit = async (e: Event) => {
  e.preventDefault();
  const input = document.getElementById('chat-input') as HTMLInputElement;
  const val = input?.value?.trim();
  if (!val || isLoadingAI) return;

  messages.push({ role: 'user', content: val });
  isLoadingAI = true;
  render();

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: val,
      config: {
        systemInstruction: `You are the AI Business Concierge for Star POS Network. 
        Focus on: 
        1. POS: Clover (all-in-one), Aldelo (Restaurant), Hiopos (Retail).
        2. ATM: Placement, financing, and armored vault cash services.
        Keep it professional, bold, and merchant-focused. Suggest booking a demo on the contact page if they seem interested.`,
      }
    });
    messages.push({ role: 'assistant', content: response.text || 'I apologize, could you rephrase that?' });
  } catch (err) {
    messages.push({ role: 'assistant', content: 'Our systems are experiencing high traffic. Please call us at (800) 555-STAR for immediate help.' });
  } finally {
    isLoadingAI = false;
    render();
  }
};

// Initial Render
render();
