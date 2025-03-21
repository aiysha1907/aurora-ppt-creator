
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
      question: "How does Aurora create presentations?",
      answer:
        "Aurora uses advanced AI technology to understand your prompt and generate tailored presentation content and design. It analyzes the context, creates an outline, writes compelling content, and applies professional design principles to produce complete presentations instantly.",
    },
    {
      question: "Can I edit the presentations after they're generated?",
      answer:
        "Absolutely! You have full editing capabilities for all presentations created with Aurora. You can modify text, rearrange slides, change designs, add or remove elements, and customize every aspect to match your exact requirements.",
    },
    {
      question: "What file formats can I export my presentations in?",
      answer:
        "Aurora supports multiple export formats including PowerPoint (.pptx), PDF, Google Slides, and direct presentation mode. This ensures compatibility with virtually any presentation environment.",
    },
    {
      question: "Is my content secure and private?",
      answer:
        "Yes, we take data security very seriously. All your content is encrypted, and we don't store your presentation content longer than necessary for processing. Our privacy policy ensures your data is never shared or used for training without explicit permission.",
    },
    {
      question: "How many presentations can I create with the free plan?",
      answer:
        "The free plan allows you to create up to 3 presentations per month. Each presentation can have up to 10 slides. This gives you a chance to experience Aurora's capabilities before committing to a paid plan.",
    },
    {
      question: "Do I need design skills to use Aurora?",
      answer:
        "Not at all! That's the beauty of Aurora. You simply provide the topic or content idea, and our AI handles all design aspects. Of course, if you have specific design preferences, you can guide the AI with more detailed prompts or edit the results.",
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section bg-aurora-secondary/30 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="heading-lg mb-6 opacity-0">
            Frequently Asked <span className="text-aurora-blue">Questions</span>
          </h2>
        </div>
        
        <div ref={accordionRef} className="opacity-0">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-xl overflow-hidden border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors">
                  <span className="text-left font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-aurora-text/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fadeIn" style={{ animationDelay: "600ms" }}>
          <p className="text-aurora-text/80 mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="btn-ghost">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
