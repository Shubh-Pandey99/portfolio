import React from 'react';
import { Briefcase, MapPin, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A track record of stabilizing infrastructures and automating workflows at scale.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-red-500 to-transparent rounded-full -translate-x-1/2 hidden sm:block" />

          <div className="space-y-24 relative">
            {experience.map((job, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background border-4 border-orange-500 rounded-xl -translate-x-1/2 shadow-xl shadow-orange-500/20 z-10 hidden sm:block">
                  <div className="absolute inset-0 bg-orange-500 scale-50 rounded-lg animate-pulse" />
                </div>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full md:w-[45%] group"
                >
                  <div className="p-8 rounded-[2rem] bg-card/80 backdrop-blur-md border border-border/50 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:border-orange-500/30">

                    {/* Header */}
                    <div className="flex flex-col gap-4 mb-6">
                      <div className="p-3 w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                        <Briefcase className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-foreground group-hover:text-orange-500 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground font-bold mt-1">
                          <Building2 className="w-4 h-4" />
                          {job.company}
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground bg-muted/50 p-3 rounded-xl mb-6 border border-border/30">
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-4">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex gap-3 items-start group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40 mt-2.5 transition-all group-hover/item:bg-orange-500 group-hover/item:scale-125" />
                          <p className="text-muted-foreground group-hover/item:text-foreground transition-all leading-relaxed text-[0.95rem]">
                            {responsibility}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;