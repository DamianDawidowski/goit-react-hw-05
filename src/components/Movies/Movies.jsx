import SearchBox from "../SearchBox/SearchBox"
import css from './Movies.module.css';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getSearchMovies } from '../App';
import { Link } from "react-router-dom";


const Movies = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);

    const query = searchParams.get("query")?? "";

    useEffect(() => {
        if (query) {
        getSearchMovies(query).then(setMovies)};
    }, [query, searchParams]);


    const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query} : {};
    setSearchParams(nextParams);
  };
    
    return (
       <div className={css.container}>          
         <ul>
            <h1 className={css.title}>{'Movie Search'}</h1>; 
                <SearchBox value={query} onChange={updateQueryString} />
                {movies.map((movie) => (
            <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link></li>
        ))}
         </ul>
       </div>
    );
};

export default Movies;