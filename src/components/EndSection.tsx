
import React, { useEffect, useRef } from "react";

const EndSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.classList.add("animate-slideUp");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-presly-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-copper mb-8 text-presly-text font-extrabold opacity-0"
            >
              Say Goodbye to <span className="text-presly-accent">Boring Slides</span>
            </h2>
            
            <button className="flex items-center px-8 py-4 bg-presly-accent text-presly-background rounded-full hover:bg-presly-text hover:text-presly-accent transition-all duration-300 font-medium">
              Start Creating with <span className="text-presly-background font-bold ml-1 hover:text-presly-accent">Presly</span> Today
            </button>
          </div>
          
          <div className="w-full max-w-xl">
            <img 
              src="/lovable-uploads/14ce257b-275d-407e-91ff-aa19a494e5cb.png" 
              alt="Presentation outline" 
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndSection;
