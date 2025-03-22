
import React, { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on load
    setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add("animate-fadeIn");
    }, 100);
    
    setTimeout(() => {
      if (subtitleRef.current) subtitleRef.current.classList.add("animate-fadeIn");
    }, 300);
    
    setTimeout(() => {
      if (buttonRef.current) buttonRef.current.classList.add("animate-fadeIn");
    }, 500);
  }, []);

  return (
    <section className="pt-32 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center relative overflow-hidden bg-black">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#0d1070]/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#15677d]/10 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-[#0e7172]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Caption */}
          <div className="inline-block mb-4 animate-pulse">
            <div className="px-4 py-1.5 rounded-full text-sm bg-black/50 border border-[#15677d]/50 text-white">
              <span className="mr-2">•</span>
              <span>AI Presentation Generator</span>
            </div>
          </div>

          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 text-white"
          >
            <span className="text-[#15677d]">AI?</span> No. This is Storytelling on <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0d1070] via-[#15677d] to-[#0e7172]">Autopilot</span><span className="text-white">.</span>
          </h1>

          {/* Subtitle */}
          <div 
            ref={subtitleRef}
            className="opacity-0"
          >
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              You type a single prompt. Aurora translates it into a stunning, dynamic presentation.
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div
            ref={buttonRef}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          >
            <button className="group flex items-center px-8 py-4 bg-gradient-to-r from-[#0d1070] to-[#0e7172] text-white rounded-full hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-all duration-500"></span>
              <span className="relative z-10 font-medium">Generate My Presentation</span>
              <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Watch It In Action button */}
            <a href="#demo" className="group flex items-center px-8 py-4 bg-transparent border border-[#15677d]/60 text-white rounded-full hover:border-[#15677d] hover:bg-[#15677d]/10 transition-all duration-300 w-full sm:w-auto relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-center">
                <div className="mr-3 bg-gradient-to-r from-[#0d1070] to-[#0e7172] rounded-full p-1.5 group-hover:shadow-lg group-hover:shadow-[#15677d]/30 transition-all duration-300">
                  <Play className="w-3.5 h-3.5" fill="white" />
                </div>
                <span className="font-medium relative">
                  Watch It In Action
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#15677d] group-hover:w-full transition-all duration-300"></span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
