import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FolderOpen, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const ProjectsSection = () => {
  const { projects } = portfolioData;

  const handleViewOnLinkedIn = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0070C0]/10 mb-4">
              <FolderOpen className="w-8 h-8 text-[#0070C0]" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-[#0070C0] mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Innovation-driven projects that improve operational efficiency and reliability
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-[#0070C0]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-[#0070C0] leading-tight group-hover:text-[#005799] transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/90 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-[#0070C0]/10 text-[#0070C0] hover:bg-[#0070C0] hover:text-white transition-colors duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewOnLinkedIn(project.linkedinUrl)}
                      className="w-full border-[#0070C0] text-[#0070C0] hover:bg-[#0070C0] hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Project Info */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-[#0070C0]/5 to-[#0070C0]/10 border-[#0070C0]/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#0070C0]">
                  Impact & Innovation
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  These projects showcase a commitment to automation, process improvement, 
                  and knowledge sharing. Each initiative has delivered measurable business 
                  value through reduced operational overhead, improved team efficiency, 
                  and enhanced system reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;