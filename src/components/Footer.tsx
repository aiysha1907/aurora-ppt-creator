
import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-presly-background py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="/" className="inline-block">
              <span className="font-copper text-xl tracking-wider font-bold text-presly-accent">presly</span>
            </a>
            <p className="text-presly-text/70">
              Transform your ideas into stunning presentations with the power of AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-presly-text">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          
          {/* Links 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-presly-text">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          
          {/* Links 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-presly-text">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-presly-text/70 hover:text-presly-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-presly-text/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-presly-text/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-presly-accent">Presly</span>. All rights reserved.
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-presly-text/60 hover:text-presly-accent text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-presly-text/60 hover:text-presly-accent text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-presly-text/60 hover:text-presly-accent text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
