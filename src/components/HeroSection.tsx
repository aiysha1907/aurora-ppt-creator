
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);

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
    
    setTimeout(() => {
      if (decorationRef.current) decorationRef.current.classList.add("animate-fadeIn");
    }, 700);
  }, []);

  return (
    <section className="aurora-bg pt-32 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div
        ref={decorationRef}
        className="absolute inset-0 opacity-0"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-aurora-purple/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-aurora-blue/10 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-aurora-green/10 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Caption */}
          <div className="inline-block mb-4">
            <div className="glass px-4 py-1.5 rounded-full text-sm text-aurora-green border border-aurora-green/20">
              <span className="mr-2">✨</span>
              <span>AI-POWERED PRESENTATIONS</span>
            </div>
          </div>

          {/* Title */}
          <h1 
            ref={titleRef}
            className="heading-xl opacity-0 mb-6"
          >
            <span className="block">Generate stunning presentations</span>
            <span className="bg-gradient-to-r from-aurora-green via-aurora-blue to-aurora-purple bg-clip-text text-transparent">
              with a single prompt
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-aurora-text/80 max-w-3xl mx-auto opacity-0"
          >
            Aurora transforms your ideas into captivating presentations in seconds. 
            No design skills required — just prompt and present.
          </p>

          {/* Call-to-action buttons */}
          <div
            ref={buttonRef}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          >
            <button className="btn-primary group flex items-center w-full sm:w-auto">
              <span>Try for Free</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-ghost w-full sm:w-auto">
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Preview mockup */}
        <div className="mt-16 md:mt-24 relative mx-auto max-w-5xl opacity-0 animate-fadeIn" style={{ animationDelay: "900ms" }}>
          <div className="glass-card rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
            <div className="relative h-full bg-aurora-secondary/40">
              {/* Mock Browser Frame */}
              <div className="h-12 bg-gradient-to-r from-aurora-background to-aurora-secondary/70 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="rounded-full bg-red-500/60 w-3 h-3"></div>
                  <div className="rounded-full bg-yellow-500/60 w-3 h-3"></div>
                  <div className="rounded-full bg-green-500/60 w-3 h-3"></div>
                </div>
                <div className="mx-auto glass rounded-full px-4 py-1 text-xs opacity-70">aurora.ai/presentation</div>
              </div>
              
              {/* Preview Content - Would be replaced with actual preview image */}
              <div className="flex items-center justify-center h-[calc(100%-3rem)] p-6">
                <div className="text-center">
                  <div className="inline-block mb-6 animate-pulse">
                    <div className="glass px-4 py-2 rounded-lg">Creating your presentation...</div>
                  </div>
                  <div className="w-full max-w-md mx-auto h-6 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-aurora-green to-aurora-blue animate-shimmer"
                      style={{
                        width: "60%",
                        backgroundSize: "200% 100%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative highlights */}
          <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-to-r from-aurora-green/0 via-aurora-blue/10 to-aurora-purple/0 rounded-2xl blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
