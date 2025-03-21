
import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.classList.add("animate-fadeIn");
            }
            setTimeout(() => {
              if (accordionRef.current) {
                accordionRef.current.classList.add("animate-fadeIn");
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

  const faqs = [
    {
      question: "How does Aurora create presentations so quickly?",
      answer:
        "Aurora's breakthrough AI analyzes your prompt, understands the context, and builds a presentation structure in milliseconds. It then crafts each slide with intelligent design principles, creating professional-quality content that feels handcrafted but happens at the speed of thought.",
    },
    {
      question: "Can I customize the presentations after they're created?",
      answer:
        "Absolutely! Every element is fully editable. Change colors, layouts, fonts, images—anything you can imagine. Aurora gives you the perfect starting point, then puts you in complete control of the final result. It's the best of both worlds: AI speed with human creativity.",
    },
    {
      question: "What kind of presentations can Aurora handle?",
      answer:
        "From business pitches to educational content, product launches to research presentations—Aurora handles it all with equal brilliance. Our AI has been trained on thousands of professional presentations across industries, ensuring whatever you need is just a prompt away.",
    },
    {
      question: "Do I need design skills to use Aurora?",
      answer:
        "Not at all! That's the beauty of Aurora. You bring the ideas, we handle the design. Of course, if you do have design preferences, Aurora can adapt to your direction. It's perfect for both design novices looking for excellence and professionals seeking efficiency.",
    },
    {
      question: "How does pricing work?",
      answer:
        "We offer a range of plans starting at just $10/month for individual creators. Our professional and team plans include additional features like brand kit integration, expanded slide counts, and collaboration tools. All plans start with a 7-day free trial, no credit card required.",
    },
    {
      question: "Is my content secure and private?",
      answer:
        "Your privacy is paramount. Aurora employs end-to-end encryption for all content, and we never use your presentations to train our models without explicit permission. Your brilliant ideas remain yours alone, with enterprise-grade security protecting every presentation you create.",
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-aurora-background"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6 opacity-0 text-aurora-dark">
            Questions You Might <span className="text-aurora-primary">Have</span>
          </h2>
        </div>
        
        <div ref={accordionRef} className="opacity-0">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="rounded-xl overflow-hidden border border-aurora-dark/10 bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-aurora-secondary/30 transition-colors">
                  <span className="text-left font-medium text-lg text-aurora-dark">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-aurora-dark/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fadeIn" style={{ animationDelay: "600ms" }}>
          <p className="text-aurora-dark/70 mb-6">
            Still have questions? We'd love to help.
          </p>
          <button className="px-8 py-4 border border-aurora-dark/10 text-aurora-dark rounded-full hover:border-aurora-primary/20 hover:bg-aurora-primary/5 transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
