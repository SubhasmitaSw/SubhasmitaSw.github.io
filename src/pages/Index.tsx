
import { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import { Layout } from '@/components/Layout';
import { Article } from '@/types';
import { fetchArticles, getMockArticles } from '@/lib/api';
import { Card } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';

const Index = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        // Use Subhasmita's Hashnode username
        const hashnodeUsername = 'whtssub';
        const fetchedArticles = await fetchArticles(hashnodeUsername);
        console.log('Home page fetched articles:', fetchedArticles);
        
        if (fetchedArticles.length > 0) {
          setArticles(fetchedArticles.slice(0, 3));
        } else {
          // Use mock data if API call fails or returns no data
          console.log('Using mock articles');
          setArticles(getMockArticles());
        }
      } catch (error) {
        console.error('Error loading articles:', error);
        setArticles(getMockArticles());
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <Layout>
      <Hero />
      
      <section className="container px-4 md:px-6 py-16 max-w-3xl mx-auto">
        <div className="space-y-4 mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-heading">Recent Articles</h2>
          <p className="text-muted-foreground">
            Thoughts on cloud computing, serverless technologies, and technical writing.
          </p>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="rounded-md h-24 bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <Card key={article.id} className="p-4 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-medium text-lg font-heading">{article.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{article.brief}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                    {formatDistanceToNow(new Date(article.dateAdded), { addSuffix: true })}
                  </span>
                </div>
                <div className="mt-3">
                  <a 
                    href={`https://whtssub.hashnode.dev/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Read article →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
<a 
  href="#/articles" 
  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
>
  View all articles
</a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
