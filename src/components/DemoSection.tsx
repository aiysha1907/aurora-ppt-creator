
import React, { useEffect, useRef } from "react";
import { Play, Zap, Presentation } from "lucide-react";

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
              contentRef.current.classList.add("animate-slideIn");
            }
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.classList.add("animate-fadeInScale");
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
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-presly-secondary"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="opacity-0">
            <div className="mb-4">
              <span className="inline-block bg-presly-primary/20 text-presly-accent px-4 py-1 rounded-full text-sm font-medium">Demo Video / How It Works</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-copper mb-6 text-presly-text font-bold">
              🎥 Watch Presly in Action
            </h2>
            <p className="text-xl text-presly-text/80 mb-8">
              See how easy it is to create professional, engaging presentations with AI in just a few clicks.
            </p>
            
            <button className="flex items-center px-8 py-4 bg-presly-accent text-presly-background rounded-full hover:shadow-lg transition-all duration-300">
              <Zap className="mr-2 w-5 h-5" />
              <span className="font-medium">Generate Slides with a Single Prompt</span>
            </button>
          </div>
          
          <div
            ref={videoRef}
            className="opacity-0"
          >
            <div className="rounded-xl overflow-hidden aspect-video group relative shadow-2xl border border-presly-accent/20">
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="bg-presly-text rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                  <Play className="w-10 h-10 text-presly-background fill-presly-background relative z-10" />
                </button>
              </div>
              
              {/* Video placeholder with laptop illustration */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-presly-dark/70 z-10">
                <div className="relative w-60 h-48">
                  {/* Laptop base */}
                  <div className="absolute bottom-0 w-full h-2 bg-presly-dark rounded-b-lg"></div>
                  
                  {/* Laptop body */}
                  <div className="absolute bottom-2 w-full h-40 bg-presly-background rounded-t-lg overflow-hidden flex items-center justify-center">
                    {/* Screen content */}
                    <div className="w-[90%] h-[90%] bg-presly-secondary rounded">
                      <div className="h-full p-2 flex flex-col">
                        <div className="flex space-x-1 mb-2">
                          <div className="w-2 h-2 rounded-full bg-presly-primary"></div>
                          <div className="w-2 h-2 rounded-full bg-presly-accent"></div>
                          <div className="w-2 h-2 rounded-full bg-presly-text"></div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <Presentation className="w-8 h-8 text-presly-accent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video placeholder background */}
              <div className="w-full h-full bg-presly-dark"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
