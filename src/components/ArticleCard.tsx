
import { Card, CardContent } from '@/components/ui/card';
import { Article } from '@/types';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export const ArticleCard = ({ article, className }: ArticleCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
  
  const articleUrl = `https://whtssub.hashnode.dev/${article.slug}`;
  
  return (
    <Card className={cn("overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200", className)}>
      <div className="aspect-[16/9] overflow-hidden">
        <div className={cn(
          "w-full h-full bg-cover bg-center transition-transform duration-500 ease-out",
          !imageLoaded && "lazy-image"
        )}>
          {article.coverImage && (
            <img
              src={article.coverImage}
              alt={article.title}
              className={cn(
                "w-full h-full object-cover transition-opacity duration-500",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
          )}
        </div>
      </div>
      <CardContent className="p-6 flex flex-col h-[calc(100%-9rem)]">
        <div className="text-xs text-muted-foreground mb-2">
          {formatDate(article.dateAdded)}
        </div>
        <h3 className="text-xl font-medium mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {article.brief}
        </p>
        <div className="mt-auto pt-2">
          <a 
            href={articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Read article
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
