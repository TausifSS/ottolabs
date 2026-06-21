import React, { useState } from 'react';
import { Send, CheckCheck, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadCaptureForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('website');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleReset = () => {
    setIsSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate Indian WhatsApp Number
    const phoneVal = phone.trim();
    if (!/^[6789]\d{9}$/.test(phoneVal)) {
      alert("Please enter a valid 10-digit WhatsApp number starting with 6, 7, 8, or 9 (e.g. 9876543210).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_0cqtgyb',
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
          template_params: {
            name: fullName,
            time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
            message: `• Category: ${category.toUpperCase()}\n• WhatsApp: +91 ${phoneVal}\n• Email: ${email}\n\n• Requirements:\n${message}`,
          },
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Clear forms
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const errText = await response.text();
        console.error("EmailJS Send Failure:", errText);
        alert("Failed to submit form. Please verify your EmailJS keys in the .env file.");
      }
    } catch (error) {
      console.error("EmailJS Network Error:", error);
      alert("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-24 border-t border-slate-200/40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side Copy */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-brandIndigo-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="font-header text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Let's Discuss Your Next Big Idea.
          </h2>
          <p className="text-textSecondary text-xs md:text-sm leading-relaxed mb-8 max-w-sm">
            Fill out the form to request a strategy call. Our engineering desk will review your scope requirements and set up a workspace blueprint in 24 hours.
          </p>

          <div className="flex flex-col gap-4 text-xs text-textSecondary font-semibold w-full max-w-sm">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Mail className="w-4 h-4 text-brandIndigo-500 shrink-0" />
              <span>hello@ottolabs.dev</span>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Phone className="w-4 h-4 text-brandIndigo-500 shrink-0" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <MapPin className="w-4 h-4 text-brandIndigo-500 shrink-0" />
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div className="lg:col-span-7 relative w-full max-w-xl mx-auto">
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden min-h-[360px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fullName" className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        required 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Rajesh Sharma"
                        className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-brandIndigo-500 outline-none transition-all shadow-inner shadow-slate-50"
                      />
                    </div>
 
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rajesh@sharmasteel.com"
                        className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-brandIndigo-500 outline-none transition-all shadow-inner shadow-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider">WhatsApp Number *</label>
                      <div className="flex items-center bg-white border border-slate-200 rounded-xl overflow-hidden focus-within:border-brandIndigo-500 transition-all shadow-inner shadow-slate-50">
                        <span className="px-3 text-textSecondary text-xs font-semibold border-r border-slate-100 bg-slate-50/50">+91</span>
                        <input 
                          type="tel" 
                          id="phone" 
                          required 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          pattern="[6789][0-9]{9}"
                          placeholder="9876543210"
                          className="w-full bg-transparent border-none outline-none py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400"
                        />
                      </div>
                    </div>
 
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="category" className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider">Project Category</label>
                      <select 
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:border-brandIndigo-500 outline-none transition-all shadow-inner shadow-slate-50"
                      >
                        <option value="website">Website Development</option>
                        <option value="ai">AI Automation Integration</option>
                        <option value="whatsapp">WhatsApp Auto-Replies</option>
                        <option value="software">Custom Business Software</option>
                        <option value="other">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider">Project Details</label>
                    <textarea 
                      id="message" 
                      rows="3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your requirements..."
                      className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-brandIndigo-500 outline-none transition-all resize-none shadow-inner shadow-slate-50"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn w-full py-3.5 text-xs font-bold bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white rounded-xl shadow-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex gap-1 items-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-4"
                >
                  <div className="w-14 h-14 rounded-full bg-brandGreen-500/10 border border-brandGreen-500/20 text-brandGreen-500 flex items-center justify-center text-2xl mb-5 shadow-lg shadow-brandGreen-500/10">
                    <CheckCheck className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-header text-xl font-bold text-slate-900 mb-2">
                    Message Dispatched!
                  </h3>
                  
                  <p className="text-textSecondary text-xs leading-relaxed max-w-xs mb-6">
                    Our sales desk has logged your ticket. An automation specialist will contact you on your WhatsApp number in 15 minutes.
                  </p>
                  
                  <button 
                    type="button" 
                    onClick={handleReset}
                    className="btn py-2 px-6 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
