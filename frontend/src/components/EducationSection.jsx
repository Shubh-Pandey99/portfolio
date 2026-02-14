import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Educational Foundation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Academic background that built the technical core for my DevOps career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative p-8 md:p-10 bg-card/60 backdrop-blur-xl rounded-[2.5rem] border border-border/50 transition-all duration-500 group-hover:border-orange-500/30 shadow-xl shadow-black/5 group-hover:shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-3xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 rotate-6 group-hover:rotate-0">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tight mb-2 group-hover:text-orange-500 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-bold text-muted-foreground mb-4">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-4 pt-2">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-border/30">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </div>
                        {edu.cgpa && (
                          <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-orange-500 bg-orange-500/5 px-3 py-1.5 rounded-lg border border-orange-500/20">
                            <Award className="w-3.5 h-3.5" />
                            GPA: {edu.cgpa}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block text-right">
                    <MapPin className="ml-auto w-10 h-10 text-muted-foreground/20 group-hover:text-orange-500/20 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;