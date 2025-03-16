import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { ArticleCard } from '@/components/ArticleCard';
import { fetchArticles } from '@/lib/hashnode';
import { Article } from '@/types';
import { toast } from '@/components/ui/use-toast';
import externalArticles from '../data/external-articles.json';

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const fetchedArticles = await fetchArticles();
        console.log('Fetched articles:', fetchedArticles);
        setArticles(fetchedArticles);
        if (fetchedArticles.length === 0) {
          toast({
            title: "No articles found",
            description: "Could not load articles from Hashnode.",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error('Error loading articles:', error);
        toast({
          title: "Error loading articles",
          description: "Failed to fetch articles from Hashnode.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16 max-w-3xl mx-auto">
        <div className="text-left mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Articles</h1>
          <p className="text-lg text-muted-foreground">
            Recent Notes and Blog entries.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="rounded-md h-[320px] bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : articles.length > 0 || externalArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
            {externalArticles.map((article) => (
              <div key={article.title} className="bg-white rounded-md p-4">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-lg text-muted-foreground mb-4">{article.description}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 border-b border-blue-200 hover:border-blue-500 transition-colors">Read more</a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Articles;
