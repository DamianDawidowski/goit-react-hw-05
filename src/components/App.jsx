import React, {Suspense, lazy} from 'react';
 
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
 
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ac3e035161883f7175e5be9954a0068d';

export function getTrendingMovies() {
  return fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
      .then(data => data.json())
      .then(data => data.results);
};

export function getSearchMovies(searchQuery) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then(data => data.json())
      .then(data => data.results);
};

export function getMovieDetails(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(data => data.json());
};

export function getMovieDetailsCast(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(data => data.json())
      .then(data => data.cast);
};

export function getMovieDetailsReviews(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(data => data.json())
  
};
  

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

 

function App() {
 
  return (

    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetails />}> 
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes> 
      </Suspense>
      </>
  );
  }
 
  export { App };