import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { CalendarModal } from './components/CalendarModal';

export default function App() {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToVIPForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // highlight effect
      formRef.current.classList.add('ring-4', 'ring-[#DA5E02]/50');
      setTimeout(() => {
        formRef.current?.classList.remove('ring-4', 'ring-[#DA5E02]/50');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#DA5E02]/20 selection:text-[#DA5E02] flex flex-col justify-between">
      {/* Top Navbar Header */}
      <Header
        onVIPClick={scrollToVIPForm}
        onCalendarClick={() => setIsCalendarOpen(true)}
      />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Hero & Waitlist Section */}
        <Hero
          onCalendarClick={() => setIsCalendarOpen(true)}
          formRef={formRef}
        />
      </main>

      {/* Footer */}
      <Footer
        onCalendarClick={() => setIsCalendarOpen(true)}
        onVIPClick={scrollToVIPForm}
      />

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </div>
  );
}
