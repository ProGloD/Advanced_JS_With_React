import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import About from "./About";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <h1>
            <Link to="/">Home</Link>
          </h1>

          <Route path="/" exact component={Home} />
          <Route path="/:id" component={About} />
        </>
      </Router>
    );
  }
}

export default App;
