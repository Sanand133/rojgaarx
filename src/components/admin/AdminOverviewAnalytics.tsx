import React from 'react';
import {
  Users,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  PiggyBank,
  AlertTriangle,
  Flame,
  Building,
  MapPin,
} from 'lucide-react';
import { BrutalCard } from '../common/BrutalCard';
import { BrutalBadge } from '../common/BrutalBadge';
import { SECTORS } from '../../data/mockData';

export const AdminOverviewAnalytics: React.FC = () => {
  const sectorData = [
    { name: 'Sector 4 / Rohini', activeWorkers: 48, demand: 'Surge (88%)', weather: 'Thunderstorm Warning', status: 'AI Rebalanced' },
    { name: 'Sector 7 / Janakpuri', activeWorkers: 34, demand: 'High (64%)', weather: 'Rain 12mm', status: 'Optimal' },
    { name: 'Sector 14 / Dwarka', activeWorkers: 52, demand: 'Surge (92%)', weather: 'Heat Index 42°C', status: 'Surge Shift Dispatched' },
    { name: 'Sector 22 / Noida', activeWorkers: 29, demand: 'Normal (41%)', weather: 'Clear 34°C', status: 'Surplus Capacity' },
    { name: 'Sector 11 / Saket', activeWorkers: 38, demand: 'High (70%)', weather: 'Clear 33°C', status: 'Optimal' },
    { name: 'Sector 9 / Vasant Kunj', activeWorkers: 44, demand: 'High (78%)', weather: 'Clear', status: 'Optimal' },
  ];

  return (
    <div className="space-y-4">
      {/* 4 Hero Metric Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <BrutalCard
          bgColor="#06B6D4"
          shadowSize="md"
          borderWidth="sm"
          className="p-3.5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black uppercase text-black">
              Total Active Workforce
            </span>
            <Users className="w-4 h-4 text-black" />
          </div>
          <div className="font-display font-black text-2xl sm:text-3xl text-black leading-none">
            2,840
          </div>
          <p className="text-[11px] font-bold text-neutral-800 mt-1.5 flex items-center gap-1">
            <span className="bg-[#22D3EE] px-1 border border-black text-[9px] font-black">98.2% Active</span>
            Across 4 Member Societies
          </p>
        </BrutalCard>

        <BrutalCard
          bgColor="#22D3EE"
          shadowSize="md"
          borderWidth="sm"
          className="p-3.5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black uppercase text-black">
              Jobs Completed Today
            </span>
            <Briefcase className="w-4 h-4 text-black" />
          </div>
          <div className="font-display font-black text-2xl sm:text-3xl text-black leading-none">
            428
          </div>
          <p className="text-[11px] font-bold text-neutral-800 mt-1.5">
            Avg response time: <strong>18 mins</strong>
          </p>
        </BrutalCard>

        <BrutalCard
          bgColor="#90E0EF"
          shadowSize="md"
          borderWidth="sm"
          className="p-3.5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black uppercase text-black">
              Total Wage Dispatched
            </span>
            <TrendingUp className="w-4 h-4 text-black" />
          </div>
          <div className="font-display font-black text-2xl sm:text-3xl text-black leading-none">
            ₹3,18,450
          </div>
          <p className="text-[11px] font-bold text-neutral-800 mt-1.5">
            100% direct UPI settlement • ₹0 broker fee
          </p>
        </BrutalCard>

        <BrutalCard
          bgColor="#FF90E8"
          shadowSize="md"
          borderWidth="sm"
          className="p-3.5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black uppercase text-black">
              Worker Savings vs. Corporate
            </span>
            <PiggyBank className="w-4 h-4 text-black" />
          </div>
          <div className="font-display font-black text-2xl sm:text-3xl text-black leading-none">
            ₹89,160
          </div>
          <p className="text-[11px] font-bold text-neutral-800 mt-1.5">
            Saved today from traditional 28% app cuts
          </p>
        </BrutalCard>
      </div>

      {/* Regional Demand Heatmap Table */}
      <div className="bg-white border-2 border-black p-3.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black pb-2.5">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2.5 h-2.5 bg-[#FF5757] border border-black inline-block" />
              <span className="font-display font-black text-[10px] uppercase tracking-widest text-black">
                Geospatial Federation Grid
              </span>
            </div>
            <h3 className="font-display font-black text-lg text-black uppercase leading-tight">
              Regional Sector Demand & Worker Density Heatmap
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <BrutalBadge variant="cyan" size="xs">
              LIVE SENSOR LINKED
            </BrutalBadge>
            <span className="text-[11px] font-bold text-neutral-600">Updated 1 min ago</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b-2 border-black bg-[#F4F1EA] font-display font-black uppercase text-[11px]">
                <th className="p-2 border-r-2 border-black">Urban Sector Cluster</th>
                <th className="p-2 border-r-2 border-black">Active Workers On-Ground</th>
                <th className="p-2 border-r-2 border-black">Demand Intensity</th>
                <th className="p-2 border-r-2 border-black">Weather / Ambient Factor</th>
                <th className="p-2">Federation Allocation Status</th>
              </tr>
            </thead>
            <tbody className="font-bold text-xs">
              {sectorData.map((sec, idx) => (
                <tr
                  key={sec.name}
                  className={`border-b border-black/20 hover:bg-[#E0F7FA] transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF7]'
                  }`}
                >
                  <td className="p-2 border-r-2 border-black flex items-center gap-1.5 font-black">
                    <MapPin className="w-3 h-3 text-black" />
                    {sec.name}
                  </td>
                  <td className="p-2 border-r-2 border-black font-display text-xs">
                    {sec.activeWorkers} specialists
                  </td>
                  <td className="p-2 border-r-2 border-black">
                    {sec.demand.includes('Surge') ? (
                      <span className="bg-[#FF5757] text-white px-1.5 py-0.2 border border-black font-black uppercase text-[9px]">
                        {sec.demand}
                      </span>
                    ) : (
                      <span className="bg-[#06B6D4] text-black px-1.5 py-0.2 border border-black font-black uppercase text-[9px]">
                        {sec.demand}
                      </span>
                    )}
                  </td>
                  <td className="p-2 border-r-2 border-black text-neutral-800 text-[11px]">
                    {sec.weather}
                  </td>
                  <td className="p-2">
                    <span className="bg-[#22D3EE] px-1.5 py-0.2 border border-black font-black text-[9px] uppercase">
                      {sec.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
