import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, X, ExternalLink, Download, Check } from 'lucide-react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // August 10, 2026 00:00:00 WAT (UTC+1)
  const eventTitle = encodeURIComponent("Usednaija.store Official Launch!");
  const eventDetails = encodeURIComponent("Nigeria's trusted marketplace for verified used household items goes live today. Visit https://usednaija.store to shop inspected appliances with 100% buyer protection!");
  const eventLocation = encodeURIComponent("Usednaija.store (Lagos, Nigeria)");
  
  // ISO format for Aug 10, 2026: 20260810T000000Z / 20260810T235959Z
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=20260809T230000Z/20260810T220000Z&details=${eventDetails}&location=${eventLocation}`;

  const downloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Usednaija Store//Launch Event//EN
BEGIN:VEVENT
SUMMARY:Usednaija.store Official Launch
DESCRIPTION:Nigeria's trusted marketplace for verified used household items goes live! Every product is physically tested and verified by agents.
LOCATION:https://usednaija.store
DTSTART:20260809T230000Z
DTEND:20260810T220000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Usednaija-Launch-Aug10-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-neutral-200/80 overflow-hidden"
        >
          {/* Header gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#DA5E02] via-amber-500 to-[#DA5E02]" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#DA5E02]/10 rounded-xl text-[#DA5E02]">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 font-syne">Add Launch to Calendar</h3>
              <p className="text-xs text-neutral-500">August 10, 2026 • 12:00 AM (WAT)</p>
            </div>
          </div>

          <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
            Never miss launch day! Save a reminder to your calendar so you can claim early bird deals on verified laptops, TVs, fridges, and home furniture.
          </p>

          <div className="space-y-3">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-semibold text-sm transition-all shadow-md group"
            >
              <span className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#DA5E02]" />
                Add to Google Calendar
              </span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>

            <button
              onClick={downloadICS}
              className="flex items-center justify-between w-full p-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl font-semibold text-sm transition-all border border-neutral-200 group"
            >
              <span className="flex items-center gap-2.5">
                <Download className="w-4 h-4 text-neutral-600" />
                Download Apple / iCal (.ics)
              </span>
              <Check className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          <p className="text-center text-xs text-neutral-400 mt-5">
            🇳🇬 Launching across Lokoja, Anyigba, Osara & Kabba.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
