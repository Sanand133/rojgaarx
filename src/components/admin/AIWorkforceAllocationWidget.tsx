import React, { useState } from 'react';
import {
  Cpu,
  CloudRain,
  SunMedium,
  Zap,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Sliders,
  Send,
  ArrowRight,
  Shield,
  Sparkles,
} from 'lucide-react';
import { AIAllocationForecast } from '../../types';
import { BrutalCard } from '../common/BrutalCard';
import { BrutalBadge } from '../common/BrutalBadge';
import { BrutalButton } from '../common/BrutalButton';
import { AI_ALLOCATION_FORECASTS } from '../../data/mockData';

export const AIWorkforceAllocationWidget: React.FC = () => {
  const [forecasts, setForecasts] = useState<AIAllocationForecast[]>(AI_ALLOCATION_FORECASTS);
  const [selectedScenario, setSelectedScenario] = useState<'monsoon' | 'heatwave' | 'festival'>('monsoon');
  const [isProcessing, setIsProcessing] = useState(false);
  const [autoDispatchMode, setAutoDispatchMode] = useState(true);

  const handleScenarioChange = (scenario: 'monsoon' | 'heatwave' | 'festival') => {
    setSelectedScenario(scenario);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      if (scenario === 'monsoon') {
        setForecasts([
          {
            id: 'ai-01',
            sector: 'Sector 4 & Sector 7 (River Drain Basin)',
            trade: 'Plumbing & Drainage',
            reason: 'Heavy monsoonal cloudburst alert (48mm/hr); basement sump pump failure risk detected.',
            expectedDemandSpike: '+85% Demand Surge',
            allocatedWorkersCount: 20,
            recommendedSurgeUnits: 20,
            weatherFactor: 'Precipitation 48mm / hr at 17:00',
            status: 'Auto-Allocated',
          },
          {
            id: 'ai-04',
            sector: 'Low-Lying Colonies',
            trade: 'Sanitation & Deep Cleaning',
            reason: 'Waterlogging prevention and pre-monsoon storm drain clearing mandate.',
            expectedDemandSpike: '+55% Demand Surge',
            allocatedWorkersCount: 16,
            recommendedSurgeUnits: 18,
            status: 'Auto-Allocated',
          },
        ]);
      } else if (scenario === 'heatwave') {
        setForecasts([
          {
            id: 'ai-03',
            sector: 'Dwarka Sub-City & Rohini Clusters',
            trade: 'Appliance & AC Technicians',
            reason: 'Ambient temperature 43°C; compressor overload and capacitor burning spike.',
            expectedDemandSpike: '+95% Demand Surge',
            allocatedWorkersCount: 28,
            recommendedSurgeUnits: 30,
            weatherFactor: 'Heat Index 46°C Extreme',
            status: 'Auto-Allocated',
          },
          {
            id: 'ai-02',
            sector: 'Sector 12 Industrial Hub',
            trade: 'Electricians & Industrial Wiring',
            reason: 'Substation feeder load saturation; cooling fan failures.',
            expectedDemandSpike: '+60% Demand Surge',
            allocatedWorkersCount: 18,
            recommendedSurgeUnits: 18,
            status: 'Auto-Allocated',
          },
        ]);
      } else {
        setForecasts([
          {
            id: 'ai-05',
            sector: 'City Residential & Commercial Centers',
            trade: 'Painters, Polishers & Carpenters',
            reason: 'Pre-festive home renovation season; high institutional request density.',
            expectedDemandSpike: '+75% Demand Surge',
            allocatedWorkersCount: 35,
            recommendedSurgeUnits: 40,
            status: 'Auto-Allocated',
          },
          {
            id: 'ai-06',
            sector: 'High-Density Residential',
            trade: 'Deep Cleaners & Sanitation',
            reason: 'Annual pre-Diwali deep sanitation and sofa shampooing bookings peak.',
            expectedDemandSpike: '+110% Surge',
            allocatedWorkersCount: 42,
            recommendedSurgeUnits: 45,
            status: 'Auto-Allocated',
          },
        ]);
      }
    }, 600);
  };

  const handleManualRebalance = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('AI Workforce Allocation successfully rebalanced across all 4 cooperative societies!');
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Widget Header & Controls */}
      <div className="bg-[#FFFDF9] border-[3px] border-black p-5 shadow-[5px_5px_0px_#000000] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-[#06B6D4] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <Cpu className="w-4 h-4 animate-pulse" />
            </div>
            <h3 className="font-display font-black text-xl text-black uppercase tracking-tight">
              AI Predictive Workforce Allocation Engine
            </h3>
            <BrutalBadge variant="cyan" size="xs">
              SIH 26089 AI ACTIVE
            </BrutalBadge>
          </div>
          <p className="text-xs font-semibold text-neutral-700">
            Forecasts localized demand spikes using weather feeds, historical breakdown logs, and grid sensors to auto-allocate cooperative specialists before emergencies happen.
          </p>
        </div>

        {/* Simulation Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 bg-[#F4F1EA] border-[2px] border-black px-2.5 py-1 text-xs font-black">
            <span>Scenario:</span>
            <select
              value={selectedScenario}
              onChange={(e) => handleScenarioChange(e.target.value as any)}
              className="bg-transparent font-black outline-none cursor-pointer"
            >
              <option value="monsoon">🌧️ Monsoon Cloudburst</option>
              <option value="heatwave">☀️ Severe Heatwave</option>
              <option value="festival">🪔 Festive Renovation Surge</option>
            </select>
          </div>

          <BrutalButton
            variant="cyan"
            size="sm"
            shadowSize="sm"
            onClick={handleManualRebalance}
            disabled={isProcessing}
            icon={<RefreshCw className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} />}
          >
            {isProcessing ? 'Rebalancing...' : 'Run Auto-Rebalance'}
          </BrutalButton>
        </div>
      </div>

      {/* Autonomous Dispatch Banner */}
      <div className="bg-[#06B6D4] border-[3px] border-black p-4 shadow-[4px_4px_0px_#000000] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-black shrink-0" />
          <div className="text-xs font-bold text-black">
            <strong>Autonomous Dispatch Protocol:</strong> Workers in low-demand zones are notified 3 hours prior with guaranteed surge allowances and cooperative fuel vouchers.
          </div>
        </div>

        <button
          onClick={() => setAutoDispatchMode(!autoDispatchMode)}
          className={`
            px-3 py-1 text-xs font-black uppercase border-2 border-black cursor-pointer shadow-[2px_2px_0px_#000]
            ${autoDispatchMode ? 'bg-black text-white' : 'bg-white text-black'}
          `}
        >
          {autoDispatchMode ? 'Autonomous Dispatch: ON' : 'Manual Approval: Required'}
        </button>
      </div>

      {/* AI Allocation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {forecasts.map((item) => (
          <BrutalCard
            key={item.id}
            bgColor="#FFFFFF"
            shadowSize="md"
            interactive={false}
            className="p-5 border-[3px] border-black space-y-4"
          >
            <div className="flex items-start justify-between gap-3 border-b-2 border-black pb-3">
              <div>
                <span className="text-[10px] font-black uppercase text-neutral-500 block">
                  Cluster Sector
                </span>
                <h4 className="font-display font-black text-lg text-black uppercase">
                  {item.sector}
                </h4>
                <p className="text-xs font-black text-[#3B82F6] uppercase">
                  {item.trade}
                </p>
              </div>

              <BrutalBadge variant="coral" size="xs">
                {item.expectedDemandSpike}
              </BrutalBadge>
            </div>

            {/* AI Rationale Box */}
            <div className="bg-[#F4F1EA] border-2 border-black p-3 space-y-1 text-xs">
              <span className="font-black text-black uppercase text-[10px] block">
                🧠 Predictive AI Analysis:
              </span>
              <p className="font-medium text-neutral-800 leading-relaxed">
                {item.reason}
              </p>
              {item.weatherFactor && (
                <div className="text-[11px] font-bold text-neutral-700 pt-1 border-t border-black/10">
                  ⚡ Telemetry Factor: <strong>{item.weatherFactor}</strong>
                </div>
              )}
            </div>

            {/* Allocation Stats */}
            <div className="grid grid-cols-2 gap-3 bg-[#E0F7FA] border-2 border-black p-3 text-xs font-bold">
              <div>
                <span className="text-neutral-600 block text-[10px] uppercase">Workers Allocated</span>
                <span className="font-display font-black text-xl text-black">
                  {item.allocatedWorkersCount} / {item.recommendedSurgeUnits}
                </span>
              </div>
              <div className="text-right">
                <span className="text-neutral-600 block text-[10px] uppercase">Society Status</span>
                <span className="inline-block bg-[#22D3EE] border border-black px-1.5 py-0.2 text-[10px] font-black uppercase">
                  {item.status}
                </span>
              </div>
            </div>

            {/* Dispatch Action */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] font-bold text-green-800">
                ✓ Sourced from Sector 22 & 18 Reserves
              </span>
              <button
                onClick={() =>
                  alert(`Broadcasted high-priority dispatch notice to ${item.allocatedWorkersCount} ${item.trade} workers.`)
                }
                className="px-3 py-1.5 bg-black text-white text-xs font-black uppercase border border-black hover:bg-neutral-800 transition-colors shadow-[2px_2px_0px_#000] cursor-pointer"
              >
                Trigger Society Ping
              </button>
            </div>
          </BrutalCard>
        ))}
      </div>
    </div>
  );
};
