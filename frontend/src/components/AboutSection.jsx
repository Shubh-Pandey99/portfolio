import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { User } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-violet-600/10 to-indigo-600/10 mb-4">
              <User className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
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
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50 border border-violet-200/50 dark:border-violet-800/50">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground font-medium">System Availability</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50 border border-violet-200/50 dark:border-violet-800/50">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-2">28%</div>
                  <p className="text-sm text-muted-foreground font-medium">Downtime Reduction</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50 border border-violet-200/50 dark:border-violet-800/50">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-2">20%</div>
                  <p className="text-sm text-muted-foreground font-medium">Cost Savings</p>
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