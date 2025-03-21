
import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-aurora-background py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-aurora-purple/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="/" className="inline-block">
              <img src="/aurora-logo.svg" alt="Aurora" className="h-10" />
            </a>
            <p className="text-aurora-text/70">
              Transform your ideas into stunning presentations with the power of AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          
          {/* Links 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          
          {/* Links 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-aurora-text/70 hover:text-aurora-green transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-aurora-text/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-aurora-text/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Aurora AI. All rights reserved.
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-aurora-text/60 hover:text-aurora-green text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-aurora-text/60 hover:text-aurora-green text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-aurora-text/60 hover:text-aurora-green text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
