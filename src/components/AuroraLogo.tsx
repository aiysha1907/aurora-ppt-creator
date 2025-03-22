
import React from "react";

interface AuroraLogoProps {
  className?: string;
}

const AuroraLogo: React.FC<AuroraLogoProps> = ({ className = "w-40 h-40" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d1070" />
            <stop offset="25%" stopColor="#0d2c78" />
            <stop offset="50%" stopColor="#133f62" />
            <stop offset="75%" stopColor="#15677d" />
            <stop offset="100%" stopColor="#0e7172" />
          </linearGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        
        {/* Simple, minimalist A shape with gradient */}
        <path 
          d="M100 30L150 150H120L110 125H90L80 150H50L100 30Z" 
          stroke="url(#logoGradient)" 
          strokeWidth="2"
          fill="none"
          className="transition-all duration-300"
        />
        
        {/* Crossbar of the A */}
        <path 
          d="M80 100H120" 
          stroke="url(#logoGradient)" 
          strokeWidth="2"
          className="transition-all duration-300"
        />
        
        {/* Subtle glow effect */}
        <path 
          d="M100 30L150 150H120L110 125H90L80 150H50L100 30Z" 
          stroke="url(#logoGradient)" 
          strokeWidth="1"
          filter="url(#glow)"
          opacity="0.3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default AuroraLogo;
