import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, ShieldCheck, Lock, Truck, CheckCircle2, Award } from 'lucide-react';

export const VerificationPillars: React.FC = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: "Agent Physical Inspection",
      description: "Unlike open marketplaces where anyone posts unverified photos, trained Usednaija agents physically visit sellers to test every button, plug, and function before listing.",
      highlight: "In-Person Tested"
    },
    {
      icon: ShieldCheck,
      title: "100% Functional Guarantee",
      description: "Every item receives an official condition grade (A+, A, or Like New). If an item fails our rigorous 20-point test checklist, it is rejected and never listed.",
      highlight: "Grade A Certified"
    },
    {
      icon: Lock,
      title: "Escrow Payment Protection",
      description: "Your money is safely held in escrow. Payment is only released to the seller after you receive, inspect, and approve your household item at your doorstep.",
      highlight: "100% Risk-Free"
    },
    {
      icon: Truck,
      title: "Doorstep Verified Delivery",
      description: "Our dedicated logistics network picks up directly from verified sellers and delivers safely to buyers across Lagos, Abuja, Port Harcourt, and major Nigerian cities.",
      highlight: "Fast Direct Transport"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-orange-500/5 via-white to-white py-20 border-y border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DA5E02]/10 text-[#DA5E02] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>Why Usednaija is Different</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 font-syne tracking-tight">
            Safer, Reliable Buying & Selling for Nigeria
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            We are eliminating the risks of buying used household items online. No more broken compressors, dead pixels, or ghost sellers.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-7 bg-white rounded-3xl border border-neutral-200/80 shadow-lg hover:shadow-xl hover:border-[#DA5E02]/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 bg-[#DA5E02]/10 rounded-2xl text-[#DA5E02] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-orange-50 text-[#DA5E02] border border-orange-200">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 font-syne mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Verified Agent Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DA5E02]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-bold text-[#DA5E02] uppercase tracking-widest block mb-1">
              Traditional Marketplace vs. Usednaija
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-syne text-white">
              Ready to sell or upgrade your household items safely?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-lg">
              Sellers get paid instantly upon agent verification. Buyers shop with 100% peace of mind.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#DA5E02] to-amber-600 font-bold text-sm text-white shadow-lg">
              August 10, 2026 Official Launch
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
