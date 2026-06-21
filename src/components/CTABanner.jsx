import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-brandIndigo-600 via-indigo-700 to-purple-700 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl shadow-brandIndigo-500/15">
          {/* Radial glow spot */}
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-white/5 filter blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="flex items-center gap-4 text-center md:text-left shrink-0">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0 hidden md:flex">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] text-indigo-200 font-bold uppercase tracking-wider mb-1">
                Ready to start your project?
              </span>
              <h2 className="font-header text-xl md:text-2xl font-extrabold text-white leading-tight">
                Let's Build Something Amazing Together
              </h2>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <a 
              href="#contact" 
              className="btn w-full md:w-auto py-3.5 px-8 text-xs md:text-sm font-bold text-brandIndigo-650 bg-white hover:bg-slate-50 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Get Started Now</span>
              <ArrowUpRight className="w-4 h-4 text-brandIndigo-650" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
