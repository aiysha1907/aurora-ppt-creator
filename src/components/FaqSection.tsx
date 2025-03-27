
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, index, isOpen, onClick }: FaqItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div 
      className={cn(
        "overflow-hidden rounded-xl transition-all duration-300",
        isOpen 
          ? "border-2 border-presly-accent/70 bg-presly-accent/5" 
          : "border border-white/10 bg-presly-dark/50"
      )}
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full px-6 py-5 text-left"
      >
        <div className="flex items-center">
          <span className="text-presly-primary mr-3 font-copper">Q{index + 1}:</span>
          <span className="font-medium text-lg text-white">{question}</span>
        </div>
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-presly-accent transition-transform duration-300",
            isOpen ? "transform rotate-180" : ""
          )}
        />
      </button>
      <div
        style={{ height }}
        className="transition-all duration-300 overflow-hidden"
      >
        <div ref={contentRef} className="px-6 pb-5 pt-0 text-white/70">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.classList.add("animate-slideUp");
            }
            setTimeout(() => {
              if (faqsRef.current) {
                faqsRef.current.classList.add("animate-slideUp");
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
      question: "How does Presly generate presentations?",
      answer: "Presly's AI understands your input, structures your ideas, and designs a polished, interactive presentation in seconds.",
    },
    {
      question: "Can I customize my AI-generated slides?",
      answer: "Absolutely! You have full control over text, colors, images, and animations—so you can tweak your slides to perfection.",
    },
    {
      question: "What types of templates are available?",
      answer: "Presly offers a wide range of templates, from corporate pitch decks to educational lectures and marketing presentations.",
    },
    {
      question: "Can I try Presly before subscribing?",
      answer: "Yes! We offer a free trial so you can experience the power of AI-generated presentations before committing.",
    },
    {
      question: "How is Presly different from other presentation tools?",
      answer: "Unlike traditional tools, Presly does the work for you—design, layout, and content structure are all AI-powered, making slide creation faster and smarter than ever.",
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-presly-secondary bg-grain"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-presly-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-presly-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4 flex justify-center">
            <span className="inline-block bg-presly-primary/10 text-presly-primary px-4 py-1 rounded-full text-sm font-medium">FAQs</span>
          </div>
          
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-copper mb-6 opacity-0 text-white flex items-center justify-center">
            <HelpCircle className="mr-3 h-8 w-8 text-presly-accent" />
            <span>You Have Questions, We Have Answers</span>
          </h2>
        </div>
        
        <div ref={faqsRef} className="opacity-0 space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fadeIn" style={{ animationDelay: "600ms" }}>
          <p className="text-white/70 mb-6">
            Still have questions? We'd love to help.
          </p>
          <button className="px-8 py-4 border border-presly-accent/30 text-white rounded-full hover:border-presly-accent hover:bg-presly-accent/5 transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
