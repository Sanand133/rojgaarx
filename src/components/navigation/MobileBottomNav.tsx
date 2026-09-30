import React from 'react';
import { Sparkles, ShoppingBag, Layers, Gavel, Radar, Clock } from 'lucide-react';
import { PortalTab, LanguageCode } from '../../types';
import { MarketplaceTab } from '../marketplace/MarketplaceView';

interface MobileBottomNavProps {
  currentPortal: PortalTab;
  onPortalChange: (portal: PortalTab) => void;
  activeMarketplaceTab: MarketplaceTab;
  onMarketplaceTabChange: (tab: MarketplaceTab) => void;
  activeOrdersCount: number;
  language: LanguageCode;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPortal,
  onPortalChange,
  activeMarketplaceTab,
  onMarketplaceTabChange,
  activeOrdersCount,
  language,
}) => {
  const handleTabClick = (type: 'portal' | 'marketplaceTab', id: string) => {
    if (type === 'portal') {
      onPortalChange(id as PortalTab);
    } else {
      if (currentPortal !== 'marketplace') {
        onPortalChange('marketplace');
      }
      onMarketplaceTabChange(id as MarketplaceTab);
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F4F1EA]/95 backdrop-blur-xl border-t border-stone-300/80 py-1.5 px-2 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      {/* 0. Home: Charter & Mission */}
      <button
        type="button"
        onClick={() => handleTabClick('marketplaceTab', 'home')}
        className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-xl transition-all ${
          currentPortal === 'marketplace' && (activeMarketplaceTab === 'home' || activeMarketplaceTab === 'overview')
            ? 'text-[#0C831F] font-bold scale-105'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Sparkles className="w-5 h-5" />
        <span className="text-[10px] leading-tight">
          {language === 'hi' ? 'होम' : 'Home'}
        </span>
      </button>

      {/* 1. Services / Workers Directory */}
      <button
        type="button"
        onClick={() => handleTabClick('marketplaceTab', 'directory')}
        className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-xl transition-all ${
          currentPortal === 'marketplace' && activeMarketplaceTab === 'directory'
            ? 'text-[#0C831F] font-bold scale-105'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <ShoppingBag className="w-5 h-5" />
        <span className="text-[10px] leading-tight">
          {language === 'hi' ? 'कारीगर' : 'Workers'}
        </span>
      </button>

      {/* 2. Combos */}
      <button
        type="button"
        onClick={() => handleTabClick('marketplaceTab', 'combos')}
        className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-xl transition-all ${
          currentPortal === 'marketplace' && activeMarketplaceTab === 'combos'
            ? 'text-[#0C831F] font-bold scale-105'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Layers className="w-5 h-5" />
        <span className="text-[10px] leading-tight">
          {language === 'hi' ? 'कॉम्बो' : 'Combos'}
        </span>
      </button>

      {/* 3. Tenders */}
      <button
        type="button"
        onClick={() => handleTabClick('marketplaceTab', 'bidding')}
        className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-xl transition-all ${
          currentPortal === 'marketplace' && activeMarketplaceTab === 'bidding'
            ? 'text-[#0C831F] font-bold scale-105'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Gavel className="w-5 h-5" />
        <span className="text-[10px] leading-tight">
          {language === 'hi' ? 'टेंडर्स' : 'Tenders'}
        </span>
      </button>

      {/* 4. Worker Live Radar */}
      <button
        type="button"
        onClick={() => handleTabClick('portal', 'worker')}
        className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-xl transition-all ${
          currentPortal === 'worker'
            ? 'text-[#0C831F] font-bold scale-105'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Radar className="w-5 h-5" />
        <span className="text-[10px] leading-tight">
          {language === 'hi' ? 'रडार' : 'Radar'}
        </span>
      </button>

      {/* 5. Orders */}
      <button
        type="button"
        onClick={() => handleTabClick('marketplaceTab', 'directory')}
        className="flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-xl text-slate-500 hover:text-slate-800 relative"
      >
        <Clock className="w-5 h-5" />
        {activeOrdersCount > 0 && (
          <span className="absolute top-0 right-2 w-4 h-4 bg-[#0C831F] text-white text-[9px] font-extrabold rounded-full flex items-center justify-center">
            {activeOrdersCount}
          </span>
        )}
        <span className="text-[10px] leading-tight">
          {language === 'hi' ? 'ऑर्डर्स' : 'Orders'}
        </span>
      </button>
    </nav>
  );
};
