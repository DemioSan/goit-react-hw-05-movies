import movieDB from 'api/movieDB';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/Movies/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [searchResults, setSearchResults] = useState([]);

  const handleQuery = input => {
    setQuery(input);

    if (input) {
      setSearchParams({ query: input });
    }
  };

  useEffect(() => {
    if (query) {
      movieDB
        .searchThisMovie(query)
        .then(resp => setSearchResults(resp.data.results));
    }
  }, [query]);

  return (
    <div>
      <SearchForm handleQuery={handleQuery} />
      <MovieList data={searchResults.length && searchResults} />
    </div>
  );
}

export default Movies;
