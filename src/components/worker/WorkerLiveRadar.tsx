import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Radar,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Zap,
  Phone,
  Navigation as NavIcon,
  Bell,
  RefreshCw,
  Flame,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { JobRadarRequest } from '../../types';
import { BrutalCard } from '../common/BrutalCard';
import { BrutalBadge } from '../common/BrutalBadge';
import { BrutalButton } from '../common/BrutalButton';

interface WorkerLiveRadarProps {
  jobs: JobRadarRequest[];
  onAcceptJob: (jobId: string) => void;
  onDeclineJob: (jobId: string) => void;
  onSimulateNewJob: () => void;
}

export const WorkerLiveRadar: React.FC<WorkerLiveRadarProps> = ({
  jobs,
  onAcceptJob,
  onDeclineJob,
  onSimulateNewJob,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedRadius, setSelectedRadius] = useState('5 km');
  const [activeTab, setActiveTab] = useState<'incoming' | 'active'>('incoming');

  const incomingJobs = jobs.filter((j) => j.status === 'incoming');
  const acceptedJobs = jobs.filter((j) => j.status === 'accepted');

  return (
    <div className="space-y-6">
      {/* Radar Control Bar */}
      <div className="bg-white/85 backdrop-blur-xl border-2 border-stone-300 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-slate-950 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.3)]">
            <Radar className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-black animate-ping" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-black text-base sm:text-lg text-slate-950 uppercase tracking-tight leading-none">
                Live Job Radar
              </h3>
              <BrutalBadge variant="cyan" size="xs">
                {incomingJobs.length} PENDING
              </BrutalBadge>
            </div>
            <p className="text-[11px] font-semibold text-neutral-600">
              Broadcasting cooperative service requests in real-time.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 ml-auto flex-wrap">
          {/* Radius selector */}
          <div className="flex items-center gap-1 bg-[#F4F1EA] border-2 border-black px-2 py-1 text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span>Radius:</span>
            <select
              value={selectedRadius}
              onChange={(e) => setSelectedRadius(e.target.value)}
              className="bg-transparent font-black outline-none cursor-pointer text-xs"
            >
              <option value="2 km">2 km (Walking)</option>
              <option value="5 km">5 km (Neighbourhood)</option>
              <option value="10 km">10 km (City Zone)</option>
            </select>
          </div>

          {/* Sound alert toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 border-2 border-black bg-white hover:bg-neutral-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            title={soundEnabled ? 'Mute Alert Chimes' : 'Enable Alert Chimes'}
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-black" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
            )}
          </button>

          {/* Simulate New Incoming Request */}
          <BrutalButton
            variant="cyan"
            size="sm"
            shadowSize="sm"
            onClick={onSimulateNewJob}
            icon={<RefreshCw className="w-3 h-3" />}
          >
            Simulate Broadcast
          </BrutalButton>
        </div>
      </div>

      {/* Tabs for Incoming vs In Progress (Frosted Segmented Tabs) */}
      <div className="bg-white/80 backdrop-blur-xl border border-stone-300/80 rounded-2xl p-1.5 shadow-xs inline-flex gap-2">
        <button
          onClick={() => setActiveTab('incoming')}
          className={`
            px-4 py-2 rounded-xl font-display font-black text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-2
            ${
              activeTab === 'incoming'
                ? 'bg-slate-950 text-white shadow-[2px_2px_0px_#000000]'
                : 'text-slate-700 hover:bg-white hover:text-slate-950'
            }
          `}
        >
          <Radar className="w-3.5 h-3.5 text-cyan-400" />
          <span>Incoming Radar ({incomingJobs.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('active')}
          className={`
            px-4 py-2 rounded-xl font-display font-black text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-2
            ${
              activeTab === 'active'
                ? 'bg-slate-950 text-white shadow-[2px_2px_0px_#000000]'
                : 'text-slate-700 hover:bg-white hover:text-slate-950'
            }
          `}
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Active Jobs ({acceptedJobs.length})</span>
        </button>
      </div>

      {/* Jobs Content List */}
      {activeTab === 'incoming' ? (
        <div className="space-y-4">
          {incomingJobs.length > 0 ? (
            incomingJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/90 backdrop-blur-xl border-2 border-stone-300/80 hover:border-cyan-400 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  {/* Left Column: Job Info */}
                  <div className="lg:col-span-8 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-slate-950 text-white px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider">
                        {job.trade}
                      </span>
                      {job.urgency === 'Emergency' && (
                        <span className="bg-rose-500/15 backdrop-blur-md border border-rose-400/40 text-rose-700 text-[10px] font-black px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                          <Flame className="w-3 h-3 text-rose-600 animate-pulse" />
                          EMERGENCY (45 MINS)
                        </span>
                      )}
                      <span className="text-[11px] font-bold text-slate-500">
                        {job.timestamp}
                      </span>
                      <span className="text-[10px] font-black bg-cyan-500/15 backdrop-blur-md border border-cyan-400/40 text-cyan-950 px-2.5 py-0.5 rounded-lg ml-auto flex items-center gap-1 shadow-xs">
                        📍 {job.distanceKm} km away ({job.sector})
                      </span>
                    </div>

                    <h4 className="font-display font-black text-lg text-slate-900 uppercase leading-tight group-hover:text-cyan-800 transition-colors">
                      {job.title}
                    </h4>

                    <p className="text-xs font-medium text-slate-700 leading-relaxed bg-stone-100/80 backdrop-blur-sm p-3 rounded-xl border border-stone-200">
                      "{job.description}"
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-600 pt-0.5">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        {job.scheduledTime}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Customer: <strong className="text-slate-700">{job.customerName}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Guaranteed Payout & Actions with Frosted Panel */}
                  <div className="lg:col-span-4 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-teal-500/5 backdrop-blur-md border border-cyan-400/40 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-xs">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-wider text-slate-600">
                          Guaranteed Direct Payout
                        </span>
                        <span className="bg-emerald-500/20 text-emerald-800 text-[9px] font-black px-1.5 py-0.2 rounded">
                          0% Fee
                        </span>
                      </div>
                      <div className="font-display font-black text-2xl sm:text-3xl text-slate-950 leading-tight">
                        ₹{job.payout}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-600 block mt-0.5">
                        100% directly settled via UPI upon completion.
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onAcceptJob(job.id)}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black py-2.5 px-3 rounded-xl shadow-[2px_2px_0px_#000000] active:translate-y-0.5 transition-all text-xs uppercase cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Accept</span>
                      </button>

                      <button
                        onClick={() => onDeclineJob(job.id)}
                        className="bg-white hover:bg-stone-100 text-slate-700 border border-stone-300 font-bold py-2.5 px-3 rounded-xl shadow-xs text-xs uppercase cursor-pointer flex items-center justify-center gap-1.5 transition-all"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Decline</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 bg-white/80 backdrop-blur-xl border-2 border-stone-300 rounded-3xl shadow-sm text-center space-y-4">
              <div className="w-14 h-14 bg-gradient-to-tr from-cyan-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                <Radar className="w-7 h-7 text-slate-950 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <div className="space-y-1">
                <p className="font-display font-black text-lg text-slate-950 uppercase">
                  Radar Scanning... No Pending Jobs
                </p>
                <p className="text-xs font-semibold text-slate-600 max-w-md mx-auto">
                  All nearby requests have been accepted. Click "Simulate Broadcast" to test a real-time incoming citizen request!
                </p>
              </div>
              <button
                onClick={onSimulateNewJob}
                className="bg-slate-950 hover:bg-slate-900 text-white font-black px-4 py-2 rounded-xl text-xs uppercase transition-all shadow-[2px_2px_0px_#000000] cursor-pointer inline-flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Broadcast Simulated Request</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Active In-Progress Jobs */
        <div className="space-y-4">
          {acceptedJobs.length > 0 ? (
            acceptedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/90 backdrop-blur-xl border-2 border-emerald-500/60 rounded-2xl p-5 shadow-[0_8px_30px_rgba(12,131,31,0.12)] relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-900 border border-emerald-400/50 text-[10px] font-black px-2.5 py-0.5 rounded-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        JOB IN PROGRESS
                      </span>
                      <span className="text-xs font-bold text-slate-500">#{job.id}</span>
                    </div>
                    <h4 className="font-display font-black text-xl text-slate-950 uppercase mt-1">
                      {job.title}
                    </h4>
                  </div>

                  <div className="text-right bg-emerald-50/80 border border-emerald-200/80 px-3 py-1.5 rounded-xl">
                    <span className="text-[10px] font-black uppercase text-emerald-800 block">
                      Payout Locked
                    </span>
                    <span className="font-display font-black text-2xl text-emerald-950">
                      ₹{job.payout}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 bg-stone-50/80 backdrop-blur-sm border border-stone-200/80 rounded-xl p-3.5 text-xs font-bold">
                  <div>
                    <span className="text-slate-400 uppercase text-[10px] block">Customer</span>
                    <span className="text-sm font-black text-slate-900">{job.customerName}</span>
                    <p className="text-slate-600 mt-0.5">{job.location}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase text-[10px] block">Target Time</span>
                    <span className="text-sm font-black text-slate-900">{job.scheduledTime}</span>
                    <p className="text-slate-600 mt-0.5">{job.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => alert(`Opening GPS navigation route to ${job.location}...`)}
                    className="bg-slate-950 hover:bg-slate-900 text-white font-black px-3.5 py-2 rounded-xl text-xs uppercase cursor-pointer flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] transition-all"
                  >
                    <NavIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Open GPS Route</span>
                  </button>

                  <button
                    onClick={() => alert(`Connecting masked direct call to ${job.customerName}...`)}
                    className="bg-white hover:bg-stone-100 text-slate-700 border border-stone-300 font-bold px-3.5 py-2 rounded-xl text-xs uppercase cursor-pointer flex items-center gap-1.5 shadow-xs transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-600" />
                    <span>Call Customer</span>
                  </button>

                  <button
                    onClick={() => {
                      alert(`Job #${job.id} marked as completed! ₹${job.payout} credited to your UPI.`);
                      onDeclineJob(job.id);
                    }}
                    className="ml-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black px-4 py-2 rounded-xl text-xs uppercase cursor-pointer flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] active:translate-y-0.5 transition-all"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Complete Job & Collect ₹{job.payout}</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 bg-white/80 backdrop-blur-xl border-2 border-stone-300 rounded-3xl shadow-sm text-center space-y-2">
              <p className="font-display font-black text-lg text-slate-950 uppercase">
                No active jobs in progress
              </p>
              <p className="text-xs font-semibold text-slate-600">
                Switch to the "Incoming Radar" tab to accept new service bookings.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
