import { GetStaticProps } from 'next';
import { Layout } from '../components/Layout';
import { Card, CardContent } from '../components/ui/card';
import { Link as LinkIcon, ExternalLink, Calendar, MapPin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getTalksFromFileSystem } from '../lib/mdx-fs';
import { Talk } from '../types';

interface TalksPageProps {
  talks: Talk[];
  error: string | null;
}

export const getStaticProps: GetStaticProps<TalksPageProps> = async () => {
  try {
    const talks = await getTalksFromFileSystem('src/content/talks.mdx');
    return {
      props: {
        talks: talks || [],
        error: null
      },
      revalidate: 3600
    };
  } catch (err) {
    console.error('Failed to load talks during build:', err);
    return {
      props: {
        talks: [],
        error: 'Failed to load talks content.'
      },
      revalidate: 60
    };
  }
};

const Talks = ({ talks, error }: TalksPageProps) => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Talks & Presentations</h1>
          <p className="text-lg text-muted-foreground">
            Sharing knowledge about cloud-native technologies, Kubernetes, DevOps, and more.
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4 my-8">
            <div className="text-red-700">{error}</div>
          </div>
        )}

        {!error && talks && talks.length === 0 && (
          <div className="text-center my-12">
            <p>No talks found. Please check back later.</p>
          </div>
        )}

        {talks && talks.map((talk) => (
          <Card key={talk.id} className="overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-3">{talk.title}</h2>
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                {talk.venue && (
                  <div className="flex items-center">
                    <MapPin className="mr-2" size={16} />
                    {talk.eventLink ? (
                      <a 
                        href={talk.eventLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {talk.venue}
                      </a>
                    ) : (
                      <span>{talk.venue}</span>
                    )}
                  </div>
                )}
                {talk.date && (
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={16} />
                    <span>{talk.date}</span>
                  </div>
                )}
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
    </Layout>
  );
};

export default Talks;