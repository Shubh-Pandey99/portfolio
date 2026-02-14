import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Linkedin } from 'lucide-react';

const AnatomySection = () => {
    return (
        <section id="anatomy" className="relative py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase underline decoration-orange-500 decoration-4 underline-offset-8">
                        Anatomy of a DevOps Expert
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        A visual breakdown of core competencies, high-impact achievements, and the technical DNA that drives reliable systems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto relative group"
                >
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-orange-500/5 blur-[100px] rounded-full -z-10 group-hover:bg-orange-500/10 transition-all duration-700"></div>

                    <div className="relative rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl bg-card/30 backdrop-blur-xl">
                        <img
                            src="/anatomy.png"
                            alt="Anatomy of a DevOps Expert: Shubh Pandey"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                            onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80';
                                e.target.className = 'w-full h-[600px] object-cover opacity-20 grayscale';
                            }}
                        />

                        {/* Interactive Overlay for LinkedIn */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                            <a
                                href="https://linkedin.com/in/shubhpandey9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform"
                            >
                                <Linkedin className="w-6 h-6" />
                                Connect & Collaborate
                            </a>
                        </div>
                    </div>

                    {/* Captions for mobile if img fails or just as context */}
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
                        <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                            Source: Shubh Pandey Professional Dossier v4.2
                        </p>
                        <a
                            href="https://linkedin.com/in/shubhpandey9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-black uppercase tracking-widest text-orange-500 flex items-center gap-2 hover:underline"
                        >
                            View Portfolio on LinkedIn <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AnatomySection;
