import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0070C0]/10 mb-4">
              <GraduationCap className="w-8 h-8 text-[#0070C0]" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-[#0070C0] mx-auto rounded-full"></div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-[#0070C0]/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-[#0070C0] mb-2">
                        {edu.degree}
                      </CardTitle>
                      <h3 className="text-lg font-semibold text-foreground/90">
                        {edu.institution}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      {edu.cgpa && (
                        <div className="text-[#0070C0] font-semibold">
                          CGPA: {edu.cgpa}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;