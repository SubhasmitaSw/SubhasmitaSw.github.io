import { fetchArticles } from './lib/api';

const resolvers = {
  Query: {
    articles: async () => {
      const articles = await fetchArticles('whtssub');
      return articles;
    },
  },
};

export default resolvers;