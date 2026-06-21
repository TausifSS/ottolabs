import React from 'react';
import { ArrowRight, Phone, CheckCircle, ShieldCheck, Zap, Globe, Cpu, MessageSquare, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  
  // Spring animations for the "boom" pop-in effect
  const springTransition = {
    type: "spring",
    stiffness: 110,
    damping: 12
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Card items configurations
  const floatingCards = [
    {
      name: "WEBSITES",
      icon: Globe,
      color: "border-indigo-100 text-indigo-600 bg-white/90 shadow-md shadow-indigo-100/30",
      pos: "top-[2%] left-[2%] md:top-[10%] md:left-[5%]",
      delay: 0.4
    },
    {
      name: "AI AUTOMATION",
      icon: Cpu,
      color: "border-sky-100 text-sky-600 bg-white/90 shadow-md shadow-sky-100/30",
      pos: "top-[2%] right-[2%] md:top-[10%] md:right-[5%]",
      delay: 0.55
    },
    {
      name: "WHATSAPP AUTOMATION",
      icon: MessageSquare,
      color: "border-emerald-100 text-emerald-600 bg-white/90 shadow-md shadow-emerald-100/30",
      pos: "bottom-[2%] left-[2%] md:bottom-[10%] md:left-[5%]",
      delay: 0.7
    },
    {
      name: "BUSINESS SOFTWARE",
      icon: LayoutGrid,
      color: "border-purple-100 text-purple-600 bg-white/90 shadow-md shadow-purple-100/30",
      pos: "bottom-[2%] right-[2%] md:bottom-[10%] md:right-[5%]",
      delay: 0.85
    }
  ];

  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-[#fafafa]">
      
      {/* Background glow highlights */}
      <div className="absolute top-[-10%] left-[25%] md:left-[35%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-gradient-to-tr from-brandIndigo-500/5 to-purple-500/5 filter blur-[100px] pointer-events-none z-0"></div>
      {/* Subtle layout grid mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Copy */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div 
            variants={textVariants}
            className="inline-flex items-center gap-1.5 text-[#8b5cf6] font-semibold text-xs tracking-[0.15em] uppercase mb-4"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Automate. Innovate. Elevate.</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={textVariants}
            className="font-header text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900"
          >
            We Build Websites & Automations That <span className="gradient-text font-black">Grow Your Business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={textVariants}
            className="text-textSecondary text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Otto Labs helps businesses go digital and scale smartly with powerful websites, AI automations, WhatsApp automations, and custom business software.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
          >
            <a 
              href="#services" 
              className="btn py-3.5 px-8 text-sm md:text-base bg-gradient-to-r from-brandIndigo-500 via-brandIndigo-600 to-indigo-700 hover:from-brandIndigo-600 hover:to-indigo-800 text-white shadow-lg shadow-brandIndigo-500/10 hover:shadow-brandIndigo-500/35 hover:-translate-y-0.5 rounded-xl flex items-center justify-center font-bold"
            >
              <span>Explore Services</span>
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

          {/* Bullet highlights */}
          <motion.div 
            variants={buttonVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 border-t border-slate-200/60 pt-6 w-full max-w-xl"
          >
            {[
              { label: 'Innovative Solutions', icon: CheckCircle },
              { label: 'Reliable Support', icon: Zap },
              { label: 'Results Driven', icon: ShieldCheck }
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-textSecondary text-xs font-semibold">
                  <Icon className="w-4 h-4 text-brandIndigo-500 shrink-0" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Side Parallax Floating Panel Hub */}
        <div className="lg:col-span-5 flex justify-center items-center h-[420px] md:h-[480px] w-full relative z-10 select-none">
          
          {/* 1. Center glowing portal ring */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.2 }}
            className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-slate-200/80 flex items-center justify-center shadow-lg bg-white"
          >
            {/* Pulsing neon layers */}
            <div className="absolute inset-[8px] rounded-full border border-brandIndigo-500/5 animate-ping opacity-20 duration-1000"></div>
            <div className="absolute inset-[16px] rounded-full bg-gradient-to-tr from-brandIndigo-500/5 to-purple-500/5 filter blur-sm"></div>
 
            {/* Inner Brand Logo */}
            <div className="text-center z-10 flex flex-col items-center">
              <span className="font-header text-2xl md:text-3xl font-extrabold text-slate-900 tracking-widest leading-none">OTTO</span>
              <span className="text-[10px] md:text-[11px] text-brandIndigo-500 font-bold tracking-[0.3em] mt-1.5 uppercase">LABS</span>
            </div>
          </motion.div>

          {/* 2. Floating Service Cards */}
          {floatingCards.map((card, i) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.name}
                custom={i}
                initial={{ scale: 0.3, opacity: 0, y: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: card.delay, duration: 0.8, ...springTransition }}
                whileHover={{ scale: 1.05, y: -6, transition: { duration: 0.2 } }}
                className={`absolute p-3.5 md:p-4 rounded-xl md:rounded-2xl border flex flex-col items-center justify-center gap-2 text-center w-[125px] md:w-[150px] ${card.pos} ${card.color}`}
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner">
                  <CardIcon className="w-4 h-4 animate-pulse duration-2000" />
                </div>
                <span className="font-header text-[9px] md:text-[10px] tracking-widest font-black leading-tight text-slate-800 uppercase">
                  {card.name}
                </span>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
