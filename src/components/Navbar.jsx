import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="logo flex items-center font-header text-xl md:text-2xl font-extrabold text-slate-900 tracking-wide uppercase relative">
          <span className="absolute w-[18px] h-[18px] rounded-full bg-brandIndigo-500/10 filter blur-xl opacity-60 -left-1"></span>
          otto<span className="text-brandIndigo-500 ml-0.5 font-black">labs</span>
        </a>

        {/* Center menu links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', href: '#' },
            { name: 'Services', href: '#services' },
            { name: 'About Us', href: '#why-us' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Contact', href: '#contact' }
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 hover:text-slate-900 font-semibold text-xs md:text-sm tracking-wide transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Let's Talk CTA */}
        <div className="hidden md:flex items-center">
          <a 
            href="#contact" 
            className="btn py-2 px-5 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-brandIndigo-500 via-brandIndigo-600 to-indigo-700 hover:from-brandIndigo-600 hover:to-indigo-800 rounded-lg shadow-md shadow-brandIndigo-500/10 hover:shadow-brandIndigo-500/30 flex items-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hamburger Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-1 text-slate-900 hover:text-brandIndigo-500 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-md"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {[
                { name: 'Home', href: '#' },
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#why-us' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 hover:text-slate-900 font-semibold text-base py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-3 bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white rounded-lg font-bold text-center mt-2 shadow-md transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
