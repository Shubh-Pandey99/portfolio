import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Github, Zap, Target, Layout, Users, Activity, X, Shield, Workflow, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full flex flex-col p-10 bg-card/40 backdrop-blur-xl rounded-[3rem] border border-border/50 hover:border-orange-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[460px] cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Layout className="w-32 h-32 rotate-12" />
              </div>

              {/* Impact Badge */}
              {project.impact && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 w-full px-10">
                  <div className="bg-orange-500 text-white text-[9px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-orange-500/20 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                    {project.impact}
                  </div>
                </div>
              )}

              {/* Project Header */}
              <div className="mb-6 mt-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  {getProjectIcon(project.title)}
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 font-medium italic">
                {project.description}
              </p>

              {/* Metrics Preview */}
              <div className="flex gap-4 mb-8">
                {Object.entries(project.metrics || {}).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="flex flex-col border-l-2 border-orange-500/20 pl-3">
                    <span className="text-[8px] uppercase font-black text-muted-foreground tracking-tighter">{key}</span>
                    <span className="text-sm font-bold text-foreground tracking-tight">{value}</span>
                  </div>
                ))}
              </div>

              {/* Project Action */}
              <div className="pt-6 border-t border-border/30 flex items-center justify-between">
                <button
                  className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 hover:text-orange-600 transition-all group/link"
                >
                  Deep Dive
                  <Activity className="ml-2 w-3 h-3 group-hover/link:animate-pulse" />
                </button>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-orange-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
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
              <Shield className="w-12 h-12 text-white" />
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

      {/* Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-card border border-border/50 rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-muted transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Project Details */}
                <div className="p-10 lg:p-14 border-r border-border/30">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                      {getProjectIcon(selectedProject.title)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">Architecture Deep Dive</span>
                  </div>

                  <h3 className="text-4xl font-black tracking-tighter mb-6 italic uppercase leading-none">
                    {selectedProject.title}
                  </h3>

                  <div className="space-y-6 mb-10">
                    <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10">
                      <p className="text-foreground/80 font-medium leading-relaxed italic">
                        "{selectedProject.description}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {Object.entries(selectedProject.metrics || {}).map(([key, value]) => (
                        <div key={key} className="flex-1 min-w-[120px] p-4 rounded-xl bg-muted/50 border border-border/30 text-center">
                          <div className="text-[8px] font-black uppercase text-muted-foreground tracking-tighter mb-1">{key}</div>
                          <div className="text-lg font-black text-foreground">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.deployUrl && (
                      <a
                        href={selectedProject.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 h-14 rounded-2xl bg-orange-500 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
                      >
                        Live App <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={selectedProject.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-14 rounded-2xl bg-muted text-foreground font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-muted/80 transition-all border border-border/50 active:scale-95"
                    >
                      Case Study <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right: Technical Architecture */}
                <div className="p-10 lg:p-14 bg-muted/30 relative">
                  <div className="flex items-center gap-3 mb-10">
                    <Workflow className="w-5 h-5 text-orange-500" />
                    <h4 className="text-lg font-black uppercase tracking-tighter">Stack Components</h4>
                  </div>

                  <div className="space-y-4">
                    {selectedProject.architecture?.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        className="group/item flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-orange-500/40 transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 text-[10px] font-black">
                          0{idx + 1}
                        </div>
                        <span className="text-sm font-bold text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="absolute bottom-10 left-10 right-10 flex items-center gap-3 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                    <Activity className="w-4 h-4 text-orange-500 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-orange-500/80">
                      Operational status: fully functional production ready
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;