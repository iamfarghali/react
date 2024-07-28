import Movie from "./Movie";

function MoviesList({ movies }) {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
