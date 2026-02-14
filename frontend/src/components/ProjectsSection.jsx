import React from 'react';
import { FolderOpen, ExternalLink, Github, Zap, Target, Users, Layout } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const { projects } = portfolioData;

  const getProjectIcon = (title) => {
    if (title.includes('Email')) return <Zap className="w-8 h-8" />;
    if (title.includes('Mission')) return <Target className="w-8 h-8" />;
    if (title.includes('Onboarding')) return <Users className="w-8 h-8" />;
    return <FolderOpen className="w-8 h-8" />;
  };

  return (
    <section id="projects" className="relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Strategic Initiatives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Pure technical execution. No fluff—just measurable impact through automation, observability, and strategic developer enablement.
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
              className="group relative h-full flex flex-col p-10 bg-card/40 backdrop-blur-xl rounded-[3rem] border border-border/50 hover:border-orange-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[380px]"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Layout className="w-32 h-32 rotate-12" />
              </div>

              {/* Project Header */}
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  {getProjectIcon(project.title)}
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                {project.description}
              </p>

              {/* Project Action */}
              <div className="pt-6 border-t border-border/30 flex items-center justify-between">
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-black uppercase tracking-widest text-orange-500 hover:text-orange-600 transition-all"
                >
                  View Architecture
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>

                <div className="flex gap-4">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-5 h-5 shadow-sm" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[4rem] bg-gradient-to-br from-orange-500/5 via-transparent to-transparent border border-orange-500/10 max-w-5xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -z-10 group-hover:bg-orange-500/10 transition-all"></div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-[2rem] bg-orange-500 flex items-center justify-center rotate-6 shadow-2xl shadow-orange-500/20 flex-shrink-0 group-hover:rotate-0 transition-transform duration-500">
              <Target className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-black mb-4">Focusing on Scalability & Reliability</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Each project is designed with a "reliability-first" mindset. Beyond just solving immediate problems, I build frameworks that are easy to maintain, document, and scale as the system grows.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;