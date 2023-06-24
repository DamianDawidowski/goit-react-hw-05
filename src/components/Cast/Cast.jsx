import css from './Cast.module.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetailsCast } from '../App';
 


const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await getMovieDetailsCast(movieId);
        setCast(res);
      } catch (error) {
        console.error('Something wrong with fetch cast on movie page', error);
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <div>
      {loading && 'Loading...'}

      {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map(({ id, name, character, profile_path }) => {
            let profileImg = `https://image.tmdb.org/t/p/w500${profile_path}`;

            if (!profile_path) {
              profileImg = 'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
            };
            return (
              <li key={id} className={css.castItem}>
                <img
                  src={profileImg}
                  alt={name}
                  className={css.castImg}
                />
                <div>
                  <p>Name: {name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no information about actors for this movie.</p>
      )}

      {error && (
         
          <h2 className={css.message}>
            The service is temporarily unavailable. Please try again later.
          </h2>
        
      )}
    </div>
  );
};
export default Cast;