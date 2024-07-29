import Movie from "./Movie";

function MoviesList({ movies }) {
  return (
    <div className="movies-list">
      {movies.map((movie, i) => (
        <Movie movie={movie} key={movie.Title + `-${i}`} />
      ))}
    </div>
  );
}

export default MoviesList;
