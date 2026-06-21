import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import StoryHero from './components/StoryHero';
import Showcase from './components/Showcase';
import ParallaxStory from './components/ParallaxStory';
import LinearGrid from './components/LinearGrid';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import InteractivePricing from './components/InteractivePricing';
import CTABanner from './components/CTABanner';
import LeadCaptureForm from './components/LeadCaptureForm';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#fafafa] min-h-screen text-[#0f172a] font-body selection:bg-brandIndigo-500/10 selection:text-brandIndigo-700 overflow-x-clip relative">
      
      {/* Page Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      
      {/* Main Content (Mounts after preloader finishes) */}
      {!loading && (
        <div className="flex flex-col">
          <Navbar />
          <StoryHero />
          <Showcase />
          <ParallaxStory />
          <LinearGrid />
          <Portfolio />
          <Process />
          <InteractivePricing />
          <CTABanner />
          <LeadCaptureForm />
          <Footer />
        </div>
      )}
    </div>
  );
}
