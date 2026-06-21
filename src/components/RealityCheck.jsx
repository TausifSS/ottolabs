import React from 'react';
import { TrendingDown, Zap, XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RealityCheck() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="why-us" className="py-24 border-t border-white/5 bg-brandDark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-header text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            The Operational Friction
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-textSecondary text-base md:text-lg max-w-2xl mx-auto"
          >
            Your buyers have moved online. Is your sales engine keeping pace?
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Traditional Way Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/10 transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-red-500/5 filter blur-3xl rounded-full"></div>
            
            <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-red-500/5">
              <TrendingDown className="w-6 h-6" />
            </div>
            
            <h3 className="font-header text-xl md:text-2xl font-bold text-white mb-6">
              Traditional Manual Operations
            </h3>
            
            <ul className="flex flex-col gap-6">
              {[
                {
                  title: 'No Digital Footprint',
                  desc: 'Potential buyers fail to find or trust your brand, shifting orders to modern competitors.'
                },
                {
                  title: 'Slow Response Latency',
                  desc: 'Replying hours after a WhatsApp query results in high customer churn and lost deals.'
                },
                {
                  title: 'Manual Lead Tracking',
                  desc: 'Relying on paper diaries or disorganized spreadsheets leads to forgotten customer follow-ups.'
                },
                {
                  title: 'Administrative Overload',
                  desc: 'Internal staff waste hours repeating stock status, catalogs, and billing info over calls.'
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base mb-1">{item.title}</h4>
                    <p className="text-textSecondary text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Otto Way Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/10 transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-brandGreen-500/5 filter blur-3xl rounded-full"></div>
            
            <div className="w-14 h-14 rounded-xl bg-brandGreen-500/10 border border-brandGreen-500/20 text-brandGreen-500 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-brandGreen-500/5">
              <Zap className="w-6 h-6" />
            </div>
            
            <h3 className="font-header text-xl md:text-2xl font-bold text-white mb-6">
              Automated Operations (Otto Labs)
            </h3>
            
            <ul className="flex flex-col gap-6">
              {[
                {
                  title: 'High-Performance Website',
                  desc: 'Premium, mobile-first website optimized for SEO and localized search discovery.'
                },
                {
                  title: 'Instant WhatsApp Flow',
                  desc: 'Automated conversational replies address customer requests within 2 seconds.'
                },
                {
                  title: 'AI Lead Qualification',
                  desc: 'Intelligent chatbots automatically capture name, location, and requirement volume.'
                },
                {
                  title: 'Operations CRM & Software',
                  desc: 'Lightweight billing, inventory management, and production trackers on your phone.'
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-brandGreen-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base mb-1">{item.title}</h4>
                    <p className="text-textSecondary text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
