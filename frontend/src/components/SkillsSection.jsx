import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Cloud, Monitor, Users, Server, Terminal } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const SkillsSection = () => {
  const { skills } = portfolioData;

  const getIcon = (category) => {
    switch (category) {
      case 'Cloud Platforms':
        return <Cloud className="w-6 h-6" />;
      case 'Infrastructure & Automation':
        return <Server className="w-6 h-6" />;
      case 'Programming & Scripting':
        return <Code className="w-6 h-6" />;
      case 'Monitoring & Incident Management':
        return <Monitor className="w-6 h-6" />;
      case 'Tools & Collaboration':
        return <Users className="w-6 h-6" />;
      case 'Operating Systems':
        return <Terminal className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4">
              <Code className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for modern DevOps and cloud infrastructure management
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card 
                key={category} 
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg group shadow-md"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(category)}
                    </div>
                    <span className="group-hover:text-orange-500 transition-all duration-300">
                      {category}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default border border-orange-200/50 dark:border-orange-800/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Info */}
          <div className="mt-12 text-center">
            <Card className="bg-orange-50/50 dark:bg-orange-950/20 border-orange-200/50 dark:border-orange-800/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Always staying updated with the latest technologies and best practices in DevOps, 
                  cloud architecture, and site reliability engineering. Currently exploring advanced 
                  Kubernetes patterns, GitOps workflows, and emerging observability tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;