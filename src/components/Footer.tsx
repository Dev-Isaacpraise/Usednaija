import React from 'react';
import { UsedNaijaLogo } from './UsedNaijaLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-900 text-white pt-10 pb-8 border-t border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 pb-8 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <UsedNaijaLogo variant="dark" size="md" />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-white">Used</span>
              <span className="text-[#DA5E02]">naija</span>
            </span>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed max-w-2xl text-center">
            Nigeria's trusted marketplace for buying and selling quality used household items. Physically inspected, tested, and verified by agents before listing.
          </p>
        </div>

        <div className="pt-8 text-center">
          <p className="text-sm text-neutral-400">August 10, 2026</p>
        </div>

        <div className="pt-6 text-center text-xs text-neutral-400">
          © 2026 Usednaija. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
