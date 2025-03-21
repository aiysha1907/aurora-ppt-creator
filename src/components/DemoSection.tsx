
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
      className="section bg-aurora-secondary/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-aurora-purple/5 to-aurora-blue/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            See Aurora in <span className="text-aurora-blue">Action</span>
          </h2>
          <p className="text-xl text-aurora-text/80">
            Watch how Aurora transforms simple prompts into professional presentations in seconds
          </p>
        </div>
        
        <div
          ref={videoRef}
          className="max-w-5xl mx-auto opacity-0"
        >
          <div className="glass-card rounded-xl overflow-hidden aspect-video group relative">
            {/* This would be a real video in production */}
            <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/30 to-aurora-blue/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="glass rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-10 h-10 text-aurora-green fill-aurora-green" />
              </button>
            </div>
            
            {/* Faux video thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-semibold glass px-8 py-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xl">
                  Aurora Demo Video
                </div>
              </div>
            </div>
          </div>
          
          {/* Caption */}
          <div className="text-center mt-6 text-aurora-text/80 text-sm">
            Video demonstration of Aurora PPT Generator in action
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
