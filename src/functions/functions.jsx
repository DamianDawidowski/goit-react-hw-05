import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ac3e035161883f7175e5be9954a0068d';
  
  export const  getTrendingMovies = async () => {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
    );
    const trendingMovies = response.data.results;
    return trendingMovies;
  };

 
export const getSearchMovies = async (searchQuery) =>  {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`)
    const foundMovies = response.data.results 
    return foundMovies;
};

export const getMovieDetails = async (movieId) =>  {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    const foundDetails = response.data 
    return foundDetails;

};

export const getMovieDetailsCast = async (movieId) =>  {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    const cast = response.data.cast;
    return cast;
}
 
export const getMovieDetailsReviews = async (movieId) =>  {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
    const reviews = response.data 
    return reviews;
  };