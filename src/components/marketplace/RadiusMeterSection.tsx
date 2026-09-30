import React, { useState, useMemo } from 'react';
import {
  Radar,
  MapPin,
  Eye,
  Calendar,
  Star,
  CheckCircle2,
  ShieldCheck,
  Locate,
  ArrowUpRight,
  Sparkles,
  Users,
  Compass,
  Radio,
  Zap,
  Filter,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WorkerProfile, LanguageCode } from '../../types';
import { BrutalBadge } from '../common/BrutalBadge';
import { BrutalButton } from '../common/BrutalButton';
import { getTranslation } from '../../utils/translations';

interface RadiusMeterSectionProps {
  workers: WorkerProfile[];
  radiusKm: number;
  onRadiusChange: (radiusKm: number) => void;
  onViewWorkerDetails: (worker: WorkerProfile) => void;
  onBookWorker?: (worker: WorkerProfile, hours?: number) => void;
  selectedSector: string;
  language?: LanguageCode;
}

export const RadiusMeterSection: React.FC<RadiusMeterSectionProps> = ({
  workers,
  radiusKm,
  onRadiusChange,
  onViewWorkerDetails,
  onBookWorker,
  selectedSector,
  language = 'en',
}) => {
  const t = getTranslation(language);
  const [selectedTradeFilter, setSelectedTradeFilter] = useState<string>('All');
  const [hoveredWorkerId, setHoveredWorkerId] = useState<string | null>(null);
  const [onlyAvailableNow, setOnlyAvailableNow] = useState<boolean>(false);

  // Preset steps from 500m (0.5km) to 10km
  const presets = [
    { label: '500m', value: 0.5 },
    { label: '1 km', value: 1.0 },
    { label: '2 km', value: 2.0 },
    { label: '3.5 km', value: 3.5 },
    { label: '5 km', value: 5.0 },
    { label: '7.5 km', value: 7.5 },
    { label: '10 km', value: 10.0 },
  ];

  const formatDistance = (km: number) => {
    if (km < 1) {
      return `${Math.round(km * 1000)} ${t.radiusSection.meters}`;
    }
    return `${km.toFixed(1)} ${t.radiusSection.kilometers}`;
  };

  // Filter workers that fall strictly within the selected radius
  const workersInRange = useMemo(() => {
    return workers.filter((w) => (w.distanceKm || 2.0) <= radiusKm);
  }, [workers, radiusKm]);

  // Unique trades present in the detected range
  const availableTrades = useMemo(() => {
    const trades = Array.from(new Set(workersInRange.map((w) => w.trade)));
    return ['All', ...trades];
  }, [workersInRange]);

  // Further filter by trade and availability
  const displayedWorkers = useMemo(() => {
    let list = workersInRange;
    if (selectedTradeFilter !== 'All') {
      list = list.filter((w) => w.trade === selectedTradeFilter);
    }
    if (onlyAvailableNow) {
      list = list.filter((w) => w.isAvailableNow);
    }
    return list;
  }, [workersInRange, selectedTradeFilter, onlyAvailableNow]);

  // Generate deterministic circular positions for workers on the radar screen
  const radarWorkerPoints = useMemo(() => {
    return workersInRange.map((worker, index) => {
      const distanceRatio = Math.min((worker.distanceKm || 2.0) / radiusKm, 0.92);
      // Evenly distribute angles around 360 degrees with a fixed offset per index
      const angle = (index * (360 / Math.max(workersInRange.length, 1)) + 30) * (Math.PI / 180);
      // Map to percentage within a 50% center coordinate (with 40% max radius)
      const x = 50 + 40 * distanceRatio * Math.cos(angle);
      const y = 50 + 40 * distanceRatio * Math.sin(angle);

      return {
        worker,
        x,
        y,
        distanceKm: worker.distanceKm || 2.0,
      };
    });
  }, [workersInRange, radiusKm]);

  return (
    <div className="bg-[#EBE7DF]/90 border-2 border-stone-300/90 rounded-3xl p-4 sm:p-6 lg:p-7 shadow-sm space-y-6">
      {/* Top Banner: Dark Obsidian & Frosted Glass Telemetry Cockpit */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-stone-900 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0B1D20] text-white p-5 sm:p-6 shadow-[4px_4px_0px_#000000]">
        {/* Ambient Frosted Glow Orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-3.5">
            {/* Animated Frosted Glass Sonar Emblem */}
            <div className="relative w-12 h-12 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-cyan-400/50 flex items-center justify-center shadow-[0_0_16px_rgba(6,182,212,0.4)] shrink-0">
              <Radar className="w-6 h-6 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <motion.span
                className="absolute inset-0 rounded-xl border-2 border-cyan-400"
                animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#0C831F] border border-black animate-ping" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-black text-xs uppercase tracking-widest text-cyan-400 flex items-center gap-1">
                  <Radio className="w-3 h-3 animate-pulse" />
                  {t.radiusSection.title}
                </span>
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.radiusSection.badge}
                </span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight mt-0.5">
                {t.radiusSection.heading}: <span className="text-cyan-400">{formatDistance(radiusKm)}</span>
              </h2>
            </div>
          </div>

          {/* Telemetry Chips in Frosted Glass */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-white/10 backdrop-blur-md border border-cyan-400/30 text-cyan-300 px-3.5 py-1.5 rounded-xl text-xs font-black shadow-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono">
                {workersInRange.length} / {workers.length} {t.radiusSection.workersInRange}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-200 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{selectedSector || 'Nerul / Navi Mumbai'}</span>
            </div>
          </div>
        </div>

        {/* Range Controls: Frosted Slider & Distance Presets */}
        <div className="relative z-10 pt-4 space-y-3.5">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-black uppercase text-slate-300">
              <span className="flex items-center gap-1 text-slate-400">
                <Locate className="w-3.5 h-3.5 text-cyan-400" />
                Min: 500m
              </span>
              <span className="bg-white/15 backdrop-blur-md border border-cyan-400/40 text-cyan-300 px-3.5 py-1 rounded-full text-xs font-mono font-bold shadow-xs">
                Active Scan Radius: {formatDistance(radiusKm)}
              </span>
              <span className="text-slate-400">Max: 10km</span>
            </div>

            {/* Custom Frosted Glass Range Slider */}
            <div className="relative flex items-center">
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={radiusKm}
                onChange={(e) => onRadiusChange(parseFloat(e.target.value))}
                className="w-full h-3.5 bg-slate-900/80 backdrop-blur-md rounded-lg border border-white/20 appearance-none cursor-pointer accent-cyan-400 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* Quick Distance Presets (Frosted Glass Chips) */}
          <div className="flex items-center gap-1.5 flex-wrap pt-1">
            <span className="text-xs font-black uppercase text-slate-400 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {t.radiusSection.quickPresets}:
            </span>
            {presets.map((p) => {
              const isSelected = Math.abs(radiusKm - p.value) < 0.1;
              return (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => onRadiusChange(p.value)}
                  className={`
                    px-3 py-1 font-display font-black text-xs uppercase rounded-lg transition-all cursor-pointer select-none
                    ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 border-2 border-black shadow-[2px_2px_0px_#000000] -translate-y-0.5 scale-105'
                        : 'bg-white/10 backdrop-blur-md border border-white/15 text-slate-300 hover:bg-white/20 hover:text-white'
                    }
                  `}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Radar Screen + Nearby Workers List Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Radar Scanner Screen (Left Column - 6 Cols) */}
        <div className="lg:col-span-6 bg-slate-950/92 backdrop-blur-2xl border-2 border-stone-800 rounded-2xl p-4 sm:p-5 text-white shadow-[4px_4px_0px_#000000] relative overflow-hidden flex flex-col items-center">
          {/* Top Radar HUD Bar */}
          <div className="w-full flex items-center justify-between pb-3 border-b border-white/15 text-[11px] font-mono font-bold tracking-wider text-cyan-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                SONAR RADAR: ACTIVE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 hidden sm:inline">19.0330° N, 73.0297° E</span>
              <span className="bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-400/40 text-cyan-300">
                RANGE: {formatDistance(radiusKm)}
              </span>
            </div>
          </div>

          {/* Interactive Radar Screen Canvas (Frosted Glass Sonar Scope) */}
          <div className="relative w-72 h-72 sm:w-92 sm:h-92 md:w-96 md:h-96 my-4 rounded-full border-2 border-cyan-400/50 bg-gradient-to-b from-slate-900/90 via-cyan-950/30 to-slate-950/95 backdrop-blur-xl shadow-[inset_0_0_50px_rgba(6,182,212,0.25),0_10px_35px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden select-none">
            {/* Concentric Range Rings with Frosted Distance Markers */}
            <div className="absolute inset-4 rounded-full border border-cyan-400/30 border-dashed" />
            <div className="absolute inset-16 rounded-full border border-cyan-400/25" />
            <div className="absolute inset-28 rounded-full border border-cyan-400/20 border-dashed" />
            <div className="absolute inset-40 rounded-full border border-cyan-400/15" />

            {/* Crosshair Grids & Cardinal Rays */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyan-400/25" />
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-cyan-400/25" />
            <div className="absolute inset-0 border border-cyan-400/10 rotate-45 pointer-events-none" />

            {/* Cardinal Direction Indicators */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-cyan-300 bg-slate-900/80 backdrop-blur-xs px-1 rounded">
              N
            </span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-cyan-300/70 bg-slate-900/80 backdrop-blur-xs px-1 rounded">
              S
            </span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-cyan-300/70 bg-slate-900/80 backdrop-blur-xs px-1 rounded">
              E
            </span>
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-cyan-300/70 bg-slate-900/80 backdrop-blur-xs px-1 rounded">
              W
            </span>

            {/* Distance Markers */}
            <span className="absolute top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-cyan-300 bg-slate-900/80 backdrop-blur-md px-1.5 py-0.2 rounded border border-cyan-400/30">
              {formatDistance(radiusKm)}
            </span>
            <span className="absolute top-18 left-1/2 -translate-x-1/2 text-[8px] font-mono text-cyan-400/70">
              {formatDistance(radiusKm * 0.66)}
            </span>
            <span className="absolute top-30 left-1/2 -translate-x-1/2 text-[8px] font-mono text-cyan-400/50">
              {formatDistance(radiusKm * 0.33)}
            </span>

            {/* Rotating Radar Sweep Arm with Luminous Laser Trail */}
            <motion.div
              className="absolute inset-0 origin-center pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            >
              <div className="w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-300 ml-auto shadow-[0_0_14px_#22D3EE]" />
              <div className="w-1/2 h-1/2 ml-auto bg-gradient-to-br from-cyan-400/25 via-cyan-500/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Center Origin: You (Home / Workplace Location) */}
            <div className="absolute z-20 w-6 h-6 bg-gradient-to-tr from-[#FF5500] to-amber-500 border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_12px_#FF5500]">
              <span className="w-2 h-2 bg-white rounded-full animate-ping" />
              <span className="absolute -bottom-4.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-mono font-black bg-slate-950/90 text-white px-1.5 py-0.2 rounded border border-slate-700 shadow-xs">
                YOU
              </span>
            </div>

            {/* Plotted Worker Blips */}
            {radarWorkerPoints.map(({ worker, x, y, distanceKm }) => {
              const isHovered = hoveredWorkerId === worker.id;
              const displayName = language === 'hi' && worker.hindiName ? worker.hindiName : worker.name;

              return (
                <div
                  key={worker.id}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer"
                  onClick={() => onViewWorkerDetails(worker)}
                  onMouseEnter={() => setHoveredWorkerId(worker.id)}
                  onMouseLeave={() => setHoveredWorkerId(null)}
                >
                  {/* Blip Ping Ring */}
                  <span
                    className={`
                      absolute -inset-1.5 rounded-full animate-ping opacity-75
                      ${worker.isAvailableNow ? 'bg-emerald-400' : 'bg-cyan-400'}
                    `}
                  />

                  {/* Worker Icon Blip with Frosted Outer Glow */}
                  <div
                    className={`
                      relative w-8 h-8 rounded-full border-2 overflow-hidden transition-all duration-200
                      ${
                        isHovered
                          ? 'scale-125 ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-950 z-40 border-white shadow-[0_0_14px_#22D3EE]'
                          : worker.isAvailableNow
                          ? 'border-emerald-400 shadow-[0_0_8px_#0C831F]'
                          : 'border-cyan-400 shadow-[0_0_8px_#06B6D4]'
                      }
                      bg-slate-900
                    `}
                  >
                    <img
                      src={worker.avatarUrl}
                      alt={worker.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {worker.isAvailableNow && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-black" />
                    )}
                  </div>

                  {/* Worker Quick Distance Tag */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                    <span className="bg-slate-950/90 backdrop-blur-md text-cyan-300 border border-cyan-400/50 px-1 py-0.2 rounded text-[8px] font-mono font-bold shadow-xs">
                      {distanceKm}km
                    </span>
                  </div>

                  {/* Hover Tooltip Dossier Preview (Frosted Glass Popup) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 w-52 bg-slate-900/90 backdrop-blur-2xl text-white border border-white/20 rounded-xl p-3 shadow-[0_12px_40px_rgba(0,0,0,0.8)] pointer-events-auto"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-display font-black text-xs uppercase truncate text-white">
                            {displayName}
                          </span>
                          <span className="text-[9px] font-mono font-bold bg-cyan-400 text-slate-950 px-1.5 py-0.2 rounded">
                            {distanceKm}km
                          </span>
                        </div>
                        <div className="text-[10px] font-bold text-cyan-300 truncate">
                          {worker.trade}
                        </div>
                        <div className="text-[10px] text-slate-300 font-medium truncate">
                          {worker.cooperativeSociety}
                        </div>
                        <div className="text-[11px] font-black text-emerald-400 mt-1 flex items-center justify-between">
                          <span>₹{worker.hourlyWage}/hr</span>
                          <span className="text-amber-300 font-bold flex items-center gap-0.5">
                            ★ {worker.rating}
                          </span>
                        </div>
                        <div className="mt-2 pt-1.5 border-t border-white/15 flex items-center justify-between">
                          <span className="text-[9px] font-black uppercase text-slate-300 flex items-center gap-1">
                            <Eye className="w-2.5 h-2.5 text-cyan-400" /> Open Dossier
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom Radar Guide */}
          <div className="w-full text-center pt-2.5 border-t border-white/15">
            <p className="text-[11px] font-mono text-cyan-300 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Click on any artisan sonar blip to inspect cooperative dossier & ratings</span>
            </p>
          </div>
        </div>

        {/* Nearby Workers List (Right Column - 6 Cols) */}
        <div className="lg:col-span-6 bg-white/80 backdrop-blur-xl border-2 border-stone-300 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
          {/* Header & Filter Row */}
          <div className="space-y-2.5 border-b border-stone-300/80 pb-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="font-display font-black text-xs uppercase tracking-widest text-slate-500 block">
                  Detected Cooperative Roster
                </span>
                <h3 className="font-display font-black text-lg text-slate-900 uppercase">
                  Workers Within {formatDistance(radiusKm)} ({displayedWorkers.length})
                </h3>
              </div>

              {/* Only Available Now Toggle */}
              <button
                type="button"
                onClick={() => setOnlyAvailableNow(!onlyAvailableNow)}
                className={`
                  px-2.5 py-1 rounded-lg text-[10px] font-black uppercase transition-all flex items-center gap-1.5 cursor-pointer border
                  ${
                    onlyAvailableNow
                      ? 'bg-emerald-500 text-white border-black shadow-[2px_2px_0px_#000000]'
                      : 'bg-white/80 border-stone-300 text-slate-700 hover:bg-white'
                  }
                `}
              >
                <span
                  className={`w-2 h-2 rounded-full ${onlyAvailableNow ? 'bg-white animate-pulse' : 'bg-emerald-500'}`}
                />
                <span>15m Rapid Only</span>
              </button>
            </div>

            {/* Trade Filter Pills (Frosted Glass Chips) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {availableTrades.map((trade) => {
                const isSelected = selectedTradeFilter === trade;
                return (
                  <button
                    key={trade}
                    type="button"
                    onClick={() => setSelectedTradeFilter(trade)}
                    className={`
                      px-2.5 py-1 rounded-lg text-[10px] font-black uppercase transition-all whitespace-nowrap cursor-pointer select-none
                      ${
                        isSelected
                          ? 'bg-slate-950 text-white border-2 border-black shadow-[2px_2px_0px_#000000]'
                          : 'bg-white/70 backdrop-blur-md border border-stone-300 hover:bg-white text-slate-700'
                      }
                    `}
                  >
                    {trade}
                  </button>
                );
              })}
            </div>
          </div>

          {/* List of Workers */}
          {displayedWorkers.length > 0 ? (
            <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
              {displayedWorkers.map((worker) => {
                const displayName = language === 'hi' && worker.hindiName ? worker.hindiName : worker.name;
                const isHovered = hoveredWorkerId === worker.id;

                return (
                  <motion.div
                    key={worker.id}
                    whileHover={{ y: -2 }}
                    onMouseEnter={() => setHoveredWorkerId(worker.id)}
                    onMouseLeave={() => setHoveredWorkerId(null)}
                    onClick={() => onViewWorkerDetails(worker)}
                    className={`
                      border-2 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all cursor-pointer group
                      ${
                        isHovered
                          ? 'bg-cyan-50/90 border-cyan-400 shadow-[3px_3px_0px_#06B6D4]'
                          : 'bg-white/95 backdrop-blur-sm border-stone-200 hover:border-black shadow-xs hover:shadow-[3px_3px_0px_rgba(0,0,0,1)]'
                      }
                    `}
                  >
                    {/* Worker Info */}
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF5500] via-amber-400 to-[#0C831F] p-[2px] shadow-xs">
                          <img
                            src={worker.avatarUrl}
                            alt={worker.name}
                            className="w-full h-full object-cover rounded-[10px]"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        {worker.isAvailableNow && (
                          <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full shadow-xs" />
                        )}
                      </div>

                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-black text-sm text-slate-900 uppercase group-hover:underline">
                            {displayName}
                          </h4>
                          <span className="bg-cyan-50 text-cyan-900 border border-cyan-300 px-1.5 py-0.2 text-[9px] font-black uppercase rounded-md">
                            📍 {worker.distanceKm} km
                          </span>
                        </div>

                        <div className="text-[11px] font-bold text-blue-700 uppercase">
                          {worker.trade}
                        </div>

                        <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold">
                          <span className="text-amber-600 font-black">★ {worker.rating} ({worker.totalReviews})</span>
                          <span>•</span>
                          <span className="truncate max-w-[140px] text-slate-500">{worker.cooperativeSociety}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side: Rate + CTA Button */}
                    <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-200">
                      <div>
                        <span className="text-[9px] font-bold uppercase text-slate-500 block text-right">
                          Coop Rate
                        </span>
                        <span className="font-display font-black text-base text-slate-900">
                          ₹{worker.hourlyWage}/hr
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <BrutalButton
                          variant="cyan"
                          size="sm"
                          onClick={(e) => {
                            e?.stopPropagation?.();
                            onViewWorkerDetails(worker);
                          }}
                          icon={<Eye className="w-3 h-3" />}
                        >
                          View Profile
                        </BrutalButton>
                        {onBookWorker && (
                          <BrutalButton
                            variant="cyan"
                            size="sm"
                            onClick={(e) => {
                              e?.stopPropagation?.();
                              onBookWorker(worker);
                            }}
                            icon={<Calendar className="w-3 h-3" />}
                          >
                            Book
                          </BrutalButton>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="p-6 text-center space-y-2 bg-white/70 backdrop-blur-md border-2 border-stone-300 rounded-xl">
              <p className="font-display font-black text-sm uppercase text-slate-900">
                No specialists detected within {formatDistance(radiusKm)}
              </p>
              <p className="text-xs font-semibold text-slate-600">
                Expand your proximity scan to 5km or 10km to scan broader cooperative federations.
              </p>
              <BrutalButton
                variant="cyan"
                size="sm"
                onClick={() => onRadiusChange(5.0)}
              >
                Expand Radius to 5 km
              </BrutalButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
