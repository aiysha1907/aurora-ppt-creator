
import React from "react";

interface PreslyLogoProps {
  className?: string;
}

const PreslyLogo: React.FC<PreslyLogoProps> = ({ className = "w-40 h-10" }) => {
  return (
    <div className={`${className}`}>
      <span className="font-copper text-xl tracking-wider font-extrabold">
        <span className="text-presly-accent">presly</span>
      </span>
    </div>
  );
};

export default PreslyLogo;
