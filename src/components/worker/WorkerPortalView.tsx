import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Radar,
  Wallet,
  UserPlus,
  Power,
  ShieldCheck,
  Building,
  CheckCircle2,
  Radio,
  Award,
  Sparkles,
} from 'lucide-react';
import { JobRadarRequest, WelfareStats, LanguageCode } from '../../types';
import { WorkerLiveRadar } from './WorkerLiveRadar';
import { WelfareTracker } from './WelfareTracker';
import { WorkerRegistrationForm } from './WorkerRegistrationForm';
import { BrutalBadge } from '../common/BrutalBadge';
import { BrutalButton } from '../common/BrutalButton';
import { WORKER_WELFARE_DATA } from '../../data/mockData';

interface WorkerPortalViewProps {
  jobs: JobRadarRequest[];
  onAcceptJob: (jobId: string) => void;
  onDeclineJob: (jobId: string) => void;
  onSimulateNewJob: () => void;
  language: LanguageCode;
}

export const WorkerPortalView: React.FC<WorkerPortalViewProps> = ({
  jobs,
  onAcceptJob,
  onDeclineJob,
  onSimulateNewJob,
  language,
}) => {
  const [viewMode, setViewMode] = useState<'dashboard' | 'register'>('dashboard');
  const [isOnline, setIsOnline] = useState(true);
  const [activeSubTab, setActiveSubTab] = useState<'radar' | 'welfare'>('radar');

  const pendingJobsCount = jobs.filter((j) => j.status === 'incoming').length;

  return (
    <div className="min-h-screen bg-[#F4F1EA] py-5 sm:py-7 max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
      {/* Frosted Glass Telemetry Cockpit Header */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-stone-900 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0a1926] text-white p-5 sm:p-7 shadow-[4px_4px_0px_#000000]">
        {/* Ambient Glow Orbs for Frosted Refraction */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Identity & Status Dossier */}
          <div className="flex items-start sm:items-center gap-4">
            {/* Worker Avatar with Co-op Status Beacon */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-tr from-[#FF5500] via-amber-400 to-[#0C831F] p-[2.5px] shadow-[0_0_16px_rgba(6,182,212,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=150&auto=format&fit=crop&q=80"
                  alt="Rameshwar Kumar Sharma"
                  className="w-full h-full object-cover rounded-[13px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span
                className={`
                  absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full border-2 border-slate-950 flex items-center justify-center shadow-xs
                  ${isOnline ? 'bg-emerald-500' : 'bg-slate-500'}
                `}
              >
                <span className={`w-2 h-2 rounded-full bg-white ${isOnline ? 'animate-ping' : ''}`} />
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                  <ShieldCheck className="w-3 h-3 text-amber-400" />
                  SHRAMIK CO-OWNER
                </span>
                <span className="bg-white/10 backdrop-blur-md border border-white/15 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  Member #101 • Delhi Shramik Sahakari
                </span>
                <span className="bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-[10px] font-black px-2 py-0.5 rounded-md hidden sm:inline-flex items-center gap-1">
                  <Award className="w-2.5 h-2.5" />
                  NSQF Level 5
                </span>
              </div>

              <h1 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-tight">
                Rameshwar Kumar Sharma
              </h1>

              <div className="flex items-center gap-3 text-xs text-slate-300 font-semibold flex-wrap">
                <span className="text-cyan-300 font-bold">⚡ Master Electrical Specialist</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">★ 4.9 Rating (312 Jobs)</span>
                <span>•</span>
                <span className="text-slate-400">e-Shram Verified: #9081-4421</span>
              </div>
            </div>
          </div>

          {/* Right Action Switchers: Radar Online/Offline & Mode Pill */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10">
            {/* Frosted Online/Offline Toggle */}
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`
                flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black uppercase transition-all cursor-pointer select-none border shadow-xs
                ${
                  isOnline
                    ? 'bg-emerald-500/20 backdrop-blur-md text-emerald-300 border-emerald-400/40 shadow-[0_0_12px_rgba(12,131,31,0.3)]'
                    : 'bg-white/10 backdrop-blur-md text-slate-400 border-white/15 hover:text-white'
                }
              `}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full border border-black ${
                  isOnline ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
                }`}
              />
              <span>{isOnline ? 'Radar Online (Live)' : 'Radar Offline'}</span>
            </button>

            {/* Frosted Mode Segmented Control */}
            <div className="flex bg-white/10 backdrop-blur-xl border border-white/20 p-1 rounded-xl shadow-xs">
              <button
                onClick={() => setViewMode('dashboard')}
                className={`
                  px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer
                  ${
                    viewMode === 'dashboard'
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }
                `}
              >
                Dashboard
              </button>
              <button
                onClick={() => setViewMode('register')}
                className={`
                  px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all cursor-pointer flex items-center gap-1
                  ${
                    viewMode === 'register'
                      ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-black shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }
                `}
              >
                <UserPlus className="w-3 h-3" />
                <span>+ Onboard Worker</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {viewMode === 'register' ? (
        /* Worker Onboarding Registration View */
        <WorkerRegistrationForm
          onRegistrationComplete={() => {
            setViewMode('dashboard');
            setActiveSubTab('radar');
          }}
        />
      ) : (
        /* Active Dashboard */
        <div className="space-y-5">
          {/* Frosted Glass Segmented Subtabs */}
          <div className="bg-white/80 backdrop-blur-xl border-2 border-stone-300/80 rounded-2xl p-1.5 shadow-xs inline-flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSubTab('radar')}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl font-display font-black text-xs uppercase tracking-wider cursor-pointer transition-all
                ${
                  activeSubTab === 'radar'
                    ? 'bg-slate-950 text-white shadow-[2px_2px_0px_#000000]'
                    : 'text-slate-700 hover:bg-white hover:text-slate-950'
                }
              `}
            >
              <Radar className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Live Job Radar</span>
              <span
                className={`
                  px-2 py-0.5 rounded-full text-[10px] font-black
                  ${
                    activeSubTab === 'radar'
                      ? 'bg-cyan-400 text-slate-950'
                      : 'bg-stone-200 text-slate-800'
                  }
                `}
              >
                {pendingJobsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveSubTab('welfare')}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl font-display font-black text-xs uppercase tracking-wider cursor-pointer transition-all
                ${
                  activeSubTab === 'welfare'
                    ? 'bg-slate-950 text-white shadow-[2px_2px_0px_#000000]'
                    : 'text-slate-700 hover:bg-white hover:text-slate-950'
                }
              `}
            >
              <Wallet className="w-4 h-4 text-emerald-400" />
              <span>Welfare & Earnings Ledger</span>
              <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-1.5 py-0.2 rounded-md text-[9px] font-black">
                100% Payout
              </span>
            </button>
          </div>

          {/* Subtab Contents with Smooth Transitions */}
          <AnimatePresence mode="wait">
            {activeSubTab === 'radar' ? (
              <motion.div
                key="worker-radar-subtab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <WorkerLiveRadar
                  jobs={jobs}
                  onAcceptJob={onAcceptJob}
                  onDeclineJob={onDeclineJob}
                  onSimulateNewJob={onSimulateNewJob}
                />
              </motion.div>
            ) : (
              <motion.div
                key="worker-welfare-subtab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <WelfareTracker stats={WORKER_WELFARE_DATA} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

