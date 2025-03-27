
import React from "react";

interface PreslyLogoProps {
  className?: string;
}

const PreslyLogo: React.FC<PreslyLogoProps> = ({ className = "w-40 h-40" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        
        {/* Simple, minimalist P shape */}
        <path 
          d="M70 50H130C140 50 150 60 150 75C150 90 140 100 130 100H70V50Z" 
          stroke="#4A6CF7" 
          strokeWidth="4"
          fill="none"
          className="transition-all duration-300"
        />
        
        {/* Vertical line of P */}
        <path 
          d="M70 50V150" 
          stroke="#4A6CF7" 
          strokeWidth="4"
          className="transition-all duration-300"
        />
        
        {/* Subtle presentation icon */}
        <path 
          d="M110 120L130 130L110 140" 
          stroke="#FF5757" 
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default PreslyLogo;
