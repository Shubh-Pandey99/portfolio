import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-violet-600/10 to-indigo-600/10 mb-4">
              <GraduationCap className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg shadow-md"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 flex items-center justify-center border border-violet-200/50 dark:border-violet-800/50">
                        <GraduationCap className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-2">
                          {edu.degree}
                        </CardTitle>
                        <h3 className="text-lg font-semibold text-foreground/90">
                          {edu.institution}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      {edu.cgpa && (
                        <div className="flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-semibold">
                          <Award className="w-4 h-4" />
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