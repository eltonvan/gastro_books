import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark-only';
  theme?: 'light' | 'dark' | 'gold';
  subtext?: string;
}

export const LogoMark: React.FC<{ size?: number; className?: string; theme?: 'light' | 'dark' | 'gold' }> = ({
  size = 40,
  className = '',
  theme = 'gold'
}) => {
  // Themes for the mark
  const isDarkBg = theme === 'dark';
  
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center shrink-0 rounded-xl transition-all duration-300 ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          <linearGradient id="gbGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#B89355" />
            <stop offset="100%" stopColor="#8C6828" />
          </linearGradient>
          <linearGradient id="gbGoldLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5E8C7" />
            <stop offset="100%" stopColor="#D2C19D" />
          </linearGradient>
          <linearGradient id="gbDarkBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#252321" />
            <stop offset="100%" stopColor="#141312" />
          </linearGradient>
          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#B89355" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Shield / Rounded Seal */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="22"
          fill={isDarkBg ? 'url(#gbDarkBg)' : '#FFFFFF'}
          stroke="url(#gbGoldGradient)"
          strokeWidth="3"
        />

        {/* Inner delicate border */}
        <rect
          x="8"
          y="8"
          width="84"
          height="84"
          rx="18"
          fill="none"
          stroke="#D2C19D"
          strokeWidth="1"
          strokeDasharray="3 2"
          opacity="0.6"
        />

        {/* Gastronomy Cloche Lid Arc (Top) */}
        <path
          d="M32 38 C32 26, 68 26, 68 38 Z"
          fill="url(#gbGoldLight)"
          stroke="url(#gbGoldGradient)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Cloche Top Handle */}
        <circle cx="50" cy="24" r="3.5" fill="url(#gbGoldGradient)" />

        {/* Open Ledger / Book Pages (Middle & Bottom) */}
        {/* Left Book Page */}
        <path
          d="M23 44 C34 42, 46 45, 48 48 L48 76 C46 73, 34 70, 23 72 Z"
          fill={isDarkBg ? '#2C2A28' : '#FAF8F5'}
          stroke="url(#gbGoldGradient)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Right Book Page */}
        <path
          d="M77 44 C66 42, 54 45, 52 48 L52 76 C54 73, 66 70, 77 72 Z"
          fill={isDarkBg ? '#2C2A28' : '#FAF8F5'}
          stroke="url(#gbGoldGradient)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Center Spine & Bookmark Ribbon (Fork Motif) */}
        <path
          d="M50 42 L50 82"
          stroke="url(#gbGoldGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Ledger lines (Left page - Accounting balance rows) */}
        <line x1="28" y1="52" x2="43" y2="53.5" stroke="#B89355" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="28" y1="58" x2="43" y2="59.5" stroke="#B89355" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="28" y1="64" x2="38" y2="65" stroke="#B89355" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

        {/* Gastro Cutlery / Tick icon on Right page */}
        <line x1="57" y1="53.5" x2="72" y2="52" stroke="#B89355" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="57" y1="59.5" x2="72" y2="58" stroke="#B89355" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <circle cx="65" cy="65" r="2.5" fill="url(#gbGoldGradient)" />

        {/* Subtle base dish line */}
        <path
          d="M28 80 Q50 85 72 80"
          stroke="url(#gbGoldGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  theme = 'light',
  subtext
}) => {
  const isDark = theme === 'dark';

  const pixelSizes = {
    sm: 36,
    md: 44,
    lg: 54,
    xl: 68
  };

  const currentSize = pixelSizes[size];

  if (variant === 'mark-only') {
    return <LogoMark size={currentSize} className={className} theme={theme} />;
  }

  return (
    <div className={`flex items-center space-x-3.5 group select-none ${className}`}>
      <LogoMark size={currentSize} theme={theme} className="group-hover:scale-105 transition-transform" />
      
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif-header font-bold tracking-tight leading-none ${
              size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : size === 'xl' ? 'text-3xl' : 'text-lg sm:text-xl'
            } ${isDark ? 'text-white' : 'text-[#2C2A29] group-hover:text-[#B89355] transition-colors'}`}
          >
            GASTRO BOOKS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89355] inline-block shrink-0"></span>
        </div>
        
        <span
          className={`text-[11px] sm:text-xs font-serif-header italic tracking-wide leading-tight mt-0.5 ${
            isDark ? 'text-[#D2C19D]' : 'text-[#B89355]'
          }`}
        >
          {subtext || 'Gastronomie Lohn & Buchhaltung'}
        </span>
      </div>
    </div>
  );
};
