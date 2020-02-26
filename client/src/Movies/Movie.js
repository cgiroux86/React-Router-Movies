import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import MovieCard from './MovieCard'

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const params = useParams();
  console.log(params)
  // const movieItem = movies.find(movie => Number(params.id) === movie.id)
  
 

 
  useEffect(() => {
  
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${params.id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[params.id]);
  

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  
  return (
    <div className="save-wrapper">
      <MovieCard movie = {movie}/>
      
      <div onClick = {() => saveMovie()} className="save-button">Save</div>
    </div>
  );
}

export default Movie;
