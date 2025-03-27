
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Set body background to the new color
    document.body.classList.add('bg-presly-background');
    
    return () => {
      document.body.classList.remove('bg-presly-background');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-presly-background">
      <Header />
      
      <main>
        <HeroSection />
        <DemoSection />
        <BenefitsSection />
        <PricingSection />
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
