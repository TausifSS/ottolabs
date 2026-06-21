import React from 'react';
import { motion } from 'framer-motion';
import { Check, Code2 } from 'lucide-react';

const processSteps = [
  {
    num: "01",
    title: "Discuss",
    desc: "We discuss your requirements and project goals."
  },
  {
    num: "02",
    title: "Plan",
    desc: "We plan the structure, features and tech stack."
  },
  {
    num: "03",
    title: "Develop",
    desc: "We build your project with clean and scalable code."
  },
  {
    num: "04",
    title: "Test",
    desc: "We test everything to deliver a bug free product."
  },
  {
    num: "05",
    title: "Deliver",
    desc: "On-time delivery with documentation and support."
  }
];

export default function Process() {
  return (
    <section id="why-us" className="py-24 border-t border-slate-200/40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Solutions Checklist */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-brandIndigo-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3">
            Why Choose Otto Labs
          </span>
          <h2 className="font-header text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            We Don't Just Build Projects,<br />We Build Solutions.
          </h2>
          
          <div className="flex flex-col gap-4 mb-8 w-full max-w-md">
            {[
              "Clean and modern code",
              "On-time delivery",
              "100% client satisfaction",
              "Documentation and support",
              "Affordable pricing"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-textSecondary text-xs md:text-sm font-semibold justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-brandGreen-500/10 border border-brandGreen-500/20 text-brandGreen-500 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* HTML Code visual */}
          <div className="w-full max-w-sm bg-[#fafafa] border border-slate-200/60 p-5 rounded-2xl flex items-center gap-4 text-left shadow-sm shadow-slate-100">
            <div className="w-12 h-12 rounded-xl bg-brandIndigo-500/10 border border-brandIndigo-500/20 text-brandIndigo-500 flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-header text-xs text-slate-800 font-extrabold">&lt;code_architecture&gt;</span>
              <span className="text-[10px] text-textMuted leading-relaxed">Structured layout layers and optimized load configurations built to scale.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Process Timeline */}
        <div className="lg:col-span-7">
          <span className="text-brandIndigo-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3 text-center lg:text-left">
            Our Process
          </span>
          <h2 className="font-header text-2xl md:text-3xl font-extrabold text-slate-900 mb-10 text-center lg:text-left">
            Our Simple Process
          </h2>

          <div className="flex flex-col gap-6 relative">
            {/* Timeline connector bar */}
            <div className="absolute top-0 bottom-0 left-[22px] md:left-[26px] w-[1px] bg-slate-200"></div>

            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 md:gap-6 group relative z-10"
              >
                {/* Number Indicator */}
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-xs md:text-sm font-bold flex items-center justify-center shrink-0 group-hover:border-brandIndigo-500 group-hover:text-brandIndigo-600 transition-all duration-300 shadow-sm">
                  {step.num}
                </div>
                
                {/* Step details */}
                <div className="bg-white border border-slate-200/60 p-4 md:p-5 rounded-2xl flex-grow hover:border-slate-350 transition-colors duration-200 shadow-sm shadow-slate-100">
                  <h3 className="font-header text-sm md:text-base font-extrabold text-slate-900 mb-1 group-hover:text-brandIndigo-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-textSecondary text-[11px] md:text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
