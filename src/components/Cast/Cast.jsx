import movieDB from 'api/movieDB';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieDB.getMovieCredits(movieId).then(resp => {
      setCast(resp.data.cast);
    });
  }, [movieId]);

  return (
    <div className="cast-wrap">
      {cast.length ? (
        <>
          <h2>Cast</h2>
          <ul className="cast-list">
            {cast.map(member => (
              <li key={member.id} className="cast-card">
                <img
                  src={
                    member.profile_path
                      ? movieDB.PORTRAIT_BASE_URL + member.profile_path
                      : movieDB.DEFAULT_IMG
                  }
                  alt={member.name}
                  className="cast-pic"
                />

                <b className="cast-name">{member.name}</b>
                <p className="cast-text">As {member.character || 'unknown'}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3>No known cast</h3>
      )}
    </div>
  );
}

export default Cast;
