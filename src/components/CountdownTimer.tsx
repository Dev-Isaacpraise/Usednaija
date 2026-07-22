import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { TimeLeft } from '../types';
import { Clock, Sparkles, PartyPopper, RefreshCw, Zap } from 'lucide-react';

interface CountdownTimerProps {
  onLiveStateChange?: (isLive: boolean) => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ onLiveStateChange }) => {
  // Target: August 10, 2026 00:00:00 WAT (Africa/Lagos = UTC+1)
  const targetDate = new Date('2026-08-10T00:00:00+01:00').getTime();

  const [testMode, setTestMode] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      if (testMode) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
        onLiveStateChange?.(true);
        return;
      }

      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
        onLiveStateChange?.(true);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isLive: false });
        onLiveStateChange?.(false);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [testMode, targetDate, onLiveStateChange]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DA5E02', '#f59e0b', '#10b981', '#3b82f6', '#ec4899']
    });
  };

  const handleTestToggle = () => {
    const newTestState = !testMode;
    setTestMode(newTestState);
    if (newTestState) {
      triggerConfetti();
    }
  };

  if (timeLeft.isLive) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-2xl mx-auto my-6 p-8 rounded-3xl bg-gradient-to-r from-[#DA5E02] via-amber-600 to-[#DA5E02] text-white text-center shadow-2xl orange-glow relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
            <PartyPopper className="w-10 h-10 text-amber-200 animate-bounce" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-syne tracking-tight">
            🎉 We're Live!
          </h2>
          <p className="text-lg sm:text-xl font-medium text-amber-100 max-w-md">
            Welcome to Usednaija.store! Nigeria's trusted verified marketplace is officially open.
          </p>

          <button
            onClick={triggerConfetti}
            className="mt-4 px-6 py-3 bg-white text-[#DA5E02] hover:bg-amber-50 font-bold rounded-2xl shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Celebrate & Explore Marketplace
          </button>

          {testMode && (
            <button
              onClick={handleTestToggle}
              className="mt-4 text-xs underline text-amber-200 hover:text-white flex items-center gap-1 opacity-80"
            >
              <RefreshCw className="w-3 h-3" />
              Reset Countdown Timer
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      {/* Timezone badge */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
          <Clock className="w-3.5 h-3.5 text-[#DA5E02]" />
          Target: Aug 10, 2026 • 12:00 AM (Africa/Lagos WAT)
        </span>
      </div>

      {/* Countdown Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="relative flex flex-col items-center justify-center p-4 sm:p-6 glass rounded-2xl transition-all group hover:border-[#DA5E02]/40"
          >
            {/* Top glowing orange line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#DA5E02]/30 rounded-full group-hover:w-20 group-hover:bg-[#DA5E02] transition-all" />

            <AnimatePresence mode="popLayout">
              <motion.span
                key={unit.value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`font-syne text-4xl sm:text-6xl font-extrabold tracking-tight ${
                  unit.label === 'Seconds' ? 'orange-text' : 'text-neutral-900'
                }`}
              >
                {String(unit.value).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Subtle preview trigger */}
      <div className="flex justify-center mt-3">
        <button
          onClick={handleTestToggle}
          className="text-[11px] font-medium text-neutral-400 hover:text-[#DA5E02] transition-colors flex items-center gap-1.5 px-3 py-1 rounded-full hover:bg-orange-50 border border-transparent hover:border-orange-200"
        >
          <Zap className="w-3 h-3 text-amber-500" />
          <span>Toggle "Live Launch" View Demo</span>
        </button>
      </div>
    </div>
  );
};
