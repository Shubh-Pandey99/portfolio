import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { FolderOpen, ExternalLink, Zap, Target, Users } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const ProjectsSection = () => {
  const { projects } = portfolioData;

  const handleViewOnLinkedIn = (url) => {
    window.open(url, '_blank');
  };

  const getProjectIcon = (title) => {
    if (title.includes('Email')) return <Zap className="w-6 h-6" />;
    if (title.includes('Mission')) return <Target className="w-6 h-6" />;
    if (title.includes('Onboarding')) return <Users className="w-6 h-6" />;
    return <FolderOpen className="w-6 h-6" />;
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4">
              <FolderOpen className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Innovation-driven projects that improve operational efficiency and reliability
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group shadow-md"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center border border-orange-200/50 dark:border-orange-800/50">
                      <div className="text-orange-500">
                        {getProjectIcon(project.title)}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-orange-500 leading-tight group-hover:text-orange-600 transition-all duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/90 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Button */}
                  <div className="pt-2">
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border border-orange-300 dark:border-orange-700 rounded-md text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Project Info */}
          <div className="mt-12 text-center">
            <Card className="bg-orange-50/50 dark:bg-orange-950/20 border-orange-200/50 dark:border-orange-800/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">
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