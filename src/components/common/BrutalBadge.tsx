import React from 'react';

interface BrutalBadgeProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'cyan' | 'lime' | 'coral' | 'blue' | 'black' | 'white' | 'purple';
  size?: 'xs' | 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const BrutalBadge: React.FC<BrutalBadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  icon,
  className = '',
}) => {
  const variantStyles = {
    yellow: 'bg-cyan-50 text-cyan-900 border border-cyan-300 font-semibold',
    cyan: 'bg-cyan-50 text-cyan-900 border border-cyan-300 font-semibold',
    lime: 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold',
    coral: 'bg-rose-100 text-rose-800 border border-rose-300 font-semibold',
    blue: 'bg-blue-100 text-blue-800 border border-blue-300 font-semibold',
    black: 'bg-slate-900 text-white font-semibold',
    white: 'bg-white text-slate-700 border border-slate-200 font-semibold',
    purple: 'bg-purple-100 text-purple-800 border border-purple-300 font-semibold',
  };

  const sizeStyles = {
    xs: 'px-1.5 py-0.5 text-[10px] rounded-full',
    sm: 'px-2 py-0.5 text-[11px] rounded-full',
    md: 'px-2.5 py-1 text-xs rounded-full',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1 font-sans select-none whitespace-nowrap
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
