import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0070C0]/10 mb-4">
              <Briefcase className="w-8 h-8 text-[#0070C0]" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-[#0070C0] mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Building scalable, reliable systems across cloud platforms
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-[#0070C0]/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-[#0070C0] mb-2">
                        {job.title}
                      </CardTitle>
                      <h3 className="text-lg font-semibold mb-2">{job.company}</h3>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <div key={respIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0070C0] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground/90 leading-relaxed">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;