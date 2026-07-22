import React from 'react';
import { Mail, Heart, Globe, Calendar } from 'lucide-react';
import { UsedNaijaLogo } from './UsedNaijaLogo';

interface FooterProps {
  onCalendarClick: () => void;
  onVIPClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCalendarClick, onVIPClick }) => {
  return (
    <footer className="w-full bg-neutral-900 text-white pt-10 pb-8 border-t border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-neutral-800">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <UsedNaijaLogo variant="dark" size="md" />
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Nigeria's trusted marketplace for buying and selling quality used household items. Physically inspected, tested, and verified by agents before listing.
            </p>
          </div>

          {/* Opening & Countdown info */}
          <div className="flex flex-col justify-center items-start md:items-center">
            <div className="p-3.5 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 text-center w-full max-w-xs">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-0.5">
                Official Launch Date
              </span>
              <p className="text-lg font-extrabold font-syne text-white flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-[#DA5E02]" />
                August 10, 2026
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">12:00 AM • Africa/Lagos Timezone</p>
              <button
                onClick={onCalendarClick}
                className="mt-2 text-xs text-[#DA5E02] hover:underline font-bold"
              >
                + Add Reminder to Calendar
              </button>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-bold text-neutral-300 font-syne uppercase tracking-wider mb-2">
                Questions or Inquiries?
              </h4>
              <a
                href="mailto:webdevpraise@gmail.com"
                className="text-xs text-neutral-400 hover:text-[#DA5E02] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#DA5E02]" />
                webdevpraise@gmail.com
              </a>
            </div>

            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <button
                onClick={onVIPClick}
                className="px-3.5 py-2 rounded-xl bg-[#DA5E02] hover:bg-[#c25200] text-xs font-bold text-white transition-colors shadow-xs"
              >
                Join Launch Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <div>
            © 2026 Usednaija. All rights reserved.
          </div>

          <div className="flex items-center gap-2 font-semibold text-neutral-300">
            <span>Opening August 10</span>
            <span className="text-neutral-600">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Nigeria
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-neutral-500">
            <Globe className="w-3.5 h-3.5 text-neutral-500" />
            Lokoja • Anyigba • Osara • Kabba
          </div>
        </div>

      </div>
    </footer>
  );
};
