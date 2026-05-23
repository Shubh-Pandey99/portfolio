import React from 'react';
import { BookOpen, ExternalLink, Clock, Calendar, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { motion } from 'framer-motion';

const BlogsSection = () => {
  const { blogs } = portfolioData;

  return (
    <section id="blogs" className="relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tighter">Technical Writing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Sharing battle-tested insights from the world of DevOps, Cloud Architecture, and Automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-card/40 backdrop-blur-xl rounded-[2.5rem] border border-border/50 hover:border-orange-500/40 transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              {/* Blog Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                    MEDIUM PUBLICATION
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {blog.year}</span>
                </div>

                <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                  {blog.summary}
                </p>

                <div className="pt-6 border-t border-border/30">
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full group/link"
                  >
                    <span className="text-sm font-black uppercase tracking-widest group-hover/link:text-orange-500 transition-colors">Read Full Article</span>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover/link:bg-orange-500 group-hover/link:text-white group-hover/link:border-orange-500 transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog Footer */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://medium.com/@shubhpandet', '_blank')}
            className="px-10 py-5 bg-foreground text-background rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-500 transition-colors shadow-xl"
          >
            View All Technical Articles
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;