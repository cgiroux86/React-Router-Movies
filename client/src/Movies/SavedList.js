import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const SavedList = (props) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
       <NavLink activeClassName='saved-active' to={`/movies/${movie.id}`}className="saved-movie">{movie.title}</NavLink>
    ))}
    <NavLink to='/'>
    <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;
