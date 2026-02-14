import React, { useState } from 'react';
import { Code, Cloud, Monitor, Server, Terminal, CheckCircle2, Award } from 'lucide-react';
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

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case 'Advanced': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'Proficient': return 'text-green-500 bg-green-500/10 border-green-500/20';
      default: return 'text-muted-foreground bg-muted/50 border-border/50';
    }
  };

  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase underline decoration-orange-500 decoration-4 underline-offset-8">Technical Arsenals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Deep-seated expertise in architecting resilient systems. Moving beyond superficial metrics to real-world capability.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 p-2 bg-muted/30 backdrop-blur-xl rounded-[2rem] border border-border/50">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === category
                  ? 'bg-orange-500 text-white shadow-2xl shadow-orange-500/40 scale-105'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
              >
                {getIcon(category)}
                <span className="whitespace-nowrap">{category}</span>
              </button>
            ))}
          </div>

          {/* Skills Content - Modern Card Grid */}
          <div className="min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {skills[activeTab].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative p-8 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50 hover:border-orange-500/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                          <Award className="w-6 h-6" />
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${getProficiencyColor(skill.proficiency)}`}>
                          {skill.proficiency}
                        </span>
                      </div>

                      <h3 className="text-xl font-black tracking-tight mb-4 group-hover:text-orange-500 transition-colors">
                        {skill.name}
                      </h3>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {skill.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-muted/50 rounded-lg text-[9px] font-bold text-muted-foreground uppercase tracking-widest border border-border/30 group-hover:border-orange-500/20 group-hover:text-foreground transition-all">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Skill Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-orange-500/[0.03] via-transparent to-transparent border border-orange-500/10 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -z-10 group-hover:bg-orange-500/10 transition-all"></div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic">Engineering Philosophy</h3>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed font-medium">
              I don't just 'use' tools; I build ecosystems. My expertise lies in internalizing the trade-offs of each technology to ensure high availability, security by default, and extreme operational efficiency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;