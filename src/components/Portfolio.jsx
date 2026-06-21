import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { 
  StudentManagementDemo, ECommerceDemo, AIChatbotDemo, 
  JaneDoePortfolioDemo, AttendanceDemo 
} from './PortfolioDemos';

const projects = [
  {
    title: "Student Management System",
    category: "Web Application",
    tags: ["React", "Firebase"],
    mockColor: "from-indigo-50 to-slate-50",
    mockType: "dashboard"
  },
  {
    title: "E-Commerce Store",
    category: "Full Stack Website",
    tags: ["Next.js", "Node.js", "MongoDB"],
    mockColor: "from-blue-50 to-slate-50",
    mockType: "store"
  },
  {
    title: "AI Chatbot",
    category: "AI Integration",
    tags: ["OpenAI", "React"],
    mockColor: "from-purple-50 to-slate-50",
    mockType: "chatbot"
  },
  {
    title: "Portfolio Website",
    category: "Personal Portfolio",
    tags: ["Next.js", "Tailwind CSS"],
    mockColor: "from-violet-50 to-slate-50",
    mockType: "portfolio"
  },
  {
    title: "Attendance System",
    category: "Web Application",
    tags: ["React", "Firebase"],
    mockColor: "from-sky-50 to-slate-50",
    mockType: "attendance"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when a demo is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="portfolio" className="py-24 border-t border-slate-200/40 bg-[#fafafa] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brandIndigo-500 font-header text-xs tracking-[0.2em] font-semibold uppercase block mb-3">
            Our Work
          </span>
          <h2 className="font-header text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-textSecondary text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Click on any card below to launch and test a fully functional live website/app demo directly within our workspace.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-2xl border border-slate-200/60 group transition-all duration-300 shadow-md shadow-slate-100/50 cursor-pointer"
            >
              {/* HTML Simulated Dashboard Preview Mockup */}
              <div className={`h-[180px] bg-gradient-to-b ${project.mockColor} border-b border-slate-200/50 p-4 overflow-hidden relative flex flex-col justify-between`}>
                
                {/* Simulated Header */}
                <div className="flex justify-between items-center bg-slate-100/50 border border-slate-200/50 py-1 px-3 rounded-md mb-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-[8px] text-textMuted uppercase font-bold tracking-[0.1em]">localhost:3000</span>
                  <div className="w-3 h-3"></div>
                </div>
 
                {/* Simulated Content based on MockType */}
                <div className="flex-grow flex gap-2 overflow-hidden mt-1">
                  {project.mockType === 'dashboard' && (
                    <div className="w-full flex gap-2 h-full text-[7px] text-slate-700 font-semibold text-left">
                      {/* Sidebar */}
                      <div className="w-[45px] bg-slate-900 text-white rounded p-1.5 flex flex-col gap-1.5 shrink-0 select-none">
                        <span className="text-[5px] font-black text-slate-450 block uppercase leading-none mb-1">Menu</span>
                        <div className="h-2 w-full bg-brandIndigo-500/20 border border-brandIndigo-500/30 rounded flex items-center px-1 text-[5px] font-extrabold text-indigo-200">Dashboard</div>
                        <div className="h-2 w-full rounded flex items-center px-1 text-[5px] text-slate-400">Students</div>
                        <div className="h-2 w-full rounded flex items-center px-1 text-[5px] text-slate-400">Finances</div>
                      </div>
                      {/* Main content area */}
                      <div className="flex-grow flex flex-col gap-2">
                        {/* Top Row Widgets */}
                        <div className="grid grid-cols-3 gap-1.5">
                          <div className="bg-white border border-slate-200/80 rounded p-1 shadow-sm">
                            <span className="block text-[4px] text-slate-400 uppercase leading-none mb-0.5">Students</span>
                            <span className="font-extrabold text-[8px] text-slate-900 block leading-none">1,420</span>
                          </div>
                          <div className="bg-white border border-slate-200/80 rounded p-1 shadow-sm">
                            <span className="block text-[4px] text-slate-400 uppercase leading-none mb-0.5">Attendance</span>
                            <span className="font-extrabold text-[8px] text-slate-900 block leading-none">94.2%</span>
                          </div>
                          <div className="bg-white border border-slate-200/80 rounded p-1 shadow-sm">
                            <span className="block text-[4px] text-slate-400 uppercase leading-none mb-0.5">Fees Paid</span>
                            <span className="font-extrabold text-[8px] text-emerald-600 block leading-none">92%</span>
                          </div>
                        </div>
                        {/* Bottom Table */}
                        <div className="border border-slate-200/60 rounded p-1.5 bg-white flex flex-col gap-1 shadow-sm flex-grow">
                          <span className="block text-[5px] text-slate-450 uppercase font-black tracking-wide leading-none border-b border-slate-100 pb-1">Top Performing Students</span>
                          <div className="flex justify-between items-center text-[5.5px] text-slate-700 py-0.5">
                            <span>Aarav Sharma</span>
                            <span className="text-emerald-500 font-bold">Grade A+</span>
                          </div>
                          <div className="flex justify-between items-center text-[5.5px] text-slate-700 py-0.5">
                            <span>Priya Patel</span>
                            <span className="text-brandIndigo-500 font-bold">Grade A</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
 
                  {project.mockType === 'store' && (
                    <div className="w-full flex flex-col gap-2 text-slate-750 text-[6.5px] text-left">
                      {/* Search Bar & Banner */}
                      <div className="flex justify-between items-center border border-slate-200/60 bg-white p-1 rounded shadow-sm">
                        <span className="font-extrabold text-[7px] text-slate-800">Distributor Catalog Shop</span>
                        <span className="text-[5px] bg-indigo-50 border border-indigo-200 px-1 rounded text-brandIndigo-600 font-bold">Tally Linked</span>
                      </div>
                      {/* Catalog Grid */}
                      <div className="grid grid-cols-3 gap-2 flex-grow">
                        {[
                          { name: "Reinforced Rods", price: "₹56,200/Ton" },
                          { name: "Cement Bags Fe50", price: "₹380/Bag" },
                          { name: "Gravel Mesh Panel", price: "₹1,200/Mesh" }
                        ].map((prod, idx) => (
                          <div key={idx} className="bg-white border border-slate-200/60 rounded-lg p-1.5 flex flex-col justify-between shadow-sm">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-extrabold text-slate-850 text-[5.5px] block truncate leading-tight">{prod.name}</span>
                              <span className="text-brandIndigo-600 font-black block leading-none mt-0.5">{prod.price}</span>
                            </div>
                            <div className="h-3.5 w-full bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white rounded text-[4.5px] flex items-center justify-center font-black uppercase mt-1 cursor-pointer shadow-sm select-none">
                              Add to Cart
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
 
                  {project.mockType === 'chatbot' && (
                    <div className="w-full flex flex-col gap-2 max-w-[90%] mx-auto text-[7px] text-left h-full justify-between pb-1.5">
                      {/* Header status */}
                      <div className="flex justify-between items-center border border-slate-200/60 bg-white py-1 px-2 rounded shadow-sm">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span className="font-extrabold text-slate-800 text-[6px]">Otto AI Support Agent</span>
                        </div>
                        <span className="text-[5px] text-slate-400 uppercase font-black">99.8% SLA</span>
                      </div>
                      {/* Dialog Stream */}
                      <div className="flex flex-col gap-1.5 flex-grow justify-end pb-1">
                        <div className="bg-[#fafafa] border border-slate-200/60 p-2 rounded-xl rounded-tl-none self-start text-[6px] max-w-[85%] text-slate-700 font-semibold shadow-sm leading-tight">
                          Hi!Tuesday Fe500 stock rod delivery is locked.Pushed Tally ledger.
                        </div>
                        <div className="bg-brandIndigo-600 text-white p-2 rounded-xl rounded-tr-none self-end text-[6px] max-w-[85%] font-semibold shadow-sm leading-tight">
                          Perfect, thank you!
                        </div>
                      </div>
                      {/* Bottom entry bar */}
                      <div className="border border-slate-200/60 bg-slate-50 p-1 rounded-lg text-slate-400 text-[5px] flex justify-between items-center select-none shadow-inner">
                        <span>Write a reply...</span>
                        <span className="bg-brandIndigo-600 text-white text-[4px] font-black uppercase px-1 rounded cursor-pointer">Send</span>
                      </div>
                    </div>
                  )}
 
                  {project.mockType === 'portfolio' && (
                    <div className="w-full flex flex-col gap-2 text-slate-750 text-[6.5px] text-left">
                      {/* Header navbar */}
                      <div className="flex justify-between items-center border border-slate-200/60 bg-white p-1 rounded shadow-sm">
                        <span className="font-extrabold text-[7px] text-slate-800 tracking-wider">JANE DOE | ARCHITECT</span>
                        <div className="flex gap-1.5 text-[5px] font-bold text-slate-500">
                          <span>Projects</span>
                          <span>Contact</span>
                        </div>
                      </div>
                      {/* Hero Banner inside browser card */}
                      <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 flex flex-col items-center justify-center text-center shadow-inner flex-grow">
                        <div className="w-7 h-7 rounded-full border border-slate-250 bg-white shadow-sm flex items-center justify-center mb-1 text-[7px] font-black text-slate-700">JD</div>
                        <span className="block font-black text-slate-900 text-[7.5px] leading-tight">Designing Spaces. Building Futures.</span>
                        <span className="block text-[5.5px] text-slate-400 mt-0.5 max-w-[130px] leading-none">Blueprint layouts and custom structural designs.</span>
                      </div>
                    </div>
                  )}
 
                  {project.mockType === 'attendance' && (
                    <div className="w-full flex flex-col gap-2 text-[6px] text-left">
                      {/* Header dashboard stats */}
                      <div className="flex justify-between items-center border border-slate-200/60 bg-white py-1 px-2 rounded shadow-sm">
                        <span className="font-extrabold text-slate-800 text-[6.5px]">Supervisor Shift Board</span>
                        <span className="text-[5.5px] bg-slate-50 border border-slate-200 px-1 rounded text-slate-500 font-bold">18/20 Present</span>
                      </div>
                      {/* Table view */}
                      <div className="border border-slate-200/60 rounded p-1.5 bg-white flex flex-col gap-1 shadow-sm flex-grow">
                        <div className="flex justify-between items-center text-[5px] text-slate-400 font-black uppercase tracking-wider border-b border-slate-105 pb-0.5">
                          <span>Employee Name</span>
                          <span>Check In</span>
                          <span>Status</span>
                        </div>
                        {[
                          { name: "Rajesh Patel", time: "09:00 AM", status: "Present", color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
                          { name: "Amit Sharma", time: "09:12 AM", status: "Late", color: "text-yellow-600 bg-yellow-50 border-yellow-100" },
                          { name: "Sanjay Singh", time: "---", status: "Absent", color: "text-red-500 bg-red-50 border-red-100" }
                        ].map((row, rIdx) => (
                          <div key={rIdx} className="flex justify-between items-center text-[5.5px] text-slate-700 py-0.5 border-b border-slate-50 last:border-0 font-medium leading-none">
                            <span className="font-bold">{row.name}</span>
                            <span>{row.time}</span>
                            <span className={`px-1 rounded-sm border text-[4.5px] font-black uppercase ${row.color}`}>{row.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
 
                {/* Diagonal Arrow Icon that appears on hover */}
                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <div className="w-10 h-10 rounded-full bg-brandIndigo-600 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6">
                <span className="block text-[10px] text-brandTeal-600 font-bold uppercase tracking-wider mb-1.5">
                  {project.category}
                </span>
                
                <h3 className="font-header text-base md:text-lg font-extrabold text-slate-900 mb-4 group-hover:text-brandIndigo-600 transition-colors">
                  {project.title}
                </h3>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[9px] font-bold text-slate-650 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
 
        {/* View All Button */}
        <div className="text-center">
          <a 
            href="#contact" 
            className="btn py-3 px-8 text-xs md:text-sm bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 rounded-xl font-bold shadow-sm transition-all duration-200"
          >
            View All Projects
          </a>
        </div>

      </div>

      {/* IMMERSIVE BROWSER MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/40 backdrop-blur-md">
            {/* Modal backdrop tap-to-dismiss */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 cursor-zoom-out"
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-5xl h-[85vh] bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden relative z-10"
            >
              {/* Browser Header Bar */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between shrink-0">
                {/* Simulated Window Control Actions */}
                <div className="flex gap-1.5 items-center w-24">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors flex items-center justify-center group cursor-pointer"
                    title="Close"
                  >
                    <span className="text-[7px] text-red-800 font-bold opacity-0 group-hover:opacity-100 leading-none">×</span>
                  </button>
                  <span className="w-3 h-3 rounded-full bg-yellow-300"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                {/* Simulated address bar */}
                <div className="flex items-center gap-1.5 bg-slate-200/50 border border-slate-350/20 rounded-lg px-3 py-1 text-[10px] text-slate-500 w-full max-w-md justify-center select-none font-mono">
                  <span className="text-[8px] text-slate-400 font-sans tracking-wide">🔒 HTTPS</span>
                  <span className="font-bold text-slate-700">
                    {selectedProject.mockType === 'dashboard' && 'student-portal.ottolabs.io'}
                    {selectedProject.mockType === 'store' && 'catalog-shop.ottolabs.io'}
                    {selectedProject.mockType === 'chatbot' && 'ai-assistant.ottolabs.io'}
                    {selectedProject.mockType === 'portfolio' && 'janedoe.portfolio.ottolabs.io'}
                    {selectedProject.mockType === 'attendance' && 'supervisor-board.ottolabs.io'}
                  </span>
                </div>

                {/* Close Button on Right */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-24 flex justify-end text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1 border border-slate-200 hover:border-slate-300 rounded-lg py-1 px-2.5 bg-white shadow-sm font-bold text-[10px] uppercase">
                    <X className="w-3 h-3 text-slate-400" />
                    <span>Close</span>
                  </div>
                </button>
              </div>

              {/* Browser Body Area */}
              <div className="flex-grow overflow-hidden relative">
                {selectedProject.mockType === 'dashboard' && <StudentManagementDemo />}
                {selectedProject.mockType === 'store' && <ECommerceDemo />}
                {selectedProject.mockType === 'chatbot' && <AIChatbotDemo />}
                {selectedProject.mockType === 'portfolio' && <JaneDoePortfolioDemo />}
                {selectedProject.mockType === 'attendance' && <AttendanceDemo />}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

