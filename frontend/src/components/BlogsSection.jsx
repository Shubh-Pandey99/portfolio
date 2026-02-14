import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { BookOpen, ExternalLink, Clock, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const BlogsSection = () => {
  const { blogs } = portfolioData;

  const handleReadBlog = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="blogs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4">
              <BookOpen className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Blogs</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Sharing knowledge and insights about cloud technologies and DevOps practices
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group overflow-hidden shadow-md"
              >
                {/* Featured Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.parentElement;
                      placeholder.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center"><div class="text-orange-600 text-4xl">📝</div></div>';
                    }}
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold text-orange-500 leading-tight group-hover:text-orange-600 transition-all duration-300 line-clamp-2">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/90 leading-relaxed text-sm line-clamp-3">
                    {blog.summary}
                  </p>

                  {/* Blog Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.year}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border border-orange-300 dark:border-orange-700 rounded-md text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Article
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Writing Philosophy */}
          <div className="mt-12 text-center">
            <Card className="bg-orange-50/50 dark:bg-orange-950/20 border-orange-200/50 dark:border-orange-800/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">
                  Knowledge Sharing
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                  Writing technical articles to help the DevOps community understand complex
                  cloud concepts, best practices, and real-world implementation strategies.
                  Each article is based on hands-on experience and practical insights.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50">
                    AWS Deep Dives
                  </Badge>
                  <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50">
                    DevOps Best Practices
                  </Badge>
                  <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50">
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