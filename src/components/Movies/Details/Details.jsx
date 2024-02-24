import movieDB from 'api/movieDB';
import React, { useEffect, useState } from 'react';

function Details({ movieId }) {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    movieDB.getMovieDetails(movieId).then(resp => setMovieData(resp.data));
  }, [movieId]);

  return (
    movieData && (
      <div className="movie-details-wrap">
        <img
          className="movie-details-pic"
          src={
            movieData.poster_path
              ? movieDB.POSTER_BASE_URL + movieData.poster_path
              : movieDB.DEFAULT_IMG
          }
          alt={movieData.tagline}
        />

        <div className="movie-details-info">
          <h1>{movieData.title}</h1>
          <p>User Score: {movieData.vote_average || 'not rated'}</p>
          <p>
            Premiere:{' '}
            {movieData.release_date
              ? new Date(movieData.release_date).toDateString()
              : 'not recorded'}
          </p>
          <p>
            Length:{' '}
            {movieData.runtime
              ? movieData.runtime + ' minutes'
              : 'not recorded'}
          </p>
          <h2>Overview:</h2>
          <p>{movieData.overview || 'No data'}</p>
          {movieData.genres && <h2>Genres:</h2>}
          <ul className="genres-list">
            {movieData.genres &&
              movieData.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
        </div>
      </div>
    )
  );
}

export default Details;
