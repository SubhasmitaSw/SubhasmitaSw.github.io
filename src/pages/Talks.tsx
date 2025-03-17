import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Link as LinkIcon, ExternalLink, Calendar, MapPin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getTalks } from '@/lib/mdx';
import { Talk } from '@/types';

const Talks = () => {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        setIsLoading(true);
        const talksData = await getTalks();
        setTalks(talksData);
        setError(null);
      } catch (err) {
        console.error('Failed to load talks:', err);
        setError('Failed to load talks content. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTalks();
  }, []);

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Talks & Presentations</h1>
          <p className="text-lg text-muted-foreground">
            Sharing knowledge about cloud computing, serverless technologies, and technical writing.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center my-12">
            <p>Loading talks...</p>
          </div>
        )}

        {error && (
          <div className="rounded-md bg-red-50 p-4 my-8">
            <div className="text-red-700">{error}</div>
          </div>
        )}

        {!isLoading && !error && talks.length === 0 && (
          <div className="text-center my-12">
            <p>No talks found. Please check back later.</p>
          </div>
        )}

        <div className="space-y-8 max-w-4xl mx-auto">
          {talks.map((talk) => (
            <Card key={talk.id} className="overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-3">{talk.title}</h2>
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={16} />
                    <span>{talk.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2" size={16} />
                    <span>{talk.venue}</span>
                  </div>
                </div>
                <div className="text-muted-foreground mb-6">
                  <ReactMarkdown>{talk.description}</ReactMarkdown>
                </div>
                <div className="flex flex-wrap gap-4">
                  {talk.slideUrl && (
                    <a 
                      href={talk.slideUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      <LinkIcon size={16} className="mr-2" />
                      View Slides
                    </a>
                  )}
                  {talk.videoUrl && (
                    <a 
                      href={talk.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Watch Recording
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Talks;