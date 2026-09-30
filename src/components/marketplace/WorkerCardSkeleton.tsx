import React from 'react';

export const WorkerCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl border-2 border-stone-200/90 rounded-3xl p-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden relative">
      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/4 w-32 h-16 bg-emerald-500/10 blur-2xl pointer-events-none" />

      {/* Top ribbon skeleton */}
      <div className="h-6 bg-stone-100/90 border-b border-stone-200/70 -mx-5 -mt-5 mb-4 px-4 flex items-center justify-between">
        <div className="w-32 h-3 rounded-full animate-shimmer" />
        <div className="w-12 h-3 rounded-full animate-shimmer" />
      </div>

      <div className="space-y-3.5">
        <div className="flex items-start gap-3.5">
          {/* Avatar Skeleton */}
          <div className="w-16 h-16 rounded-2xl animate-shimmer shrink-0 border border-stone-200/80 shadow-xs" />

          {/* Info Skeleton */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-4 animate-shimmer rounded-lg w-32" />
              <div className="h-4 animate-shimmer rounded-full w-14" />
            </div>
            <div className="h-3 animate-shimmer rounded-md w-24" />
            <div className="h-3 animate-shimmer rounded-md w-40" />
          </div>
        </div>

        {/* ETA & Rating Bar Skeleton */}
        <div className="flex items-center justify-between pt-2.5 border-t border-stone-200/60">
          <div className="h-4 animate-shimmer rounded-lg w-24" />
          <div className="h-4 animate-shimmer rounded-lg w-28" />
        </div>

        {/* Credentials Pills Skeleton */}
        <div className="flex gap-2 pt-1">
          <div className="h-6 animate-shimmer rounded-xl w-24" />
          <div className="h-6 animate-shimmer rounded-xl w-28" />
          <div className="h-6 animate-shimmer rounded-xl w-20" />
        </div>

        {/* Hourly Slot Selector Skeleton */}
        <div className="bg-stone-50/90 rounded-2xl p-3 space-y-2 border border-stone-200/80">
          <div className="h-3.5 animate-shimmer rounded-md w-36" />
          <div className="grid grid-cols-4 gap-1.5">
            <div className="h-7 animate-shimmer rounded-xl" />
            <div className="h-7 animate-shimmer rounded-xl" />
            <div className="h-7 animate-shimmer rounded-xl" />
            <div className="h-7 animate-shimmer rounded-xl" />
          </div>
        </div>
      </div>

      {/* Bottom Pricing & Button Skeleton */}
      <div className="pt-3.5 mt-3.5 border-t border-stone-200/60 flex items-center justify-between">
        <div className="h-7 animate-shimmer rounded-xl w-24" />
        <div className="flex gap-2">
          <div className="h-9 animate-shimmer rounded-xl w-20" />
          <div className="h-9 animate-shimmer rounded-xl w-28" />
        </div>
      </div>
    </div>
  );
};

