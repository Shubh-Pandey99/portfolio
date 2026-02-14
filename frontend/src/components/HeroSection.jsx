import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Rocket, Shield, Cpu } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const { hero } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Cloud Architect",
    "Automation Specialist"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-[1.1]">
              <span className="block text-foreground">I am</span>
              <span className="text-gradient">Shubh Pandey</span>
            </h1>

            <div className="h-16 mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-2xl md:text-3xl text-muted-foreground font-medium"
                >
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              Building resilient cloud ecosystems and automating the path to production.
              Always scaling, always optimizing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>

              <button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center bg-muted/50 hover:bg-muted text-foreground px-8 py-4 text-lg font-bold rounded-xl border border-border/50 hover:border-orange-500/30 transition-all duration-300"
              >
                Explore More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-mono tracking-tighter">Fast Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-mono tracking-tighter">High Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-green-500" />
                <span className="text-sm font-mono tracking-tighter">Scalable Infra</span>
              </div>
            </div>
          </motion.div>

          {/* Profile Image with Tilt effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-shrink-0 relative group"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:rounded-[3rem] group-hover:scale-[1.02]">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <img
                src={hero.headshot}
                alt="Shubh Pandey"
                className="w-full h-full object-cover object-top filter group-hover:contrast-110 transition-all duration-500"
              />
            </div>

            {/* Visual Decoration around Image */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl -z-10 group-hover:bg-orange-500/40 transition-all"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10 group-hover:bg-blue-500/20 transition-all"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce hidden md:block"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground/40 hover:text-orange-500 transition-colors" />
      </div>
    </section>
  );
};

export default HeroSection;