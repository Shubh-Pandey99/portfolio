import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const CertificationsSection = () => {
  const { certifications } = portfolioData;

  const handleVerifyCertificate = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-violet-600/10 to-indigo-600/10 mb-4">
              <Award className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise in cloud technologies
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group overflow-hidden shadow-md"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-24 h-24 rounded-full bg-white p-2 shadow-md group-hover:shadow-lg transition-shadow duration-300 border border-violet-200/50">
                    <img 
                      src={cert.badge} 
                      alt={`${cert.name} badge`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const placeholder = e.target.parentElement;
                        placeholder.innerHTML = '<div class="w-full h-full bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full flex items-center justify-center"><span class="text-violet-600 text-xs font-bold">CERT</span></div>';
                      }}
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 leading-tight">
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="font-semibold text-foreground/90">{cert.issuer}</p>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      {cert.validity}
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleVerifyCertificate(cert.verifyUrl)}
                    className="w-full border-violet-300 dark:border-violet-700 text-violet-600 dark:text-violet-400 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Summary */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-violet-50/50 to-indigo-50/50 dark:from-violet-950/30 dark:to-indigo-950/30 border-violet-200/50 dark:border-violet-800/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600" />
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                    Certification Journey
                  </h3>
                </div>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                  Continuously advancing skills through industry-leading certification programs 
                  from AWS, Google Cloud, and Microsoft Azure. These certifications validate 
                  hands-on experience in cloud architecture, DevOps practices, and system reliability.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge className="bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
                    AWS Expert
                  </Badge>
                  <Badge className="bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
                    Multi-Cloud Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-800/50">
                    DevOps Specialist
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;