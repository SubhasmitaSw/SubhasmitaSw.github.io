import { Article } from '../types';

// Updated API URL - Hashnode's new GraphQL API endpoint
const HASHNODE_API_URL = 'https://gql.hashnode.com';

export const fetchArticles = async (username: string): Promise<Article[]> => {
  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetUserArticles {
            user(username: "${username}") {
              publications(first: 1) {
                edges {
                  node {
                    posts(first: 10) {
                      edges {
                        node {
                          id
                          title
                          brief
                          slug
                          publishedAt
                          coverImage {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }

    const data = await response.json();
    console.log('API response data:', data);
    
    if (data.data?.user?.publications?.edges?.[0]?.node?.posts?.edges) {
      // Map the Hashnode posts to our Article interface format
      return data.data.user.publications.edges[0].node.posts.edges.map((edge: any) => {
        const post = edge.node;
        return {
          id: post.id,
          title: post.title,
          brief: post.brief || '',
          slug: post.slug,
          dateAdded: post.publishedAt,
          coverImage: post.coverImage?.url || ''
        };
      });
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export const getMockArticles = (): Article[] => {
  return [
    {
      id: '1',
      title: 'Getting Started with AWS Lambda',
      brief: 'Learn the basics of serverless computing with AWS Lambda',
      slug: 'getting-started-with-aws-lambda',
      dateAdded: new Date().toISOString(),
      coverImage: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1625761456888/YLnDfSEABl.jpeg'
    }
  ];
};

export const getMockTalks = async () => {
  try {
    const talksContent = await import('../content/talks.mdx');
    return [
      {
        id: '1',
        title: 'Serverless Computing: Building Applications with AWS Lambda',
        description: talksContent.default,
        date: '2023-03-15',
        venue: 'Tech Conference 2023, New York',
        slideUrl: 'https://example.com/slides/serverless-computing',
        videoUrl: 'https://example.com/videos/serverless-computing'
      }
    ];
  } catch (error) {
    console.error('Error fetching talks:', error);
    return [];
  }
};
