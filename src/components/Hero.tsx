import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { CountdownTimer } from './CountdownTimer';
import { Check, Send, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCalendarClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCalendarClick }) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<'Lokoja' | 'Anyigba' | 'Osara' | 'Kabba'>('Lokoja');
  const [formStatus, setFormStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage('');

    if (!email || !email.includes('@') || !fullName.trim()) {
      setFormStatus('error');
      setFormMessage('Please enter your full name and a valid email address.');
      return;
    }

    setFormStatus('pending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/webdevpraise@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Usednaija Waitlist Signup: ${fullName} (${city})`,
          name: fullName,
          email,
          city,
          _autoresponse: `Thank you ${fullName}! Your waitlist request has been received.`,
          _template: 'box'
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('success');
        setFormMessage('Thanks! You’re on the waitlist. We’ll send an early access invite soon.');
        setFullName('');
        setEmail('');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#DA5E02', '#f59e0b', '#10b981']
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Unable to submit right now. Please try again in a moment.');
    }
  };

  return (
    <section className="relative w-full flex flex-col justify-center items-center px-3 sm:px-6 lg:px-8 py-6 sm:py-10 overflow-hidden bg-white">
      {/* Frosted Glass Background Ambient Blobs */}
      <div className="blob w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-orange-100/60 top-[-100px] left-[-100px] opacity-40 pointer-events-none" />
      <div className="blob w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-amber-200/50 bottom-[-50px] right-[-50px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] gradient-glow pointer-events-none" />

      {/* Floating Household Item Micro Cards (Desktop visual decoration) */}
      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center">

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-xl mx-auto mt-2 p-6 sm:p-8 glass rounded-3xl relative orange-glow transition-all focus-within:ring-2 ring-[#DA5E02]"
        >
          <div className="flex items-center justify-between mb-6 text-left">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-[#DA5E02]/10 rounded-xl text-[#DA5E02]">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-syne">
                  Join the Waitlist
                </h3>
                <p className="text-xs text-neutral-500">Be first to access verified listings in your city on August 10, 2026</p>
              </div>
            </div>
          </div>

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
              disabled={formStatus === 'pending'}
              className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#DA5E02] to-amber-600 hover:from-[#c25200] hover:to-amber-700 text-white font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 group hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>Join the Waitlist</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {formStatus !== 'idle' && (
              <div className={`rounded-2xl border px-4 py-3 text-sm ${formStatus === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-rose-50 border-rose-200 text-rose-700'}`}>
                {formMessage}
              </div>
            )}
          </form>
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
