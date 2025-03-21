
import React, { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 lg:px-24",
        scrolled ? "bg-aurora-background/80 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="transition-transform hover:scale-105">
          <img src="/aurora-logo.svg" alt="Aurora" className="h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#pricing"
            className="text-aurora-text hover:text-aurora-green transition-colors duration-300"
          >
            Pricing
          </a>
          <div className="group relative">
            <button className="flex items-center text-aurora-text hover:text-aurora-green transition-colors duration-300">
              <Globe className="w-4 h-4 mr-1" />
              <span>EN</span>
            </button>
            <div className="absolute right-0 mt-2 w-36 py-2 glass rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-white/5 transition-colors"
              >
                English
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-white/5 transition-colors"
              >
                Español
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-white/5 transition-colors"
              >
                Français
              </a>
            </div>
          </div>
          <button className="btn-ghost">Login</button>
          <button className="btn-primary">Start for Free</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-aurora-text" />
          ) : (
            <Menu className="w-6 h-6 text-aurora-text" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed top-[72px] left-0 right-0 bg-aurora-background/95 backdrop-blur-lg transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-screen pb-6" : "max-h-0"
        )}
      >
        <nav className="flex flex-col space-y-4 px-6 pt-4">
          <a
            href="#pricing"
            className="text-aurora-text py-2 hover:text-aurora-green transition-colors duration-300"
          >
            Pricing
          </a>
          <div className="py-2">
            <button className="flex items-center text-aurora-text hover:text-aurora-green transition-colors duration-300">
              <Globe className="w-4 h-4 mr-1" />
              <span>Language</span>
            </button>
            <div className="pl-5 mt-2 space-y-2">
              <a
                href="#"
                className="block py-1 hover:text-aurora-green transition-colors"
              >
                English
              </a>
              <a
                href="#"
                className="block py-1 hover:text-aurora-green transition-colors"
              >
                Español
              </a>
              <a
                href="#"
                className="block py-1 hover:text-aurora-green transition-colors"
              >
                Français
              </a>
            </div>
          </div>
          <button className="btn-ghost w-full">Login</button>
          <button className="btn-primary w-full">Start for Free</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
