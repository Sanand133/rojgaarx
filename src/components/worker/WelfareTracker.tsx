import React, { useState } from 'react';
import {
  Wallet,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  Download,
  AlertCircle,
  PiggyBank,
  Building,
  ArrowUpRight,
} from 'lucide-react';
import { WelfareStats } from '../../types';
import { BrutalCard } from '../common/BrutalCard';
import { BrutalBadge } from '../common/BrutalBadge';
import { BrutalButton } from '../common/BrutalButton';

interface WelfareTrackerProps {
  stats: WelfareStats;
}

export const WelfareTracker: React.FC<WelfareTrackerProps> = ({ stats }) => {
  const [withdrawing, setWithdrawing] = useState(false);
  const [withdrawnAmount, setWithdrawnAmount] = useState(0);

  const handleInstantPayout = () => {
    setWithdrawing(true);
    setTimeout(() => {
      setWithdrawing(false);
      setWithdrawnAmount(stats.pendingPayout);
      alert(
        `SUCCESS! ₹${stats.pendingPayout} transferred directly to linked UPI ID (9876543210@upi) with ₹0 transfer charges via Cooperative Treasury.`
      );
    }, 900);
  };

  const remainingPayout = stats.pendingPayout - withdrawnAmount;

  return (
    <div className="space-y-6">
      {/* Top 4 Frosted Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Today's Direct Earnings */}
        <div className="bg-white/90 backdrop-blur-xl border-2 border-cyan-400/50 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)] transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl pointer-events-none -mr-6 -mt-6" />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase text-slate-600 tracking-wider">
                Today's Direct Earnings
              </span>
              <div className="w-7 h-7 rounded-lg bg-cyan-500/15 text-cyan-700 flex items-center justify-center">
                <Wallet className="w-4 h-4" />
              </div>
            </div>
            <div className="font-display font-black text-3xl text-slate-950 leading-none">
              ₹{stats.todayEarnings}
            </div>
            <p className="text-[11px] font-bold text-emerald-700 mt-1.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              100% labour wage • 0% commission
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-stone-200/80 flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-600">Unsettled: ₹{remainingPayout}</span>
            <button
              onClick={handleInstantPayout}
              disabled={withdrawing || remainingPayout <= 0}
              className="text-[10px] font-black bg-slate-950 text-white px-2.5 py-1 rounded-lg uppercase hover:bg-cyan-600 transition-colors cursor-pointer shadow-xs"
            >
              {withdrawing ? 'Sending...' : remainingPayout <= 0 ? 'Settled ✓' : 'Instant UPI Payout'}
            </button>
          </div>
        </div>

        {/* Cooperative 5% Savings & Pension Fund */}
        <div className="bg-white/90 backdrop-blur-xl border-2 border-emerald-400/50 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_8px_25px_rgba(12,131,31,0.15)] transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl pointer-events-none -mr-6 -mt-6" />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase text-slate-600 tracking-wider">
                5% Society Welfare Fund
              </span>
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-700 flex items-center justify-center">
                <PiggyBank className="w-4 h-4" />
              </div>
            </div>
            <div className="font-display font-black text-3xl text-slate-950 leading-none">
              ₹{stats.coopSavingsFundBalance}
            </div>
            <p className="text-[11px] font-bold text-slate-600 mt-1.5">
              Accumulated emergency reserve
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-bold">
            <span className="text-slate-600">Annual Return: 8.2%</span>
            <span className="text-cyan-700 font-bold hover:underline cursor-pointer">View Passbook →</span>
          </div>
        </div>

        {/* Integrated Health & Accident Shield */}
        <div className="bg-white/90 backdrop-blur-xl border-2 border-blue-400/50 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)] transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl pointer-events-none -mr-6 -mt-6" />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase text-slate-600 tracking-wider">
                ESIC & Accident Cover
              </span>
              <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-700 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="font-display font-black text-3xl text-slate-950 leading-none">
              ₹5,00,000
            </div>
            <p className="text-[11px] font-bold text-slate-600 mt-1.5">
              Active medical & tool cover
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-bold">
            <span className="bg-blue-50 text-blue-900 border border-blue-200 px-2 py-0.5 rounded-md text-[10px] font-black">
              STATUS: VERIFIED
            </span>
            <span className="text-slate-500">Policy #DL-4482</span>
          </div>
        </div>

        {/* Cooperative Society Annual Dividend Points */}
        <div className="bg-white/90 backdrop-blur-xl border-2 border-amber-400/50 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)] transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-xl pointer-events-none -mr-6 -mt-6" />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase text-slate-600 tracking-wider">
                Society Member Dividend
              </span>
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-700 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="font-display font-black text-3xl text-slate-950 leading-none">
              ₹{stats.societyDividendShare}
            </div>
            <p className="text-[11px] font-bold text-slate-600 mt-1.5">
              Cooperative profit share distribution
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-bold">
            <span className="text-slate-700">{stats.societyPensionPoints} Member Points</span>
            <span className="bg-slate-900 text-white px-2 py-0.5 rounded text-[10px] font-black">Dec 2026</span>
          </div>
        </div>
      </div>

      {/* Welfare Shield Details & Transparent Payout Breakdown Ledger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Transparent Earnings Ledger */}
        <div className="lg:col-span-8 bg-white/90 backdrop-blur-xl border-2 border-stone-300 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
            <div>
              <h4 className="font-display font-black text-lg text-slate-950 uppercase">
                Transparent Direct Payout Ledger
              </h4>
              <p className="text-xs font-semibold text-slate-500">
                Every rupee verified. No commission deductions, platform fees, or hidden taxes.
              </p>
            </div>
            <button
              onClick={() => alert('Downloading official GST & Cooperative Federation Wage Slip (PDF)...')}
              className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors self-start sm:self-auto"
            >
              <Download className="w-3.5 h-3.5" /> PDF Statement
            </button>
          </div>

          {/* Ledger Items */}
          <div className="space-y-3">
            {[
              {
                id: 'TXN-8819',
                job: 'MCB Tripping & Short Circuit Fix',
                client: 'Anil Malhotra (Sector 4)',
                gross: 750,
                welfare: 37,
                middlemanCut: 0,
                net: 750,
                status: 'Credited to UPI',
                date: 'Today, 11:30 AM',
              },
              {
                id: 'TXN-8818',
                job: 'Inverter Earthing Line Overhaul',
                client: 'Radhika Sen (Sector 7)',
                gross: 1100,
                welfare: 55,
                middlemanCut: 0,
                net: 1100,
                status: 'Credited to UPI',
                date: 'Today, 09:15 AM',
              },
              {
                id: 'TXN-8814',
                job: '3 Phase Distribution Box Balancing',
                client: 'St. Mary Hospital Facility',
                gross: 1600,
                welfare: 80,
                middlemanCut: 0,
                net: 1600,
                status: 'Credited to Bank',
                date: 'Yesterday, 04:00 PM',
              },
            ].map((txn) => (
              <div
                key={txn.id}
                className="bg-stone-50/80 backdrop-blur-sm border border-stone-200/90 rounded-2xl p-3.5 text-xs font-bold space-y-2 hover:border-cyan-400 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-2">
                  <span className="font-display font-black text-slate-900 text-sm">{txn.job}</span>
                  <span className="bg-emerald-50 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-md text-[10px] font-black uppercase">
                    {txn.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Client / Location</span>
                    <span className="text-slate-800">{txn.client}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Client Paid</span>
                    <span className="font-black text-slate-950">₹{txn.gross}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">5% Coop Reserve</span>
                    <span className="text-emerald-700 font-bold">+₹{txn.welfare} (Society)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Your Direct Take</span>
                    <span className="font-display font-black text-slate-950 bg-cyan-100 border border-cyan-300 px-2 py-0.5 rounded inline-block">
                      ₹{txn.net} (100%)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-200 rounded-2xl p-4 text-xs font-bold text-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>
              💡 On other platforms, you would have lost approximately{' '}
              <strong className="text-rose-600">₹1,035</strong> in platform commissions on these 3 jobs!
            </span>
            <span className="font-black uppercase bg-slate-950 text-amber-300 px-2.5 py-1 rounded-lg text-[10px] self-start sm:self-auto">
              CoOp Shield Active
            </span>
          </div>
        </div>

        {/* Right Column: Health & Social Security Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white/90 backdrop-blur-xl border-2 border-stone-300 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <span className="font-display font-black text-xs uppercase tracking-wider text-slate-900">
                Worker Social Security Card
              </span>
              <Building className="w-4 h-4 text-cyan-600" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400">
                Primary Federation
              </span>
              <h5 className="font-display font-black text-base uppercase text-slate-950">
                Delhi Shramik Sahakari Samiti
              </h5>
              <p className="text-[11px] font-semibold text-slate-500">
                Registration No: DL-448/RCS/1984
              </p>
            </div>

            <div className="bg-stone-50/90 border border-stone-200 rounded-2xl p-3.5 space-y-2 text-xs font-bold">
              <div className="flex justify-between">
                <span className="text-slate-500">e-Shram Universal UAN:</span>
                <span className="font-black text-slate-900">1092 8841 0029</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Accident Claim Hotline:</span>
                <span className="font-black text-rose-600">1800-180-5522</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Hospital Network:</span>
                <span className="font-black text-emerald-700">142 Cashless Panels</span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-Fee Tool Replacement Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Subsidized Children Skill Scholarships</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Annual Cooperative Dividend Payout</span>
              </div>
            </div>

            <button
              onClick={() => alert('Opening Federation Emergency Medical Aid Portal...')}
              className="w-full bg-slate-950 hover:bg-slate-900 text-white font-black py-2.5 px-4 rounded-xl text-xs uppercase cursor-pointer flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000000] transition-all"
            >
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              <span>Request Emergency Grant</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
