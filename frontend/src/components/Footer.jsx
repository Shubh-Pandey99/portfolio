import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const Footer = () => {
  const { contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand/About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <span className="font-bold text-xl">Shubh Pandey</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              DevOps & Site Reliability Engineer passionate about building scalable,
              reliable, and secure cloud-native infrastructure. Focus on automation,
              efficiency, and performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-orange-500 text-left transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-orange-500 text-left transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-orange-500 text-left transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-orange-500 text-left transition-colors">Projects</button>
              <button onClick={() => scrollToSection('blogs')} className="text-muted-foreground hover:text-orange-500 text-left transition-colors">Blogs</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-orange-500 text-left transition-colors">Contact</button>
            </div>
          </div>

          {/* Social Connect */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Shubh-Pandey99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Based in Pune, India · IST (GMT+5:30)
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-muted-foreground text-sm">
              Copyright © 2024 Shubh Pandey · All rights reserved
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span>in Pune</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;