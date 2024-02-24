import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MovieList({ data }) {
  const location = useLocation();

  return data ? (
    <ul className="movie-list">
      {data.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title || item.name}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>Not results</p>
  );
}

export default MovieList;
