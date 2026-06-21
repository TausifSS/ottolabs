import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, MessageSquare, Database, ArrowRight, Shield, Activity, Zap, Check } from 'lucide-react';

export default function LinearGrid() {
  
  const features = [
    {
      icon: Globe,
      title: "Websites & Core Web Portals",
      desc: "Fast, custom react web applications tailored for wholesalers, factories, and distributors.",
      widget: (
        <div className="flex flex-col gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/60 shadow-inner">
          <div className="flex justify-between items-center text-[10px] border-b border-slate-200 pb-1.5 font-extrabold uppercase text-slate-500">
            <span>Audit Metrics</span>
            <span className="text-emerald-500 font-black">Passed</span>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { name: "Performance Speed", score: "99/100", w: "w-[99%]" },
              { name: "Core Web Vitals", score: "Optimal", w: "w-[95%]" },
              { name: "SEO Index Schema", score: "100/100", w: "w-[100%]" }
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between text-[9px] text-slate-700 font-bold">
                  <span>{metric.name}</span>
                  <span>{metric.score}</span>
                </div>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-brandIndigo-500 ${metric.w}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: Cpu,
      title: "Autonomous AI Systems",
      desc: "Trained chatbot intelligence answering customers, qualifying inquiries, and filing catalog requests.",
      widget: (
        <div className="flex flex-col gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-200/60 shadow-inner text-[9px]">
          <div className="flex justify-between items-center text-[10px] border-b border-slate-200 pb-1.5 font-extrabold uppercase text-slate-500">
            <span>Model Classifier</span>
            <span className="text-brandIndigo-500 font-black">Online</span>
          </div>
          <div className="flex flex-col gap-2 font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-bold">Inquiry</span>
              <span className="text-slate-400">→</span>
              <span className="px-2 py-0.5 bg-brandIndigo-500 text-white rounded font-bold">AI Agent</span>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <span className="text-slate-400">└─</span>
              <span className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-500 font-bold uppercase text-[7px]">Qualify</span>
              <span className="text-emerald-500 font-bold">Success (100% Match)</span>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <span className="text-slate-400">└─</span>
              <span className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-500 font-bold uppercase text-[7px]">Process</span>
              <span className="text-slate-600">Pushed to CRM</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automated Messaging",
      desc: "Automatic catalog sends, booking confirmations, and reminders operating 24/7.",
      widget: (
        <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-xl border border-slate-200/60 shadow-inner text-[9px] text-left">
          <div className="flex justify-between items-center text-[10px] border-b border-slate-200 pb-1.5 font-extrabold uppercase text-slate-500">
            <span>Queue Dispatch</span>
            <span className="text-brandTeal-500 font-black">Active</span>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { msg: "Order status alert sent to Rajesh.", status: "Delivered", time: "Just now" },
              { msg: "PDF Catalog dispatched to Aditya.", status: "Read", time: "2m ago" }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-start border-b border-slate-100 pb-1">
                <div>
                  <span className="block font-bold text-slate-700">{item.msg}</span>
                  <span className="text-[7px] text-slate-450">{item.time}</span>
                </div>
                <span className="bg-slate-200/50 border border-slate-250/50 text-[7px] font-bold text-slate-600 px-1 rounded">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: Database,
      title: "CRM Dashboards & Tally ERP Sync",
      desc: "Custom database integration that writes sales vouchers, updates inventory, and syncs ledgers.",
      widget: (
        <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-xl border border-slate-200/60 shadow-inner text-[9px] text-left">
          <div className="flex justify-between items-center text-[10px] border-b border-slate-200 pb-1.5 font-extrabold uppercase text-slate-500">
            <span>Tally ERP Voucher</span>
            <span className="text-purple-600 font-black">Synchronized</span>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { order: "INV-2026-98", amt: "₹1,48,500", st: "Synced" },
              { order: "INV-2026-99", amt: "₹45,200", st: "Synced" }
            ].map((sync, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white border border-slate-200/60 p-2 rounded-lg shadow-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-bold text-slate-800">{sync.order}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-700">{sync.amt}</span>
                  <span className="text-[8px] bg-purple-50 text-purple-600 border border-purple-100 px-1.5 py-0.5 rounded font-black uppercase">{sync.st}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-24 border-t border-slate-200/40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brandIndigo-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3">
            Engineered Capabilities
          </span>
          <h2 className="font-header text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Systems Built for Scale
          </h2>
          <p className="text-textSecondary text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            We architect end-to-end digital pipelines that qualify, capture, automate, and process your business workflows.
          </p>
        </div>

        {/* Linear 2x2 Grid Frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm shadow-slate-100">
          
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            
            // Continuous border separations
            const borderClasses = `
              p-8 md:p-10 flex flex-col justify-between gap-8 transition-colors duration-300 hover:bg-slate-50/30 group
              ${idx === 0 ? "border-b md:border-r border-slate-200/60" : ""}
              ${idx === 1 ? "border-b border-slate-200/60" : ""}
              ${idx === 2 ? "border-b md:border-b-0 md:border-r border-slate-200/60" : ""}
              ${idx === 3 ? "" : ""}
            `;

            return (
              <div key={idx} className={borderClasses}>
                
                {/* Top: Icon + Info */}
                <div className="flex flex-col gap-5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 shadow-sm flex items-center justify-center text-slate-650 group-hover:border-slate-350 transition-colors shrink-0">
                    <Icon className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-header text-lg font-bold text-slate-900 mb-2.5">
                      {feat.title}
                    </h3>
                    <p className="text-textSecondary text-xs md:text-sm leading-relaxed max-w-md font-medium">
                      {feat.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom: Custom Widget visual */}
                <div className="w-full">
                  {feat.widget}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
