import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Quote, Sliders, Calendar, Zap, MessageSquare, Database } from 'lucide-react';

const testimonials = [
  {
    name: "Aditya Sharma",
    role: "B.Tech Student",
    quote: "OTTO Labs delivered an amazing project for our final year. The team is very professional and supportive.",
    avatar: "AS"
  },
  {
    name: "Rajesh Patel",
    role: "Wholesale Trader",
    quote: "Our wholesale catalog now auto-sends via WhatsApp. It has completely transformed how we respond to incoming inquiries.",
    avatar: "RP"
  }
];

export default function InteractivePricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [inquiries, setInquiries] = useState(4000);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Dynamic pricing calculation based on inquiries volume
  const getPlanDetails = () => {
    if (inquiries <= 2000) {
      const basePrice = 2999;
      const price = isAnnual ? Math.round(basePrice * 0.8) : basePrice;
      return {
        name: "Starter",
        price: `₹${price.toLocaleString('en-IN')}`,
        period: "/mo",
        desc: "Perfect for basic website qualifications & startups",
        features: [
          "Standard Landing Page",
          "Basic Lead Email Notification",
          "WhatsApp Direct Trigger Button",
          "5 Days Delivery Timeline"
        ]
      };
    } else if (inquiries <= 8000) {
      const basePrice = 4999;
      const price = isAnnual ? Math.round(basePrice * 0.8) : basePrice;
      return {
        name: "Pro",
        price: `₹${price.toLocaleString('en-IN')}`,
        period: "/mo",
        desc: "Best for growing businesses needing AI agents",
        features: [
          "All Starter features included",
          "AI Chatbot Inquiry Qualifier",
          "WhatsApp Auto-replies Integration",
          "Custom Database Admin Panel",
          "7 Days Delivery Timeline"
        ]
      };
    } else {
      return {
        name: "Premium Custom",
        price: "Custom Scope",
        period: "",
        desc: "For enterprises requiring ERP, Tally, & full CRM systems",
        features: [
          "All Pro features included",
          "Tally ERP 9 Sync Bridge Integration",
          "Unified Custom CRM Software",
          "Priority SLA Support Desk",
          "Dedicated Project Manager"
        ]
      };
    }
  };

  const activePlan = getPlanDetails();

  return (
    <section id="pricing" className="py-24 border-t border-slate-200/40 bg-[#fafafa] relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: INTERACTIVE PRICE CUSTOMIZER */}
        <div className="lg:col-span-8 flex flex-col gap-8 text-left">
          
          <div>
            <span className="text-brandIndigo-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3">
              Pricing Architect
            </span>
            <h2 className="font-header text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Scale Your Plan With Your Volume
            </h2>
            <p className="text-textSecondary text-xs md:text-sm max-w-md leading-relaxed font-medium">
              Toggle billing cycles and slide to match your monthly inquiry volume. Zero setup fees.
            </p>
          </div>

          {/* Controls Panel */}
          <div className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-2xl shadow-sm shadow-slate-100/50 flex flex-col gap-6">
            
            {/* Toggle Billing (Monthly vs Annual) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="block font-header text-sm font-extrabold text-slate-900 mb-1">Billing Interval</span>
                <span className="text-slate-500 text-[10px] font-semibold">Choose Annual Billing for 20% flat discount</span>
              </div>
              
              <div className="bg-slate-100/80 p-1 rounded-xl flex items-center border border-slate-200/40">
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${!isAnnual ? 'bg-white text-brandIndigo-650 shadow-sm border border-slate-200/40' : 'text-slate-500'}`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={`px-4 py-2 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all ${isAnnual ? 'bg-white text-brandIndigo-650 shadow-sm border border-slate-200/40' : 'text-slate-500'}`}
                >
                  <span>Annually</span>
                  <span className="bg-brandIndigo-100 text-brandIndigo-600 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md">Save 20%</span>
                </button>
              </div>
            </div>

            {/* Slider Config */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="block font-header text-sm font-extrabold text-slate-900 mb-1">Estimated Inquiries</span>
                  <span className="text-slate-500 text-[10px] font-semibold">Slide to set monthly chatbot and form lead flow</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-header font-black text-brandIndigo-600">{inquiries.toLocaleString('en-IN')}</span>
                  <span className="text-slate-450 text-[10px] font-bold"> / month</span>
                </div>
              </div>

              {/* HTML Slider input */}
              <div className="relative mt-2 flex items-center">
                <input 
                  type="range" 
                  min="1000" 
                  max="15000" 
                  step="500"
                  value={inquiries} 
                  onChange={(e) => setInquiries(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brandIndigo-600 focus:outline-none"
                />
              </div>

              {/* Slider scale markings */}
              <div className="flex justify-between text-[8px] text-slate-400 font-extrabold uppercase px-1">
                <span>1K Inquiries</span>
                <span>Starter Plan</span>
                <span>8K Inquiries</span>
                <span>Pro Plan</span>
                <span>15K+ Custom</span>
              </div>
            </div>

          </div>

          {/* Plan Display Card */}
          <div className="border border-brandIndigo-600 bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between gap-8 items-start md:items-center relative shadow-lg shadow-brandIndigo-500/5">
            <span className="absolute top-4 right-4 bg-brandIndigo-600 text-white font-bold text-[8px] tracking-wider uppercase px-2 py-0.5 rounded-md shadow-sm">
              OPTIMIZED PLAN
            </span>
            
            <div className="flex-grow">
              <span className="block text-[10px] text-brandIndigo-600 font-black uppercase tracking-widest mb-1">
                {activePlan.name} Plan
              </span>
              <h3 className="text-2xl font-header font-black text-slate-900 mb-2">
                {activePlan.price}
                <span className="text-slate-450 text-xs font-semibold">{activePlan.period}</span>
              </h3>
              <p className="text-slate-500 text-[11px] font-medium max-w-md leading-relaxed mb-4">{activePlan.desc}</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[11px] text-slate-700 font-semibold">
                    <Check className="w-3.5 h-3.5 text-brandIndigo-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-auto shrink-0 self-stretch md:self-auto flex items-end">
              <a 
                href="#contact"
                className="btn w-full md:w-auto py-3 px-8 text-xs font-bold rounded-xl text-center bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white shadow-md shadow-brandIndigo-500/10 hover:shadow-brandIndigo-500/25 transition-all"
              >
                Configure Scope
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: TESTIMONIALS SLIDER */}
        <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between lg:pt-16 self-stretch">
          
          <div className="flex flex-col gap-6">
            <div className="mb-2 text-center lg:text-left">
              <span className="text-brandTeal-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3">
                Testimonials
              </span>
              <h2 className="font-header text-2xl font-extrabold text-slate-900 tracking-tight">
                Client Encounters
              </h2>
            </div>

            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 relative shadow-lg min-h-[220px] flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brandIndigo-500/10 rotate-180" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between h-full gap-6 text-left"
                >
                  <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed font-medium">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-brandIndigo-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0">
                      {testimonials[activeTestimonial].avatar}
                    </div>
                    <div>
                      <span className="block font-bold text-slate-800 text-xs">{testimonials[activeTestimonial].name}</span>
                      <span className="block text-[9px] text-slate-450 font-bold">{testimonials[activeTestimonial].role}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 justify-center lg:justify-start mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'w-6 bg-brandIndigo-500' 
                    : 'w-1.5 bg-slate-200 hover:bg-slate-350'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
