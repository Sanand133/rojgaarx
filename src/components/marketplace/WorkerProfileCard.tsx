import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  Award,
  Calendar,
  Clock,
  MapPin,
  Building,
  Eye,
  Zap,
  Heart,
} from 'lucide-react';
import { motion } from 'motion/react';
import { WorkerProfile, LanguageCode } from '../../types';
import { getTranslation } from '../../utils/translations';

interface WorkerProfileCardProps {
  worker: WorkerProfile;
  onBookWorker: (worker: WorkerProfile, initialHours?: number, initialSlot?: string) => void;
  onViewDetails?: (worker: WorkerProfile) => void;
  onRateWorker?: (worker: WorkerProfile) => void;
  language: LanguageCode;
}

export const WorkerProfileCard: React.FC<WorkerProfileCardProps> = ({
  worker,
  onBookWorker,
  onViewDetails,
  onRateWorker,
  language,
}) => {
  const t = getTranslation(language);
  const displayName = language === 'hi' && worker.hindiName ? worker.hindiName : worker.name;

  // Selected duration for hourly booking (default: 2 hrs)
  const [selectedHours, setSelectedHours] = useState<number>(2);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // Dynamic fare calculation for this worker
  const baseLabourWage = worker.hourlyWage * selectedHours;
  const welfareFund = Math.round(baseLabourWage * 0.05);
  const totalFare = baseLabourWage + welfareFund;

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(worker);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      onClick={handleCardClick}
      className="bg-gradient-to-b from-white via-white to-[#FAF8F5] border-2 border-stone-200 hover:border-cyan-500 rounded-2xl p-4 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(6,182,212,0.2)] transition-all duration-200 cursor-pointer relative group overflow-hidden"
    >
      {/* Top Federation Banner Ribbon */}
      <div className="bg-gradient-to-r from-cyan-500/15 via-teal-500/10 to-transparent border-b border-cyan-500/20 px-4 py-1.5 -mx-4 -mt-4 mb-3 flex items-center justify-between text-[10px] font-bold text-cyan-950">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
          <span>Cooperative Guild Verified</span>
        </span>
        <span className="text-[9px] font-black uppercase bg-cyan-100 text-cyan-950 border border-cyan-300 px-1.5 py-0.2 rounded-md">
          {worker.federationCode}
        </span>
      </div>

      {/* Top Header: Avatar + Identity + ETA + Rating */}
      <div className="space-y-3">
        <div className="flex items-start gap-3 relative">
          {/* Avatar with cyan ring and verified badge */}
          <div className="relative shrink-0">
            <img
              src={worker.avatarUrl}
              alt={worker.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-white ring-2 ring-cyan-500/50 group-hover:ring-cyan-500 shadow-sm transition-all"
              referrerPolicy="no-referrer"
            />
            {worker.isAvailableNow && (
              <span
                title="Available Now - Doorstep in 15-25 mins"
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0C831F] border-2 border-white rounded-full shadow-xs flex items-center justify-center"
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              </span>
            )}
          </div>

          {/* Identity & Trade */}
          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-1.5 mb-0.5">
              <h3 className="font-extrabold text-base text-slate-900 truncate group-hover:text-cyan-700 transition-colors">
                {displayName}
              </h3>
              <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-[#0C831F] border border-emerald-200 text-[10px] font-bold px-1.5 py-0.2 rounded-md shrink-0">
                <Zap className="w-2.5 h-2.5 fill-current" />
                {worker.distanceKm} km
              </span>
            </div>

            <div className="mb-1">
              <span className="text-xs font-bold text-cyan-950 bg-cyan-50/90 border border-cyan-200/80 px-2 py-0.5 rounded-md inline-block">
                {worker.trade}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-slate-600 truncate font-medium">
              <Building className="w-3 h-3 shrink-0 text-slate-400" />
              <span className="truncate">{worker.cooperativeSociety}</span>
            </div>
          </div>

          {/* Interactive Favorite Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            aria-label="Save to favorites"
            className={`absolute top-0 right-0 p-1.5 rounded-full transition-colors ${
              isFavorite
                ? 'text-rose-500 bg-rose-50'
                : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100'
            }`}
          >
            <Heart
              className={`w-4 h-4 transition-transform active:scale-125 ${
                isFavorite ? 'fill-current' : ''
              }`}
            />
          </button>
        </div>

        {/* ETA & Rating Bar */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-stone-200/70 text-xs">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails?.(worker);
              }}
              title="Click to view full dossier, ratings & reviews"
              className="inline-flex items-center gap-1 bg-cyan-50 hover:bg-cyan-100 text-cyan-950 border border-cyan-300 px-2 py-0.5 rounded-md font-bold text-xs cursor-pointer transition-colors"
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
              <span>{worker.rating.toFixed(1)}</span>
              <span className="text-cyan-800 font-normal">({worker.totalReviews})</span>
            </button>
            <span className="text-slate-400 text-[11px]">•</span>
            <span className="text-slate-600 text-[11px] font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              {worker.locationSector.split('/')[0].trim()}
            </span>
          </div>

          <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0C831F]" />
            <span>~15-25 min arrival</span>
          </div>
        </div>

        {/* Clean Credentials Pills */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-900 border border-emerald-200 text-[10px] font-medium px-2 py-0.5 rounded-md">
            <CheckCircle2 className="w-3 h-3 text-[#0C831F]" />
            e-Shram Verified
          </span>
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-900 border border-blue-200 text-[10px] font-medium px-2 py-0.5 rounded-md">
            <ShieldCheck className="w-3 h-3 text-blue-600" />
            ₹5L ESIC Insurance
          </span>
          <span className="inline-flex items-center gap-1 bg-cyan-50 text-cyan-950 border border-cyan-300 text-[10px] font-medium px-2 py-0.5 rounded-md">
            <Award className="w-3 h-3 text-cyan-600" />
            {worker.completedJobsCount}+ Jobs
          </span>
        </div>

        {/* Hourly Slot Selector (Differentiated Beige Inset Card) */}
        <div
          className="bg-[#F4F1EA] rounded-xl p-2.5 space-y-1.5 border border-stone-300/80 shadow-2xs"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-slate-700 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              Estimated Fare:
            </span>
            <span className="font-bold text-slate-900">
              ₹{totalFare}{' '}
              <span className="text-[10px] font-normal text-slate-600">
                ({selectedHours}h + 5% fund)
              </span>
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1">
            {[1, 2, 4, 8].map((hours) => (
              <button
                key={hours}
                type="button"
                onClick={() => setSelectedHours(hours)}
                className={`
                  py-1 text-center text-[11px] font-bold rounded-lg transition-all cursor-pointer
                  ${
                    selectedHours === hours
                      ? 'bg-[#0C831F] text-white shadow-xs'
                      : 'bg-white text-slate-800 border border-stone-300 hover:border-cyan-500 hover:bg-cyan-50/50'
                  }
                `}
              >
                {hours} {hours === 1 ? 'hr' : 'hrs'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Pricing & Action Buttons */}
      <div className="pt-3 mt-3 border-t border-stone-200/70 flex items-center justify-between gap-2">
        <div onClick={handleCardClick} className="cursor-pointer bg-stone-100/90 border border-stone-200/90 rounded-xl px-2.5 py-1">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide block">
            Cooperative Wage
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-black text-base text-slate-900">
              ₹{worker.hourlyWage}
            </span>
            <span className="text-xs text-slate-500">/hr</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Prominent Profile Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails?.(worker);
            }}
            className="px-3 py-2 rounded-xl text-xs font-bold text-cyan-950 bg-cyan-50 hover:bg-cyan-100 border border-cyan-300 transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
          >
            <Eye className="w-3.5 h-3.5 text-cyan-700" />
            <span>Profile</span>
          </button>

          {/* Book Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onBookWorker(worker, selectedHours);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0C831F] hover:bg-[#0A6C19] text-white transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
