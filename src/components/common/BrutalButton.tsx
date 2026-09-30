import React from 'react';

interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'yellow' | 'cyan' | 'lime' | 'coral' | 'blue' | 'black' | 'white';
  size?: 'sm' | 'md' | 'lg';
  shadowSize?: 'none' | 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({
  variant = 'cyan',
  size = 'md',
  shadowSize = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const variantStyles = {
    yellow: 'bg-[#06B6D4] text-slate-950 hover:bg-[#22D3EE] border border-cyan-500 font-bold shadow-xs',
    cyan: 'bg-[#06B6D4] text-slate-950 hover:bg-[#22D3EE] border border-cyan-500 font-bold shadow-xs',
    lime: 'bg-[#0C831F] text-white hover:bg-[#0A6C19] border border-[#0A6C19] font-bold',
    coral: 'bg-[#E11D48] text-white hover:bg-[#BE123C] border border-[#BE123C] font-bold',
    blue: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] border border-[#1D4ED8] font-bold',
    black: 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 font-bold',
    white: 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-300 font-bold',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-bold rounded-lg',
    md: 'px-4 py-2 text-xs sm:text-sm font-bold rounded-xl',
    lg: 'px-6 py-2.5 text-sm sm:text-base font-bold rounded-xl',
  };

  const shadowStyles = {
    none: 'shadow-none',
    sm: 'shadow-xs hover:shadow-sm active:scale-[0.98]',
    md: 'shadow-sm hover:shadow-md active:scale-[0.98]',
    lg: 'shadow-md hover:shadow-lg active:scale-[0.98]',
  };

  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 font-sans
        transition-all duration-150 select-none cursor-pointer
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed shadow-none' : shadowStyles[shadowSize]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
