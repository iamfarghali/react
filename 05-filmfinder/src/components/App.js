import { useEffect, useReducer } from "react";
import Loader from "./Loader.js";
import ErrorComponent from "./ErrorComponent.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import MoviesList from "./MoviesList.js";
import InitialScreen from "./InitialScreen.js";

const API_KEY = "c809b395";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const initialState = {
  // loading, error, initiated
  status: "loading",
  myMovies: [], // Get from localstorage
  movies: [],
  errorMessage: "",
  query: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "moviesFetchedSuccess": {
      return { ...state, status: "fetched", movies: action.payload };
    }
    case "moviesFetchedFailed": {
      return { ...state, status: "error", errorMessage: action.payload };
    }
    case "queryChanged": {
      return { ...state, query: action.payload };
    }
    case "emptyQuery": {
      return { ...state, status: "initiated" };
    }

    default:
      throw new Error("This action doesnot exixt!");
  }
}

function App() {
  const [{ status, movies, query, errorMessage }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(`${API_URL}&s=${query}`);
        const data = await res.json();

        if (data.Response === "False")
          throw new Error("There are no movies with this title");

        const movieDetailsPromises = data.Search.map(async (movie) => {
          const res1 = await fetch(`${API_URL}&i=${movie.imdbID}`);
          return await res1.json();
        });

        const allData = await Promise.all(movieDetailsPromises);

        dispatch({ type: "moviesFetchedSuccess", payload: allData });
      } catch (err) {
        dispatch({ type: "moviesFetchedFailed", payload: err.message });
      }
    }
    if (query === "") dispatch({ type: "emptyQuery" });
    else fetchMovies();
  }, [query]);

  return (
    <div className="app">
      <Header query={query} dispatch={dispatch} />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorComponent message={errorMessage} />}
        {status === "initiated" && <InitialScreen />}
        {status === "fetched" && <MoviesList movies={movies} />}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
