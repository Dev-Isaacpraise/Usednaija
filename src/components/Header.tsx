import React from 'react';
import { ArrowRight, Bell } from 'lucide-react';
import { UsedNaijaLogo } from './UsedNaijaLogo';

interface HeaderProps {
  onVIPClick: () => void;
  onCalendarClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onVIPClick, onCalendarClick }) => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/60 transition-all overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 shrink-0">
          <UsedNaijaLogo size="md" />
          <span className="text-base font-extrabold tracking-tight">
            <span className="text-neutral-900">Used</span>
            <span className="text-[#DA5E02]">naija</span>
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onCalendarClick}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200/80 transition-colors border border-neutral-200"
            title="Remind me on launch day"
          >
            <Bell className="w-3.5 h-3.5 text-[#DA5E02]" />
            <span>Remind Me</span>
          </button>

          <button
            onClick={onVIPClick}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#DA5E02] to-amber-600 hover:from-[#c25200] hover:to-amber-700 transition-all shadow-xs active:scale-[0.98]"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  );
};

