import React from 'react';
import { Globe, Cpu, MessageSquare, Monitor, LayoutGrid, Award, Users, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive and fast websites that represent your brand and convert customers.",
    color: "bg-white border-slate-200/60 shadow-sm shadow-slate-100 hover:shadow-lg hover:border-indigo-350 text-indigo-650",
    href: "#contact"
  },
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "Smart AI solutions to automate repetitive tasks, saving time and increasing efficiency.",
    color: "bg-white border-slate-200/60 shadow-sm shadow-slate-100 hover:shadow-lg hover:border-purple-350 text-purple-650",
    href: "#contact"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    desc: "Automate chats, replies, notifications and engagement to never miss a customer.",
    color: "bg-white border-slate-200/60 shadow-sm shadow-slate-100 hover:shadow-lg hover:border-emerald-350 text-emerald-650",
    href: "#contact"
  },
  {
    icon: Monitor,
    title: "Business Software",
    desc: "Custom software for your business needs - from management to operations.",
    color: "bg-white border-slate-200/60 shadow-sm shadow-slate-100 hover:shadow-lg hover:border-blue-350 text-blue-650",
    href: "#contact"
  },
  {
    icon: LayoutGrid,
    title: "Business Management Tools",
    desc: "Solutions like Tally integration, inventory, HR, CRM and more to run your business smoothly.",
    color: "bg-white border-slate-200/60 shadow-sm shadow-slate-100 hover:shadow-lg hover:border-violet-350 text-violet-650",
    href: "#contact"
  }
];

const statsList = [
  { value: "100+", label: "Projects Delivered", icon: Award },
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "24/7", label: "Support", icon: Headphones },
  { value: "100%", label: "Client Satisfaction", icon: ShieldCheck }
];

export default function Services() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="services" className="py-24 border-t border-slate-200/40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-brandIndigo-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-header text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-textSecondary text-xs md:text-sm max-w-lg mx-auto leading-relaxed"
          >
            End-to-digital solutions to automate, simplify and scale your business.
          </motion.p>
        </div>

        {/* Services Grid (Centered flex for 5 items or grid) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center mb-20"
        >
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            // Center the 5th card on desktop grid (if 3 columns, the 4th and 5th cards sit on the bottom row)
            const isLastTwoOnDesktop = idx >= 3;
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between border transition-all duration-300 ${service.color}`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="font-header text-base md:text-lg font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-textSecondary text-xs md:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                
                <a 
                  href={service.href} 
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brandIndigo-600 hover:underline group shrink-0 mt-auto border-t border-slate-100 pt-4 w-full"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#fafafa] border border-slate-200/60 shadow-inner"
        >
          {statsList.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-3">
                <div className="w-9 h-9 rounded-lg bg-brandIndigo-500/10 border border-brandIndigo-500/20 text-brandIndigo-500 flex items-center justify-center mb-3">
                  <StatIcon className="w-4 h-4" />
                </div>
                <span className="font-header text-2xl md:text-3xl font-extrabold text-slate-900 leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs text-textSecondary font-semibold">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
