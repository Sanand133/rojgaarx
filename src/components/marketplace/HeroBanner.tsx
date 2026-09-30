import React from 'react';
import { ShieldCheck, ArrowRight, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { BrutalBadge } from '../common/BrutalBadge';
import { BrutalButton } from '../common/BrutalButton';
import { LanguageCode } from '../../types';
import { getTranslation } from '../../utils/translations';

interface HeroBannerProps {
  language: LanguageCode;
  onExploreServices: () => void;
  onJoinAsWorker: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  language,
  onExploreServices,
  onJoinAsWorker,
}) => {
  const t = getTranslation(language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative border-4 border-black bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-7 overflow-hidden"
    >
      {/* High Density geometric accents */}
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#06B6D4] border-2 border-black rotate-12 -z-0 opacity-90 pointer-events-none" />
      <div className="absolute -bottom-12 right-28 w-28 h-28 bg-[#22D3EE] border-2 border-black -rotate-6 -z-0 opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl space-y-4">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-2">
          <BrutalBadge variant="coral" size="xs" icon={<Award className="w-3 h-3" />}>
            {t.hero.initiativeBadge}
          </BrutalBadge>

          <BrutalBadge variant="cyan" size="xs" icon={<ShieldCheck className="w-3 h-3" />}>
            {t.hero.federationBadge}
          </BrutalBadge>

          <span className="text-[11px] font-black uppercase text-neutral-800 bg-[#F4F1EA] px-2 py-0.5 border border-black">
            {t.hero.commissionBadge}
          </span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-black leading-tight uppercase tracking-tight">
          {t.hero.title}
        </h1>

        {/* Subtitle Description */}
        <p className="text-xs sm:text-sm font-bold text-neutral-800 max-w-2xl leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <BrutalButton
            variant="cyan"
            size="md"
            onClick={onExploreServices}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {t.hero.bookService}
          </BrutalButton>

          <BrutalButton
            variant="white"
            size="md"
            onClick={onJoinAsWorker}
            icon={<Users className="w-4 h-4" />}
          >
            {t.hero.joinAsWorker}
          </BrutalButton>
        </div>

        {/* Value Prop Checklist */}
        <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 border-t-2 border-black text-[11px] font-black">
          <div className="flex items-center gap-2 bg-[#F4F1EA] p-1.5 border border-black">
            <div className="w-4 h-4 bg-[#22D3EE] border border-black flex items-center justify-center font-black text-[10px]">
              ✓
            </div>
            <span>{t.hero.coopRateCard}</span>
          </div>

          <div className="flex items-center gap-2 bg-[#F4F1EA] p-1.5 border border-black">
            <div className="w-4 h-4 bg-[#06B6D4] border border-black flex items-center justify-center font-black text-[10px]">
              ✓
            </div>
            <span>{t.hero.eShramVerified}</span>
          </div>

          <div className="flex items-center gap-2 bg-[#F4F1EA] p-1.5 border border-black">
            <div className="w-4 h-4 bg-[#90E0EF] border border-black flex items-center justify-center font-black text-[10px]">
              ✓
            </div>
            <span>{t.hero.esicShield}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
