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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0070C0]/10 mb-4">
              <User className="w-8 h-8 text-[#0070C0]" />
            </div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-[#0070C0] mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-[#0070C0]">
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
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-[#0070C0] mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">System Availability</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-[#0070C0] mb-2">28%</div>
                  <p className="text-sm text-muted-foreground">Downtime Reduction</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-[#0070C0] mb-2">20%</div>
                  <p className="text-sm text-muted-foreground">Cost Savings</p>
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