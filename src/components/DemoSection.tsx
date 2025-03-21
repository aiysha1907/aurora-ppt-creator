
import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";

const DemoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.classList.add("animate-fadeIn");
            }
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
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden gradient-bg aurora-glow"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-aurora-text">
            See Aurora <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-xl text-aurora-text/70">
            Witness how a single prompt transforms into a presentation that would otherwise take hours to create
          </p>
        </div>
        
        <div
          ref={videoRef}
          className="max-w-5xl mx-auto opacity-0"
        >
          <div className="rounded-xl overflow-hidden aspect-video group relative shadow-2xl border border-white/10">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-aurora-primary/10 to-aurora-accent/10"></div>
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-white animate-pulse opacity-30"></div>
                <Play className="w-10 h-10 text-aurora-primary fill-aurora-primary relative z-10" />
              </button>
            </div>
            
            {/* Faux video thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-semibold bg-aurora-background/50 backdrop-blur-md px-8 py-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-aurora-text border border-white/20">
                  Experience the Magic
                </div>
              </div>
            </div>
            
            {/* Video placeholder background */}
            <div className="w-full h-full bg-aurora-dark/70"></div>
          </div>
          
          {/* Caption */}
          <div className="text-center mt-6 text-aurora-text/70 text-sm">
            Create professional presentations in seconds with the power of Aurora AI
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-aurora-accent/10 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-aurora-primary/10 blur-3xl"></div>
    </section>
  );
};

export default DemoSection;
