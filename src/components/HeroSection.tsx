
import React, { useEffect, useRef } from "react";
import { ArrowRight, Laptop, Presentation } from "lucide-react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on load
    setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add("animate-slideUp");
    }, 100);
    
    setTimeout(() => {
      if (subtitleRef.current) subtitleRef.current.classList.add("animate-slideUp");
    }, 300);
    
    setTimeout(() => {
      if (buttonRef.current) buttonRef.current.classList.add("animate-slideUp");
    }, 500);
  }, []);

  return (
    <section className="pt-32 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center relative overflow-hidden bg-presly-background bg-grain">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-presly-accent/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-presly-primary/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Laptop className="h-6 w-6 text-presly-accent" />
            <Presentation className="h-6 w-6 text-presly-primary" />
          </div>

          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-copper mb-6 opacity-0 text-white"
          >
            Pitch, Present, <span className="text-presly-primary">Impress</span>
          </h1>

          {/* Subtitle */}
          <div 
            ref={subtitleRef}
            className="opacity-0 space-y-4"
          >
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto">
              💡 The Fastest Way to Create Professional Presentations.
            </p>
            <div className="space-y-2 text-white/70 max-w-3xl mx-auto">
              <p className="text-lg">⏳ No long hours designing. No complicated tools. Just AI-powered perfection.</p>
              <p className="text-lg">🎨 Customizable templates, engaging visuals, and interactive slides—all in minutes.</p>
              <p className="text-xl mt-6 text-white/80">✨ Focus on your ideas. Presly handles the rest. ✨</p>
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div
            ref={buttonRef}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          >
            <button className="group flex items-center px-8 py-4 bg-presly-primary text-white rounded-full hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-all duration-500"></span>
              <span className="relative z-10 font-medium">Start Creating Instantly</span>
              <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
