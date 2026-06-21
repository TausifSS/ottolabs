import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, Trash2, Search, ShoppingBag, Send, Check, CheckCircle, 
  Download, User, Calendar, Edit3, Settings, AlertCircle, 
  Moon, Sun, Loader2, FileText, X, ChevronRight, ShoppingCart, 
  RefreshCw, Users, FileCheck, CheckSquare, MessageSquare, ClipboardList 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// 1. STUDENT MANAGEMENT SYSTEM DEMO
// ==========================================
export function StudentManagementDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Sharma", grade: "Grade A+", attendance: 98, status: "Active" },
    { id: 2, name: "Priya Patel", grade: "Grade A", attendance: 95, status: "Active" },
    { id: 3, name: "Rohan Das", grade: "Grade B", attendance: 88, status: "Active" },
    { id: 4, name: "Sneha Reddy", grade: "Grade A+", attendance: 96, status: "Active" },
    { id: 5, name: "Kabir Malhotra", grade: "Grade C", attendance: 78, status: "Inactive" },
  ]);
  const [search, setSearch] = useState('');
  const [gradeFilter, setGradeFilter] = useState('All');
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentGrade, setNewStudentGrade] = useState('Grade A');
  const [invoices, setInvoices] = useState([
    { id: 101, name: "Aarav Sharma", amount: 12000, status: "Paid" },
    { id: 102, name: "Priya Patel", amount: 12000, status: "Pending" },
    { id: 103, name: "Rohan Das", amount: 12000, status: "Paid" },
    { id: 104, name: "Sneha Reddy", amount: 12000, status: "Pending" },
  ]);

  // Calculate metrics based on state
  const totalStudents = students.length;
  const activeCount = students.filter(s => s.status === 'Active').length;
  const avgAttendance = totalStudents > 0 
    ? Math.round(students.reduce((acc, curr) => acc + curr.attendance, 0) / totalStudents) 
    : 0;

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;
    const newStudent = {
      id: Date.now(),
      name: newStudentName,
      grade: newStudentGrade,
      attendance: 90 + Math.floor(Math.random() * 10), // Random starting attendance 90-99
      status: "Active"
    };
    setStudents([newStudent, ...students]);
    
    // Add pending invoice for the student
    const newInvoice = {
      id: Date.now() + 1,
      name: newStudentName,
      amount: 12000,
      status: "Pending"
    };
    setInvoices([newInvoice, ...invoices]);
    
    setNewStudentName('');
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const toggleStatus = (id) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, status: s.status === 'Active' ? 'Inactive' : 'Active' } : s
    ));
  };

  const handlePayInvoice = (id) => {
    setInvoices(invoices.map(inv => 
      inv.id === id ? { ...inv, status: 'Paid' } : inv
    ));
  };

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesGrade = gradeFilter === 'All' || s.grade === gradeFilter;
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="flex h-full bg-slate-50 text-slate-800 font-sans text-xs">
      {/* Sidebar */}
      <div className="w-48 bg-slate-900 text-slate-350 p-4 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
            <div className="w-6 h-6 rounded bg-brandIndigo-600 flex items-center justify-center text-white font-bold text-[10px]">OS</div>
            <span className="font-bold text-white tracking-wide text-xs">OttoEdu Portal</span>
          </div>
          
          <nav className="flex flex-col gap-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg font-semibold transition-all text-left ${activeTab === 'dashboard' ? 'bg-brandIndigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <Users className="w-3.5 h-3.5" />
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('students')}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg font-semibold transition-all text-left ${activeTab === 'students' ? 'bg-brandIndigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <ClipboardList className="w-3.5 h-3.5" />
              Student Roster
            </button>
            <button 
              onClick={() => setActiveTab('finances')}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg font-semibold transition-all text-left ${activeTab === 'finances' ? 'bg-brandIndigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              Fee Finances
            </button>
          </nav>
        </div>
        <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-3">
          Role: <span className="text-slate-300 font-bold">Administrator</span>
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="flex-grow flex flex-col overflow-y-auto">
        <header className="bg-white border-b border-slate-200 py-3 px-6 flex justify-between items-center shadow-sm shrink-0">
          <h1 className="text-slate-900 font-bold capitalize text-sm">{activeTab}</h1>
          <div className="text-[10px] bg-indigo-50 border border-indigo-200 text-brandIndigo-600 px-2 py-0.5 rounded-full font-bold">
            Academic Session 2026-27
          </div>
        </header>

        <div className="p-6 flex-grow">
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="flex flex-col gap-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
                  <span className="text-slate-400 uppercase font-black tracking-wider text-[9px] block">Total Students</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">{totalStudents}</span>
                    <span className="text-emerald-500 text-[10px] font-bold">+10%</span>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
                  <span className="text-slate-400 uppercase font-black tracking-wider text-[9px] block">Active Attendance</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">{avgAttendance}%</span>
                    <span className="text-slate-500 text-[10px]">Daily Avg</span>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
                  <span className="text-slate-400 uppercase font-black tracking-wider text-[9px] block">Fee Collection Rate</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-emerald-600">
                      {Math.round((invoices.filter(i => i.status === 'Paid').length / invoices.length) * 100)}%
                    </span>
                    <span className="text-slate-500 text-[10px]">Collected</span>
                  </div>
                </div>
              </div>

              {/* Grid Section */}
              <div className="grid grid-cols-5 gap-6">
                {/* Chart Mockup */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm col-span-3">
                  <h3 className="font-bold text-slate-900 mb-4 text-xs">Class Grade Distribution</h3>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Grade A+", count: students.filter(s => s.grade === 'Grade A+').length, color: "bg-brandIndigo-500" },
                      { label: "Grade A", count: students.filter(s => s.grade === 'Grade A').length, color: "bg-indigo-400" },
                      { label: "Grade B", count: students.filter(s => s.grade === 'Grade B').length, color: "bg-sky-400" },
                      { label: "Grade C", count: students.filter(s => s.grade === 'Grade C').length, color: "bg-slate-350" }
                    ].map((item, idx) => {
                      const percentage = totalStudents > 0 ? (item.count / totalStudents) * 100 : 0;
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="w-16 font-semibold text-slate-650 text-[10px] text-right">{item.label}</span>
                          <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full ${item.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              transition={{ duration: 0.8 }}
                            />
                          </div>
                          <span className="w-8 font-black text-slate-900 text-[10px]">{item.count} stds</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Audit Logs */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm col-span-2 flex flex-col">
                  <h3 className="font-bold text-slate-900 mb-3 text-xs">Recent Activities</h3>
                  <div className="flex-grow flex flex-col gap-3 overflow-y-auto">
                    <div className="border-l-2 border-brandIndigo-500 pl-3 py-0.5">
                      <p className="font-bold text-slate-800 text-[10px] leading-tight">Database Synchronized</p>
                      <span className="text-[9px] text-slate-400">Tally Integration • Just Now</span>
                    </div>
                    <div className="border-l-2 border-emerald-500 pl-3 py-0.5">
                      <p className="font-bold text-slate-800 text-[10px] leading-tight">Student Added: {students[0]?.name}</p>
                      <span className="text-[9px] text-slate-400">Admin Action • 2 mins ago</span>
                    </div>
                    <div className="border-l-2 border-indigo-400 pl-3 py-0.5">
                      <p className="font-bold text-slate-800 text-[10px] leading-tight">Attendance Logs Uploaded</p>
                      <span className="text-[9px] text-slate-400">Batch Process • 15 mins ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STUDENTS ROSTER TAB */}
          {activeTab === 'students' && (
            <div className="flex flex-col gap-4">
              {/* Filter controls */}
              <div className="flex justify-between items-center bg-white border border-slate-200 rounded-xl p-3 shadow-sm gap-4">
                <div className="flex gap-2 items-center flex-grow max-w-sm border border-slate-200 rounded-lg px-2 bg-slate-50 py-1">
                  <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Search students..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent border-0 outline-none w-full text-[11px] placeholder:text-slate-400"
                  />
                </div>
                
                <div className="flex gap-3 items-center">
                  <select 
                    value={gradeFilter} 
                    onChange={(e) => setGradeFilter(e.target.value)}
                    className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-semibold outline-none"
                  >
                    <option value="All">All Grades</option>
                    <option value="Grade A+">Grade A+</option>
                    <option value="Grade A">Grade A</option>
                    <option value="Grade B">Grade B</option>
                    <option value="Grade C">Grade C</option>
                  </select>
                </div>
              </div>

              {/* Split layout: Form left, Table right */}
              <div className="grid grid-cols-3 gap-6 items-start">
                {/* Roster Table */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm col-span-2 overflow-hidden">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-450 font-bold uppercase text-[9px] tracking-wider">
                        <th className="p-3">Student Name</th>
                        <th className="p-3">Grade</th>
                        <th className="p-3">Attendance</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredStudents.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="p-8 text-center text-slate-450 font-medium">No students match current search criteria.</td>
                        </tr>
                      ) : (
                        filteredStudents.map(student => (
                          <tr key={student.id} className="hover:bg-slate-50/50">
                            <td className="p-3 flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-200 text-brandIndigo-600 font-bold flex items-center justify-center text-[10px]">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <span className="font-bold text-slate-900">{student.name}</span>
                            </td>
                            <td className="p-3 font-semibold">{student.grade}</td>
                            <td className="p-3">
                              <div className="flex items-center gap-1.5">
                                <span className={`font-bold ${student.attendance > 90 ? 'text-emerald-600' : 'text-amber-600'}`}>{student.attendance}%</span>
                                <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                                  <div className={`h-full ${student.attendance > 90 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${student.attendance}%` }} />
                                </div>
                              </div>
                            </td>
                            <td className="p-3">
                              <button 
                                onClick={() => toggleStatus(student.id)}
                                className={`px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 border text-[9px] font-black uppercase cursor-pointer ${student.status === 'Active' ? 'text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100/55' : 'text-slate-500 bg-slate-50 border-slate-200'}`}
                              >
                                {student.status}
                              </button>
                            </td>
                            <td className="p-3 text-right">
                              <button 
                                onClick={() => handleDeleteStudent(student.id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded"
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Add Student Form */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col gap-4">
                  <h3 className="font-bold text-slate-900 text-xs border-b border-slate-100 pb-2">Add New Student</h3>
                  <form onSubmit={handleAddStudent} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Student Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={newStudentName}
                        onChange={(e) => setNewStudentName(e.target.value)}
                        placeholder="e.g. Anjali Gupta"
                        className="border border-slate-200 rounded px-2.5 py-1.5 outline-none focus:border-brandIndigo-500 text-[11px] font-semibold"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Class Grade</label>
                      <select 
                        value={newStudentGrade}
                        onChange={(e) => setNewStudentGrade(e.target.value)}
                        className="border border-slate-200 bg-white rounded px-2 py-1.5 outline-none focus:border-brandIndigo-500 text-[11px] font-semibold font-sans"
                      >
                        <option value="Grade A+">Grade A+</option>
                        <option value="Grade A">Grade A</option>
                        <option value="Grade B">Grade B</option>
                        <option value="Grade C">Grade C</option>
                      </select>
                    </div>
                    <button 
                      type="submit"
                      className="bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white font-bold py-1.5 rounded flex items-center justify-center gap-1 mt-2 text-[10px] uppercase shadow-sm shadow-brandIndigo-550/20"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Register Student
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* FEE FINANCES TAB */}
          {activeTab === 'finances' && (
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden max-w-2xl mx-auto">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <span className="font-bold text-slate-800 text-xs">Tally Ledger Link Active</span>
                <span className="flex items-center gap-1 text-[9px] text-slate-400"><RefreshCw className="w-3 h-3 text-brandIndigo-500 animate-spin" /> Real-time Billing Sync</span>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-450 font-bold uppercase text-[9px] tracking-wider">
                    <th className="p-3">Student Billing Account</th>
                    <th className="p-3">Term Fee Amount</th>
                    <th className="p-3">Sync Status</th>
                    <th className="p-3 text-right">Settlement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {invoices.map(inv => (
                    <tr key={inv.id} className="hover:bg-slate-50/50">
                      <td className="p-3">
                        <span className="font-bold text-slate-900 block">{inv.name}</span>
                        <span className="text-[9px] text-slate-450">ID: INV-{inv.id}</span>
                      </td>
                      <td className="p-3 font-bold text-slate-800">₹{inv.amount.toLocaleString()}</td>
                      <td className="p-3">
                        <span className={`px-1.5 py-0.5 rounded-sm border text-[9px] font-black uppercase ${inv.status === 'Paid' ? 'text-emerald-600 bg-emerald-50 border-emerald-200' : 'text-amber-600 bg-amber-50 border-amber-200'}`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        {inv.status === 'Pending' ? (
                          <button 
                            onClick={() => handlePayInvoice(inv.id)}
                            className="bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white font-bold px-2.5 py-1 rounded text-[9px] uppercase shadow-sm select-none cursor-pointer"
                          >
                            Mark As Paid
                          </button>
                        ) : (
                          <span className="text-slate-400 font-bold flex items-center gap-1 justify-end text-[9px]"><CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Settled</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. E-COMMERCE DISTRIBUTOR STORE DEMO
// ==========================================
export function ECommerceDemo() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [checkoutStep, setCheckoutStep] = useState('idle'); // idle, checkingOut, success

  const catalog = [
    { id: 1, name: "Reinforced Rods Fe500", category: "Steel", price: 56200, unit: "Ton", desc: "Grade Fe500, earthquake-resistant high elongation tensile strength rods." },
    { id: 2, name: "Cement Bags Fe53", category: "Cement", price: 380, unit: "Bag", desc: "High-grade Portland Pozzolana cement for rapid hydration structural settings." },
    { id: 3, name: "Gravel Mesh Panel", category: "Mesh", price: 1200, unit: "Mesh", desc: "Heavy-duty galvanised grid mesh panels for concrete reinforcement slabs." },
    { id: 4, name: "Structural I-Beams", category: "Steel", price: 48500, unit: "Ton", desc: "Standard section steel load-bearing support pillars." },
    { id: 5, name: "Concrete Pre-mix Pack", category: "Cement", price: 290, unit: "Bag", desc: "Instantly blendable construction-grade high structural mortar pre-mix." },
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.qty + change;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'OTTO10') {
      setDiscountPercent(10);
      setCouponSuccess('10% off applied!');
      setCouponError('');
    } else {
      setCouponError('Invalid code. Try "OTTO10"');
      setCouponSuccess('');
    }
  };

  // Calculate pricing
  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const gstAmount = Math.round((subtotal - discountAmount) * 0.18); // 18% GST
  const grandTotal = subtotal - discountAmount + gstAmount;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutStep('checkingOut');
    setTimeout(() => {
      setCheckoutStep('success');
    }, 2000);
  };

  const resetCheckout = () => {
    setCart([]);
    setCoupon('');
    setDiscountPercent(0);
    setCouponSuccess('');
    setCouponError('');
    setCheckoutStep('idle');
  };

  const filteredCatalog = activeCategory === 'All' 
    ? catalog 
    : catalog.filter(p => p.category === activeCategory);

  return (
    <div className="flex h-full bg-[#fafafa] text-slate-800 font-sans text-xs relative">
      {checkoutStep === 'checkingOut' && (
        <div className="absolute inset-0 bg-white/80 z-20 flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
          <Loader2 className="w-8 h-8 text-brandIndigo-600 animate-spin" />
          <span className="font-bold text-slate-800 text-sm">Processing order & syncing Tally ERP ledger...</span>
          <span className="text-[10px] text-slate-400">Please do not reload or close.</span>
        </div>
      )}

      {checkoutStep === 'success' && (
        <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-8 text-center">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 border border-emerald-200"
          >
            <Check className="w-6 h-6 stroke-[3]" />
          </motion.div>
          
          <h2 className="text-lg font-bold text-slate-900 mb-1">B2B Order Placed Successfully!</h2>
          <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
            Your materials request has been logged. Our operations team is preparing shipment dispatch.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full max-w-sm mb-6 flex flex-col gap-2.5 text-left">
            <div className="flex justify-between items-center border-b border-slate-200/50 pb-2">
              <span className="font-bold text-slate-400 uppercase text-[9px]">Tally ERP Integration</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-600 font-extrabold text-[9px]">SYNCED OK</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-500 font-medium">Order Number:</span>
              <span className="font-bold text-slate-800">#OT-592810</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-500 font-medium">Amount Synced:</span>
              <span className="font-bold text-brandIndigo-600">₹{grandTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-500 font-medium">Auto-dispatch:</span>
              <span className="text-slate-650 font-semibold">Ledger & Invoice PDF Sent via WhatsApp</span>
            </div>
          </div>

          <button 
            onClick={resetCheckout}
            className="bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white font-bold px-6 py-2 rounded-xl text-xs uppercase shadow-md cursor-pointer"
          >
            Shop Again
          </button>
        </div>
      )}

      {/* Product Catalog view */}
      <div className="flex-grow flex flex-col overflow-y-auto p-6 border-r border-slate-200">
        <header className="flex justify-between items-center mb-6 shrink-0">
          <div>
            <h1 className="text-slate-900 font-extrabold text-sm tracking-tight flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-brandIndigo-500" /> Catalog Warehouse Shop
            </h1>
            <p className="text-[10px] text-slate-400">B2B bulk inventory materials outlet</p>
          </div>
          <div className="flex gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            {['All', 'Steel', 'Cement', 'Mesh'].map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${activeCategory === cat ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Catalog Grid */}
        <div className="grid grid-cols-2 gap-4 flex-grow content-start">
          {filteredCatalog.map(prod => (
            <div key={prod.id} className="bg-white border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-1">
                  <h3 className="font-bold text-slate-900 leading-snug">{prod.name}</h3>
                  <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-semibold capitalize">{prod.category}</span>
                </div>
                <p className="text-[10px] text-slate-450 mt-1 leading-relaxed">{prod.desc}</p>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-450">Bulk price</span>
                  <span className="font-extrabold text-slate-900 text-xs">₹{prod.price.toLocaleString()} <span className="text-[9px] font-bold text-slate-450">/ {prod.unit}</span></span>
                </div>
                <button 
                  onClick={() => addToCart(prod)}
                  className="bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white font-black px-2.5 py-1.5 rounded-lg text-[9px] uppercase shadow-sm select-none cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary Panel */}
      <div className="w-72 bg-white flex flex-col justify-between shrink-0">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
          <div className="flex items-center gap-1.5 font-bold text-slate-800">
            <ShoppingCart className="w-3.5 h-3.5 text-brandIndigo-500" />
            <span>Order Cart</span>
          </div>
          <span className="text-[9px] bg-brandIndigo-50 text-brandIndigo-600 border border-brandIndigo-200 px-1.5 py-0.5 rounded-full font-bold">
            {cart.reduce((sum, item) => sum + item.qty, 0)} Items
          </span>
        </div>

        {/* Cart items list */}
        <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3">
          {cart.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-slate-400 gap-1 h-full py-12">
              <ShoppingCart className="w-6 h-6 text-slate-300 stroke-[1.5]" />
              <p className="font-semibold text-slate-650">Cart is empty.</p>
              <p className="text-[9px] text-slate-400 text-center max-w-[150px]">Choose bulk materials from the warehouse catalog panel.</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-2.5 border-b border-slate-100 pb-2.5 last:border-0">
                <div className="flex-grow min-w-0">
                  <span className="font-bold text-slate-800 block truncate leading-tight">{item.name}</span>
                  <span className="text-[9px] text-brandIndigo-600 font-extrabold mt-0.5 block">₹{(item.price * item.qty).toLocaleString()}</span>
                  <span className="text-[8px] text-slate-450 font-medium">({item.qty} × ₹{item.price.toLocaleString()})</span>
                </div>
                
                <div className="flex flex-col items-end gap-1.5 shrink-0 justify-between">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-0.5 hover:bg-red-50 rounded cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <div className="flex items-center border border-slate-200 rounded overflow-hidden bg-slate-50 text-[10px]">
                    <button onClick={() => updateQty(item.id, -1)} className="px-1.5 py-0.5 hover:bg-slate-200 font-bold cursor-pointer">-</button>
                    <span className="px-1.5 text-[9px] font-black text-slate-800">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="px-1.5 py-0.5 hover:bg-slate-200 font-bold cursor-pointer">+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Billing details */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/50 flex flex-col gap-3">
          <form onSubmit={handleApplyCoupon} className="flex gap-1.5">
            <input 
              type="text" 
              placeholder="Promo: OTTO10" 
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              disabled={discountPercent > 0}
              className="border border-slate-200 rounded px-2 py-1 outline-none text-[10px] uppercase font-bold flex-grow bg-white placeholder:text-slate-400 placeholder:normal-case focus:border-brandIndigo-500"
            />
            <button 
              type="submit" 
              disabled={discountPercent > 0}
              className="bg-slate-800 text-white font-bold px-2.5 py-1 rounded text-[9px] uppercase hover:bg-slate-900 disabled:bg-slate-350 disabled:cursor-not-allowed select-none cursor-pointer"
            >
              Apply
            </button>
          </form>
          {couponError && <p className="text-red-500 text-[9px] font-semibold leading-none">{couponError}</p>}
          {couponSuccess && <p className="text-emerald-600 text-[9px] font-bold leading-none">{couponSuccess}</p>}

          <div className="flex flex-col gap-1.5 text-[10px] border-t border-slate-200/60 pt-3">
            <div className="flex justify-between">
              <span className="text-slate-550">Subtotal:</span>
              <span className="font-semibold text-slate-800">₹{subtotal.toLocaleString()}</span>
            </div>
            {discountPercent > 0 && (
              <div className="flex justify-between text-emerald-600">
                <span>Discount (10%):</span>
                <span>-₹{discountAmount.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-550">GST (18%):</span>
              <span className="font-semibold text-slate-800">₹{gstAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-t border-slate-200/50 pt-2 text-[11px]">
              <span className="font-black text-slate-800">Grand Total:</span>
              <span className="font-black text-brandIndigo-600">₹{grandTotal.toLocaleString()}</span>
            </div>
          </div>

          <button 
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="w-full bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white text-[10px] font-black py-2.5 rounded-xl uppercase shadow-md disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed select-none flex items-center justify-center gap-1 mt-1 shadow-brandIndigo-550/20 cursor-pointer"
          >
            Place Bulk Order
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. AI CHATBOT DEMO
// ==========================================
export function AIChatbotDemo() {
  const [activeThread, setActiveThread] = useState(1);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: "Hello! Tuesday Fe500 stock rod delivery is locked. Pushed Tally ledger.", timestamp: "10:14 AM" },
    { id: 2, sender: 'user', text: "Perfect, thank you!", timestamp: "10:15 AM" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const threads = [
    { id: 1, label: "Active Support #309", sub: "Inventory status queries" },
    { id: 2, label: "Tally ERP Sync Error", sub: "System ledger integration" },
    { id: 3, label: "Delivery Tracking #4023", sub: "Steel dispatch status" }
  ];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const presetResponses = {
    inventory: {
      text: "Scanning regional warehouses... Here is the live B2B material stock ledger:",
      component: (
        <div className="mt-2 border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm text-[9px] w-full max-w-[200px]">
          <div className="bg-slate-50 border-b border-slate-200 p-1.5 font-bold uppercase tracking-wider text-slate-400 text-[8px]">Live Steel Stock</div>
          <div className="p-2 flex flex-col gap-1.5">
            <div className="flex justify-between"><span>Fe500 Rods:</span><span className="font-bold text-slate-900">14.5 Tons</span></div>
            <div className="flex justify-between"><span>I-Beams:</span><span className="font-bold text-slate-900">8 Tons</span></div>
            <div className="flex justify-between border-t border-slate-100 pt-1"><span>Cement 53:</span><span className="font-bold text-slate-900 text-emerald-600">320 Bags</span></div>
          </div>
        </div>
      )
    },
    tally: {
      text: "Executing sync bridge... Pushing ledger reports into Tally Prime ledger database.",
      component: (
        <div className="mt-2 border border-slate-200 rounded-lg bg-slate-50 p-2 shadow-sm text-[9px] w-full max-w-[200px] flex flex-col gap-1.5">
          <div className="flex justify-between font-bold text-slate-800 text-[8px] uppercase border-b border-slate-200/60 pb-1"><span>TALLY BRIDGE</span><span className="text-emerald-600">100% DONE</span></div>
          <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> <span>Exported: 14 Invoices</span></div>
          <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> <span>Synced: client ledgers</span></div>
        </div>
      )
    },
    order: {
      text: "Checking status for Order Reference #4023. Truck dispatch is currently in transit:",
      component: (
        <div className="mt-2 border border-slate-200 rounded-lg bg-white p-2 shadow-sm text-[9px] w-full max-w-[200px] flex flex-col gap-2">
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-indigo-50 text-brandIndigo-500 flex items-center justify-center font-bold text-[8px] shrink-0 border border-indigo-200">1</div>
            <div>
              <span className="font-bold text-slate-800 block">Ordered & Packed</span>
              <span className="text-[8px] text-slate-450">Jun 19 • Warehouse</span>
            </div>
          </div>
          <div className="flex items-start gap-2 border-l border-slate-200 pl-2">
            <div className="w-4 h-4 rounded-full bg-indigo-50 text-brandIndigo-500 flex items-center justify-center font-bold text-[8px] shrink-0 border border-indigo-200">2</div>
            <div>
              <span className="font-bold text-slate-800 block">Loaded for Delivery</span>
              <span className="text-[8px] text-slate-450">Jun 20 • Fleet Dispatch</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[8px] shrink-0 animate-pulse">3</div>
            <div>
              <span className="font-bold text-emerald-600 block">Out for Delivery</span>
              <span className="text-[8px] text-slate-450 font-medium">ETA: Within 2 Hours</span>
            </div>
          </div>
        </div>
      )
    },
    summary: {
      text: "Parsing monthly operations metrics. Here is your summary snapshot:",
      component: (
        <div className="mt-2 border border-slate-200 rounded-lg bg-white p-2 shadow-sm text-[9px] w-full max-w-[200px] flex flex-col gap-1.5">
          <div className="flex justify-between border-b border-slate-100 pb-1 font-bold text-slate-800 text-[8px] uppercase"><span>JUNE SUMMARY</span><span>JUNE 2026</span></div>
          <div className="flex justify-between"><span>Revenue:</span><span className="font-bold text-slate-900">₹8,42,000</span></div>
          <div className="flex justify-between"><span>Orders:</span><span className="font-bold text-slate-900">46 Completed</span></div>
          <div className="flex justify-between"><span>Avg Lead Time:</span><span className="font-bold text-slate-900">21 Hours</span></div>
        </div>
      )
    }
  };

  const handleSend = (textToSend) => {
    const msgText = textToSend || inputMessage;
    if (!msgText.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: msgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Bot response logic based on text keywords
    setTimeout(() => {
      let botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "I am ready to assist. Please select one of my quick operational commands or ask detailed questions.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const query = msgText.toLowerCase();
      if (query.includes('stock') || query.includes('inventory') || query.includes('material')) {
        botResponse.text = presetResponses.inventory.text;
        botResponse.customComponent = presetResponses.inventory.component;
      } else if (query.includes('tally') || query.includes('sync') || query.includes('invoice')) {
        botResponse.text = presetResponses.tally.text;
        botResponse.customComponent = presetResponses.tally.component;
      } else if (query.includes('4023') || query.includes('tracking') || query.includes('dispatch') || query.includes('order')) {
        botResponse.text = presetResponses.order.text;
        botResponse.customComponent = presetResponses.order.component;
      } else if (query.includes('summary') || query.includes('revenue') || query.includes('monthly')) {
        botResponse.text = presetResponses.summary.text;
        botResponse.customComponent = presetResponses.summary.component;
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex h-full bg-[#fafafa] text-slate-800 font-sans text-xs">
      {/* Threads list bar */}
      <div className="w-48 bg-slate-900 text-slate-350 p-4 flex flex-col justify-between shrink-0 border-r border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-bold text-white tracking-wide text-xs">Otto AI Support</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-black text-slate-500 block uppercase mb-1">Conversations</span>
            {threads.map(thread => (
              <button 
                key={thread.id}
                onClick={() => {
                  setActiveThread(thread.id);
                  if (thread.id === 1) {
                    setMessages([
                      { id: 1, sender: 'bot', text: "Hello! Tuesday Fe500 stock rod delivery is locked. Pushed Tally ledger.", timestamp: "10:14 AM" },
                      { id: 2, sender: 'user', text: "Perfect, thank you!", timestamp: "10:15 AM" }
                    ]);
                  } else if (thread.id === 2) {
                    setMessages([
                      { id: 1, sender: 'bot', text: "Database connection failed for Tally API. Re-authenticating credentials.", timestamp: "09:30 AM" },
                      { id: 2, sender: 'user', text: "Let's check sync history.", timestamp: "09:32 AM" },
                      { id: 3, sender: 'bot', text: "Running diagnostic... Synced 4 registers. Log file exported successfully.", timestamp: "09:33 AM" }
                    ]);
                  } else {
                    setMessages([
                      { id: 1, sender: 'bot', text: "Logistics truck dispatch status: Order #4023 left Delhi Cargo hub.", timestamp: "08:10 AM" }
                    ]);
                  }
                }}
                className={`w-full text-left p-2 rounded-lg transition-all border border-transparent cursor-pointer ${activeThread === thread.id ? 'bg-slate-800 text-white border-slate-700/50' : 'hover:bg-slate-800 hover:text-white'}`}
              >
                <div className="font-bold text-[10px] truncate">{thread.label}</div>
                <div className="text-[8px] text-slate-500 block truncate">{thread.sub}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-[9px] text-slate-500 border-t border-slate-800 pt-3 font-medium">
          SLA Uptime: <span className="font-extrabold text-emerald-500">99.98%</span>
        </div>
      </div>

      {/* Main chat console window */}
      <div className="flex-grow flex flex-col justify-between bg-slate-50">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 py-3 px-6 flex justify-between items-center shadow-sm shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-bold text-slate-900 text-xs">Otto Bot Interface</span>
          </div>
          <span className="text-[9px] bg-slate-100 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full font-bold">
            OpenAI Engine Bridged
          </span>
        </header>

        {/* Dialogue Stream */}
        <div className="flex-grow p-6 overflow-y-auto flex flex-col gap-4">
          {messages.map(msg => (
            <div 
              key={msg.id} 
              className={`flex flex-col max-w-[80%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
            >
              <div 
                className={`p-3 rounded-2xl shadow-sm border leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-brandIndigo-600 text-white border-brandIndigo-500 rounded-tr-none text-[10.5px] font-semibold' 
                    : 'bg-white text-slate-800 border-slate-200 rounded-tl-none text-[10.5px] font-medium'
                }`}
              >
                <div>{msg.text}</div>
                {msg.customComponent && msg.customComponent}
              </div>
              <span className="text-[8px] text-slate-450 font-bold mt-1 tracking-wide">{msg.timestamp}</span>
            </div>
          ))}

          {isTyping && (
            <div className="self-start flex flex-col items-start max-w-[80%]">
              <div className="p-3 bg-white border border-slate-200 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center py-2.5 px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Footer Entry area */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-col gap-3 shrink-0">
          {/* Preset Prompts tags */}
          <div className="flex flex-wrap gap-1.5">
            <button 
              onClick={() => handleSend("Check steel stock")}
              className="text-[9px] font-bold text-slate-600 bg-slate-50 border border-slate-200 hover:border-brandIndigo-500 hover:bg-indigo-50 hover:text-brandIndigo-600 px-2 py-0.5 rounded transition-all select-none cursor-pointer"
            >
              📊 Check Steel Stock
            </button>
            <button 
              onClick={() => handleSend("Sync invoices to Tally")}
              className="text-[9px] font-bold text-slate-600 bg-slate-50 border border-slate-200 hover:border-brandIndigo-500 hover:bg-indigo-50 hover:text-brandIndigo-600 px-2 py-0.5 rounded transition-all select-none cursor-pointer"
            >
              🔄 Sync Tally Ledger
            </button>
            <button 
              onClick={() => handleSend("Where is order #4023?")}
              className="text-[9px] font-bold text-slate-600 bg-slate-50 border border-slate-200 hover:border-brandIndigo-500 hover:bg-indigo-50 hover:text-brandIndigo-600 px-2 py-0.5 rounded transition-all select-none cursor-pointer"
            >
              🚚 Track Order #4023
            </button>
            <button 
              onClick={() => handleSend("Generate monthly sales summary")}
              className="text-[9px] font-bold text-slate-600 bg-slate-50 border border-slate-200 hover:border-brandIndigo-500 hover:bg-indigo-50 hover:text-brandIndigo-600 px-2 py-0.5 rounded transition-all select-none cursor-pointer"
            >
              📉 Monthly Summary
            </button>
          </div>

          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ask anything about inventory, order tracking, and billing..." 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[11px] font-semibold flex-grow bg-slate-50 placeholder:text-slate-400 focus:border-brandIndigo-500 focus:bg-white"
            />
            <button 
              onClick={() => handleSend()}
              className="bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white font-bold px-3 py-1.5 rounded-lg flex items-center justify-center gap-1 shadow-sm select-none cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. JANE DOE ARCHITECT PORTFOLIO DEMO
// ==========================================
export function JaneDoePortfolioDemo() {
  const [theme, setTheme] = useState('light');
  const [downloadProgress, setDownloadProgress] = useState(-1); // -1 = idle, 0 to 100 = loading
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleDownload = () => {
    if (downloadProgress !== -1) return;
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDownloadProgress(-1), 2000); // Reset after 2s
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className={`h-full flex flex-col justify-between font-sans text-xs transition-colors duration-300 relative ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-950 text-slate-100'}`}>
      {/* Top navigation */}
      <header className={`px-6 py-3 border-b flex justify-between items-center transition-colors shrink-0 ${theme === 'light' ? 'border-slate-200 bg-white' : 'border-slate-850 bg-slate-950'}`}>
        <span className="font-extrabold tracking-[0.15em] text-[10px] uppercase font-mono">Jane Doe | Arch</span>
        <div className="flex gap-4 items-center font-semibold text-[10px]">
          <span className="hover:opacity-80 cursor-pointer">Projects</span>
          <span className="hover:opacity-80 cursor-pointer">Contact</span>
          <button 
            onClick={toggleTheme}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${theme === 'light' ? 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100' : 'border-slate-800 bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
          >
            {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      {/* Main hero panel inside frame */}
      <div className="flex-grow p-6 overflow-y-auto flex flex-col gap-6">
        <section className="text-center py-6 flex flex-col items-center justify-center">
          <div className={`w-14 h-14 rounded-full border flex items-center justify-center font-mono text-base font-extrabold mb-3 shadow-sm ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
            JD
          </div>
          <h2 className="font-extrabold text-base md:text-lg leading-tight max-w-sm tracking-tight mb-2">
            Designing Spaces. Building Futures.
          </h2>
          <p className={`text-[10px] max-w-[250px] leading-relaxed mb-4 ${theme === 'light' ? 'text-slate-450' : 'text-slate-500'}`}>
            Blueprint layouts and custom structural designs focused on modern minimalistic architecture.
          </p>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleDownload}
              className={`font-extrabold px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-all text-[9.5px] uppercase shadow-sm select-none cursor-pointer ${
                theme === 'light' 
                  ? 'bg-slate-900 border-slate-950 text-white hover:bg-slate-800' 
                  : 'bg-white border-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </button>
          </div>

          {/* Download progress bar */}
          {downloadProgress !== -1 && (
            <div className="w-full max-w-[180px] mt-4 flex flex-col gap-1 items-center">
              <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-brandIndigo-500 animate-pulse" style={{ width: `${downloadProgress}%` }} />
              </div>
              <span className="text-[8px] text-slate-450 font-bold">
                {downloadProgress === 100 ? '✅ Download Completed (portfolio_janedoe.pdf)' : `Downloading... ${downloadProgress}%`}
              </span>
            </div>
          )}
        </section>

        {/* Project Showreel section */}
        <section>
          <span className="text-[8px] font-black uppercase tracking-[0.2em] block mb-3 opacity-60">Featured Blueprints</span>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Horizon Villa", loc: "Goa, India", size: "6,400 sqft" },
              { title: "Slate Office Complex", loc: "Pune, India", size: "28,000 sqft" }
            ].map((proj, idx) => (
              <div 
                key={idx} 
                className={`p-3 border rounded-xl flex flex-col justify-between gap-3 shadow-sm ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200/80' : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div>
                  <h4 className="font-extrabold text-[10.5px] leading-tight mb-0.5">{proj.title}</h4>
                  <span className={`text-[8.5px] block font-medium ${theme === 'light' ? 'text-slate-450' : 'text-slate-500'}`}>{proj.loc}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-2 mt-1 border-slate-200/50">
                  <span className="font-mono text-[9px] font-bold opacity-75">{proj.size}</span>
                  <ChevronRight className="w-3 h-3 opacity-60" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Simple Contact Form */}
        <section className={`p-4 border rounded-xl ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
          <h3 className="font-bold mb-3 text-xs">Drop a Message</h3>
          {submitted ? (
            <div className="text-emerald-500 font-bold py-4 text-center flex items-center justify-center gap-1">
              <CheckSquare className="w-4 h-4" /> Message Submitted Successfully!
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <input 
                  type="text" 
                  required 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`border rounded px-2 py-1 outline-none text-[10px] font-semibold ${
                    theme === 'light' ? 'bg-white border-slate-200 focus:border-brandIndigo-500' : 'bg-slate-950 border-slate-800 text-slate-100 focus:border-brandIndigo-500'
                  }`}
                />
                <input 
                  type="email" 
                  required 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`border rounded px-2 py-1 outline-none text-[10px] font-semibold ${
                    theme === 'light' ? 'bg-white border-slate-200 focus:border-brandIndigo-500' : 'bg-slate-950 border-slate-800 text-slate-100 focus:border-brandIndigo-500'
                  }`}
                />
              </div>
              <textarea 
                required 
                placeholder="Inquiry message details..." 
                rows="2"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`border rounded px-2 py-1 outline-none text-[10px] font-semibold ${
                  theme === 'light' ? 'bg-white border-slate-200 focus:border-brandIndigo-500' : 'bg-slate-950 border-slate-800 text-slate-100 focus:border-brandIndigo-500'
                }`}
              />
              <button 
                type="submit"
                className={`font-black py-1.5 rounded-lg text-[9px] uppercase shadow-sm select-none cursor-pointer ${
                  theme === 'light' 
                    ? 'bg-slate-900 hover:bg-slate-800 text-white' 
                    : 'bg-white hover:bg-slate-100 text-slate-900'
                }`}
              >
                Send Message
              </button>
            </form>
          )}
        </section>
      </div>

      {/* Footer block */}
      <footer className={`px-6 py-2.5 border-t text-[8px] text-center font-bold tracking-wider uppercase opacity-55 ${theme === 'light' ? 'border-slate-200' : 'border-slate-900 bg-slate-950'}`}>
        © 2026 Jane Doe Architecture. All rights reserved.
      </footer>
    </div>
  );
}

// ==========================================
// 5. ATTENDANCE SYSTEM DEMO
// ==========================================
export function AttendanceDemo() {
  const [workers, setWorkers] = useState([
    { id: 1, name: "Rajesh Patel", role: "Site Supervisor", time: "09:00 AM", status: "Present", note: "" },
    { id: 2, name: "Amit Sharma", role: "Machinery Operator", time: "09:12 AM", status: "Late", note: "" },
    { id: 3, name: "Sanjay Singh", role: "Quality Lead", time: "---", status: "Absent", note: "" },
    { id: 4, name: "Vijay Kumar", role: "Safety Officer", time: "08:58 AM", status: "Present", note: "" },
    { id: 5, name: "Vikram Rathore", role: "Rigger Lead", time: "---", status: "On Leave", note: "" }
  ]);
  const [selectedWorkerId, setSelectedWorkerId] = useState(null);
  const [noteInput, setNoteInput] = useState('');
  const [exporting, setExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  // Derive metrics
  const total = workers.length;
  const presentCount = workers.filter(w => w.status === 'Present' || w.status === 'Late').length;
  const lateCount = workers.filter(w => w.status === 'Late').length;
  const absentCount = workers.filter(w => w.status === 'Absent').length;
  const leaveCount = workers.filter(w => w.status === 'On Leave').length;
  const attendanceRate = Math.round((presentCount / (total - leaveCount)) * 100);

  const toggleWorkerStatus = (id) => {
    const states = ["Present", "Late", "Absent", "On Leave"];
    setWorkers(workers.map(w => {
      if (w.id === id) {
        const nextIndex = (states.indexOf(w.status) + 1) % states.length;
        const newStatus = states[nextIndex];
        let clockIn = "---";
        if (newStatus === "Present") clockIn = "09:00 AM";
        if (newStatus === "Late") clockIn = "09:15 AM";
        return { ...w, status: newStatus, time: clockIn };
      }
      return w;
    }));
  };

  const handleOpenNote = (worker) => {
    setSelectedWorkerId(worker.id);
    setNoteInput(worker.note);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    setWorkers(workers.map(w => 
      w.id === selectedWorkerId ? { ...w, note: noteInput } : w
    ));
    setSelectedWorkerId(null);
    setNoteInput('');
  };

  const handleExport = () => {
    if (exporting) return;
    setExporting(true);
    setTimeout(() => {
      setExporting(false);
      setExportComplete(true);
      setTimeout(() => setExportComplete(false), 2500);
    }, 1800);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Present': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'Late': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'Absent': return 'text-red-500 bg-red-50 border-red-200';
      case 'On Leave': return 'text-slate-455 bg-slate-50 border-slate-200';
      default: return '';
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#fafafa] text-slate-800 font-sans text-xs p-6 overflow-y-auto">
      {/* Header bar metrics */}
      <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6 shrink-0 border-b border-slate-200/60 pb-4">
        <div>
          <h1 className="text-slate-900 font-extrabold text-sm tracking-tight flex items-center gap-1.5">
            <ClipboardList className="w-4.5 h-4.5 text-brandIndigo-500" /> Shift Supervisor Dashboard
          </h1>
          <p className="text-[10px] text-slate-400 mt-0.5">Real-time attendance & logs tracking panel</p>
        </div>
        
        <div className="flex gap-2 select-none shrink-0">
          <button 
            onClick={handleExport}
            className="bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-bold px-3 py-1.5 rounded-xl text-[9.5px] uppercase shadow-sm flex items-center gap-1 transition-all cursor-pointer"
          >
            {exporting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 text-brandIndigo-500 animate-spin" /> Exporting...
              </>
            ) : exportComplete ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" /> Log Exported!
              </>
            ) : (
              <>
                <FileText className="w-3.5 h-3.5 text-slate-400" /> Export Shift Logs
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start flex-grow">
        {/* Workers Roster Table */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm lg:col-span-2 overflow-hidden">
          <div className="p-3 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center font-bold text-slate-800 text-[10px]">
            <span>Active Shift Staff ({presentCount}/{total - leaveCount} Active)</span>
            <span className="text-brandIndigo-600 font-extrabold">{attendanceRate}% Rate</span>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-450 font-bold uppercase text-[9.5px] tracking-wider">
                <th className="p-3">Employee Name</th>
                <th className="p-3">Designation</th>
                <th className="p-3">Clock-In</th>
                <th className="p-3">Status (Click to toggle)</th>
                <th className="p-3 text-right">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {workers.map(w => (
                <tr key={w.id} className="hover:bg-slate-50/30">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-650 font-bold flex items-center justify-center text-[9.5px]">
                        {w.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">{w.name}</span>
                        {w.note && (
                          <span className="text-[8.5px] text-brandIndigo-600 font-semibold bg-indigo-50 px-1 py-0.5 rounded mt-0.5 inline-block max-w-[120px] truncate" title={w.note}>
                            📝 {w.note}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 font-semibold text-slate-650">{w.role}</td>
                  <td className="p-3 font-mono font-medium text-slate-700">{w.time}</td>
                  <td className="p-3">
                    <button 
                      onClick={() => toggleWorkerStatus(w.id)}
                      className={`px-1.5 py-0.5 rounded border text-[9.5px] font-black uppercase transition-all cursor-pointer ${getStatusStyles(w.status)}`}
                    >
                      {w.status}
                    </button>
                  </td>
                  <td className="p-3 text-right">
                    <button 
                      onClick={() => handleOpenNote(w)}
                      className="text-brandIndigo-600 hover:text-brandIndigo-800 font-bold text-[9.5px] uppercase cursor-pointer"
                    >
                      {w.note ? "Edit Note" : "+ Add Note"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Pane Sidebar - Stats & Remarks Form */}
        <div className="flex flex-col gap-6">
          {/* Stats Breakdown cards */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col gap-3">
            <h3 className="font-bold text-slate-900 text-xs border-b border-slate-100 pb-2">Shift Breakdown</h3>
            <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-2 flex flex-col justify-between">
                <span className="text-emerald-600 font-bold block">Present</span>
                <span className="text-lg font-black text-emerald-700 mt-1">{presentCount}</span>
              </div>
              <div className="bg-amber-50/50 border border-amber-100 rounded-lg p-2 flex flex-col justify-between">
                <span className="text-amber-600 font-bold block">Late</span>
                <span className="text-lg font-black text-amber-700 mt-1">{lateCount}</span>
              </div>
              <div className="bg-red-50/50 border border-red-100 rounded-lg p-2 flex flex-col justify-between">
                <span className="text-red-500 font-bold block">Absent</span>
                <span className="text-lg font-black text-red-600 mt-1">{absentCount}</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col justify-between">
                <span className="text-slate-450 font-bold block">On Leave</span>
                <span className="text-lg font-black text-slate-650 mt-1">{leaveCount}</span>
              </div>
            </div>
          </div>

          {/* Add Remarks Dialog Panel */}
          {selectedWorkerId && (
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col gap-3.5">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <h3 className="font-bold text-slate-900 text-xs">
                  Shift Report: {workers.find(w => w.id === selectedWorkerId)?.name}
                </h3>
                <button 
                  onClick={() => setSelectedWorkerId(null)}
                  className="text-slate-400 hover:text-slate-650 p-0.5 rounded cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <form onSubmit={handleSaveNote} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9.5px] font-black text-slate-450 uppercase leading-none">Supervisor Note</label>
                  <textarea 
                    required 
                    rows="3"
                    placeholder="Enter worker logs, safety notes, delays, or task feedback..."
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    className="border border-slate-200 rounded-lg p-2 outline-none text-[10.5px] font-semibold bg-slate-50 placeholder:text-slate-400 focus:border-brandIndigo-500 focus:bg-white"
                  />
                </div>
                <div className="flex gap-2">
                  <button 
                    type="submit"
                    className="bg-brandIndigo-600 hover:bg-brandIndigo-700 text-white font-bold px-3 py-1.5 rounded-xl uppercase text-[9.5px] shadow-sm select-none flex-grow cursor-pointer"
                  >
                    Save Remarks
                  </button>
                  <button 
                    type="button"
                    onClick={() => {
                      // Delete note
                      setWorkers(workers.map(w => 
                        w.id === selectedWorkerId ? { ...w, note: '' } : w
                      ));
                      setSelectedWorkerId(null);
                    }}
                    className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-750 font-bold px-3 py-1.5 rounded-xl uppercase text-[9.5px] select-none cursor-pointer"
                  >
                    Clear Note
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
