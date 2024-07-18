import { useReducer } from "react";

const initialState = {
  // loading, error, ready, finished
  status: "ready",
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
  const [{ status }, dispatch] = useReducer(reducer, initialState);
  return <div></div>;
}

export default App;

// https://www.omdbapi.com/
