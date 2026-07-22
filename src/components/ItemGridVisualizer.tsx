import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HOUSEHOLD_ITEMS } from '../data/householdItems';
import { HouseholdItem } from '../types';
import {
  Tv,
  Refrigerator,
  WashingMachine,
  Fan,
  UtensilsCrossed,
  Microwave,
  Armchair,
  Table,
  Bed,
  CheckCircle2,
  ShieldCheck,
  Search,
  Filter,
  Sparkles
} from 'lucide-react';

interface ItemGridVisualizerProps {
  onSelectItem: (item: HouseholdItem) => void;
}

export const ItemGridVisualizer: React.FC<ItemGridVisualizerProps> = ({ onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const renderItemIcon = (iconName: string) => {
    const props = { className: 'w-7 h-7 text-[#DA5E02]' };
    switch (iconName) {
      case 'Tv': return <Tv {...props} />;
      case 'Refrigerator': return <Refrigerator {...props} />;
      case 'WashingMachine': return <WashingMachine {...props} />;
      case 'Fan': return <Fan {...props} />;
      case 'UtensilsCrossed': return <UtensilsCrossed {...props} />;
      case 'Microwave': return <Microwave {...props} />;
      case 'Armchair': return <Armchair {...props} />;
      case 'Table': return <Table {...props} />;
      case 'Bed': return <Bed {...props} />;
      default: return <Tv {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Verified Items (9)' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'appliances', label: 'Home Appliances' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'bedroom', label: 'Bedroom' },
  ];

  const filteredItems = HOUSEHOLD_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.verificationBadge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-[#DA5E02] text-xs font-bold tracking-wider uppercase mb-3 border border-[#DA5E02]/20">
          <ShieldCheck className="w-4 h-4" />
          <span>Launch Catalog Preview</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-syne tracking-tight">
          Every Single Item Physically Tested & Verified
        </h2>
        <p className="mt-3 text-base text-neutral-600 leading-relaxed">
          No fake pictures, no non-working surprises. Usednaija agents visit sellers, perform rigorous multi-point functional tests, and issue official verification badges before listing.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 glass p-3 rounded-2xl shadow-xs">
        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#DA5E02] text-white shadow-md'
                  : 'bg-white/60 text-neutral-600 hover:bg-white/90'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search TV, Fridge, Fan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white/80 rounded-xl text-xs font-medium text-neutral-800 placeholder-neutral-400 border border-neutral-200 focus:outline-none focus:border-[#DA5E02] transition-colors"
          />
        </div>
      </div>

      {/* Grid of Household Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className={`group relative p-6 rounded-2xl bg-gradient-to-br ${item.gradient} glass-card hover:shadow-xl transition-all cursor-pointer overflow-hidden`}
            onClick={() => onSelectItem(item)}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DA5E02]/5 rounded-bl-full pointer-events-none group-hover:bg-[#DA5E02]/10 transition-colors" />

            {/* Top row icon & badge */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="p-3 bg-white rounded-2xl shadow-xs border border-neutral-100 group-hover:scale-110 transition-transform">
                {renderItemIcon(item.iconName)}
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold tracking-wider uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {item.conditionGrade}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-neutral-900 font-syne mb-1 group-hover:text-[#DA5E02] transition-colors">
              {item.name}
            </h3>

            {/* Price Range */}
            <div className="text-sm font-semibold text-neutral-500 mb-3">
              Est. Launch Price: <span className="text-neutral-900 font-bold">{item.estimatedPriceNaira}</span>
            </div>

            {/* Verification Badge Bar */}
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DA5E02] shrink-0" />
              <p className="text-xs text-neutral-700 font-medium line-clamp-1">
                {item.verificationBadge}
              </p>
            </div>

            {/* Card Action footer */}
            <div className="flex items-center justify-between text-xs font-bold text-[#DA5E02] group-hover:underline">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                View 4-Point Inspection Checklist
              </span>
              <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-neutral-500">
          🔍 Over 1,200+ verified used items staged in Lagos & Abuja warehouses ahead of August 10 launch.
        </p>
      </div>
    </section>
  );
};
