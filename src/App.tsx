import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { CalendarModal } from './components/CalendarModal';

export default function App() {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#DA5E02]/20 selection:text-[#DA5E02] flex flex-col justify-between">
      {/* Top Navbar Header */}
      <Header
        onVIPClick={() => { }}
        onCalendarClick={() => setIsCalendarOpen(true)}
      />

      {/* Main Single Page Content */}
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero & Waitlist Section */}
        <Hero
          onCalendarClick={() => setIsCalendarOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </div>
  );
}
