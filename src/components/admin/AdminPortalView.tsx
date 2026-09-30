import React, { useState } from 'react';
import {
  LayoutDashboard,
  Cpu,
  ShieldAlert,
  Building2,
  Download,
  Flame,
  CheckCircle,
} from 'lucide-react';
import { LanguageCode } from '../../types';
import { AdminOverviewAnalytics } from './AdminOverviewAnalytics';
import { AIWorkforceAllocationWidget } from './AIWorkforceAllocationWidget';
import { DisputeAndSosPanel } from './DisputeAndSosPanel';
import { FederationRoster } from './FederationRoster';
import { BrutalBadge } from '../common/BrutalBadge';
import { BrutalButton } from '../common/BrutalButton';

interface AdminPortalViewProps {
  language: LanguageCode;
}

export const AdminPortalView: React.FC<AdminPortalViewProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'ai' | 'disputes' | 'roster'>('overview');

  return (
    <div className="min-h-screen bg-[#F4F1EA] py-4 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
      {/* Top Banner Bar */}
      <div className="bg-white border-2 border-black p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <BrutalBadge variant="coral" size="xs">
              FEDERATION EXECUTIVE CONTROL
            </BrutalBadge>
            <span className="text-[11px] font-bold text-neutral-600">
              National Council of Labour Cooperatives (NCLC Grid)
            </span>
          </div>
          <h1 className="font-display font-black text-xl sm:text-2xl text-black uppercase tracking-tight leading-tight">
            Cooperative Federation Administration
          </h1>
          <p className="text-xs font-semibold text-neutral-700">
            Real-time workforce monitoring, AI predictive allocation, dispute audit logs, and society registries.
          </p>
        </div>

        {/* Right side report exports */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Generating State Cooperative Audit & Fair Wage Compliance Report (PDF)...')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border-2 border-black text-xs font-black uppercase hover:bg-neutral-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> Export Audit Report
          </button>
        </div>
      </div>

      {/* Admin Subtabs */}
      <div className="flex border-b-4 border-black gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
        <button
          onClick={() => setActiveTab('overview')}
          className={`
            flex items-center gap-1.5 px-3.5 py-1.5 border-t-2 border-x-2 border-black font-display font-black text-xs uppercase tracking-wider cursor-pointer whitespace-nowrap transition-colors
            ${
              activeTab === 'overview'
                ? 'bg-[#06B6D4] shadow-[3px_-3px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white hover:bg-neutral-100'
            }
          `}
        >
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Overview Analytics & Heatmap</span>
        </button>

        <button
          onClick={() => setActiveTab('ai')}
          className={`
            flex items-center gap-1.5 px-3.5 py-1.5 border-t-2 border-x-2 border-black font-display font-black text-xs uppercase tracking-wider cursor-pointer whitespace-nowrap transition-colors
            ${
              activeTab === 'ai'
                ? 'bg-[#22D3EE] shadow-[3px_-3px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white hover:bg-neutral-100'
            }
          `}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>AI Allocation Engine</span>
        </button>

        <button
          onClick={() => setActiveTab('disputes')}
          className={`
            flex items-center gap-1.5 px-3.5 py-1.5 border-t-2 border-x-2 border-black font-display font-black text-xs uppercase tracking-wider cursor-pointer whitespace-nowrap transition-colors
            ${
              activeTab === 'disputes'
                ? 'bg-[#FF5757] text-white shadow-[3px_-3px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white hover:bg-neutral-100 text-black'
            }
          `}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Disputes & Grievance Logs (1 Pending)</span>
        </button>

        <button
          onClick={() => setActiveTab('roster')}
          className={`
            flex items-center gap-1.5 px-3.5 py-1.5 border-t-2 border-x-2 border-black font-display font-black text-xs uppercase tracking-wider cursor-pointer whitespace-nowrap transition-colors
            ${
              activeTab === 'roster'
                ? 'bg-[#90E0EF] shadow-[3px_-3px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white hover:bg-neutral-100'
            }
          `}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Member Societies</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div>
        {activeTab === 'overview' && <AdminOverviewAnalytics />}
        {activeTab === 'ai' && <AIWorkforceAllocationWidget />}
        {activeTab === 'disputes' && <DisputeAndSosPanel />}
        {activeTab === 'roster' && <FederationRoster />}
      </div>
    </div>
  );
};
