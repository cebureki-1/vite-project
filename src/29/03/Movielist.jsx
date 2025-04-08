import { Link } from "react-router-dom";
import Search from "./Search";
const MovieList = ({ movies }) => {
  console.log(movies);
  
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Link
            to={`/movie/${movie.imdbID}`}
            key={`movie.imdbID`}
            className="movie-card"
            aria-label={`Подробнее о фильме ${movie.Title}`}
          >
            <div className="movie-poster">
              <img
                src={
                   movie.Poster
                }
                alt={`Постер фильма ${movie.Title}`}
                loading="lazy"
              />
            </div>
            <div className="movie-info">
              <h3 className="movie-title">{movie.Title}</h3>
              <p className="movie-meta">
                <span>{movie.Year}</span>
                <span> * </span>
                <span>{movie.Type === "movie" ? "Фильм" : "Сериал"}</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p>Film not found</p>
      )}
    </div>
  );
};

export default MovieList;