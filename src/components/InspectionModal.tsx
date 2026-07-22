import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HouseholdItem } from '../types';
import { X, ShieldCheck, CheckCircle2, UserCheck, AlertTriangle, Cpu } from 'lucide-react';

interface InspectionModalProps {
  item: HouseholdItem | null;
  onClose: () => void;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Header Gradient */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#DA5E02] via-amber-500 to-[#DA5E02]" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#DA5E02]/10 rounded-xl text-[#DA5E02]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold tracking-wider uppercase mb-1">
                Grade {item.conditionGrade} Verified
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-syne">{item.name}</h3>
            </div>
          </div>

          <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 mb-5">
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-600 mb-1">
              <span>Agent Quality Inspection Rating</span>
              <span className="text-[#DA5E02] font-bold">{item.agentScore}</span>
            </div>
            <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#DA5E02] to-amber-500 rounded-full" style={{ width: item.agentScore }} />
            </div>
          </div>

          <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#DA5E02]" />
            4-Point Physical Verification Checkpoints
          </h4>

          <div className="space-y-3 mb-6">
            {item.inspectionDetails.map((checkpoint, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/60 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-700 font-medium leading-relaxed">{checkpoint}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-[#DA5E02] shrink-0 mt-0.5" />
            <div className="text-xs text-neutral-700 leading-relaxed">
              <strong className="text-neutral-900 block font-semibold mb-0.5">The Usednaija Guarantee</strong>
              If any unlisted fault or discrepancy is discovered within 7 days of delivery, Usednaija provides 100% refund or instant item replacement.
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-[#DA5E02]" />
              Estimated Market Price:
            </span>
            <span className="font-bold text-neutral-900 text-sm">{item.estimatedPriceNaira}</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
