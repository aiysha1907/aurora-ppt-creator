
import React, { useEffect, useRef } from "react";
import { Zap, Target, Layout } from "lucide-react";
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
        "rounded-xl p-6 opacity-0 h-full flex flex-col bg-[#0d1a3a] border border-[#15677d]/10",
        "hover:border-[#15677d]/30 hover:shadow-md hover:shadow-[#15677d]/5 transition-all duration-300"
      )}
    >
      <div className="bg-gradient-to-br from-[#0d1070]/20 to-[#0e7172]/20 p-4 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70 flex-grow">{description}</p>
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
      icon: <Target className="w-6 h-6 text-[#15677d]" />,
      title: "Knows What You Mean",
      description: "No weird AI gibberish—just precision. Aurora understands your intent and creates exactly what you need.",
      delay: 100,
    },
    {
      icon: <Layout className="w-6 h-6 text-[#15677d]" />,
      title: "Designed by The Pros",
      description: "Every slide? Aesthetically flawless. Aurora uses design principles from the world's best presentations.",
      delay: 200,
    },
    {
      icon: <Zap className="w-6 h-6 text-[#15677d]" />,
      title: "Fast as Hell",
      description: "A full deck in seconds. Stop wasting hours formatting. Get back to what matters – your message.",
      delay: 300,
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6 opacity-0 text-white">
            Why <span className="bg-gradient-to-r from-[#0d1070] to-[#0e7172] bg-clip-text text-transparent">aurora</span> is different
          </h2>
          <p ref={subtitleRef} className="text-xl text-white/70 opacity-0 max-w-3xl mx-auto">
            We've reimagined how presentations are created, setting you free from the tedium while elevating your results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
