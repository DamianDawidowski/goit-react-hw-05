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
            profileImg = 'https://img.freepik.com/free-vector/coming-soon-black-backgroun-design_1017-37033.jpg?w=740&t=st=1687590032~exp=1687590632~hmac=f4299307fcc1f5dd11708d084dac40313c51828f25b3967ba47a65431cdcf25e';
            
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
        <p>There is no information about actors.</p>
      )}

      {error && (
         
          <h2 className={css.message}>
            The service is temporarily unavailable, please try again.
          </h2>
        
      )}
    </div>
  );
};
export default Cast;