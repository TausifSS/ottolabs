import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Quote } from 'lucide-react';

const pricingTiers = [
  {
    name: "Starter",
    price: "₹2,999",
    desc: "Perfect for basic projects",
    features: [
      "Basic features list",
      "Responsive design",
      "Documentation",
      "5 Days Delivery"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Pro",
    price: "₹4,999",
    desc: "Best for student projects",
    features: [
      "All Starter features",
      "Database integration",
      "Admin Panel",
      "7 Days Delivery"
    ],
    popular: true,
    cta: "Get Started"
  },
  {
    name: "Premium",
    price: "Custom",
    desc: "For advanced requirements",
    features: [
      "All Pro features",
      "AI Integration",
      "Deployment",
      "Priority Support"
    ],
    popular: false,
    cta: "Contact Us"
  }
];

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

export default function PricingTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="pricing" className="py-24 border-t border-slate-200/40 bg-[#fafafa] relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Pricing Tiers */}
        <div className="lg:col-span-8">
          <div className="mb-10 text-center lg:text-left">
            <span className="text-brandIndigo-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3">
              Pricing
            </span>
            <h2 className="font-header text-3xl font-extrabold text-slate-900 mb-3">
              Simple, Transparent Pricing
            </h2>
            <p className="text-textSecondary text-xs md:text-sm max-w-md leading-relaxed">
              Choose the package that matches your scope. Flat rates, no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`rounded-3xl p-6 flex flex-col justify-between border relative transition-all duration-300 shadow-md ${
                  tier.popular 
                    ? 'border-brandIndigo-600 bg-white shadow-brandIndigo-500/10 shadow-lg' 
                    : 'border-slate-200/60 bg-white shadow-slate-100/55 hover:border-slate-300'
                }`}
              >
                {tier.popular && (
                  <span className="absolute top-4 right-4 bg-brandIndigo-600 text-white font-bold text-[8px] tracking-wider uppercase px-2 py-0.5 rounded-md">
                    POPULAR
                  </span>
                )}

                <div>
                  <span className="block text-[11px] text-textSecondary font-semibold uppercase tracking-wider mb-1.5">
                    {tier.name}
                  </span>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-header font-extrabold text-slate-900">{tier.price}</span>
                  </div>
                  
                  <p className="text-textMuted text-[10px] mb-6">{tier.desc}</p>
                  
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-textSecondary">
                        <Check className="w-4 h-4 text-brandIndigo-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contact"
                  className={`btn w-full py-2.5 text-xs font-bold rounded-xl text-center transition-all ${
                    tier.popular
                      ? 'bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white shadow shadow-brandIndigo-500/10'
                      : 'bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Testimonials */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="mb-4 text-center lg:text-left">
            <span className="text-brandTeal-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3">
              Testimonials
            </span>
            <h2 className="font-header text-2xl font-extrabold text-slate-900">
              What Our Clients Say
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
                className="flex flex-col justify-between h-full gap-6"
              >
                <p className="text-textSecondary text-xs md:text-sm italic leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-brandIndigo-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800 text-xs">{testimonials[activeTestimonial].name}</span>
                    <span className="block text-[9px] text-textMuted">{testimonials[activeTestimonial].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-2 justify-center lg:justify-start">
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
