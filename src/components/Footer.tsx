
import { SocialIcons } from './SocialIcons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 mt-16 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Subhasmita Swain. All rights reserved.
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <SocialIcons iconSize={18} className="text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};
