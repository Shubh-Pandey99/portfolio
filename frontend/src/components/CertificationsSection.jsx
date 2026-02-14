import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion } from 'framer-motion';

const CertificationsSection = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Certified Credentials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-validated expertise across prominent cloud ecosystems and DevOps frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative h-full flex flex-col bg-card/60 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-border/50 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Card Content */}
              <div className="p-8 pb-0 text-center">
                <div className="mx-auto mb-6 w-32 h-32 relative">
                  {/* Animated Background Glow */}
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-orange-500/10 blur-xl rounded-full scale-125 transition-all group-hover:bg-orange-500/20 group-hover:scale-150" />

                  <div className="relative z-10 w-full h-full bg-background rounded-2xl p-4 shadow-lg border border-border/30 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                    <img
                      src={cert.badge}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-black tracking-tight mb-2 group-hover:text-orange-500 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {cert.name}
                </h3>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-auto p-6 pt-2">
                <div className="flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground mb-6">
                  <Calendar className="w-3.5 h-3.5 text-orange-500" />
                  <span className="font-bold">{cert.validity}</span>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-muted/50 hover:bg-orange-500 hover:text-white text-foreground font-bold text-sm transition-all duration-300 group/btn border border-border/50 hover:border-orange-500 shadow-sm"
                >
                  Verify Link
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signifier */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <span className="font-black uppercase tracking-widest text-sm">Security Assured</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-orange-500" />
            <span className="font-black uppercase tracking-widest text-sm">Cloud Verified</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-blue-500" />
            <span className="font-black uppercase tracking-widest text-sm">Reliability Validated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;