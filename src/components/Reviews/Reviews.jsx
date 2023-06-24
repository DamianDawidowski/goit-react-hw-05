import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsReviews } from '../App';
 
import css from './Reviews.module.css';

const Reviews = () => {  
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);


 useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchedReviews = await getMovieDetailsReviews(movieId);
        setReviews(fetchedReviews.results); 
      } catch (error) {
      console.error('Something wrong with fetching reviews on movie page', error);
      setError(error.message);
    }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
     
      {reviews.length > 0 ? (
         <ul className={css.review}>
        {reviews.map(({ id, author, content }) => {    
          return (
            <li key={id} className={css.item}>
             <h3 className={css.author}>Author: {author} </h3>
               <p>{content}</p>              
          </li>
          );
        })}
      </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}

      {error && (
     //   <Message>
          <h2>
            The service is temporarily unavailable. Please try again later.
          </h2>
     //   </Message>
      )}
    </div>
  );  
};

export default Reviews;
