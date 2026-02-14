import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion } from 'framer-motion';

const Footer = () => {
  const { contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Blogs', id: 'blogs' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-card overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter">SHUBH PANDEY</span>
                <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase">DevOps & Site Reliability</span>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Architecting resilient infrastructures and automating the future of cloud computing.
              Let's build something scalable together.
            </p>
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: Linkedin, url: contact.linkedin, label: 'LinkedIn' },
                { icon: Github, url: 'https://github.com/Shubh-Pandey99', label: 'GitHub' },
                { icon: Mail, url: `mailto:${contact.email}`, label: 'Email' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-muted border border-border/50 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-black text-sm uppercase tracking-widest text-foreground mb-8">Navigation</h4>
            <div className="grid grid-cols-1 gap-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-orange-500 text-left transition-colors font-bold text-lg w-fit"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="font-black text-sm uppercase tracking-widest text-foreground mb-8">Let's Talk</h4>
            <div className="space-y-6">
              <a href={`mailto:${contact.email}`} className="group block">
                <p className="text-xs font-mono text-muted-foreground font-bold uppercase mb-1">Send an Email</p>
                <p className="text-xl font-black group-hover:text-orange-500 transition-colors">{contact.email}</p>
              </a>
              <div className="p-6 rounded-3xl bg-muted/50 border border-border/50 backdrop-blur-sm">
                <p className="text-sm font-bold text-foreground mb-2">Based in Noida, India</p>
                <p className="text-xs text-muted-foreground">Always open to global opportunities and remote collaborations in the SRE/DevOps space.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-muted-foreground text-sm font-medium">
              © 2025 Shubh Pandey. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60">
              Build with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" /> in India
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-orange-500/10 hover:bg-orange-500 text-orange-500 hover:text-white transition-all duration-300 font-black text-sm uppercase tracking-tighter"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;