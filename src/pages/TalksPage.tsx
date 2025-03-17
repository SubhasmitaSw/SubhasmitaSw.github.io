import React, { useState, useEffect } from 'react';
import Talks from './Talks';
import { getTalksFromFileSystem } from '../lib/mdx-fs';

const TalksPage = () => {
  const [talks, setTalks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        const fetchedTalks = await getTalksFromFileSystem('src/content/talks.mdx');
        setTalks(fetchedTalks);
      } catch (error) {
        setError('Failed to load talks content.');
      }
    };
    fetchTalks();
  }, []);

  return (
    <Talks talks={talks} error={error} />
  );
};

export default TalksPage;