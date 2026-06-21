import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
        
        {/* Brand Info */}
        <div className="lg:col-span-4 flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
          <a href="#" className="logo font-header text-xl md:text-2xl font-extrabold text-slate-900 uppercase tracking-wide">
            otto<span className="text-brandIndigo-500">labs</span>
          </a>
          <p className="text-textSecondary text-xs leading-relaxed max-w-xs">
            We build modern, high performance and reliable digital solutions.
          </p>
        </div>

        {/* Column 1 - Quick Links */}
        <div className="lg:col-span-2 flex flex-col gap-4 items-center sm:items-start">
          <h4 className="font-header text-xs font-bold tracking-wider text-slate-900 uppercase">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5 items-center sm:items-start text-xs font-semibold">
            {[
              { name: 'Home', href: '#' },
              { name: 'Services', href: '#services' },
              { name: 'Portfolio', href: '#portfolio' },
              { name: 'Pricing', href: '#pricing' },
              { name: 'Contact', href: '#contact' }
            ].map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-textSecondary hover:text-brandIndigo-600 transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 - Services */}
        <div className="lg:col-span-3 flex flex-col gap-4 items-center sm:items-start">
          <h4 className="font-header text-xs font-bold tracking-wider text-slate-900 uppercase">
            Services
          </h4>
          <ul className="flex flex-col gap-2.5 items-center sm:items-start text-xs font-semibold">
            {[
              'Student Projects',
              'Web Development',
              'AI Solutions',
              'Dashboard Dev',
              'Deployment'
            ].map((link, idx) => (
              <li key={idx}>
                <a href="#services" className="text-textSecondary hover:text-brandIndigo-600 transition-colors duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="lg:col-span-3 flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
          <h4 className="font-header text-xs font-bold tracking-wider text-slate-900 uppercase">
            Contact Info
          </h4>
          <ul className="flex flex-col gap-3 items-center sm:items-start text-xs text-textSecondary font-semibold">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brandIndigo-500 shrink-0" />
              <span>ottostudiosltd@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brandIndigo-500 shrink-0" />
              <span>+91 70628 73490</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brandIndigo-500 shrink-0" />
              <span>India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright bar */}
      <div className="border-t border-slate-200/60 py-8 bg-slate-100/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[10px] md:text-xs text-textMuted font-medium">
            &copy; {new Date().getFullYear()} OTTO Labs. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="p-1.5 rounded-lg bg-white border border-slate-200 text-textSecondary hover:text-brandIndigo-600 transition-colors shadow-sm" aria-label="Github">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="p-1.5 rounded-lg bg-white border border-slate-200 text-textSecondary hover:text-brandIndigo-600 transition-colors shadow-sm" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-1.5 rounded-lg bg-white border border-slate-200 text-textSecondary hover:text-brandIndigo-600 transition-colors shadow-sm" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-1.5 rounded-lg bg-white border border-slate-200 text-textSecondary hover:text-brandIndigo-600 transition-colors shadow-sm" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
