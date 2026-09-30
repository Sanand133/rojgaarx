import React from 'react';

interface MarqueeTickerProps {
  items: string[];
  bgColor?: string;
  textColor?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items,
  bgColor = '#06B6D4',
  textColor = '#0F172A',
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="border-y-4 border-black overflow-hidden py-1.5 font-display font-black text-xs sm:text-xs uppercase tracking-wider select-none shadow-[0px_3px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.concat(items).map((item, index) => (
          <span key={index} className="inline-flex items-center mx-4">
            <span className="mr-2.5">★</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
