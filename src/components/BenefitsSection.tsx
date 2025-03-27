
import React, { useEffect, useRef } from "react";
import { Zap, Layout, BarChart, Clock, Palette } from "lucide-react";
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
                cardRef.current.classList.add("animate-slideUp");
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
        "rounded-xl p-8 opacity-0 flex flex-col bg-presly-background border border-presly-accent/10",
        "hover:border-presly-accent hover:bg-presly-accent/10 hover:shadow-md hover:shadow-presly-accent/10 transition-all duration-300",
        "w-full"
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="bg-presly-accent/10 p-4 rounded-lg w-fit group-hover:bg-presly-accent/20">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-copper mb-3 text-presly-text font-bold">{title}</h3>
      <p className="text-presly-text/80 text-lg">{description}</p>
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
              titleRef.current.classList.add("animate-slideUp");
            }
            setTimeout(() => {
              if (subtitleRef.current) {
                subtitleRef.current.classList.add("animate-slideUp");
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
      icon: <BarChart className="w-6 h-6 text-presly-accent" />,
      title: "AI-Powered Smart Slides",
      description: "Forget about structuring slides manually. Presly analyzes your content and automatically generates well-organized, visually stunning presentations.",
      delay: 100,
    },
    {
      icon: <Layout className="w-6 h-6 text-presly-accent" />,
      title: "Interactive & Engaging Designs",
      description: "Static slides are outdated. With interactive elements, animations, and smart transitions, keep your audience hooked from start to finish.",
      delay: 200,
    },
    {
      icon: <Palette className="w-6 h-6 text-presly-accent" />,
      title: "Multiple Themes & Custom Templates",
      description: "Choose from dozens of professional templates designed for different industries, topics, and presentation styles—ready to go with one click.",
      delay: 300,
    },
    {
      icon: <Clock className="w-6 h-6 text-presly-accent" />,
      title: "Lightning-Fast Generation",
      description: "Why spend hours making slides? With Presly, create an entire deck in minutes while AI ensures perfection in design, flow, and content structure.",
      delay: 400,
    },
    {
      icon: <Zap className="w-6 h-6 text-presly-accent" />,
      title: "Easy Editing & Customization",
      description: "Want to tweak your slides? Seamlessly edit, modify, and personalize any element—Presly gives you complete control without the complexity.",
      delay: 500,
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-presly-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-presly-accent/10 text-presly-accent px-4 py-1 rounded-full text-sm font-medium">Features</span>
          </div>
          
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-copper mb-6 opacity-0 text-presly-text font-extrabold">
            Why <span className="text-presly-accent">Presly</span> is Your Ultimate Presentation Solution
          </h2>
          <p ref={subtitleRef} className="text-xl text-presly-text/80 opacity-0 max-w-3xl mx-auto">
            We've reimagined how presentations are created, setting you free from the tedium while elevating your results
          </p>
        </div>
        
        <div className="space-y-8">
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
