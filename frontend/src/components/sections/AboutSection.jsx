import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { User, Briefcase, TrendingDown, ShieldCheck, Zap } from 'lucide-react';
import { portfolioData } from '../../data/mockData';
import Terminal from '../terminal/Terminal';

const iconMap = {
  Zap: Zap,
  "MTTR Optimization": TrendingDown,
  ShieldCheck: ShieldCheck,
  Briefcase: Briefcase
};

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
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {about.stats?.map((stat, idx) => {
                  const IconComponent = iconMap[stat.icon] || Zap;
                  return (
                    <div 
                      key={idx}
                      className="flex flex-col items-center text-center p-5 rounded-xl bg-orange-50/40 dark:bg-orange-950/10 border border-orange-100 dark:border-orange-900/30 group hover:border-orange-500/40 hover:bg-orange-50/60 dark:hover:bg-orange-950/20 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-extrabold text-orange-500 mb-1 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">
                        {stat.label}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Interactive Terminal */}
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;