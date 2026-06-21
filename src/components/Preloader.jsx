import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress with varying step intervals
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        // Random progress increment for a realistic "loading" speed feel
        const step = Math.random() > 0.4 ? 8 : 4;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const allLogs = [
    { threshold: 0, tag: "sys", text: "booting loader core components..." },
    { threshold: 12, tag: "dep", text: "installing @ottolabs/core (v2.0.4)..." },
    { threshold: 25, tag: "dep", text: "installing @whatsapp/auto-replies..." },
    { threshold: 38, tag: "dep", text: "installing @tally/ledger-bridge..." },
    { threshold: 50, tag: "build", text: "bundling assets with postcss plugin..." },
    { threshold: 65, tag: "build", text: "compiling react client environments..." },
    { threshold: 78, tag: "audit", text: "running schema and lighthouse audits..." },
    { threshold: 88, tag: "success", text: "1977 modules compiled successfully." },
    { threshold: 95, tag: "success", text: "development server active on port 5174." }
  ];

  const currentLogs = allLogs.filter(log => progress >= log.threshold);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100vh', 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 bg-[#07090e] z-[9999] flex flex-col items-center justify-center p-6 select-none font-mono"
    >
      {/* Background neon accent */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-brandIndigo-500/10 filter blur-[90px] pointer-events-none"></div>

      {/* Terminal Board */}
      <div className="w-full max-w-lg bg-black/50 border border-slate-800/80 rounded-xl p-5 shadow-2xl flex flex-col gap-5 text-left relative overflow-hidden backdrop-blur-md">
        
        {/* Mock Top bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
          </div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">installing-otto-labs</span>
          <div className="w-12"></div>
        </div>

        {/* Logs Print Screen */}
        <div className="flex flex-col gap-2 min-h-[140px] text-[10px] md:text-xs">
          {currentLogs.map((log, idx) => {
            let tagColor = "text-blue-500";
            if (log.tag === "dep") tagColor = "text-indigo-400";
            if (log.tag === "build") tagColor = "text-yellow-500";
            if (log.tag === "audit") tagColor = "text-purple-400";
            if (log.tag === "success") tagColor = "text-emerald-500";

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-2"
              >
                <span className={`font-black uppercase shrink-0 ${tagColor}`}>[{log.tag}]</span>
                <span className="text-slate-350">{log.text}</span>
              </motion.div>
            );
          })}
          
          {/* Active Blinking Cursor */}
          <div className="flex items-center gap-1 mt-1">
            <span className="text-brandIndigo-500 font-black">&gt;</span>
            <span className="w-1.5 h-3.5 bg-brandIndigo-500 animate-[blink_1s_infinite]"></span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="flex flex-col gap-2 border-t border-slate-800/80 pt-4">
          <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            <span>Install Progress</span>
            <span className="text-slate-400 font-extrabold">{progress}%</span>
          </div>
          
          <div className="w-full h-1.5 bg-slate-900 border border-slate-800/40 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-brandIndigo-500 via-brandIndigo-600 to-indigo-700 shadow-md shadow-brandIndigo-500/20"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>

    </motion.div>
  );
}
