
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
    <section className="pt-32 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center relative overflow-hidden aurora-glow">
      {/* Decorative Elements */}
      <div
        ref={decorationRef}
        className="absolute inset-0 opacity-0"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-aurora-blue/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-aurora-primary/10 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-aurora-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative spotlight">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Caption */}
          <div className="inline-block mb-4 animate-pulse">
            <div className="px-4 py-1.5 rounded-full text-sm bg-aurora-primary/20 text-aurora-text border border-aurora-primary/30">
              <span className="mr-2">✨</span>
              <span>REVOLUTIONIZING PRESENTATIONS</span>
            </div>
          </div>

          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 text-aurora-text"
          >
            <span className="block">Your words transformed into</span>
            <span className="gradient-text font-extrabold">
              visual masterpieces
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-aurora-text/80 max-w-3xl mx-auto opacity-0"
          >
            Aurora doesn't just create presentations — it crafts visual stories from your ideas 
            with unparalleled speed and sophistication. One prompt is all it takes.
          </p>

          {/* Call-to-action buttons */}
          <div
            ref={buttonRef}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          >
            <button className="group flex items-center px-8 py-4 bg-aurora-primary text-white rounded-full hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-primary via-aurora-accent to-aurora-blue opacity-0 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-102"></span>
              <span className="relative z-10 font-medium">Create Now</span>
              <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-aurora-text/20 text-aurora-text rounded-full hover:border-aurora-primary/30 hover:bg-aurora-primary/5 transition-all duration-300 w-full sm:w-auto">
              <span className="font-medium">Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Preview mockup */}
        <div className="mt-16 md:mt-24 relative mx-auto max-w-5xl opacity-0 animate-fadeIn" style={{ animationDelay: "900ms" }}>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-aurora-dark/70 backdrop-blur-md">
            <div className="relative h-full">
              {/* Mock Browser Frame */}
              <div className="h-12 bg-gradient-to-r from-aurora-dark to-aurora-secondary flex items-center px-4 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="rounded-full bg-aurora-primary w-3 h-3"></div>
                  <div className="rounded-full bg-aurora-blue w-3 h-3"></div>
                  <div className="rounded-full bg-aurora-accent w-3 h-3"></div>
                </div>
                <div className="mx-auto bg-aurora-background/30 rounded-full px-4 py-1 text-xs text-aurora-text/80 border border-white/10">aurora.ai/presentations</div>
              </div>
              
              {/* Preview Content */}
              <div className="flex items-center justify-center h-[calc(100%-3rem)] p-6 bg-gradient-to-br from-aurora-background/30 to-aurora-dark/30">
                <div className="text-center">
                  <div className="inline-block mb-6 animate-pulse">
                    <div className="bg-aurora-primary/20 border border-aurora-primary/30 text-aurora-text px-4 py-2 rounded-lg font-medium">Creating your presentation...</div>
                  </div>
                  <div className="w-full max-w-md mx-auto h-6 bg-aurora-dark/50 rounded-full overflow-hidden">
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
          <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-to-r from-aurora-blue/0 via-aurora-primary/10 to-aurora-accent/0 rounded-2xl blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
