import movieDB from 'api/movieDB';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    movieDB.getMovieReviews(movieId).then(resp => {
      setReviewList(resp.data.results);
    });
  }, [movieId]);

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {reviewList.length ? (
        <ul>
          {reviewList.map(review => (
            <li key={review.id}>
              <div>
                <h4>By {review.author}</h4>
                <i>Posted {new Date(review.updated_at).toString()}</i>
              </div>
              <p className="review-text">{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No Reviews Added</h3>
      )}
    </div>
  );
}

export default Reviews;
