import React from 'react';
import { FolderOpen, ExternalLink, Github, Zap, Target, Users } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const { projects } = portfolioData;

  const getProjectIcon = (title) => {
    if (title.includes('Email')) return <Zap className="w-5 h-5" />;
    if (title.includes('Mission')) return <Target className="w-5 h-5" />;
    if (title.includes('Onboarding')) return <Users className="w-5 h-5" />;
    return <FolderOpen className="w-5 h-5" />;
  };

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Strategic Initiatives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Measurable impact through automation, observability, and strategic developer enablement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full flex flex-col bg-card/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Project Image Header */}
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <div className="p-2.5 rounded-xl bg-orange-500 text-white shadow-lg">
                    {getProjectIcon(project.title)}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/20 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="pt-6 border-t border-border/30 flex items-center justify-between mt-auto">
                  <a
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-orange-500 hover:text-orange-600 transition-all group/link"
                  >
                    Case Study
                    <ExternalLink className="ml-2 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>

                  <div className="flex gap-4">
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-10 rounded-[3rem] bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/10 max-w-5xl mx-auto shadow-inner"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 rounded-3xl bg-orange-500 flex items-center justify-center rotate-3 shadow-xl flex-shrink-0">
              <Target className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black mb-4">Focusing on Scalability & Reliability</h3>
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