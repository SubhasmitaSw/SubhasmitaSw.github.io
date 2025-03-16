
import axios from 'axios';
import { Article } from '../types';

// Updated API URL - Hashnode's new GraphQL API endpoint
const HASHNODE_API_URL = 'https://gql.hashnode.com';

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.post(
      HASHNODE_API_URL,
      {
        query: `
          query GetUserArticles {
            user(username: "whtssub") {
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
        `
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    console.log('Hashnode API response:', response.data);
    
    if (response.data?.data?.user?.publications?.edges?.[0]?.node?.posts?.edges) {
      // Map the Hashnode posts to our Article interface format
      return response.data.data.user.publications.edges[0].node.posts.edges.map((edge: any) => {
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
    console.error('Error fetching articles from Hashnode:', error);
    return [];
  }
};
