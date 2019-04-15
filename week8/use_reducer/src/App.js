import React, { useReducer } from "react";
import "./App.css";

const initialCount = 0;

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      if (state.count < 20) {
        return { count: state.count + 1 };
      } else {
        return state;
      }
    case "decrement":
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        return state;
      }
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div className="App">
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default App;
