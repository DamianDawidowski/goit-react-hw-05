
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../functions/functions';
import css from './Home.module.css';
  
const Home = () => {
   
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setTrendingMovies);
    }, []);
  
    return ( 
      <div className={css.container}>
      <ul>
         <h1 className={css.title}>Trending today</h1>
           {trendingMovies.map((trendingMovie) => (
           <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>{trendingMovie.title || trendingMovie.name}</Link>
           </li>
            ))}
      </ul>
      </div>
    )
};

export default Home;