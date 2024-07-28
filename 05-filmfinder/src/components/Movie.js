function Movie({ movie }) {
  return (
    <div className="movie" data-id={movie}>
      <img
        src="https://images.unsplash.com/photo-1509564324749-471bd272e1ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="One"
      />
      <div className="movie__details">
        <h3>Movie Name</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div className="movie__actions">
          <button className="btn">Add to watch later</button>
          <button className="btn">Add to favorite</button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
