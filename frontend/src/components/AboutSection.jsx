import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { User, Briefcase, TrendingDown, ShieldCheck, Zap } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4">
              <User className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-orange-500">
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground/90">
                  {about.summary}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/50 dark:border-orange-800/50 group hover:border-orange-500/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-orange-500 mb-1">99.9%</div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Availability</p>
                </div>

                <div className="text-center p-4 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/50 dark:border-orange-800/50 group hover:border-orange-500/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-orange-500 mb-1">28%</div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Less Downtime</p>
                </div>

                <div className="text-center p-4 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/50 dark:border-orange-800/50 group hover:border-orange-500/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Compliance</p>
                </div>

                <div className="text-center p-4 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/50 dark:border-orange-800/50 group hover:border-orange-500/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-orange-500 mb-1">5+</div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Years Exp.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;