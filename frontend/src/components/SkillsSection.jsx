import React, { useState } from 'react';
import { Code, Cloud, Monitor, Server, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsSection = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState(Object.keys(skills)[0]);

  const getIcon = (category) => {
    switch (category) {
      case 'Cloud Platforms': return <Cloud className="w-5 h-5" />;
      case 'Infrastructure & Automation': return <Server className="w-5 h-5" />;
      case 'Programming & Scripting': return <Code className="w-5 h-5" />;
      case 'Monitoring & Observability': return <Monitor className="w-5 h-5" />;
      default: return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Technical Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Expertise across the full DevOps spectrum, from cloud architecture to granular observability.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-muted/50 rounded-2xl border border-border/50 backdrop-blur-sm">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === category
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
              >
                {getIcon(category)}
                <span className="whitespace-nowrap">{category}</span>
              </button>
            ))}
          </div>

          {/* Skills Content with Animated Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
              >
                {skills[activeTab].map((skill, index) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-500" />
                        <span className="font-bold text-foreground tracking-tight">{skill.name}</span>
                      </div>
                      <span className="text-sm font-mono text-muted-foreground font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden border border-border/20">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Branding / Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-8 rounded-[2rem] bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/10 text-center"
          >
            <h3 className="text-xl font-bold mb-3 text-orange-500">Continuous Integration, Continuous Learning</h3>
            <p className="text-muted-foreground text-sm max-w-3xl mx-auto leading-relaxed">
              I specialize in streamlining complex cloud infrastructures, ensuring high availability, and optimizing resource utilization. My focus is on creating developer-friendly environments that empower teams to ship faster and more reliably.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;