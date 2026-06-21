import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const storiesData = [
  {
    avatar: "GS",
    name: "Garg Steel Fabricators",
    role: "Industrial Workshop Director (Ludhiana)",
    quote: "Previously, when buyers requested our catalog, we had to wait until we returned to the office in the evening to email it. With Otto Labs' WhatsApp automation, clients receive our latest catalog and wholesale pricing in 2 seconds. Our sales conversions increased by 40%!"
  },
  {
    avatar: "KD",
    name: "Krishna Distributors",
    role: "FMCG Wholesale Director (Ahmedabad)",
    quote: "We receive over 100 wholesale inventory queries daily, which used to keep our phone lines busy. Otto Labs connected our stock database to WhatsApp. Now, stock queries and order placements run on auto-pilot. It has saved us hours of administrative work."
  },
  {
    avatar: "AM",
    name: "Apex Machine Tools",
    role: "CNC Workshop Founder (Pune)",
    quote: "Our website was 8 years old and completely broken on mobile devices. Otto Labs rebuilt it with a modern, fast interface and optimized our Google Business Profile. We now receive organic inquiries from manufacturing plants across Pune every week."
  }
];

export default function SuccessStories() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="success" className="py-24 border-t border-white/5 bg-brandDark">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-header text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Enterprise Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-textSecondary text-base md:text-lg max-w-2xl mx-auto"
          >
            Discover how industrial business owners optimized and scaled operations with Otto Labs.
          </motion.p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {storiesData.map((story, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                
                <p className="text-textSecondary italic text-xs md:text-sm leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brandTeal-500 to-brandIndigo-500 text-white font-extrabold flex items-center justify-center text-xs shrink-0 shadow">
                  {story.avatar}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold text-white text-xs md:text-sm truncate">{story.name}</span>
                  <span className="text-[10px] text-textMuted truncate">{story.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
