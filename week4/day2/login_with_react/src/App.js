import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Login from "./Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    };

    this.saveToken = this.saveToken.bind(this);
  }

  saveToken(token) {
    this.setState({
      token: token
    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </nav>

          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={() => <Login saveToken={this.saveToken} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
