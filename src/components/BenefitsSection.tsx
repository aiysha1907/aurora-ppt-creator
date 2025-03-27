
import React, { useEffect, useRef } from "react";
import { Zap, Layout, BarChart, Clock, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  number: string;
}

const BenefitCard = ({ icon, title, description, delay, number }: BenefitCardProps) => {
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
        "rounded-xl p-6 opacity-0 h-full flex flex-col bg-presly-dark border border-white/5",
        "hover:border-presly-accent/30 hover:shadow-md hover:shadow-presly-accent/5 transition-all duration-300"
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="bg-presly-accent/10 p-4 rounded-lg w-fit">
          {icon}
        </div>
        <span className="text-2xl font-copper text-presly-primary/70">{number}</span>
      </div>
      <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
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
      number: "1️⃣",
    },
    {
      icon: <Layout className="w-6 h-6 text-presly-accent" />,
      title: "Interactive & Engaging Designs",
      description: "Static slides are outdated. With interactive elements, animations, and smart transitions, keep your audience hooked from start to finish.",
      delay: 200,
      number: "2️⃣",
    },
    {
      icon: <Palette className="w-6 h-6 text-presly-accent" />,
      title: "Multiple Themes & Custom Templates",
      description: "Choose from dozens of professional templates designed for different industries, topics, and presentation styles—ready to go with one click.",
      delay: 300,
      number: "3️⃣",
    },
    {
      icon: <Clock className="w-6 h-6 text-presly-accent" />,
      title: "Lightning-Fast Generation",
      description: "Why spend hours making slides? With Presly, create an entire deck in minutes while AI ensures perfection in design, flow, and content structure.",
      delay: 400,
      number: "4️⃣",
    },
    {
      icon: <Zap className="w-6 h-6 text-presly-accent" />,
      title: "Easy Editing & Customization",
      description: "Want to tweak your slides? Seamlessly edit, modify, and personalize any element—Presly gives you complete control without the complexity.",
      delay: 500,
      number: "5️⃣",
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-presly-background bg-grain">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-presly-primary/10 text-presly-primary px-4 py-1 rounded-full text-sm font-medium">Features</span>
          </div>
          
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-copper mb-6 opacity-0 text-white">
            Why <span className="text-presly-accent">Presly</span> is Your Ultimate Presentation Solution
          </h2>
          <p ref={subtitleRef} className="text-xl text-white/70 opacity-0 max-w-3xl mx-auto">
            We've reimagined how presentations are created, setting you free from the tedium while elevating your results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
              number={benefit.number}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {benefits.slice(3, 5).map((benefit, index) => (
            <BenefitCard
              key={index + 3}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
              number={benefit.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
