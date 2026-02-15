import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Github, Zap, Target, Layout, Users, ChevronDown, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const getProjectIcon = (title) => {
    if (title.includes('Email')) return <Zap className="w-8 h-8" />;
    if (title.includes('Mission')) return <Target className="w-8 h-8" />;
    if (title.includes('TeacherPro') || title.includes('Attendance')) return <Users className="w-8 h-8" />;
    return <FolderOpen className="w-8 h-8" />;
  };

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase underline decoration-orange-500 decoration-4 underline-offset-8">Featured Initiatives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Pure technical execution. No fluff—just measurable impact through automation, observability, and full-stack engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative flex flex-col p-8 md:p-10 bg-card/40 backdrop-blur-xl rounded-[3rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 ${expandedIndex === index ? 'border-orange-500/60 ring-1 ring-orange-500/20' : 'border-border/50 hover:border-orange-500/40'}`}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    {getProjectIcon(project.title)}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-xl hover:bg-muted">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-muted/50 rounded-lg text-[9px] font-black uppercase tracking-widest text-muted-foreground border border-border/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 font-medium">
                {project.description}
              </p>

              {/* Deep Dive Section */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 mb-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all border border-border/30 group/btn"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/80 group-hover/btn:text-orange-500 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  Technical Deep Dive
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${expandedIndex === index ? 'rotate-180 text-orange-500' : 'text-muted-foreground'}`} />
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6 mb-8 pt-2">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-500 mb-3 block">System Architecture</span>
                        <div className="p-4 rounded-2xl bg-background/50 border border-border/30 flex items-start gap-3">
                          <Layers className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <p className="text-xs font-bold leading-relaxed text-foreground/90">{project.architecture}</p>
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-500 mb-3 block">SRE Focused Features</span>
                        <div className="grid grid-cols-1 gap-2">
                          {project.features?.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-orange-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Project Action */}
              <div className="pt-6 border-t border-border/30">
                <a
                  href={project.deployUrl || project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 hover:text-orange-600 transition-all group/link"
                >
                  {project.deployUrl ? 'Live Application' : 'Request Demo / Architecture'}
                  <ExternalLink className="ml-2 w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[4rem] bg-gradient-to-br from-orange-500/[0.03] via-transparent to-transparent border border-orange-500/10 max-w-5xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -z-10 group-hover:bg-orange-500/10 transition-all"></div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-[2.5rem] bg-orange-500 flex items-center justify-center rotate-6 shadow-2xl shadow-orange-500/20 flex-shrink-0 group-hover:rotate-0 transition-transform duration-500">
              <Target className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">Philosophy: Scalability & Reliability</h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                Technical projects shouldn't just solve immediate problems; they should be frameworks for long-term operational success. I build with maintenance, documentation, and scale as primary constraints.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;