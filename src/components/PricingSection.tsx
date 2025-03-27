
import React, { useEffect, useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.classList.add("animate-fadeIn");
            }
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.classList.add("animate-fadeIn");
              }
            }, 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-presly-background"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-copper font-extrabold mb-6 opacity-0 text-presly-text">
            Simple, Transparent <span className="text-presly-accent">Pricing</span>
          </h2>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center bg-presly-accent/10 p-1 rounded-lg mb-8">
            <button
              className={cn(
                "px-4 py-2 rounded-md transition-all",
                annualBilling
                  ? "bg-presly-accent text-presly-background shadow-lg"
                  : "text-presly-text/70 hover:text-presly-text"
              )}
              onClick={() => setAnnualBilling(true)}
            >
              Annual
              <span className="ml-2 text-xs font-medium bg-presly-text/10 text-presly-text px-2 py-0.5 rounded">Save 20%</span>
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-md transition-all",
                !annualBilling
                  ? "bg-presly-accent text-presly-background shadow-lg"
                  : "text-presly-text/70 hover:text-presly-text"
              )}
              onClick={() => setAnnualBilling(false)}
            >
              Monthly
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Free Tier */}
          <div
            ref={cardRef}
            className="rounded-xl overflow-hidden w-full max-w-sm opacity-0 bg-presly-text/5 border border-presly-accent/10"
          >
            <div className="p-8">
              <div className="text-presly-text/70 uppercase text-sm font-semibold tracking-wider mb-2">
                Free
              </div>
              <h3 className="text-2xl font-bold mb-4 font-copper">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-presly-text/70 ml-1">forever</span>
              </div>
              <p className="text-presly-text/80 mb-6">
                Perfect for trying out <span className="text-presly-accent font-copper font-bold">Presly's</span> capabilities
              </p>
              <button className="border border-presly-accent/20 text-presly-text font-medium rounded-full px-6 py-3 w-full mb-8 hover:bg-presly-accent hover:text-presly-background hover:border-presly-accent transition-all duration-300 flex items-center justify-center">
                <span>Get Started</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>3 presentations per month</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Basic templates</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Standard export formats</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Community support</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pro Tier */}
          <div className="rounded-xl overflow-hidden w-full max-w-sm opacity-0 animate-fadeIn bg-presly-text/5 border border-presly-accent/20" style={{ animationDelay: "200ms" }}>
            <div className="bg-presly-accent h-2"></div>
            <div className="p-8">
              <div className="text-presly-accent uppercase text-sm font-semibold tracking-wider mb-2">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 font-copper">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${annualBilling ? "8" : "10"}</span>
                <span className="text-presly-text/70 ml-1">/ month</span>
              </div>
              <p className="text-presly-text/80 mb-6">
                For professionals who need more features and capacity
              </p>
              <button className="bg-presly-accent text-presly-background font-medium rounded-full px-6 py-3 hover:bg-presly-accent/80 transition-all duration-300 w-full mb-8 flex items-center justify-center">
                <span>Start Pro Trial</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Unlimited presentations</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Premium templates</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Advanced customization</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Brand settings</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Team collaboration</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enterprise Tier */}
          <div className="rounded-xl overflow-hidden w-full max-w-sm opacity-0 animate-fadeIn bg-presly-text/5 border border-presly-accent/10" style={{ animationDelay: "400ms" }}>
            <div className="p-8">
              <div className="text-presly-text/70 uppercase text-sm font-semibold tracking-wider mb-2">
                Enterprise
              </div>
              <h3 className="text-2xl font-bold mb-4 font-copper">Custom</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-presly-text/70 ml-1">pricing</span>
              </div>
              <p className="text-presly-text/80 mb-6">
                For organizations with specific needs and requirements
              </p>
              <button className="border border-presly-accent/20 text-presly-text font-medium rounded-full px-6 py-3 w-full mb-8 hover:bg-presly-accent hover:text-presly-background hover:border-presly-accent transition-all duration-300 flex items-center justify-center">
                <span>Contact Sales</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Everything in Pro</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Advanced security features</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Service level agreement</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-presly-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Training sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
