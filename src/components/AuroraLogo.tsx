
import React from "react";

interface AuroraLogoProps {
  className?: string;
}

const AuroraLogo: React.FC<AuroraLogoProps> = ({ className = "w-40 h-40" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main A shape */}
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Glowing background effect */}
        <defs>
          <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15677d" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FF5757" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0e7172" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15677d" />
            <stop offset="50%" stopColor="#FF5757" />
            <stop offset="100%" stopColor="#0e7172" />
          </linearGradient>
          
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        
        {/* Glow effect */}
        <path 
          d="M100 20L160 160H120L110 140H90L80 160H40L100 20Z" 
          fill="url(#glow)" 
          filter="url(#blur)"
          className="animate-pulse"
        />
        
        {/* Main A shape */}
        <path 
          d="M100 20L160 160H120L110 140H90L80 160H40L100 20Z" 
          stroke="url(#stroke)" 
          strokeWidth="3"
          fill="none"
          className="animate-shimmer"
        />
        
        {/* Crossbar of the A */}
        <path 
          d="M70 110H130" 
          stroke="url(#stroke)" 
          strokeWidth="3"
          className="animate-shimmer"
        />
        
        {/* Futuristic details */}
        <circle cx="100" cy="80" r="5" fill="#FF5757" className="animate-glow" />
        <path d="M65 130L75 120M135 130L125 120" stroke="#0e7172" strokeWidth="2" />
        
        {/* Additional tech elements */}
        <path 
          d="M185 100C185 147.496 146.496 186 99 186C51.5035 186 13 147.496 13 100C13 52.5035 51.5035 14 99 14C146.496 14 185 52.5035 185 100Z" 
          stroke="url(#stroke)" 
          strokeWidth="1"
          strokeDasharray="5,5"
          fill="none"
          className="animate-aurora"
        />
      </svg>
    </div>
  );
};

export default AuroraLogo;
