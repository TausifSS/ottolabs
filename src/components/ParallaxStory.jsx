import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Laptop, Phone, Database, Check, Sparkles, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ParallaxStory() {
  const containerRef = useRef(null);

  // Track the scroll of the entire storytelling block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springConfig = { stiffness: 80, damping: 20, mass: 1 };

  // 1. Text Panels Opacities & Transforms
  const text1Opacity = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]), springConfig);
  const text1Y = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.33], [0, 0, -40]), springConfig);

  const text2Opacity = useSpring(useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]), springConfig);
  const text2Y = useSpring(useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [40, 0, 0, -40]), springConfig);

  const text3Opacity = useSpring(useTransform(scrollYProgress, [0.58, 0.66, 0.95], [0, 1, 1]), springConfig);
  const text3Y = useSpring(useTransform(scrollYProgress, [0.58, 0.66, 0.95], [40, 0, 0, 0]), springConfig);

  // 2. Mockups Container Translations (Parallax sliding in from right, out to left)
  const mock1Opacity = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]), springConfig);
  const mock1X = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.33], [0, 0, -100]), springConfig);
  const mock1Scale = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0.95]), springConfig);

  const mock2Opacity = useSpring(useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]), springConfig);
  const mock2X = useSpring(useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [100, 0, 0, -100]), springConfig);
  const mock2Scale = useSpring(useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0.95, 1, 1, 0.95]), springConfig);

  const mock3Opacity = useSpring(useTransform(scrollYProgress, [0.58, 0.66, 0.95], [0, 1, 1]), springConfig);
  const mock3X = useSpring(useTransform(scrollYProgress, [0.58, 0.66, 0.95], [100, 0, 0]), springConfig);
  const mock3Scale = useSpring(useTransform(scrollYProgress, [0.58, 0.66, 0.95], [0.95, 1, 1]), springConfig);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#fafafa]">
      
      {/* Sticky Frame Container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden z-10">
        
        {/* Alignment Grid Lines (Linear look) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
        <div className="absolute left-[33%] top-0 bottom-0 w-[1px] bg-slate-100 hidden lg:block"></div>
        <div className="absolute right-[33%] top-0 bottom-0 w-[1px] bg-slate-100 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full items-center">
          
          {/* LEFT SIDE: STORYTEXTS (Pinned overlay cards) */}
          <div className="col-span-12 lg:col-span-5 h-[350px] relative flex flex-col justify-center">
            
            {/* Story 1 Text */}
            <motion.div 
              style={{ opacity: text1Opacity, y: text1Y }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none active:pointer-events-auto"
            >
              <div className="flex items-center gap-2 text-brandIndigo-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                <Laptop className="w-4 h-4" />
                <span>Phase 01 / Capture</span>
              </div>
              <h2 className="font-header text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                High-Converting <br />Web App Portals
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 max-w-sm">
                We design and build blazingly fast storefronts and CRM web apps tailored for factories, wholesalers, and traders. Capture inquiry volumes instantly and structure catalog orders with clean UI layouts.
              </p>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700 text-xs font-semibold">SEO & Speed Optimized</span>
              </div>
            </motion.div>

            {/* Story 2 Text */}
            <motion.div 
              style={{ opacity: text2Opacity, y: text2Y }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none active:pointer-events-auto"
            >
              <div className="flex items-center gap-2 text-brandTeal-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                <Phone className="w-4 h-4" />
                <span>Phase 02 / Automate</span>
              </div>
              <h2 className="font-header text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                WhatsApp & AI Agent <br />Auto-Qualifiers
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 max-w-sm">
                No more missed leads. When a customer sends an inquiry via WhatsApp, our integrated conversational AI answers, qualifications, matches catalogs, and schedules calls in 15 seconds.
              </p>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700 text-xs font-semibold">Instant auto-reply systems</span>
              </div>
            </motion.div>

            {/* Story 3 Text */}
            <motion.div 
              style={{ opacity: text3Opacity, y: text3Y }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none active:pointer-events-auto"
            >
              <div className="flex items-center gap-2 text-purple-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                <Database className="w-4 h-4" />
                <span>Phase 03 / Process</span>
              </div>
              <h2 className="font-header text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Unified ERP CRM & <br />Tally Ledger Sync
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 max-w-sm">
                All qualified data flows directly into your business inventory database. We integrate custom CRM software, automate invoice billing sheets, and sync active ledger tables with Tally.
              </p>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700 text-xs font-semibold">Zero-latency API bridges</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: ANIMATED MOCKUPS (Overlaid parallax panels) */}
          <div className="col-span-12 lg:col-span-7 h-[300px] sm:h-[400px] relative flex justify-center items-center">
            
            {/* Visual Mockup 1: Capture Browser */}
            <motion.div 
              style={{ opacity: mock1Opacity, x: mock1X, scale: mock1Scale }}
              className="absolute w-full max-w-[500px] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-lg shadow-slate-100"
            >
              <div className="bg-slate-100/70 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                </div>
                <span className="text-[8px] text-slate-400 font-bold tracking-wider">sharmasteels.com/inquiry</span>
                <div className="w-4"></div>
              </div>
              <div className="p-5 flex flex-col gap-3.5 bg-white text-left">
                <div className="h-2 w-1/3 bg-slate-100 rounded"></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-slate-200/80 p-2.5 rounded-lg flex flex-col gap-1 shadow-inner shadow-slate-50/50">
                    <span className="text-[7px] text-slate-400 font-bold uppercase">Name</span>
                    <span className="text-[10px] text-slate-800 font-extrabold">Rajesh Sharma</span>
                  </div>
                  <div className="border border-slate-200/80 p-2.5 rounded-lg flex flex-col gap-1 shadow-inner shadow-slate-50/50">
                    <span className="text-[7px] text-slate-400 font-bold uppercase">Phone</span>
                    <span className="text-[10px] text-slate-800 font-extrabold">+91 98765 43210</span>
                  </div>
                </div>
                <div className="border border-slate-200/80 p-2.5 rounded-lg flex flex-col gap-1 shadow-inner shadow-slate-50/50">
                  <span className="text-[7px] text-slate-400 font-bold uppercase">Requirement</span>
                  <span className="text-[10px] text-slate-800 font-extrabold">5 Tons Reinforced Structural Steel Rods</span>
                </div>
                <div className="h-9 w-full bg-brandIndigo-600 rounded-lg flex items-center justify-center text-white text-[10px] font-black uppercase shadow-sm">
                  Submitting Inquiry...
                </div>
              </div>
            </motion.div>

            {/* Visual Mockup 2: WhatsApp Chat Mockup */}
            <motion.div 
              style={{ opacity: mock2Opacity, x: mock2X, scale: mock2Scale }}
              className="absolute w-[280px] bg-slate-900 border-[6px] border-slate-800 rounded-[30px] overflow-hidden shadow-2xl h-[380px] flex flex-col"
            >
              {/* Phone Header */}
              <div className="bg-slate-800 text-white px-4 pt-4 pb-2.5 flex items-center justify-between border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brandTeal-500 flex items-center justify-center font-bold text-[9px]">OT</div>
                  <div>
                    <span className="block text-[10px] font-black leading-none">Otto Agent</span>
                    <span className="text-[7px] text-brandTeal-400 font-semibold">online</span>
                  </div>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-brandTeal-400" />
              </div>
              
              {/* Chat Canvas bubbles */}
              <div className="flex-grow p-4 flex flex-col gap-3.5 bg-slate-950 overflow-y-auto text-left">
                <div className="bg-slate-800/80 border border-slate-700 text-slate-200 p-2.5 rounded-xl rounded-tl-none text-[9px] max-w-[85%]">
                  Hi Rajesh, I see your steel inquiry. Do you need standard grade Fe500?
                </div>
                <div className="bg-brandTeal-600 text-white p-2.5 rounded-xl rounded-tr-none text-[9px] max-w-[85%] self-end">
                  Yes, Fe500 grade steel rods. Can you deliver by Tuesday?
                </div>
                <div className="bg-slate-800/80 border border-slate-700 text-slate-200 p-2.5 rounded-xl rounded-tl-none text-[9px] max-w-[85%] flex flex-col gap-1.5">
                  <span>Checking catalog stocks... Tuesday delivery is available!</span>
                  <span className="text-[7px] text-brandTeal-400 font-bold uppercase">System: Invoice auto-routing...</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Mockup 3: CRM / Invoice Dashboard */}
            <motion.div 
              style={{ opacity: mock3Opacity, x: mock3X, scale: mock3Scale }}
              className="absolute w-full max-w-[500px] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-slate-100/70 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-purple-600" />
                  <span className="text-[9px] text-slate-700 font-black uppercase tracking-wider">Otto ERP Workspace</span>
                </div>
                <span className="text-[8px] bg-purple-100 text-purple-600 font-bold px-2 py-0.5 rounded border border-purple-200/50">Tally Synced</span>
              </div>
              <div className="p-5 bg-white text-left flex flex-col gap-4">
                
                {/* Invoice sync status */}
                <div className="border border-slate-150 p-3 rounded-xl flex items-center justify-between shadow-sm bg-slate-50/10">
                  <div>
                    <span className="block text-[8px] text-slate-400 font-bold uppercase">Invoice INV-2026-98</span>
                    <span className="text-xs text-slate-800 font-extrabold">Sharma Steels Pvt Ltd</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-black text-slate-900">₹1,48,500</span>
                    <span className="text-[8px] text-emerald-500 font-bold">Processed</span>
                  </div>
                </div>

                {/* Automation audit trail logs */}
                <div className="flex flex-col gap-2 border border-slate-100 p-3.5 rounded-xl bg-slate-50/10">
                  <span className="text-[8px] text-slate-400 font-extrabold uppercase mb-1 block">Automation Flow Trail</span>
                  {[
                    "WhatsApp chat conversation qualified.",
                    "Invoice INV-2026-98 generated on CRM.",
                    "Ledger voucher pushed to Tally ERP."
                  ].map((log, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[9px] text-slate-700 font-medium">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
}
