import React from 'react';
import { Zap, ShieldCheck } from 'lucide-react';

interface RojgaarXLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  showBadge?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const RojgaarXLogo: React.FC<RojgaarXLogoProps> = ({
  size = 'md',
  showTagline = true,
  showBadge = true,
  theme = 'light',
  className = '',
}) => {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  const emblemDimensions = isSmall
    ? 'w-7 h-7 rounded-lg p-[1.5px]'
    : isLarge
    ? 'w-12 h-12 rounded-2xl p-[2.5px]'
    : 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-[2px]';

  const innerRadius = isSmall ? 'rounded-[6px]' : isLarge ? 'rounded-[13px]' : 'rounded-[10px]';

  const zapSize = isSmall
    ? 'w-3.5 h-3.5'
    : isLarge
    ? 'w-6 h-6'
    : 'w-4.5 h-4.5 sm:w-5 sm:h-5';

  const titleSize = isSmall
    ? 'text-base'
    : isLarge
    ? 'text-2xl sm:text-3xl'
    : 'text-lg sm:text-xl';

  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const subtitleColor = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Crafted Multi-Tone Gradient Emblem with Frosted Dark Glass Core */}
      <div
        className={`
          relative shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-[2px_2px_0px_#000000]
          bg-gradient-to-br from-[#FF5500] via-[#F59E0B] to-[#0C831F]
          ${emblemDimensions}
        `}
      >
        <div
          className={`
            w-full h-full bg-slate-950/92 backdrop-blur-md flex items-center justify-center relative overflow-hidden
            ${innerRadius}
          `}
        >
          {/* Subtle Ambient Refraction Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-emerald-500/20 pointer-events-none" />

          {/* Central Radiant Golden Lightning Spark */}
          <Zap
            className={`
              ${zapSize} text-amber-400 fill-amber-400/90
              drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]
              transition-transform duration-200 group-hover:rotate-6
            `}
          />

          {/* Micro Status Beacon: Cooperative Green Verified Dot */}
          <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#0C831F] border border-black shadow-[0_0_4px_#0C831F]" />
        </div>
      </div>

      {/* Brand Typography & Cooperative Tagline */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-display font-black tracking-tight ${titleSize} ${textColor}`}>
            Rojgaar
            <span className="bg-gradient-to-tr from-[#FF5500] via-[#F59E0B] to-[#0C831F] bg-clip-text text-transparent drop-shadow-xs font-black">
              X
            </span>
          </span>

          {showBadge && (
            <span
              className={`
                hidden sm:inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md border shadow-xs
                ${
                  theme === 'dark'
                    ? 'bg-amber-500/15 text-amber-300 border-amber-400/30'
                    : 'bg-amber-50 text-amber-900 border-amber-300'
                }
              `}
            >
              <ShieldCheck className="w-2.5 h-2.5 text-emerald-600 inline" />
              <span>CO-OP</span>
            </span>
          )}
        </div>

        {showTagline && (
          <span
            className={`
              text-[9px] font-bold tracking-wider uppercase truncate mt-0.5 flex items-center gap-1
              ${subtitleColor}
            `}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0C831F] inline-block animate-pulse shrink-0" />
            <span>National Worker Federation</span>
          </span>
        )}
      </div>
    </div>
  );
};
