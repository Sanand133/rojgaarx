import React, { useState } from 'react';
import {
  Wrench,
  Zap,
  Hammer,
  BrickWall,
  Sparkles,
  Heart,
  Flame,
  UtensilsCrossed,
  HardHat,
  UserCheck,
  Paintbrush,
  Car,
  Sprout,
  Check,
  ShieldCheck,
  ChevronRight,
  X,
  Clock,
  Layers,
  Sparkle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceCategory, LanguageCode } from '../../types';
import { getTranslation } from '../../utils/translations';
import { getLocalizedCategory } from '../../utils/localizedData';

interface ServiceCategoryGridProps {
  categories: ServiceCategory[];
  selectedCategoryId: string | null;
  onSelectCategory: (id: string) => void;
  language: LanguageCode;
}

interface TradeTheme {
  iconBg: string;
  iconColor: string;
  borderColor: string;
  glowColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}

const TRADE_THEMES: Record<string, TradeTheme> = {
  'cat-plumbing': {
    iconBg: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-700',
    iconColor: 'text-cyan-700',
    borderColor: 'group-hover:border-cyan-400',
    glowColor: 'bg-cyan-400/10',
    badgeBg: 'bg-cyan-500/15 backdrop-blur-md',
    badgeText: 'text-cyan-900',
    badgeBorder: 'border-cyan-400/30',
  },
  'cat-electric': {
    iconBg: 'bg-amber-500/15 border-amber-400/40 text-amber-700',
    iconColor: 'text-amber-700',
    borderColor: 'group-hover:border-amber-400',
    glowColor: 'bg-amber-400/10',
    badgeBg: 'bg-amber-500/15 backdrop-blur-md',
    badgeText: 'text-amber-900',
    badgeBorder: 'border-amber-400/30',
  },
  'cat-carpentry': {
    iconBg: 'bg-orange-500/15 border-orange-400/40 text-orange-800',
    iconColor: 'text-orange-800',
    borderColor: 'group-hover:border-orange-400',
    glowColor: 'bg-orange-400/10',
    badgeBg: 'bg-orange-500/15 backdrop-blur-md',
    badgeText: 'text-orange-950',
    badgeBorder: 'border-orange-400/30',
  },
  'cat-masonry': {
    iconBg: 'bg-stone-500/15 border-stone-400/40 text-stone-800',
    iconColor: 'text-stone-800',
    borderColor: 'group-hover:border-stone-400',
    glowColor: 'bg-stone-400/10',
    badgeBg: 'bg-stone-500/15 backdrop-blur-md',
    badgeText: 'text-stone-900',
    badgeBorder: 'border-stone-400/30',
  },
  'cat-cleaning': {
    iconBg: 'bg-teal-500/15 border-teal-400/40 text-teal-700',
    iconColor: 'text-teal-700',
    borderColor: 'group-hover:border-teal-400',
    glowColor: 'bg-teal-400/10',
    badgeBg: 'bg-teal-500/15 backdrop-blur-md',
    badgeText: 'text-teal-900',
    badgeBorder: 'border-teal-400/30',
  },
  'cat-care': {
    iconBg: 'bg-rose-500/15 border-rose-400/40 text-rose-700',
    iconColor: 'text-rose-700',
    borderColor: 'group-hover:border-rose-400',
    glowColor: 'bg-rose-400/10',
    badgeBg: 'bg-rose-500/15 backdrop-blur-md',
    badgeText: 'text-rose-900',
    badgeBorder: 'border-rose-400/30',
  },
  'cat-cook': {
    iconBg: 'bg-amber-600/15 border-amber-500/40 text-amber-800',
    iconColor: 'text-amber-800',
    borderColor: 'group-hover:border-amber-500',
    glowColor: 'bg-amber-500/10',
    badgeBg: 'bg-amber-500/15 backdrop-blur-md',
    badgeText: 'text-amber-950',
    badgeBorder: 'border-amber-400/30',
  },
  'cat-labour': {
    iconBg: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-800',
    iconColor: 'text-emerald-800',
    borderColor: 'group-hover:border-emerald-400',
    glowColor: 'bg-emerald-400/10',
    badgeBg: 'bg-emerald-500/15 backdrop-blur-md',
    badgeText: 'text-emerald-950',
    badgeBorder: 'border-emerald-400/30',
  },
  'cat-helper': {
    iconBg: 'bg-blue-500/15 border-blue-400/40 text-blue-700',
    iconColor: 'text-blue-700',
    borderColor: 'group-hover:border-blue-400',
    glowColor: 'bg-blue-400/10',
    badgeBg: 'bg-blue-500/15 backdrop-blur-md',
    badgeText: 'text-blue-900',
    badgeBorder: 'border-blue-400/30',
  },
  'cat-painting': {
    iconBg: 'bg-violet-500/15 border-violet-400/40 text-violet-700',
    iconColor: 'text-violet-700',
    borderColor: 'group-hover:border-violet-400',
    glowColor: 'bg-violet-400/10',
    badgeBg: 'bg-violet-500/15 backdrop-blur-md',
    badgeText: 'text-violet-900',
    badgeBorder: 'border-violet-400/30',
  },
  'cat-driving': {
    iconBg: 'bg-sky-500/15 border-sky-400/40 text-sky-700',
    iconColor: 'text-sky-700',
    borderColor: 'group-hover:border-sky-400',
    glowColor: 'bg-sky-400/10',
    badgeBg: 'bg-sky-500/15 backdrop-blur-md',
    badgeText: 'text-sky-900',
    badgeBorder: 'border-sky-400/30',
  },
  'cat-gardening': {
    iconBg: 'bg-lime-500/15 border-lime-400/40 text-lime-700',
    iconColor: 'text-lime-700',
    borderColor: 'group-hover:border-lime-400',
    glowColor: 'bg-lime-400/10',
    badgeBg: 'bg-lime-500/15 backdrop-blur-md',
    badgeText: 'text-lime-900',
    badgeBorder: 'border-lime-400/30',
  },
};

export const ServiceCategoryGrid: React.FC<ServiceCategoryGridProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  language,
}) => {
  const t = getTranslation(language);
  const [filterMode, setFilterMode] = useState<'all' | 'emergency' | 'pension'>('all');

  const getIcon = (iconName: string, isSelected: boolean, theme: TradeTheme) => {
    const props = {
      className: `w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:scale-110 ${
        isSelected ? 'text-emerald-700' : theme.iconColor
      }`,
    };
    switch (iconName) {
      case 'Wrench':
        return <Wrench {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Hammer':
        return <Hammer {...props} />;
      case 'BrickWall':
        return <BrickWall {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Heart':
        return <Heart {...props} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed {...props} />;
      case 'HardHat':
        return <HardHat {...props} />;
      case 'UserCheck':
        return <UserCheck {...props} />;
      case 'Paintbrush':
        return <Paintbrush {...props} />;
      case 'Car':
        return <Car {...props} />;
      case 'Sprout':
        return <Sprout {...props} />;
      default:
        return <Wrench {...props} />;
    }
  };

  const filteredCategories = categories.filter((cat) => {
    if (filterMode === 'emergency') {
      return cat.emergencyAvailable;
    }
    if (filterMode === 'pension') {
      return cat.badge?.toLowerCase().includes('pension') || cat.badge?.toLowerCase().includes('shram');
    }
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/80 backdrop-blur-2xl border-2 border-stone-200/90 rounded-3xl p-5 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.03)] relative overflow-hidden space-y-5"
    >
      {/* Frosted Ambient Glow Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -mr-24 -mt-24" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -ml-24 -mb-24" />

      {/* Category Section Header with Frosted Glass Controls */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200/80 pb-5">
        <div className="space-y-1.5 max-w-2xl">
          {/* Statutory Guild Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-800 text-[11px] font-black uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SIH 26089 • Statutory Accredited Trade Guilds</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-slate-950 tracking-tight leading-tight">
            {t.categoryGrid.title || 'Government Accredited Trade Guilds'}
          </h2>

          <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
            Cooperative rate cards with zero middleman deductions • 100% direct artisan payouts • Zero surge pricing • Statutory ESIC, tool insurance & pension reserve.
          </p>
        </div>

        {/* Frosted Glass Segmented Mode Tabs & Quick Reset */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
          {/* Sub-Filter Segmented Frosted Controls */}
          <div className="bg-white/80 backdrop-blur-xl border border-stone-300/80 rounded-2xl p-1 shadow-xs inline-flex gap-1">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`
                px-3 py-1.5 rounded-xl font-display font-black text-[11px] uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5
                ${
                  filterMode === 'all'
                    ? 'bg-slate-950 text-white shadow-[1px_1px_0px_#000000]'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-stone-100/80'
                }
              `}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All ({categories.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('emergency')}
              className={`
                px-3 py-1.5 rounded-xl font-display font-black text-[11px] uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5
                ${
                  filterMode === 'emergency'
                    ? 'bg-rose-600 text-white shadow-[1px_1px_0px_#000000]'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-stone-100/80'
                }
              `}
            >
              <Flame className="w-3.5 h-3.5 text-rose-500" />
              <span>Emergency 45m</span>
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('pension')}
              className={`
                px-3 py-1.5 rounded-xl font-display font-black text-[11px] uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5
                ${
                  filterMode === 'pension'
                    ? 'bg-emerald-700 text-white shadow-[1px_1px_0px_#000000]'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-stone-100/80'
                }
              `}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Social Cover</span>
            </button>
          </div>

          {/* Reset / Clear Selected Category Button */}
          {selectedCategoryId && (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              type="button"
              onClick={() => onSelectCategory(selectedCategoryId)}
              className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Filter</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Grid of Frosted Glass Trade Guild Tiles */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
        <AnimatePresence>
          {filteredCategories.map((rawCat, index) => {
            const isSelected = selectedCategoryId === rawCat.id;
            const cat = getLocalizedCategory(rawCat, language);
            const theme = TRADE_THEMES[cat.id] || {
              iconBg: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-700',
              iconColor: 'text-emerald-700',
              borderColor: 'group-hover:border-emerald-400',
              glowColor: 'bg-emerald-400/10',
              badgeBg: 'bg-emerald-500/15 backdrop-blur-md',
              badgeText: 'text-emerald-900',
              badgeBorder: 'border-emerald-400/30',
            };

            return (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectCategory(cat.id)}
                className={`
                  p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer select-none group relative flex flex-col justify-between overflow-hidden
                  ${
                    isSelected
                      ? 'bg-gradient-to-br from-emerald-500/15 via-white/95 to-teal-500/10 border-emerald-500 shadow-[0_12px_35px_rgba(12,131,31,0.22)] ring-4 ring-emerald-500/15'
                      : `bg-white/80 hover:bg-white/95 backdrop-blur-xl border-stone-200/90 ${theme.borderColor} hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]`
                  }
                `}
              >
                {/* Subtle Ambient Corner Light Bleed */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${theme.glowColor} rounded-full blur-xl pointer-events-none -mr-8 -mt-8 transition-opacity group-hover:opacity-100 ${
                    isSelected ? 'opacity-100' : 'opacity-60'
                  }`}
                />

                <div>
                  {/* Top Row: Frosted Icon Squircle + Accreditation Badge Chip */}
                  <div className="flex items-start justify-between gap-1.5 mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-105 ${
                        isSelected
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                          : `${theme.iconBg} backdrop-blur-md`
                      }`}
                    >
                      {getIcon(cat.iconName, isSelected, theme)}
                    </div>

                    {cat.badge && (
                      <span
                        className={`inline-flex items-center text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg border shadow-xs whitespace-nowrap leading-normal ${
                          isSelected
                            ? 'bg-emerald-600/20 text-emerald-950 border-emerald-500/50'
                            : `${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`
                        }`}
                      >
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Tagline */}
                  <div className="space-y-1">
                    <h3
                      className={`font-display font-black text-[14px] sm:text-[15px] leading-tight transition-colors ${
                        isSelected
                          ? 'text-emerald-950'
                          : 'text-slate-900 group-hover:text-emerald-800'
                      }`}
                    >
                      {cat.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 font-medium leading-relaxed">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                {/* Micro Tariff & Guild Footer */}
                <div className="border-t border-stone-200/80 pt-2.5 mt-3 flex items-center justify-between text-xs">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase text-slate-600">Standard Base</span>
                    <span className="font-display font-black text-slate-950 text-xs sm:text-sm">
                      ₹{cat.baseHourlyRate}/hr
                    </span>
                  </div>

                  {/* Action / Selection Pill */}
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 rounded-md shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Active</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-slate-600 group-hover:text-emerald-700 transition-colors">
                      <span>Explore</span>
                      <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </div>

                {/* Selected Corner Checkmark Beacon */}
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md animate-in fade-in zoom-in duration-200">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Grid Bottom Guarantee Banner */}
      <div className="relative z-10 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-slate-800 font-bold">
          <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Sparkle className="w-4 h-4" />
          </div>
          <div>
            <span className="font-black text-slate-950 block">Universal 0% Platform Deduction Mandate</span>
            <span className="text-[11px] text-slate-600 font-medium">
              Every guild artisan receives 100% of the customer bill directly via UPI immediately upon job sign-off.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-2.5 py-1 rounded-lg">
            142+ Cashless Hospitals Linked
          </span>
          <span className="text-[11px] font-bold text-cyan-800 bg-cyan-100/90 border border-cyan-300 px-2.5 py-1 rounded-lg">
            ₹5,00,000 ESIC Policy
          </span>
        </div>
      </div>
    </motion.div>
  );
};

