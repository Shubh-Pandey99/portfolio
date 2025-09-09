import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Copyright © 2024 Shubh Pandey</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built with React & Tailwind CSS · Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>Emergent</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;