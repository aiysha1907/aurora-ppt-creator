
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
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-aurora-secondary"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-aurora-dark">
            See Aurora <span className="text-aurora-primary">in Action</span>
          </h2>
          <p className="text-xl text-aurora-dark/70">
            Watch how a simple prompt transforms into a presentation that looks like it took days to create
          </p>
        </div>
        
        <div
          ref={videoRef}
          className="max-w-5xl mx-auto opacity-0"
        >
          <div className="rounded-xl overflow-hidden aspect-video group relative shadow-lg border border-aurora-dark/5">
            {/* This would be a real video in production */}
            <div className="absolute inset-0 bg-gradient-to-br from-aurora-primary/10 to-aurora-accent/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-10 h-10 text-aurora-primary fill-aurora-primary" />
              </button>
            </div>
            
            {/* Faux video thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-semibold bg-white/90 backdrop-blur-md px-8 py-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-aurora-dark">
                  See the Magic Happen
                </div>
              </div>
            </div>
          </div>
          
          {/* Caption */}
          <div className="text-center mt-6 text-aurora-dark/60 text-sm">
            Aurora transforms prompts into professional presentations in real-time
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
