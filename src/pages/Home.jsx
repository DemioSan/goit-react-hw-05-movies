import movieDB from 'api/movieDB';
import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';

function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await movieDB.getTrendingToday();
        setTrending(result.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  return <MovieList data={trending} />;
}

export default Home;
