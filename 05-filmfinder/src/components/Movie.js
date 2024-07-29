function Movie({ movie }) {
  return (
    <div className="movie">
      <img className="movie__img" src={movie.Poster} alt={movie.Title} />
      <div className="movie__details">
        <h3 className="movie__heading">{movie.Title}</h3>
        <p className="movie__description">{movie.Plot}</p>
      </div>
      <div className="movie__actions">
        <button className="btn">Add to watch later</button>
        <button className="btn">Add to favorite</button>
      </div>
    </div>
  );
}

export default Movie;
