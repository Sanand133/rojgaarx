import React from 'react';
import { Building2, Users, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BrutalCard } from '../common/BrutalCard';
import { BrutalBadge } from '../common/BrutalBadge';
import { COOPERATIVE_SOCIETIES } from '../../data/mockData';

export const FederationRoster: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#FFFDF9] border-[3px] border-black p-5 shadow-[5px_5px_0px_#000000] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BrutalBadge variant="blue" size="xs">
              MEMBER SOCIETIES
            </BrutalBadge>
            <span className="text-xs font-bold text-neutral-600">
              Registrar of Cooperative Societies (RCS) Registered
            </span>
          </div>
          <h3 className="font-display font-black text-xl text-black uppercase tracking-tight">
            Affiliated Labour Cooperative Federation Roster
          </h3>
          <p className="text-xs font-semibold text-neutral-700">
            Certified societies whose members operate under the CoOpConnect unified platform SLA.
          </p>
        </div>

        <button
          onClick={() => alert('Opening new Cooperative Society Affiliation onboarding application...')}
          className="px-4 py-2 bg-[#06B6D4] border-[2.5px] border-black text-xs font-black uppercase shadow-[3px_3px_0px_#000] hover:bg-cyan-400 transition-colors cursor-pointer"
        >
          + Affiliate New Society
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COOPERATIVE_SOCIETIES.map((soc) => (
          <BrutalCard
            key={soc.id}
            bgColor="#FFFFFF"
            shadowSize="md"
            interactive={false}
            className="p-5 border-[3px] border-black space-y-4"
          >
            <div className="flex items-start justify-between gap-3 border-b-2 border-black pb-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#06B6D4] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000]">
                  <Building2 className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-display font-black text-base text-black uppercase">
                    {soc.name}
                  </h4>
                  <p className="text-xs font-bold text-neutral-600">
                    {soc.federation} • Est. {soc.established}
                  </p>
                </div>
              </div>

              <span className="bg-[#90E0EF] border border-black px-2 py-0.5 text-[10px] font-black uppercase">
                {soc.code}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-[#F4F1EA] border-2 border-black p-3 text-xs font-bold">
              <div>
                <span className="text-neutral-500 uppercase text-[10px] block">Active Workforce</span>
                <span className="font-display font-black text-lg text-black">
                  {soc.membersCount} Certified Members
                </span>
              </div>
              <div className="text-right">
                <span className="text-neutral-500 uppercase text-[10px] block">Statutory Audit</span>
                <span className="text-green-800 font-black">
                  {soc.auditScore}
                </span>
              </div>
            </div>

            <div className="space-y-1 text-xs font-semibold text-neutral-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>100% Biometric e-Shram & Aadhaar verified roster</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>Cooperative Welfare Fund pooled under escrow custody</span>
              </div>
            </div>

            <div className="pt-2 border-t border-black/15 flex items-center justify-between">
              <span className="text-[11px] font-bold text-neutral-600">
                Direct Board Representative: Active
              </span>
              <button
                onClick={() => alert(`Accessing membership registry for ${soc.name}...`)}
                className="text-xs font-black text-blue-700 underline hover:text-black cursor-pointer"
              >
                View Full Roster
              </button>
            </div>
          </BrutalCard>
        ))}
      </div>
    </div>
  );
};
