
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOpenAssistant: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAssistant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'ATM Services', path: '/solutions#atm' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (path.includes('#')) {
      if (location.pathname === '/solutions') {
        e.preventDefault();
        const id = path.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-2xl shadow-xl shadow-slate-200/30 py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-blue-600 p-2.5 rounded-2xl shadow-2xl shadow-blue-200 group-hover:rotate-12 transition-transform duration-500">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Star<span className="text-blue-600">POS</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className={`text-[13px] font-black tracking-widest uppercase transition-all hover:text-blue-600 ${
                location.pathname === link.path ? 'text-blue-600' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-xl shadow-slate-200 active:scale-95 hover:scale-105"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2 bg-slate-100 rounded-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            {isMobileMenuOpen 
              ? <path d="M6 18L18 6M6 6l12 12" /> 
              : <path d="M4 6h16M4 12h16m-7 6h7" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-3xl border-t border-slate-100 p-10 absolute w-full shadow-2xl h-screen flex flex-col gap-8 animate-in slide-in-from-top duration-500">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className="text-4xl font-black text-slate-900 hover:text-blue-600 py-2 border-b border-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-blue-600 text-white py-6 rounded-[32px] font-black text-2xl mt-4 text-center shadow-2xl shadow-blue-100"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
