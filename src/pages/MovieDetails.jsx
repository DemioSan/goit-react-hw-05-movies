import Details from 'components/Movies/Details/Details';
import React, { useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  return (
    <div>
      <Link to={backLink.current}>
        <button type="button">Go back </button>
      </Link>
      <Details movieId={movieId} />

      <h3 className="movie-detail-subtitle">Additional Information</h3>
      <ul className="movie-detail-switcher">
        <NavLink to={`cast`}>Cast</NavLink>
        {' | '}
        <NavLink to={`reviews`}>Reviews</NavLink>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
