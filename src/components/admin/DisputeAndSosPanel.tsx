import React, { useState } from 'react';
import {
  ShieldAlert,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  Star,
  ExternalLink,
  Flame,
  Check,
} from 'lucide-react';
import { DisputeRecord } from '../../types';
import { BrutalCard } from '../common/BrutalCard';
import { BrutalBadge } from '../common/BrutalBadge';
import { BrutalButton } from '../common/BrutalButton';
import { DISPUTES_AND_SOS } from '../../data/mockData';

export const DisputeAndSosPanel: React.FC = () => {
  const [records, setRecords] = useState<DisputeRecord[]>(DISPUTES_AND_SOS);
  const [filter, setFilter] = useState<'all' | 'critical' | 'dispute'>('all');

  const handleResolve = (id: string) => {
    setRecords((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'Resolved' } : r))
    );
    alert(`Case #${id} marked as resolved following cooperative grievance audit.`);
  };

  const filteredRecords = records.filter((r) => {
    if (filter === 'critical') return r.severity.includes('Critical');
    if (filter === 'dispute') return !r.severity.includes('Critical');
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="bg-[#FFFDF9] border-[3px] border-black p-5 shadow-[5px_5px_0px_#000000] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF5757] text-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h3 className="font-display font-black text-xl text-black uppercase tracking-tight">
              Federation Grievance & Rapid Safety Oversight
            </h3>
          </div>
          <p className="text-xs font-semibold text-neutral-700">
            Rapid resolution panel with direct cooperative federation oversight and 24/7 worker safety helpline.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 border-2 border-black text-xs font-black uppercase cursor-pointer ${
              filter === 'all' ? 'bg-black text-white shadow-[2px_2px_0px_#000]' : 'bg-white hover:bg-neutral-100 text-black'
            }`}
          >
            All Logs ({records.length})
          </button>
          <button
            onClick={() => setFilter('critical')}
            className={`px-3 py-1.5 border-2 border-black text-xs font-black uppercase cursor-pointer ${
              filter === 'critical' ? 'bg-[#FF5757] text-white shadow-[2px_2px_0px_#000]' : 'bg-white hover:bg-neutral-100 text-black'
            }`}
          >
            Critical Safety Only
          </button>
          <button
            onClick={() => setFilter('dispute')}
            className={`px-3 py-1.5 border-2 border-black text-xs font-black uppercase cursor-pointer ${
              filter === 'dispute' ? 'bg-[#06B6D4] text-black shadow-[2px_2px_0px_#000]' : 'bg-white hover:bg-neutral-100 text-black'
            }`}
          >
            Disputes & Audits
          </button>
        </div>
      </div>

      {/* Emergency Active Alert Box */}
      <div className="bg-[#FF5757] text-white border-[3px] border-black p-4 shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <PhoneCall className="w-6 h-6 shrink-0 mt-1 animate-bounce" />
          <div>
            <span className="font-display font-black text-xs tracking-widest uppercase bg-black text-[#06B6D4] px-2 py-0.5 inline-block mb-1">
              CENTRAL FEDERATION HELPLINE
            </span>
            <h4 className="font-display font-black text-lg uppercase leading-tight">
              Rapid Safety Escalation Bridge (Toll-Free 1800-419-COOP)
            </h4>
            <p className="text-xs font-bold text-white/90">
              When a worker triggers an urgent safety escalation on-site, nearby cooperative members within 1.5 km receive an alert alongside local police & ambulance.
            </p>
          </div>
        </div>

        <button
          onClick={() => alert('Simulating emergency dispatcher contact...')}
          className="bg-black text-white px-4 py-2 border-2 border-white font-display font-black text-xs uppercase hover:bg-neutral-800 transition-colors shadow-[2px_2px_0px_#FFF] cursor-pointer whitespace-nowrap shrink-0"
        >
          Open Dispatcher Radio
        </button>
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {filteredRecords.map((record) => (
          <BrutalCard
            key={record.id}
            bgColor={record.severity.includes('Critical') ? '#FFF2F2' : '#FFFFFF'}
            shadowSize="md"
            interactive={false}
            className={`p-5 border-[3px] border-black ${
              record.severity.includes('Critical') ? 'border-red-600' : ''
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black pb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-black text-xs uppercase px-2 py-0.5 border border-black bg-black text-white">
                  Case #{record.id}
                </span>

                {record.severity.includes('Critical') ? (
                  <BrutalBadge variant="coral" size="xs" icon={<Flame className="w-3 h-3" />}>
                    CRITICAL SAFETY ESCALATION
                  </BrutalBadge>
                ) : (
                  <BrutalBadge variant="cyan" size="xs">
                    CUSTOMER INQUIRY
                  </BrutalBadge>
                )}

                <span className="text-xs font-bold text-neutral-500">{record.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 text-xs font-black uppercase border border-black ${
                    record.status === 'Resolved'
                      ? 'bg-[#22D3EE] text-black'
                      : 'bg-[#06B6D4] text-black'
                  }`}
                >
                  Status: {record.status}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-4 text-xs font-bold">
              <div className="md:col-span-4 space-y-1 bg-[#F4F1EA] p-3 border border-black">
                <span className="text-neutral-500 uppercase text-[10px] block">Involved Parties</span>
                <p>
                  <strong>Worker:</strong> {record.workerName}
                </p>
                <p>
                  <strong>Customer:</strong> {record.customerName}
                </p>
                <p>
                  <strong>Service:</strong> {record.service}
                </p>
              </div>

              <div className="md:col-span-8 space-y-2 bg-white p-3 border border-black">
                <span className="text-neutral-500 uppercase text-[10px] block">Incident Log & Audit</span>
                <p className="text-xs font-semibold text-neutral-900 leading-relaxed">
                  "{record.issue}"
                </p>
              </div>
            </div>

            {/* Resolution Action */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-xs font-black">
                <span>Customer Trust Rating:</span>
                <span className="flex items-center gap-0.5 bg-[#06B6D4] px-1.5 py-0.2 border border-black">
                  <Star className="w-3 h-3 fill-black text-black" />
                  {record.rating} / 5.0
                </span>
              </div>

              {record.status !== 'Resolved' ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleResolve(record.id)}
                    className="px-3 py-1.5 bg-[#06B6D4] text-black text-xs font-black uppercase border-2 border-black hover:bg-cyan-400 transition-colors shadow-[2px_2px_0px_#000] cursor-pointer flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" /> Stamp Resolved
                  </button>
                </div>
              ) : (
                <span className="text-xs font-black text-green-700 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Society Audit Complete
                </span>
              )}
            </div>
          </BrutalCard>
        ))}
      </div>
    </div>
  );
};
