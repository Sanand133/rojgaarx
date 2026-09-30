import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TopProgressBarProps {
  triggerKey: string | number;
}

export const TopProgressBar: React.FC<TopProgressBarProps> = ({ triggerKey }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [triggerKey]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          key={`bar-${triggerKey}`}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: [1, 1, 0] }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 0.7, 1],
          }}
          style={{ transformOrigin: 'left' }}
          className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-gradient-to-r from-[#0C831F] via-[#22D3EE] to-[#10B981] shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        />
      )}
    </AnimatePresence>
  );
};
