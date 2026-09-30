import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  Award,
  Calendar,
  Clock,
  MapPin,
  Building,
  Image as ImageIcon,
  MessageSquare,
  Sparkles,
  UserCheck,
  ThumbsUp,
  Filter,
  X,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WorkerProfile, LanguageCode } from '../../types';
import { getTranslation } from '../../utils/translations';

interface WorkerProfileDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  worker: WorkerProfile | null;
  onBookWorker: (worker: WorkerProfile, initialHours?: number, initialSlot?: string) => void;
  onOpenFeedbackModal?: (worker: WorkerProfile) => void;
  language: LanguageCode;
}

export const WorkerProfileDetailsModal: React.FC<WorkerProfileDetailsModalProps> = ({
  isOpen,
  onClose,
  worker,
  onBookWorker,
  onOpenFeedbackModal,
  language,
}) => {
  const t = getTranslation(language);
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'portfolio'>('overview');

  // Hourly booking states inside details modal
  const [selectedHours, setSelectedHours] = useState<number>(2);
  const [selectedSlot, setSelectedSlot] = useState<string>('11:00 AM - 01:00 PM');

  // Reviews filtering and helpful votes
  const [starFilter, setStarFilter] = useState<'all' | 5 | 4 | 3>('all');
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});
  const [userVoted, setUserVoted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !worker) return null;

  const displayName = language === 'hi' && worker.hindiName ? worker.hindiName : worker.name;
  const ratings = worker.ratingsBreakdown || {
    punctuality: 4.9,
    workmanship: 5.0,
    fairPricing: 5.0,
    safetyCleanliness: 4.9,
    fiveStarPercent: 96,
  };

  const handleVoteHelpful = (reviewId: string) => {
    if (userVoted[reviewId]) return;
    setUserVoted((prev) => ({ ...prev, [reviewId]: true }));
    setHelpfulVotes((prev) => ({
      ...prev,
      [reviewId]: (prev[reviewId] || 0) + 1,
    }));
  };

  // Dynamic fare arithmetic
  const baseLabourWage = worker.hourlyWage * selectedHours;
  const welfareContribution = Math.round(baseLabourWage * 0.05);
  const totalPayable = baseLabourWage + welfareContribution;
  const savedBrokerage = Math.round(baseLabourWage * 0.25);

  const tabLabels = {
    overview: language === 'hi' ? 'कार्य अनुभव और परिचय' : 'Work Experience & Bio',
    reviews: language === 'hi' ? `रेटिंग और समीक्षाएं (${worker.totalReviews})` : `Reviews (${worker.totalReviews})`,
    portfolio: language === 'hi' ? `पिछले प्रोजेक्ट्स (${worker.portfolio?.length || 2})` : `Portfolio (${worker.portfolio?.length || 2})`,
  };

  const handleConfirmBooking = () => {
    onClose();
    onBookWorker(worker, selectedHours, selectedSlot);
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Backdrop with frosted glass effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-cyan-100/90 via-sky-50 to-teal-50 border-b border-cyan-200 flex items-start justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="relative shrink-0">
              <img
                src={worker.avatarUrl}
                alt={worker.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-white ring-2 ring-cyan-500 shadow-md"
                referrerPolicy="no-referrer"
              />
              {worker.isAvailableNow && (
                <span
                  title="Doorstep arrival in 15-25 mins"
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0C831F] border-2 border-white rounded-full flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                </span>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-900">
                  {displayName}
                </h3>
                <span className="bg-cyan-100 text-cyan-950 text-[11px] font-bold px-2 py-0.5 rounded-full border border-cyan-300">
                  {worker.federationCode}
                </span>
                {worker.isAvailableNow && (
                  <span className="bg-emerald-50 text-[#0C831F] border border-emerald-200 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 fill-current" />
                    ~15-25 min arrival
                  </span>
                )}
              </div>

              <div className="mt-1 flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-cyan-950 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-md inline-block">
                  {worker.trade}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-600 font-medium">
                  <Building className="w-3 h-3 text-slate-400" />
                  {worker.cooperativeSociety}
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-800 font-semibold">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  {worker.locationSector} ({worker.distanceKm} km away)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block bg-white/80 border border-cyan-200 rounded-xl px-3 py-1 shadow-2xs">
              <span className="text-[10px] text-slate-500 font-semibold block">Cooperative Rate</span>
              <span className="font-black text-xl text-slate-900">₹{worker.hourlyWage}<span className="text-xs text-slate-500 font-normal">/hr</span></span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-slate-200 border border-stone-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Switcher Pills */}
        <div className="px-4 sm:px-5 pt-3 border-b border-stone-200 bg-stone-100/60 flex items-center gap-1.5 shrink-0 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: tabLabels.overview, icon: <UserCheck className="w-3.5 h-3.5" /> },
            { id: 'reviews', label: tabLabels.reviews, icon: <MessageSquare className="w-3.5 h-3.5" /> },
            { id: 'portfolio', label: tabLabels.portfolio, icon: <ImageIcon className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`
                px-3.5 py-2 text-xs font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-1.5 shrink-0
                ${
                  activeTab === tab.id
                    ? 'bg-white border-t-2 border-cyan-600 text-cyan-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }
              `}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Body Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-cyan-50/70 border border-cyan-200 rounded-2xl p-2.5 text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-cyan-900 block">Completed Jobs</span>
                  <span className="font-black text-lg text-slate-900">{worker.completedJobsCount}</span>
                  <span className="text-[9px] text-cyan-700 font-bold block">100% Verified</span>
                </div>

                <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-2.5 text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-sky-900 block">Experience</span>
                  <span className="font-black text-lg text-slate-900">{worker.experienceYears} Years</span>
                  <span className="text-[9px] text-sky-700 font-bold block">Certified Master</span>
                </div>

                <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-2.5 text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-teal-900 block">Coop Rating</span>
                  <span className="font-black text-lg text-slate-900 flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    {worker.rating.toFixed(1)}
                  </span>
                  <span className="text-[9px] text-teal-700 font-bold block">{worker.totalReviews} Reviews</span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-2.5 text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-emerald-900 block">Health Insurance</span>
                  <span className="font-black text-lg text-emerald-800">₹5,00,000</span>
                  <span className="text-[9px] text-emerald-700 font-bold block">ESIC Shield</span>
                </div>
              </div>

              {/* Biography */}
              <div className="bg-[#FAF8F5] border border-stone-300/80 rounded-2xl p-3.5 space-y-1 shadow-2xs">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600">
                  Artisan Philosophy & Background
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  "{worker.bio}"
                </p>
              </div>

              {/* Trade Specialties */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-700 block">
                  Key Skills & Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {worker.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-50 border border-cyan-200 text-cyan-950 px-2.5 py-1 text-xs font-bold rounded-lg shadow-2xs"
                    >
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Statutory Credentials & Social Security Shield */}
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-3.5 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#0C831F] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Compliance & Social Security Status</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0C831F]" />
                    <span>Government e-Shram Card Registered (UAN Verified)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0C831F]" />
                    <span>Direct Cooperative Society Member ({worker.cooperativeSociety})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0C831F]" />
                    <span>Police Clearance Certificate & KYC On-File</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0C831F]" />
                    <span>Fair Wage Certified (0% Brokerage Cut)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: REVIEWS */}
          {activeTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Scorecard */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 flex-wrap gap-2">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">
                      Cooperative Service Quality Scorecard
                    </h4>
                    <span className="text-xs text-slate-600 font-medium">
                      ★ {worker.rating.toFixed(2)} based on {worker.totalReviews} customer feedback ratings
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                    {ratings.fiveStarPercent}% 5-Star Reviews
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-slate-200">
                    <span className="text-slate-600">Punctuality</span>
                    <span className="font-bold text-slate-900">★ {ratings.punctuality}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-slate-200">
                    <span className="text-slate-600">Workmanship</span>
                    <span className="font-bold text-slate-900">★ {ratings.workmanship}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-slate-200">
                    <span className="text-slate-600">Fair Pricing</span>
                    <span className="font-bold text-slate-900">★ {ratings.fairPricing}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-slate-200">
                    <span className="text-slate-600">Cleanliness & Safety</span>
                    <span className="font-bold text-slate-900">★ {ratings.safetyCleanliness}</span>
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-2.5">
                {(worker.reviews || []).map((rev) => (
                  <div
                    key={rev.id}
                    className="p-3 bg-white border border-slate-200 rounded-2xl space-y-1.5 text-xs shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-900">{rev.author}</span>
                        <span className="text-[10px] text-slate-400">• {rev.date}</span>
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 font-medium">"{rev.comment}"</p>
                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <span className="text-slate-400">Sector: {rev.sector}</span>
                      <button
                        type="button"
                        onClick={() => handleVoteHelpful(rev.id)}
                        className="flex items-center gap-1 text-slate-500 hover:text-[#0C831F] font-semibold cursor-pointer"
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>Helpful ({(rev.helpfulCount || 0) + (helpfulVotes[rev.id] || 0)})</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                Verified Past Work Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(worker.portfolio && worker.portfolio.length > 0
                  ? worker.portfolio
                  : [
                      {
                        id: 'p1',
                        title: 'Society Pipe Rerouting',
                        category: 'Plumbing',
                        imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&auto=format&fit=crop',
                        description: 'Complete copper pipe overhaul and leakage prevention in high-rise flat.',
                      },
                      {
                        id: 'p2',
                        title: 'Three-Phase Distribution Board',
                        category: 'Electrical',
                        imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop',
                        description: 'Installed surge protection and balanced phases with zero power drop.',
                      },
                    ]
                ).map((item) => (
                  <div
                    key={item.id}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-36 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-2.5 space-y-1">
                      <div className="font-bold text-xs text-slate-900">{item.title}</div>
                      <p className="text-[11px] text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Dedicated Hourly Booking Bar */}
        <div className="p-4 bg-[#F4F1EA] border-t border-stone-300 space-y-3 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            {/* Slot selector pills */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-700 block">
                Select Duration (Cooperative Hourly Slots):
              </span>
              <div className="flex items-center gap-1.5">
                {[
                  { h: 1, label: '1 Hr' },
                  { h: 2, label: '2 Hrs' },
                  { h: 4, label: '4 Hrs (Half Day)' },
                  { h: 8, label: '8 Hrs (Full Day)' },
                ].map((slot) => (
                  <button
                    key={slot.h}
                    type="button"
                    onClick={() => setSelectedHours(slot.h)}
                    className={`
                      px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer
                      ${
                        selectedHours === slot.h
                          ? 'bg-[#0C831F] text-white shadow-xs'
                          : 'bg-white text-slate-800 border border-stone-300 hover:border-cyan-500 hover:bg-cyan-50/50'
                      }
                    `}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-700 block">Preferred Time:</span>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="bg-white border border-stone-300 rounded-xl px-2.5 py-1 text-xs font-semibold text-slate-800 outline-none cursor-pointer focus:border-cyan-500"
              >
                <option value="09:00 AM - 11:00 AM">Morning (09:00 AM - 11:00 AM)</option>
                <option value="11:00 AM - 01:00 PM">Midday (11:00 AM - 01:00 PM)</option>
                <option value="02:00 PM - 04:00 PM">Afternoon (02:00 PM - 04:00 PM)</option>
                <option value="04:00 PM - 06:00 PM">Evening (04:00 PM - 06:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3 pt-2 border-t border-stone-300/80">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-xl text-slate-900">₹{totalPayable}</span>
                <span className="text-xs text-slate-600 font-medium">({selectedHours}h + 5% welfare)</span>
              </div>
              <span className="text-[10px] text-emerald-800 font-bold block">
                0% Middleman Cut • Saved ₹{savedBrokerage}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-white border border-stone-300 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0C831F] hover:bg-[#0A6C19] text-white shadow-md flex items-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Doorstep Booking</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};
