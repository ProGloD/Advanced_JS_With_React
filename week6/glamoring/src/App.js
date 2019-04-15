import React, { Component } from "react";
import { css } from "glamor";
import "./App.css";

const button = css({
  padding: "10px",
  fontSize: "24px",
  background: "none",
  color: "white",
  border: "2px solid white",
  borderRadius: "40px",
  ":hover": {
    color: "black",
    background: "white",
    borderColor: "black"
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button {...button}>CSS-in-JS</button>
        </header>
      </div>
    );
  }
}

export default App;
