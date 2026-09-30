import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface BrutalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  titleBg?: string;
}

export const BrutalModal: React.FC<BrutalModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'lg',
  titleBg = '#06B6D4',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Frosted glass backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity cursor-pointer"
      />

      {/* Modal dialog box */}
      <div
        className={`
          relative w-full ${maxWidthStyles[maxWidth]} bg-[#FFFDF9] border-[4px] border-black
          shadow-[8px_8px_0px_#000000] z-10 my-8 overflow-hidden
          animate-in fade-in zoom-in-95 duration-150
        `}
      >
        {/* Top Header Bar */}
        <div
          style={{ backgroundColor: titleBg }}
          className="border-b-[3px] border-black p-4 flex items-center justify-between"
        >
          <div className="pr-4">
            <h3 className="font-display font-black text-lg sm:text-xl text-black uppercase tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs font-bold text-neutral-800 uppercase mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 bg-black text-white hover:bg-neutral-800 border-2 border-black flex items-center justify-center font-black transition-transform active:scale-90 cursor-pointer shrink-0 shadow-[2px_2px_0px_#000000]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
