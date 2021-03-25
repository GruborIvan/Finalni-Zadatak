import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

const Movies = ({changeList,renderCnt}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, [renderCnt]);

  const onMovieDelete = (movieId) => {
      MovieService.deleteMovie(movieId);
      changeList(renderCnt + 1);
  };

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} onDelete={onMovieDelete} onChg={() => changeList(renderCnt + 1)} />
        </div>
      </div>
    </div>
  );
}

export default Movies;
