
import React, { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
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

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Caption */}
          <div className="inline-block mb-4 animate-pulse">
            <div className="px-4 py-1.5 rounded-full text-sm bg-aurora-background border border-aurora-primary/50 text-aurora-text">
              <span className="mr-2">•</span>
              <span>Presentation Generator</span>
            </div>
          </div>

          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 text-aurora-text"
          >
            <span className="block">Forget</span>
            <span className="text-aurora-primary">
              Slides
            </span>
            <span>.</span>
            <span className="block mt-2">Command the Stage.</span>
          </h1>

          {/* Subtitle */}
          <div 
            ref={subtitleRef}
            className="space-y-3 opacity-0"
          >
            <p className="text-xl md:text-2xl text-aurora-text/80 max-w-3xl mx-auto">
              Your ideas deserve more than another PowerPoint deck.
            </p>
            <p className="text-xl md:text-2xl text-aurora-text/80 max-w-3xl mx-auto">
              Aurora doesn't "make slides."
            </p>
            <p className="text-xl md:text-2xl text-aurora-text/80 max-w-3xl mx-auto">
              It crafts narratives. It shapes attention. It commands the room.
            </p>
            <p className="text-xl md:text-2xl font-medium text-aurora-text mt-8">
              One prompt. One second. Pure storytelling.
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div
            ref={buttonRef}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          >
            <button className="group flex items-center px-8 py-4 bg-aurora-primary text-white rounded-full hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-primary via-aurora-accent to-aurora-blue opacity-0 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-102"></span>
              <span className="relative z-10 font-medium">Generate My Presentation</span>
              <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center px-8 py-4 border border-aurora-blue text-aurora-text rounded-full hover:border-aurora-primary/30 hover:bg-aurora-blue/5 transition-all duration-300 w-full sm:w-auto">
              <Play className="w-4 h-4 mr-2" />
              <span className="font-medium">Watch It In Action</span>
            </button>
          </div>
        </div>

        {/* Preview mockup */}
        <div className="mt-16 md:mt-24 relative mx-auto max-w-5xl opacity-0 animate-fadeIn" style={{ animationDelay: "900ms" }}>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-gradient-to-br from-aurora-background/90 to-aurora-dark/90 backdrop-blur-md">
            <div className="relative h-full">
              {/* Preview Content */}
              <div className="flex items-center justify-center h-full p-6">
                <div className="text-center">
                  <div className="inline-block mb-6 animate-pulse">
                    <div className="bg-aurora-primary/20 border border-aurora-primary/30 text-aurora-text px-4 py-2 rounded-lg font-medium">Creating your presentation...</div>
                  </div>
                  <div className="w-full max-w-md mx-auto h-6 bg-aurora-secondary/30 rounded-full overflow-hidden">
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
