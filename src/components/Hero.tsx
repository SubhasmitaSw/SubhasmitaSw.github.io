
import { SocialIcons } from './SocialIcons';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <section className="container px-4 md:px-6 py-16 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 text-left">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-heading">
              Hi 👋, there!
            </h1>
            <p className="text-xl text-primary font-medium">
              Software Developer
            </p>
            <p className="text-base text-foreground mt-4 max-w-[50ch]">
              I’m Subhasmita Swain, R&D Engineer at Civo, driven by curiosity and cloud-native tech. From Kubernetes Release Shadow to Outreachy and CNCF internships, I’ve shaped open-source projects like Apache and Kubernetes. I build efficient, code-driven solutions for observability and cluster management, prioritizing sustainability and community impact. (For the latest CV details, check out my <a href="https://www.linkedin.com/in/subhasmita-swain/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 border-b border-blue-200 hover:border-blue-500 transition-colors">LinkedIn</a>!) 
            </p>
            <div className="pt-4 flex items-center gap-3">
              <SocialIcons className="text-primary hover:text-accent transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="flex-none w-40 md:w-48 lg:w-56">
          <div className={cn(
            "aspect-square overflow-hidden border-4 border-background rounded-full shadow-xl",
            !imageLoaded && "lazy-image"
          )}>
            <img
              src="src/assets/profile2.jpeg"
              alt="Subhasmita Swain profile"
              className={cn(
                "w-full h-full object-cover transition-opacity duration-500",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
