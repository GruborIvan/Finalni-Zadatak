import React from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';
import MovieService from '../../services/MovieService';

const MovieCard = ({ movie,children,onRate }) => {

  const onMovieRated = (grade) => {
      MovieService.updateRating(movie.id,grade);
      onRate();
  }
  
  return (
  <div className="movie-card">
    <div className="movie-card card">
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: '14px' }}>
          {movie.description}
        </p>
        { children === null ? <div/> : children }
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            <StarRating rating={movie.rating} onRate={onMovieRated} />
          </div>
          <div className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating}</div>
        </div>
      </div>
    </div>
  </div>
)};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
