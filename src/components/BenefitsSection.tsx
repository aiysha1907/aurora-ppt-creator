
import React, { useEffect, useRef } from "react";
import { Zap, Sparkles, Rocket, Clock, Layout, PenTool } from "lucide-react";
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
        "rounded-xl p-6 opacity-0 h-full flex flex-col bg-white border border-aurora-dark/5 shadow-sm",
        "hover:translate-y-[-8px] hover:shadow-md transition-all duration-300"
      )}
    >
      <div className="bg-gradient-to-br from-aurora-primary/10 to-aurora-accent/10 p-4 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-aurora-dark">{title}</h3>
      <p className="text-aurora-dark/70 flex-grow">{description}</p>
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
      icon: <Rocket className="w-6 h-6 text-aurora-primary" />,
      title: "Instant Brilliance",
      description: "Transform your ideas into stunning presentations in seconds, not hours. Just type and watch the magic happen.",
      delay: 100,
    },
    {
      icon: <Sparkles className="w-6 h-6 text-aurora-primary" />,
      title: "Aesthetic Excellence",
      description: "Every slide follows design principles that captivate audiences with perfect balance, contrast, and visual hierarchy.",
      delay: 200,
    },
    {
      icon: <Layout className="w-6 h-6 text-aurora-primary" />,
      title: "Smart Layouts",
      description: "Aurora intelligently organizes your content with optimal visual arrangements that enhance comprehension and engagement.",
      delay: 300,
    },
    {
      icon: <Zap className="w-6 h-6 text-aurora-primary" />,
      title: "Effortless Creation",
      description: "From complex data to creative concepts, Aurora handles it all with sophisticated AI that understands context.",
      delay: 400,
    },
    {
      icon: <Clock className="w-6 h-6 text-aurora-primary" />,
      title: "Time Revolution",
      description: "What used to take days now takes seconds. Reclaim your time while producing better results than ever before.",
      delay: 500,
    },
    {
      icon: <PenTool className="w-6 h-6 text-aurora-primary" />,
      title: "Complete Control",
      description: "Refine any aspect of your generated presentation with intuitive editing tools that keep you in the driver's seat.",
      delay: 600,
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-aurora-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6 opacity-0 text-aurora-dark">
            Why <span className="bg-gradient-to-r from-aurora-primary to-aurora-accent bg-clip-text text-transparent">Aurora</span> Changes Everything
          </h2>
          <p ref={subtitleRef} className="text-xl text-aurora-dark/70 opacity-0">
            We've reimagined how presentations are created, setting you free from the tedium while elevating your results
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
