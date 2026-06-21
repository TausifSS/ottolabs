import React, { useRef, useState } from 'react';
import { ArrowRight, Phone, Sparkles, Terminal, Activity } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export default function StoryHero() {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track scroll position of the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values for the 3D-perspective canvas board
  const rawRotateX = useTransform(scrollYProgress, [0, 0.8], [12, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.8], [0.93, 1]);
  const rawTranslateY = useTransform(scrollYProgress, [0, 0.8], [0, -25]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);

  const springConfig = { stiffness: 90, damping: 18, mass: 0.8 };
  const rotateX = useSpring(rawRotateX, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const translateY = useSpring(rawTranslateY, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);

  // Mouse coordinate values using motion springs to keep transitions fluid
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const springMouseY = useSpring(mouseY, { stiffness: 150, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    mouseX.set(x);
    mouseY.set(y);
    setCoords({ x, y });
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[140vh] pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa] cursor-crosshair select-none"
    >
      {/* 1. Fine layout grid lines (Linear.app style background grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none z-0"></div>

      {/* 2. Top-centered light source gradient */}
      <div className="absolute top-[-5%] left-[25%] md:left-[35%] w-[400px] md:w-[600px] h-[400px] md:h-[500px] rounded-full bg-gradient-to-tr from-brandIndigo-500/10 via-purple-500/5 to-transparent filter blur-[90px] pointer-events-none z-0"></div>

      {/* 3. Interactive CAD-style Mouse Crosshairs & Tooltip */}
      {isHovered && (
        <>
          {/* Vertical Crosshair Line */}
          <motion.div 
            style={{ left: springMouseX }}
            className="absolute top-0 bottom-0 w-[1px] bg-slate-200/50 pointer-events-none z-10"
          />
          {/* Horizontal Crosshair Line */}
          <motion.div 
            style={{ top: springMouseY }}
            className="absolute left-0 right-0 h-[1px] bg-slate-200/50 pointer-events-none z-10"
          />
          {/* Floating Coordinate Tag */}
          <motion.div 
            style={{ left: springMouseX, top: springMouseY }}
            className="absolute pointer-events-none z-20 ml-4 mt-4 bg-slate-900 text-[8px] text-slate-300 font-mono px-2 py-1 rounded border border-slate-700/80 shadow-md shadow-slate-950/20"
          >
            x: {coords.x}px | y: {coords.y}px
          </motion.div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Story Intro Header Block */}
        <div className="text-center max-w-4xl flex flex-col items-center mt-8 md:mt-12 mb-16">
          
          {/* Linear Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200/80 rounded-full shadow-sm shadow-slate-100 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-brandIndigo-500" />
            <span className="text-[10px] text-slate-600 font-semibold tracking-wider uppercase">Interactive Vector Sandbox</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-header text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-slate-900"
          >
            We Build Websites & Automations <br className="hidden md:inline" /> That <span className="gradient-text font-black">Grow Your Business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textSecondary text-sm md:text-lg leading-relaxed max-w-2xl mb-8 font-medium"
          >
            Otto Labs builds custom web apps, AI bots, WhatsApp auto-replies, and Tally integrations that save you hours and convert inquiries automatically.
          </motion.p>

          {/* Linear Command Bar Search Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-md bg-white border border-slate-200/80 p-1.5 rounded-xl shadow-md shadow-slate-100 flex items-center gap-2 mb-10 text-left cursor-text hover:border-slate-350 transition-colors"
          >
            <Terminal className="w-4 h-4 text-slate-400 ml-2" />
            <span className="text-slate-400 text-xs flex-grow">Search blueprints, Tally logs, chatbot webhook configs...</span>
            <kbd className="bg-slate-50 border border-slate-200 text-slate-400 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">⌘K</kbd>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#services" 
              className="btn py-3.5 px-8 text-sm md:text-base bg-gradient-to-r from-brandIndigo-500 via-brandIndigo-600 to-indigo-700 hover:from-brandIndigo-600 hover:to-indigo-800 text-white shadow-lg shadow-brandIndigo-500/10 hover:shadow-brandIndigo-500/35 hover:-translate-y-0.5 rounded-xl flex items-center justify-center font-bold"
            >
              <span>Explore Blueprints</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="#contact" 
              className="btn py-3.5 px-8 text-sm md:text-base bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>Book a Free Call</span>
            </a>
          </motion.div>

        </div>

        {/* 3D Canvas Mockup Segment */}
        <div className="w-full max-w-5xl h-[520px] relative mt-12 flex justify-center items-start">

          {/* 3D Perspective Card Wrapper */}
          <motion.div 
            style={{ 
              rotateX, 
              scale, 
              translateY,
              opacity,
              perspective: 1200 
            }}
            className="w-full max-w-4xl bg-white border border-slate-200/80 rounded-2xl shadow-[0_30px_100px_rgba(15,23,42,0.08)] overflow-hidden relative border-t border-slate-100"
          >
            {/* Mock Header (Simulated Web App top bar) */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50/50 border-b border-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
                </div>
                <div className="flex items-center gap-1 text-[8px] bg-slate-100 text-slate-400 font-bold px-2 py-0.5 rounded border border-slate-200/40">
                  <Activity className="w-2.5 h-2.5 text-brandIndigo-500 animate-pulse" />
                  <span>SLA: 99.98%</span>
                </div>
              </div>
              <span className="text-[10px] text-slate-400 font-bold tracking-[0.05em] uppercase bg-slate-100/50 px-3 py-0.5 rounded border border-slate-200/40">workspace.ottolabs.dev</span>
              <div className="w-12"></div>
            </div>

            {/* Dashboard Mockup Content Panel */}
            <div className="p-6 md:p-8 grid grid-cols-12 gap-6 bg-white min-h-[380px]">
              
              {/* Sidebar */}
              <div className="col-span-3 border-r border-slate-100 flex flex-col gap-5 pr-4 hidden md:flex">
                <div className="flex flex-col gap-1.5">
                  <div className="h-2 w-full bg-brandIndigo-500/10 border border-brandIndigo-500/20 rounded"></div>
                  <div className="h-1.5 w-2/3 bg-slate-100 rounded"></div>
                </div>
                <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
                  <div className="h-1.5 w-11/12 bg-slate-100 rounded"></div>
                  <div className="h-1.5 w-4/5 bg-slate-100 rounded"></div>
                  <div className="h-1.5 w-10/12 bg-slate-100 rounded"></div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
                
                {/* Stats Widgets */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Active Inquiries", val: "348", change: "+12.4%", color: "text-brandIndigo-500" },
                    { label: "AI Response Rate", val: "99.8%", change: "Optimal", color: "text-emerald-500" },
                    { label: "Inquiries Handled", val: "4,821", change: "+32.1%", color: "text-purple-500" }
                  ].map((stat, i) => (
                    <div key={i} className="border border-slate-100 p-4 rounded-xl bg-slate-50/20 shadow-sm text-left">
                      <span className="block text-[9px] text-textSecondary uppercase font-extrabold tracking-wider leading-none mb-2">{stat.label}</span>
                      <span className="text-xl md:text-2xl font-header font-black text-slate-800 leading-tight block mb-1">{stat.val}</span>
                      <span className={`text-[8px] font-bold ${stat.color}`}>{stat.change}</span>
                    </div>
                  ))}
                </div>

                {/* Workflow Simulated Chart */}
                <div className="border border-slate-100 p-5 rounded-xl bg-slate-50/10 flex-grow flex flex-col gap-3 min-h-[160px] text-left">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="text-[10px] text-slate-700 font-extrabold uppercase tracking-wide">Weekly Automation Performance</span>
                    <span className="text-[9px] text-slate-400 font-bold">Updated 5m ago</span>
                  </div>
                  <div className="flex-grow flex items-end justify-between gap-2.5 pt-4 h-[100px]">
                    {[45, 60, 52, 78, 65, 88, 95].map((h, i) => (
                      <div key={i} className="flex-grow flex flex-col items-center gap-1.5 h-full justify-end">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.05), ease: "easeOut" }}
                          className={`w-full rounded-md ${i === 6 ? 'bg-brandIndigo-500 shadow-lg shadow-brandIndigo-500/25' : 'bg-slate-100 hover:bg-slate-200'}`}
                        ></motion.div>
                        <span className="text-[8px] text-slate-400 font-semibold">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
