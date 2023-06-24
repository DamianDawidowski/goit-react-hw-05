import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getMovieDetails } from '../App';
import css from './MovieDetails.module.css';
 
 

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getYear = () => new Date(movie.release_date).getFullYear();

  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  let activeClassName = {
    color: '#1383df',
  };

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(error => {
        setError('An error occured...');
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
     <div className={css.container}>
        <button onClick={handleClick} className={css.backButton}>
          Go back
        </button>

        {movie && <h1 className={css.title}>{movie.title}</h1> }
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.title}</h4>
            <p>({getYear()})</p>
            <p>User Score: {movie.popularity}</p>
            <div className="movie_overview">
              <h4>Overview</h4>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
        <hr />
        <div>
          <h2>Additional Information</h2>          
          <NavLink
            to={`/movies/${movieId}/reviews`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <button className={css.backButton}>Reviews</button>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <button className={css.backButton}>Cast</button>
          </NavLink>
          <hr />
          <Outlet />
        </div>
        </div>
    </>
  );
}

export default MovieDetails;