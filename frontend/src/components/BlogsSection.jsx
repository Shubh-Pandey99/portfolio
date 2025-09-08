import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { BookOpen, ExternalLink, Clock, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const BlogsSection = () => {
  const { blogs } = portfolioData;

  const handleReadOnMedium = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="blogs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0070C0]/10 mb-4">
              <BookOpen className="w-8 h-8 text-[#0070C0]" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Technical Blogs</h2>
            <div className="w-24 h-1 bg-[#0070C0] mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Sharing knowledge and insights about cloud technologies and DevOps practices
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-[#0070C0]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-[#0070C0] leading-tight group-hover:text-[#005799] transition-colors duration-300">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/90 leading-relaxed text-sm">
                    {blog.excerpt}
                  </p>
                  
                  {/* Blog Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReadOnMedium(blog.url)}
                      className="w-full border-[#0070C0] text-[#0070C0] hover:bg-[#0070C0] hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read on Medium
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Writing Philosophy */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-[#0070C0]/5 to-[#0070C0]/10 border-[#0070C0]/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#0070C0]">
                  Knowledge Sharing
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                  Writing technical articles to help the DevOps community understand complex 
                  cloud concepts, best practices, and real-world implementation strategies. 
                  Each article is based on hands-on experience and practical insights.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary" className="bg-[#0070C0]/10 text-[#0070C0]">
                    AWS Deep Dives
                  </Badge>
                  <Badge variant="secondary" className="bg-[#0070C0]/10 text-[#0070C0]">
                    DevOps Best Practices
                  </Badge>
                  <Badge variant="secondary" className="bg-[#0070C0]/10 text-[#0070C0]">
                    Cloud Architecture
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

export default BlogsSection;