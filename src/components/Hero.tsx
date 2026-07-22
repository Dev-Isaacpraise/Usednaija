import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { CountdownTimer } from './CountdownTimer';
import { WaitlistSubmission } from '../types';
import {
  Rocket,
  Sparkles,
  Check,
  Send,
  CheckCircle2,
  Tv,
  Refrigerator,
  WashingMachine,
  Fan,
  UtensilsCrossed,
  Microwave,
  Armchair,
  Table as TableIcon,
  Bed
} from 'lucide-react';

interface HeroProps {
  onCalendarClick: () => void;
  formRef?: React.RefObject<HTMLDivElement | null>;
}

export const Hero: React.FC<HeroProps> = ({ onCalendarClick, formRef }) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<'Lokoja' | 'Anyigba' | 'Osara' | 'Kabba'>('Lokoja');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('usednaija_vip_waitlist');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.email) {
          setFullName(parsed.fullName || '');
          setEmail(parsed.email);
          setCity(parsed.city || 'Lokoja');
          setIsSubmitted(true);
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !fullName.trim()) return;

    const submission: WaitlistSubmission = {
      fullName,
      email,
      city,
      timestamp: Date.now(),
    };

    localStorage.setItem('usednaija_vip_waitlist', JSON.stringify(submission));
    setIsSubmitted(true);

    // Send waitlist entry directly to webdevpraise@gmail.com via AJAX form submission
    try {
      fetch('https://formsubmit.co/ajax/webdevpraise@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New UsedNaija Waitlist Signup: ${fullName} (${city})`,
          "Full Name": fullName,
          "Email Address": email,
          "Selected City": city,
          "Submitted At": new Date().toLocaleString()
        })
      }).catch(() => {
        // Fallback or offline support silently stored in localStorage
      });
    } catch (err) {
      // ignore network errors
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DA5E02', '#f59e0b', '#10b981']
    });
  };


  // 9 floating household items around the hero
  const floatingItems = [
    { icon: Tv, label: 'Smart TV', top: '12%', left: '4%', delay: 0, anim: 'animate-float' },
    { icon: Refrigerator, label: 'Double Fridge', top: '22%', right: '5%', delay: 0.5, anim: 'animate-float-reverse' },
    { icon: WashingMachine, label: 'Washing Machine', top: '55%', left: '2%', delay: 1, anim: 'animate-float' },
    { icon: Fan, label: 'Rechargeable Fan', top: '65%', right: '4%', delay: 1.5, anim: 'animate-float-reverse' },
    { icon: UtensilsCrossed, label: 'Blender', top: '80%', left: '8%', delay: 0.2, anim: 'animate-float' },
    { icon: Microwave, label: 'Microwave', top: '82%', right: '8%', delay: 0.8, anim: 'animate-float-reverse' },
    { icon: Armchair, label: 'Executive Chair', top: '38%', left: '7%', delay: 1.2, anim: 'animate-float-reverse' },
    { icon: TableIcon, label: 'Dining Table', top: '42%', right: '6%', delay: 0.4, anim: 'animate-float' },
    { icon: Bed, label: 'Ortho Mattress', top: '8%', right: '18%', delay: 0.7, anim: 'animate-float' },
  ];

  return (
    <section className="relative w-full flex flex-col justify-center items-center px-3 sm:px-6 lg:px-8 py-6 sm:py-10 overflow-x-hidden bg-white">
      {/* Frosted Glass Background Ambient Blobs */}
      <div className="blob w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-orange-100/60 top-[-100px] left-[-100px] opacity-40 pointer-events-none" />
      <div className="blob w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-amber-200/50 bottom-[-50px] right-[-50px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] gradient-glow pointer-events-none" />

      {/* Floating Household Item Micro Cards (Desktop visual decoration) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none max-w-7xl mx-auto">
        {floatingItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 0.8, delay: item.delay }}
              style={{ top: item.top, left: item.left, right: item.right }}
              className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200/70 shadow-md ${item.anim}`}
            >
              <div className="p-1.5 rounded-xl bg-[#DA5E02]/10 text-[#DA5E02]">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-bold text-neutral-800">{item.label}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Agent Verified" />
            </motion.div>
          );
        })}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Launch Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 via-amber-500/15 to-orange-500/10 border border-[#DA5E02]/30 text-[#DA5E02] text-xs font-bold shadow-xs mb-4"
        >
          <Rocket className="w-3.5 h-3.5 text-[#DA5E02] animate-bounce" />
          <span>🚀 Launching August 10, 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 font-syne tracking-tight leading-[1.1]"
        >
          Usednaija is <span className="bg-gradient-to-r from-[#DA5E02] via-amber-600 to-[#DA5E02] bg-clip-text text-transparent">Almost Here.</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed font-normal"
        >
          Nigeria's trusted marketplace for verified used household items. Every product is carefully inspected and verified before listing.
        </motion.p>


        {/* Real Countdown Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full my-4"
        >
          <CountdownTimer />
        </motion.div>

        {/* Waitlist Signup Form Box */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-xl mx-auto mt-2 p-6 sm:p-8 glass rounded-3xl relative orange-glow transition-all focus-within:ring-2 ring-[#DA5E02]"
        >
          <div className="flex items-center justify-between mb-6 text-left">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-[#DA5E02]/10 rounded-xl text-[#DA5E02]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-syne">
                  Join the Waitlist
                </h3>
                <p className="text-xs text-neutral-500">Be first to access verified listings in your city on August 10, 2026</p>
              </div>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Full Name Field */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Samuel Adebayo"
                  className="w-full px-4 py-3 bg-white/90 rounded-xl text-sm font-medium text-neutral-900 placeholder-neutral-400 border border-neutral-200 focus:outline-none focus:border-[#DA5E02] transition-all"
                />
              </div>

              {/* Email & City row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/90 rounded-xl text-sm font-medium text-neutral-900 placeholder-neutral-400 border border-neutral-200 focus:outline-none focus:border-[#DA5E02] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Select Your City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value as any)}
                    className="w-full px-4 py-3 bg-white/90 rounded-xl text-sm font-bold text-neutral-800 border border-neutral-200 focus:outline-none focus:border-[#DA5E02]"
                  >
                    <option value="Lokoja">Lokoja</option>
                    <option value="Anyigba">Anyigba</option>
                    <option value="Osara">Osara</option>
                    <option value="Kabba">Kabba</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#DA5E02] to-amber-600 hover:from-[#c25200] hover:to-amber-700 text-white font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 group hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Join the Waitlist</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-neutral-400 text-center">
                🔒 Spam-free guaranteed. We'll send you an early invite when Usednaija opens in {city}.
              </p>
            </form>
          ) : (
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-neutral-900 font-syne">You're on the Waitlist!</h4>
                <p className="text-xs text-neutral-600 mt-1 max-w-sm mx-auto">
                  Thank you, <strong className="text-neutral-900">{fullName}</strong>! You have been successfully registered for early access in <strong className="text-[#DA5E02]">{city}</strong> on August 10, 2026.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={onCalendarClick}
                  className="px-4 py-2 bg-white text-xs font-bold text-neutral-800 border border-neutral-200 rounded-xl shadow-xs hover:border-[#DA5E02] transition-colors"
                >
                  📅 Save Launch Date to Calendar
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Quick Trust Highlights under form */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-neutral-500">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" />
            Tested Household Appliances
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" />
            Agent Physical Verification
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" />
            Escrow Buyer Protection
          </span>
        </div>

      </div>
    </section>
  );
};
