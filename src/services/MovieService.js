import movies from './movies.json';

export default class MovieService {

  static movieList = movies;

  static getMovies() {
    return MovieService.movieList ? MovieService.movieList : [];
  }

  static setMovies(newMovieList) {
      MovieService.movieList = newMovieList;
  }

  static addMovie(newMovie) {
      MovieService.setMovies([...this.getMovies(),newMovie]);
  }

  static deleteMovie(movieId) {

      const newMov = this.getMovies().filter((movie) => {
          return movie.id !== movieId
      });
      MovieService.setMovies(newMov);
  }

  static updateRating(movieId,grade) {
      var list = this.getMovies();
      for (var i = 0; i < list.length; i++) {
        if (list[i].id === movieId) {

          // Ako je broj ocena 0, necemo deliti sa 0..
          if (list[i].voteCount === 0) {
                list[i].rating = grade;
                list[i].voteCount = 1;
          }
          else {
            var num = (list[i].rating * list[i].voteCount + grade) / (++list[i].voteCount);
            list[i].rating = Math.round(num,1);
          }

        }
      }
  }

}
