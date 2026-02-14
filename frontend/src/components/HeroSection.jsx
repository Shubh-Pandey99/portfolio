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
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 lg:pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-10 w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.05]">
              <span className="block text-foreground opacity-90">I am</span>
              <span className="text-gradient">Shubh Pandey</span>
            </h1>

            <div className="h-12 md:h-16 mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xl md:text-3xl text-muted-foreground font-black uppercase tracking-widest opacity-80"
                >
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base md:text-xl text-muted-foreground leading-relaxed mb-12 font-medium">
              Building resilient cloud ecosystems and automating the path to production.
              Always scaling, always optimizing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 text-sm md:text-lg font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden shrink-0"
              >
                <Download className="mr-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>

              <button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center bg-muted/40 hover:bg-muted text-foreground px-8 py-5 text-sm md:text-lg font-black uppercase tracking-widest rounded-2xl border border-border/50 hover:border-orange-500/30 transition-all duration-300 active:scale-95 shrink-0"
              >
                Explore More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 opacity-40 hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-3 group">
                <Rocket className="w-5 h-5 text-orange-500 group-hover:scale-125 transition-transform" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Fast Deployment</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Shield className="w-5 h-5 text-blue-500 group-hover:scale-125 transition-transform" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">High Security</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Cpu className="w-5 h-5 text-green-500 group-hover:scale-125 transition-transform" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Scalable Infra</span>
              </div>
            </div>
          </motion.div>

          {/* Profile Image - Optimized for Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-shrink-0 relative group mt-12 lg:mt-0"
          >
            <div className="relative w-56 h-56 s:w-64 s:h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-black/20 transition-all duration-700 group-hover:rounded-[5rem] group-hover:scale-[1.02]">
              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent z-10 group-hover:opacity-0 transition-opacity duration-700"></div>

              <img
                src={hero.headshot}
                alt="Shubh Pandey"
                className="w-full h-full object-cover object-top filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Visual Decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10 group-hover:bg-orange-500/20 transition-all duration-700"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-all duration-700"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce hidden md:block"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground/30 hover:text-orange-500 transition-colors" />
      </div>
    </section>
  );
};

export default HeroSection;