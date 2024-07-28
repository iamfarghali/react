import { useReducer } from "react";
import Loader from "./Loader.js";
import Error from "./Error.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import MoviesList from "./MoviesList.js";
import InitialScreen from "./InitialScreen.js";

const initialState = {
  // loading, error, start
  status: "fetched",
  movies: [1, 2, 3, 4, 5, 6, 7, 87, 9, 17],
  myMovies: [], // Get from localstorage
};

function reducer(state, action) {
  switch (action.type) {
    case "init": {
      return "";
    }

    default:
      throw new Error("This action doesnot exixt!");
  }
}

function App() {
  const [{ status, movies, myMovies }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "initiated" && <InitialScreen />}
        {status === "fetched" && <MoviesList movies={movies} />}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
