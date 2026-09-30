import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Zap,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Percent,
  Eye,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Building,
  Award,
  Filter,
  Check,
  ArrowRight,
  TrendingDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ComboExpert, LanguageCode } from '../../types';
import { getTranslation } from '../../utils/translations';
import { getLocalizedCombo } from '../../utils/localizedData';

interface ExpertSectionProps {
  comboExperts: ComboExpert[];
  onBookCombo: (expert: ComboExpert) => void;
  onViewWorkerDetails?: (expert: ComboExpert) => void;
  language?: LanguageCode;
}

export const ExpertSection: React.FC<ExpertSectionProps> = ({
  comboExperts,
  onBookCombo,
  onViewWorkerDetails,
  language = 'en',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTasksId, setExpandedTasksId] = useState<string | null>(null);
  const t = getTranslation(language);

  // Filter chips definitions
  const filterCategories = useMemo(() => [
    { id: 'all', label: language === 'hi' ? 'सभी कॉम्बो (8)' : 'All Bundles (8)' },
    { id: 'electric-plumb', label: language === 'hi' ? 'बिजली व प्लंबिंग' : 'Electrical & Plumbing' },
    { id: 'carpenter-mason', label: language === 'hi' ? 'सुतारकाम व चिनाई' : 'Carpentry & Masonry' },
    { id: 'ac-appliance', label: language === 'hi' ? 'एसी व उपकरण' : 'AC & Cooling' },
    { id: 'care-culinary', label: language === 'hi' ? 'देखभाल व रसोइया' : 'Care & Culinary' },
    { id: 'paint-waterproof', label: language === 'hi' ? 'पेंट व वाटरप्रूफिंग' : 'Painting & Waterproof' },
  ], [language]);

  // Filter combo experts
  const filteredExperts = useMemo(() => {
    if (selectedCategory === 'all') return comboExperts;
    if (selectedCategory === 'electric-plumb') {
      return comboExperts.filter((e) =>
        e.comboTrades.some((t) => /electric|plumb|hydro/i.test(t))
      );
    }
    if (selectedCategory === 'carpenter-mason') {
      return comboExperts.filter((e) =>
        e.comboTrades.some((t) => /carpenter|mason|wood/i.test(t))
      );
    }
    if (selectedCategory === 'ac-appliance') {
      return comboExperts.filter((e) =>
        e.comboTrades.some((t) => /ac|hvac|current/i.test(t))
      );
    }
    if (selectedCategory === 'care-culinary') {
      return comboExperts.filter((e) =>
        e.comboTrades.some((t) => /cook|chef|nanny|caregiver|nursing/i.test(t))
      );
    }
    if (selectedCategory === 'paint-waterproof') {
      return comboExperts.filter((e) =>
        e.comboTrades.some((t) => /paint|waterproof/i.test(t))
      );
    }
    return comboExperts;
  }, [comboExperts, selectedCategory]);

  return (
    <motion.section
      id="expert-section"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      {/* Outer Framing Container with Rich Contrast against Pure White Cards */}
      <div className="bg-[#EAE5DC]/90 border-2 border-stone-300/90 rounded-3xl p-4 sm:p-6 lg:p-7 shadow-sm space-y-6">
        
        {/* Top Hero Card with Distinct Deep Slate Banner */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white border-2 border-black rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[4px_4px_0px_#000000] relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-white/10 pb-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-cyan-500/20 text-[#22D3EE] border border-cyan-400/40 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#22D3EE]" />
                  <span>{t.expertSection.badge || 'Cooperative Multi-Skill Guild'}</span>
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.expertSection.discount || 'Save 20%–30% on Hourly Fare'}</span>
                </span>
                <span className="bg-white/10 text-white/90 border border-white/20 text-[10px] font-bold px-2.5 py-1 rounded-full hidden sm:inline-flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>0% Platform Cut • 100% Direct Worker Wage</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                {t.expertSection.title || 'Super Saver Multi-Skill Bundles'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
                {t.expertSection.subtitle ||
                  'Book dual-trained cooperative guild artisans who solve 2-in-1 repairs in a single doorstep visit. Save money, eliminate multiple service call charges, and get unified work warranties.'}
              </p>
            </div>

            {/* Quick Summary Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 shrink-0">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl text-center">
                <div className="text-lg sm:text-xl font-black text-[#22D3EE]">
                  {comboExperts.length}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                  Active Combos
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl text-center">
                <div className="text-lg sm:text-xl font-black text-emerald-300">
                  ₹140+
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                  Avg Savings/hr
                </div>
              </div>
            </div>
          </div>

          {/* Quick Filter Categories Strip */}
          <div className="pt-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>Filter:</span>
            </span>
            {filterCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer select-none
                    ${
                      isSelected
                        ? 'bg-[#06B6D4] text-black font-black border-2 border-black shadow-[2px_2px_0px_#000000] -translate-y-0.5'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }
                  `}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Combos Cards Grid - Spacious 2-Column Layout for Full Breathing Room */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredExperts.map((rawExpert, index) => {
            const expert = getLocalizedCombo(rawExpert, language);
            const isTasksExpanded = expandedTasksId === expert.id;
            const displayName = language === 'hi' && expert.hindiName ? expert.hindiName : expert.name;
            const separateRate = expert.originalSeparateWage || Math.round(expert.hourlyWage * 1.28);
            const hourlySavings = separateRate - expert.hourlyWage;

            return (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="bg-white border-2 border-stone-300 hover:border-black rounded-2xl flex flex-col justify-between shadow-[4px_4px_0px_rgba(0,0,0,0.06)] hover:shadow-[6px_6px_0px_#06B6D4] transition-all duration-200 overflow-hidden group"
              >
                {/* Top Federation Verification Header Anchor */}
                <div className="bg-slate-900 text-white px-4 sm:px-5 py-2.5 border-b-2 border-black flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#22D3EE]" />
                    <span>Cooperative Multi-Skill Guild Federation</span>
                  </div>
                  <span className="text-[10px] font-black uppercase bg-[#06B6D4] text-black border border-black px-2 py-0.5 rounded-md shadow-xs">
                    {expert.federationCode}
                  </span>
                </div>

                {/* Card Main Header: Title & Trade Badges */}
                <div className="p-5 sm:p-6 pb-3 space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    {/* Trade Badges */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {expert.comboTrades.map((trade, idx) => (
                        <span
                          key={idx}
                          className="bg-cyan-50 text-cyan-900 border border-cyan-300 px-2.5 py-1 rounded-lg text-xs font-extrabold flex items-center gap-1 shadow-xs"
                        >
                          <Zap className="w-3 h-3 text-[#06B6D4]" />
                          <span>{trade}</span>
                        </span>
                      ))}
                    </div>

                    {/* Savings Tag */}
                    <span className="bg-emerald-100 text-[#0C831F] border border-emerald-300 px-3 py-1 rounded-full text-xs font-black shadow-xs flex items-center gap-1">
                      <span>Save {expert.savingsPercent}%</span>
                      <span className="text-[10px] font-bold text-emerald-800">
                        (₹{hourlySavings}/hr off)
                      </span>
                    </span>
                  </div>

                  {/* Prominent Combo Title */}
                  <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 leading-snug group-hover:text-cyan-800 transition-colors">
                    {expert.comboTitle}
                  </h3>
                </div>

                {/* Worker Dossier Profile Box - Clean, Inset Panel with Zero Congestion */}
                <div className="bg-[#FAF8F5] border border-stone-200/90 rounded-2xl p-4 sm:p-5 space-y-3.5 mx-4 sm:mx-6 mb-4">
                  {/* Avatar & Key Profile Identification */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    {/* Generous Avatar with Availability Indicator */}
                    <div className="relative shrink-0">
                      <img
                        src={expert.avatarUrl}
                        alt={expert.name}
                        className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-white ring-2 ring-cyan-500/50 group-hover:ring-cyan-500 shadow-md transition-all"
                        referrerPolicy="no-referrer"
                      />
                      <span
                        title="Available Now for Doorstep Booking"
                        className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0C831F] border-2 border-white rounded-full shadow-xs flex items-center justify-center"
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                      </span>
                    </div>

                    {/* Worker Details Column */}
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h4 className="font-extrabold text-base sm:text-lg text-slate-900 truncate">
                            {displayName}
                          </h4>
                          {language === 'hi' && (
                            <p className="text-xs text-slate-500 font-medium">
                              {expert.name}
                            </p>
                          )}
                        </div>

                        {/* Star Rating Badge */}
                        <div className="bg-amber-50 text-amber-900 border border-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shrink-0 flex items-center gap-1 shadow-xs">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>{expert.rating}</span>
                          <span className="text-[10px] font-semibold text-amber-700">
                            ({expert.totalReviews})
                          </span>
                        </div>
                      </div>

                      {/* Society Affiliation */}
                      <div className="text-xs text-slate-600 font-medium flex items-center gap-1.5 truncate">
                        <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{expert.cooperativeSociety}</span>
                      </div>

                      {/* Location & Proximity */}
                      <div className="flex items-center gap-2 text-xs flex-wrap">
                        <span className="inline-flex items-center gap-1 text-[#0C831F] font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                          <MapPin className="w-3 h-3 text-[#0C831F]" />
                          <span>{expert.locationSector}</span>
                        </span>
                        <span className="text-slate-500 font-semibold text-[11px]">
                          • {expert.distanceKm} km away
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Worker Micro-Stats Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-stone-200/80 text-center">
                    <div className="bg-white border border-stone-200/80 py-1.5 px-2 rounded-xl">
                      <div className="text-xs font-black text-slate-900">
                        {expert.experienceYears} Years
                      </div>
                      <div className="text-[10px] font-semibold text-slate-500 uppercase">
                        Experience
                      </div>
                    </div>
                    <div className="bg-white border border-stone-200/80 py-1.5 px-2 rounded-xl">
                      <div className="text-xs font-black text-[#0C831F]">
                        {expert.completedCombosCount}+
                      </div>
                      <div className="text-[10px] font-semibold text-slate-500 uppercase">
                        Combos Done
                      </div>
                    </div>
                    <div className="bg-white border border-stone-200/80 py-1.5 px-2 rounded-xl">
                      <div className="text-xs font-black text-cyan-900">
                        ₹5L Cover
                      </div>
                      <div className="text-[10px] font-semibold text-slate-500 uppercase">
                        Insurance
                      </div>
                    </div>
                  </div>

                  {/* Bio Quote with Generous Breathing Room */}
                  <div className="bg-white/90 border border-stone-200/80 p-3 rounded-xl border-l-4 border-l-[#06B6D4]">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                      "{expert.bio}"
                    </p>
                  </div>
                </div>

                {/* Included Tasks Checklist Area */}
                <div className="px-4 sm:px-6 mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0C831F]" />
                      <span>{language === 'hi' ? '1 ही विज़िट में शामिल काम:' : 'Handled in 1 Single Doorstep Visit:'}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => setExpandedTasksId(isTasksExpanded ? null : expert.id)}
                      className="text-xs font-bold text-cyan-700 hover:text-cyan-900 hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>{isTasksExpanded ? 'Show Less' : 'View All Scope'}</span>
                      {isTasksExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Tasks List */}
                  <div className="bg-[#FAF8F5] border border-stone-200/90 rounded-xl p-3 space-y-2">
                    {(expert.popularCombos || expert.specialties || [])
                      .slice(0, isTasksExpanded ? undefined : 2)
                      .map((task, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#0C831F] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="leading-snug">{task}</span>
                        </div>
                      ))}

                    {/* Collapsed indicator */}
                    {!isTasksExpanded && (expert.popularCombos || expert.specialties || []).length > 2 && (
                      <div className="text-[11px] font-bold text-slate-500 pt-0.5">
                        + {(expert.popularCombos || expert.specialties || []).length - 2} more tasks included in bundle
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Pricing & Action Bar - Clean High-Contrast Footer */}
                <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t-2 border-stone-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  {/* Pricing Comparison */}
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-wider block">
                      {t.expertSection.hourlyBundle || 'Cooperative Bundle Fare'}
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-display font-black text-2xl text-slate-900">
                        ₹{expert.hourlyWage}
                      </span>
                      <span className="text-xs font-bold text-slate-500">/hr</span>
                      <span className="text-xs line-through text-slate-400 font-semibold">
                        ₹{separateRate}/hr
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#0C831F] block mt-0.5">
                      ✓ Direct to cooperative artisan • 0% Cut
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    {onViewWorkerDetails && (
                      <button
                        type="button"
                        onClick={() => onViewWorkerDetails(expert)}
                        className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-stone-100 border-2 border-stone-300 hover:border-black transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] cursor-pointer active:translate-y-0.5"
                      >
                        <Eye className="w-4 h-4 text-slate-600" />
                        <span>{t.expertSection.viewWork || 'Profile'}</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => onBookCombo(expert)}
                      className="px-5 py-2.5 rounded-xl text-xs font-black bg-[#06B6D4] hover:bg-[#22D3EE] text-black border-2 border-black transition-all shadow-[2px_2px_0px_#000000] flex items-center gap-2 cursor-pointer active:translate-y-0.5"
                    >
                      <Calendar className="w-4 h-4 text-black" />
                      <span>{t.expertSection.bookCombo || 'Book Combo'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
