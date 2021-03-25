import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import MovieService from '../../services/MovieService';

const getMovies = (movies,onDelete,onChg) => {

  return (
    <div className="card-deck">
      {movies.map(movie => (
         movie.year === 0 ? <MovieCard key={movie.id} movie={movie} onRate={() => onChg()} > <button onClick={() => onDelete(movie.id)}> DELETE MOVIE </button> </MovieCard> : <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const MovieList = ({ movies,onDelete,onChg }) => <div>{getMovies(movies,onDelete,onChg)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
