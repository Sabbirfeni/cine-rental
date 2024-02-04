import MovieCard from "../components/movie/MovieCard";
import { geFavouriteMovies } from "../data/movies";
function FavouriteMovies() {
  const movies = geFavouriteMovies();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default FavouriteMovies;
