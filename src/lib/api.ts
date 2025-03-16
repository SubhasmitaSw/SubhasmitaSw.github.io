
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
    },
    {
      id: '2',
      title: 'Understanding React Hooks',
      brief: 'A deep dive into React Hooks and how they can simplify your code',
      slug: 'understanding-react-hooks',
      dateAdded: new Date().toISOString(),
      coverImage: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1625761456888/YLnDfSEABl.jpeg'
    },
    {
      id: '3',
      title: 'Cloud Computing Best Practices',
      brief: 'Essential tips for efficient cloud computing architecture',
      slug: 'cloud-computing-best-practices',
      dateAdded: new Date().toISOString(),
      coverImage: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1625761456888/YLnDfSEABl.jpeg'
    }
  ];
};

export const getMockTalks = () => {
  return [
    {
      id: '1',
      title: 'Serverless Computing: Building Applications with AWS Lambda',
      description: 'An introduction to serverless architecture and how to leverage AWS Lambda for building scalable applications.',
      date: '2023-03-15',
      venue: 'Tech Conference 2023, New York',
      slideUrl: 'https://example.com/slides/serverless-computing',
      videoUrl: 'https://example.com/videos/serverless-computing'
    },
    {
      id: '2',
      title: 'Cloud-Native Development Best Practices',
      description: 'Exploring best practices for developing cloud-native applications and leveraging modern infrastructure.',
      date: '2023-05-22',
      venue: 'Cloud Summit, San Francisco',
      slideUrl: 'https://example.com/slides/cloud-native',
      videoUrl: 'https://example.com/videos/cloud-native'
    },
    {
      id: '3',
      title: 'From Monolith to Microservices: A Journey',
      description: 'Sharing insights and experiences from migrating a monolithic application to a microservices architecture.',
      date: '2023-07-10',
      venue: 'DevOps Days, Seattle',
      slideUrl: 'https://example.com/slides/microservices',
      videoUrl: null
    },
    {
      id: '4',
      title: 'Technical Writing for Developers',
      description: 'Tips and strategies for developers to improve their technical writing skills and create effective documentation.',
      date: '2023-09-05',
      venue: 'Write the Docs, Portland',
      slideUrl: 'https://example.com/slides/tech-writing',
      videoUrl: 'https://example.com/videos/tech-writing'
    }
  ];
};

