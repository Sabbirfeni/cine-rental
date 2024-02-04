import MovieCard from "../components/movie/MovieCard";
import { getWatchLaterMovies } from "../data/movies";
function WatchLaterMovies() {
  const movies = getWatchLaterMovies();

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

export default WatchLaterMovies;
