import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Laptop, Activity, Check, Monitor, Sparkles } from 'lucide-react';

const showcases = [
  {
    title: "Industrial Wholesale E-Store",
    category: "Storefront & Catalog Sync",
    desc: "Speed-optimized catalog ordering platform built for steel and trade distributors, facilitating instant bulk bookings.",
    speed: "0.3s",
    seo: "100/100",
    conv: "+34%",
    tech: ["Next.js", "Vercel", "PostgreSQL"],
    bgGradient: "from-blue-50 to-indigo-50",
    mockType: "store"
  },
  {
    title: "AI CRM Operations Dashboard",
    category: "Business Management Software",
    desc: "Custom administrative workspace integrating sales invoice qualifiers, automatic ledger postings, and inventory auditing.",
    speed: "0.5s",
    seo: "98/100",
    conv: "+40% efficiency",
    tech: ["React", "Firebase", "Node.js"],
    bgGradient: "from-purple-50 to-violet-50",
    mockType: "dashboard"
  },
  {
    title: "WhatsApp AI Routing Node",
    category: "Conversational Automation",
    desc: "Automated chatbot workflow answering catalogue inquiries, checking stock levels, and qualifying leads within 15 seconds.",
    speed: "0.1s response",
    seo: "N/A API",
    conv: "0% missed leads",
    tech: ["Python", "FastAPI", "Meta APIs"],
    bgGradient: "from-emerald-50 to-teal-50",
    mockType: "chat"
  }
];

export default function Showcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % showcases.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + showcases.length) % showcases.length);
  };

  const current = showcases[activeIdx];

  return (
    <section className="py-24 border-t border-slate-200/40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 text-left">
          <div>
            <span className="text-brandIndigo-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3">
              Web Showcase
            </span>
            <h2 className="font-header text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Crafted for High Conversion
            </h2>
            <p className="text-textSecondary text-xs md:text-sm max-w-md leading-relaxed mt-3 font-medium">
              Take a look at the custom web storefronts, AI tools, and CRM panels built by our engineering team.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-650 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous Showcase"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-650 transition-colors shadow-sm cursor-pointer"
              aria-label="Next Showcase"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Gallery Slider Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#fafafa] border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm shadow-slate-100">
          
          {/* Left Block: Product Details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5 w-full"
              >
                <div className="flex items-center gap-1.5 text-brandIndigo-500 font-bold text-[9px] uppercase tracking-widest leading-none">
                  <Laptop className="w-3.5 h-3.5" />
                  <span>{current.category}</span>
                </div>
                
                <h3 className="font-header text-xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  {current.title}
                </h3>
                
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {current.desc}
                </p>

                {/* Audit Widgets */}
                <div className="grid grid-cols-3 gap-3.5 border-y border-slate-200/60 py-4 mt-2">
                  <div>
                    <span className="block text-[8px] text-slate-400 font-extrabold uppercase mb-1">Load Speed</span>
                    <span className="text-sm font-header font-black text-slate-800">{current.speed}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-slate-400 font-extrabold uppercase mb-1">Lighthouse SEO</span>
                    <span className="text-sm font-header font-black text-slate-800">{current.seo}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-slate-400 font-extrabold uppercase mb-1">Impact</span>
                    <span className="text-sm font-header font-black text-brandIndigo-600">{current.conv}</span>
                  </div>
                </div>

                {/* Tech Tags & CTAs */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {current.tech.map((t, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Block: Simulated Dashboard Browser Mockups */}
          <div className="lg:col-span-7 flex justify-center items-center h-[280px] sm:h-[350px] relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.96, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.04, rotateY: -10 }}
                transition={{ duration: 0.4 }}
                className={`w-full max-w-[480px] bg-gradient-to-b ${current.bgGradient} border border-slate-200 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 relative flex flex-col justify-between`}
              >
                
                {/* Browser Top bar */}
                <div className="bg-white border-b border-slate-200/60 px-4 py-2 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  </div>
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">sharmasteels.com</span>
                  <div className="w-4"></div>
                </div>

                {/* Mockup Canvas */}
                <div className="p-6 bg-white min-h-[220px] flex flex-col gap-4 text-left">
                  
                  {current.mockType === "store" && (
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-[10px] text-slate-800 font-extrabold uppercase">Product Catalog Ordering</span>
                        <span className="text-[8px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded font-bold">FE500 Steel Available</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="border border-slate-200/60 rounded-xl p-3 flex flex-col gap-2 bg-[#fafafa]/50 shadow-inner">
                          <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
                          <span className="text-xs font-black text-slate-800">5 Tons fe500</span>
                        </div>
                        <div className="border border-slate-200/60 rounded-xl p-3 flex flex-col gap-2 bg-[#fafafa]/50 shadow-inner">
                          <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
                          <span className="text-xs font-black text-slate-800">₹2,80,000</span>
                        </div>
                      </div>
                      <div className="h-9 w-full bg-brandIndigo-600 rounded-xl flex items-center justify-center text-white text-[9px] font-black uppercase shadow-sm">
                        Verify Stock & Order Now
                      </div>
                    </div>
                  )}

                  {current.mockType === "dashboard" && (
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-[10px] text-slate-800 font-extrabold uppercase">System Financial Sync</span>
                        <span className="text-[8px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded font-bold">Tally Online</span>
                      </div>
                      <div className="border border-slate-150 rounded-xl p-3.5 bg-slate-50/20 shadow-sm flex justify-between items-center">
                        <div>
                          <span className="block text-[7px] text-slate-400 font-bold uppercase leading-none mb-1">Invoice INV-9872</span>
                          <span className="text-xs text-slate-850 font-black">Patel Distributors</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-xs font-black text-slate-900">₹84,200</span>
                          <span className="text-[7px] text-emerald-500 font-black uppercase">Pushed Ledger</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {current.mockType === "chat" && (
                    <div className="flex flex-col gap-3.5 max-w-[90%] mx-auto w-full">
                      <div className="bg-[#fafafa] border border-slate-200/60 p-2.5 rounded-2xl rounded-tl-none self-start text-[9px] text-slate-650">
                        Hi राजेश, checked catalog inventory Fe500 rods. Monday delivery is confirmed. Pushing invoice ticket now.
                      </div>
                      <div className="bg-brandIndigo-600 text-white p-2.5 rounded-2xl rounded-tr-none self-end text-[9px]">
                        Perfect! Generate invoice INV-2026-99 immediately.
                      </div>
                    </div>
                  )}

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
