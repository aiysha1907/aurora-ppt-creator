
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
    <section className="pt-32 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center relative overflow-hidden bg-aurora-background">
      {/* Decorative Elements */}
      <div
        ref={decorationRef}
        className="absolute inset-0 opacity-0"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-aurora-blue/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-aurora-primary/10 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-aurora-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Caption */}
          <div className="inline-block mb-4">
            <div className="px-4 py-1.5 rounded-full text-sm bg-aurora-primary/10 text-aurora-primary border border-aurora-primary/20">
              <span className="mr-2">✨</span>
              <span>FROM PROMPTS TO PRESENTATIONS</span>
            </div>
          </div>

          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 text-aurora-dark"
          >
            <span className="block">Presentations that</span>
            <span className="bg-gradient-to-r from-aurora-primary via-aurora-accent to-aurora-blue bg-clip-text text-transparent">
              wow in seconds
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-aurora-dark/80 max-w-3xl mx-auto opacity-0"
          >
            Aurora transforms your ideas into captivating, design-forward presentations with a single prompt. 
            No design skills needed — just your brilliance and our AI.
          </p>

          {/* Call-to-action buttons */}
          <div
            ref={buttonRef}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          >
            <button className="group flex items-center px-8 py-4 bg-aurora-primary text-white rounded-full hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
              <span className="font-medium">Start Creating</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-aurora-dark/10 text-aurora-dark rounded-full hover:border-aurora-primary/20 hover:bg-aurora-primary/5 transition-all duration-300 w-full sm:w-auto">
              <span className="font-medium">Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Preview mockup */}
        <div className="mt-16 md:mt-24 relative mx-auto max-w-5xl opacity-0 animate-fadeIn" style={{ animationDelay: "900ms" }}>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-aurora-dark/5 aspect-video bg-white">
            <div className="relative h-full">
              {/* Mock Browser Frame */}
              <div className="h-12 bg-gradient-to-r from-aurora-secondary to-white flex items-center px-4 border-b border-aurora-dark/10">
                <div className="flex space-x-2">
                  <div className="rounded-full bg-aurora-primary w-3 h-3"></div>
                  <div className="rounded-full bg-aurora-blue w-3 h-3"></div>
                  <div className="rounded-full bg-aurora-accent w-3 h-3"></div>
                </div>
                <div className="mx-auto bg-aurora-secondary/80 rounded-full px-4 py-1 text-xs text-aurora-dark/60 border border-aurora-dark/5">aurora.ai/presentations</div>
              </div>
              
              {/* Preview Content */}
              <div className="flex items-center justify-center h-[calc(100%-3rem)] p-6 bg-gradient-to-br from-white to-aurora-secondary/30">
                <div className="text-center">
                  <div className="inline-block mb-6 animate-pulse">
                    <div className="bg-aurora-primary/10 border border-aurora-primary/20 text-aurora-primary px-4 py-2 rounded-lg font-medium">Creating your presentation...</div>
                  </div>
                  <div className="w-full max-w-md mx-auto h-6 bg-aurora-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-aurora-primary to-aurora-accent animate-shimmer"
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
          <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-to-r from-aurora-blue/0 via-aurora-primary/5 to-aurora-accent/0 rounded-2xl blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
