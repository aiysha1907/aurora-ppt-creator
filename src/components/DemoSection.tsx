
import React, { useEffect, useRef } from "react";
import { Play, Zap } from "lucide-react";

const DemoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.add("animate-fadeIn");
            }
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.classList.add("animate-fadeIn");
              }
            }, 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#0d1a3a]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              See It In Action
            </h2>
            <p className="text-xl text-white/70 mb-8">
              From a simple prompt to a complete, visually stunning presentation in seconds.
            </p>
            
            <div className="bg-black/30 rounded-lg p-4 border border-white/10 mb-8">
              <div className="flex items-start">
                <span className="text-[#ff6b6b] mr-2">▶</span>
                <div className="font-mono text-white/80 text-sm">
                  Create a pitch deck for a new fitness app that tracks workouts and nutrition
                </div>
              </div>
            </div>
            
            <button className="flex items-center px-8 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white rounded-full hover:shadow-lg hover:shadow-[#ff6b6b]/20 transition-all duration-300">
              <Zap className="mr-2 w-5 h-5" />
              <span className="font-medium">Generate Slides with a Single Prompt</span>
            </button>
          </div>
          
          <div
            ref={videoRef}
            className="opacity-0"
          >
            <div className="rounded-xl overflow-hidden aspect-video group relative shadow-2xl border border-white/10">
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="bg-white rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-white animate-pulse opacity-30"></div>
                  <Play className="w-10 h-10 text-[#ff6b6b] fill-[#ff6b6b] relative z-10" />
                </button>
              </div>
              
              {/* Video placeholder with generating preview */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d1a3a]/80 backdrop-blur-sm z-10">
                <div className="bg-[#5a2331] rounded-full p-6 mb-4">
                  <Zap className="w-8 h-8 text-[#ff6b6b]" />
                </div>
                <div className="text-xl font-medium text-white">Generating preview...</div>
              </div>
              
              {/* Video placeholder background */}
              <div className="w-full h-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#0e7172]/10 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#0d1070]/10 blur-3xl"></div>
    </section>
  );
};

export default DemoSection;
