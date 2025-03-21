
import React, { useEffect, useRef } from "react";
import { Clock, Sparkles, Layout, Zap, CloudLightning, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard = ({ icon, title, description, delay }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.classList.add("animate-fadeIn");
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card rounded-xl p-6 opacity-0 h-full flex flex-col",
        "hover:translate-y-[-8px] transition-all duration-300"
      )}
    >
      <div className="bg-gradient-to-br from-aurora-blue to-aurora-purple/40 p-4 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-aurora-text/80 flex-grow">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.classList.add("animate-fadeIn");
            }
            setTimeout(() => {
              if (subtitleRef.current) {
                subtitleRef.current.classList.add("animate-fadeIn");
              }
            }, 200);
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

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-aurora-green" />,
      title: "Save Hours of Work",
      description: "Create complete, visually stunning presentations in minutes instead of hours.",
      delay: 100,
    },
    {
      icon: <Sparkles className="w-6 h-6 text-aurora-green" />,
      title: "Professional Quality",
      description: "Every slide designed with expert-level aesthetics and information hierarchy.",
      delay: 200,
    },
    {
      icon: <Layout className="w-6 h-6 text-aurora-green" />,
      title: "Smart Layouts",
      description: "Intelligently organizes your content with optimal visual arrangements.",
      delay: 300,
    },
    {
      icon: <Zap className="w-6 h-6 text-aurora-green" />,
      title: "Instant Results",
      description: "Generate complete presentations with a single prompt in seconds.",
      delay: 400,
    },
    {
      icon: <CloudLightning className="w-6 h-6 text-aurora-green" />,
      title: "Content Enhancement",
      description: "AI-powered improvements to your messaging and data visualization.",
      delay: 500,
    },
    {
      icon: <PenTool className="w-6 h-6 text-aurora-green" />,
      title: "Full Customization",
      description: "Easily modify any aspect of your generated presentation to match your style.",
      delay: 600,
    },
  ];

  return (
    <section id="benefits" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-aurora-secondary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="heading-lg mb-6 opacity-0">
            Why Choose <span className="bg-gradient-to-r from-aurora-green to-aurora-blue bg-clip-text text-transparent">Aurora</span>
          </h2>
          <p ref={subtitleRef} className="text-xl text-aurora-text/80 opacity-0">
            Our AI-powered platform revolutionizes how you create and deliver presentations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
