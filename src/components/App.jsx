import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';

import { AppStyled } from './App.styled';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('./../pages/Movies'));

export const App = () => {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </AppStyled>
  );
};
