import React from 'react';

interface BrutalCardProps {
  children: React.ReactNode;
  bgColor?: string;
  shadowSize?: 'none' | 'sm' | 'md' | 'lg';
  shadowColor?: 'black' | 'yellow' | 'cyan' | 'blue' | 'red' | 'lime' | 'pink';
  borderWidth?: 'sm' | 'md' | 'lg';
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
  id?: string;
}

export const BrutalCard: React.FC<BrutalCardProps> = ({
  children,
  bgColor = '#FFFFFF',
  shadowSize = 'md',
  shadowColor = 'black',
  borderWidth = 'sm',
  className = '',
  interactive = false,
  onClick,
  id,
}) => {
  const getShadowStyle = () => {
    if (shadowSize === 'none') return 'shadow-none';

    if (shadowColor === 'yellow' || shadowColor === 'cyan') return 'shadow-[4px_4px_0px_0px_rgba(6,182,212,1)]';
    if (shadowColor === 'blue') return 'shadow-[4px_4px_0px_0px_rgba(59,130,246,1)]';
    if (shadowColor === 'red') return 'shadow-[4px_4px_0px_0px_rgba(255,87,87,1)]';
    if (shadowColor === 'lime') return 'shadow-[4px_4px_0px_0px_rgba(204,255,0,1)]';
    if (shadowColor === 'pink') return 'shadow-[4px_4px_0px_0px_rgba(255,144,232,1)]';

    const blackShadows = {
      sm: 'shadow-xs hover:shadow-sm',
      md: 'shadow-sm hover:shadow-md',
      lg: 'shadow-md hover:shadow-lg',
    };
    return blackShadows[shadowSize];
  };

  const borderStyles = {
    sm: 'border border-slate-200/90',
    md: 'border border-slate-300',
    lg: 'border-2 border-slate-300',
  };

  const interactiveStyles = interactive
    ? 'hover:-translate-y-0.5 cursor-pointer transition-all duration-150'
    : '';

  return (
    <div
      id={id}
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className={`
        rounded-2xl overflow-hidden ${borderStyles[borderWidth]} ${getShadowStyle()} ${interactiveStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
