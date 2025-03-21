
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
      className="section bg-aurora-background/90 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-aurora-blue/5 to-aurora-purple/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="heading-lg mb-6 opacity-0">
            Simple, Transparent <span className="text-aurora-blue">Pricing</span>
          </h2>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center bg-aurora-secondary/30 p-1 rounded-lg mb-8">
            <button
              className={cn(
                "px-4 py-2 rounded-md transition-all",
                annualBilling
                  ? "bg-aurora-blue text-white shadow-lg"
                  : "text-aurora-text/70 hover:text-aurora-text"
              )}
              onClick={() => setAnnualBilling(true)}
            >
              Annual
              <span className="ml-2 text-xs font-medium bg-aurora-green/20 text-aurora-green px-2 py-0.5 rounded">Save 20%</span>
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-md transition-all",
                !annualBilling
                  ? "bg-aurora-blue text-white shadow-lg"
                  : "text-aurora-text/70 hover:text-aurora-text"
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
            className="glass-card rounded-xl overflow-hidden w-full max-w-sm opacity-0"
          >
            <div className="p-8">
              <div className="text-aurora-text/70 uppercase text-sm font-semibold tracking-wider mb-2">
                Free
              </div>
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-aurora-text/70 ml-1">forever</span>
              </div>
              <p className="text-aurora-text/80 mb-6">
                Perfect for trying out Aurora's capabilities
              </p>
              <button className="btn-ghost w-full mb-8">
                <span>Get Started</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>3 presentations per month</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Basic templates</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Standard export formats</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Community support</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pro Tier */}
          <div className="glass-card rounded-xl overflow-hidden w-full max-w-sm opacity-0 animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <div className="bg-gradient-to-r from-aurora-blue to-aurora-purple h-2"></div>
            <div className="p-8">
              <div className="text-aurora-green uppercase text-sm font-semibold tracking-wider mb-2">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${annualBilling ? "8" : "10"}</span>
                <span className="text-aurora-text/70 ml-1">/ month</span>
              </div>
              <p className="text-aurora-text/80 mb-6">
                For professionals who need more features and capacity
              </p>
              <button className="btn-primary w-full mb-8">
                <span>Start Pro Trial</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Unlimited presentations</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Premium templates</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Advanced customization</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Brand settings</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Team collaboration</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enterprise Tier */}
          <div className="glass-card rounded-xl overflow-hidden w-full max-w-sm opacity-0 animate-fadeIn" style={{ animationDelay: "400ms" }}>
            <div className="p-8">
              <div className="text-aurora-text/70 uppercase text-sm font-semibold tracking-wider mb-2">
                Enterprise
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-aurora-text/70 ml-1">pricing</span>
              </div>
              <p className="text-aurora-text/80 mb-6">
                For organizations with specific needs and requirements
              </p>
              <button className="btn-ghost w-full mb-8">
                <span>Contact Sales</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Everything in Pro</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Advanced security features</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
                  <span>Service level agreement</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-aurora-green mt-0.5 mr-3 flex-shrink-0" />
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
