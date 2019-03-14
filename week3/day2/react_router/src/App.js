import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";

const Home = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h2>Home</h2>
  </>
);

const Page1 = () => (
  <>
    <Helmet>
      <title>Page 1</title>
    </Helmet>
    <h2>Page 1</h2>
  </>
);

const Page2 = () => (
  <>
    <Helmet>
      <title>Page 2</title>
    </Helmet>
    <h2>Page 2</h2>
  </>
);

class App extends Component {
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
                <Link to="/page1">Page1</Link>
              </li>
              <li>
                <Link to="/page2">Page2</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </div>
      </Router>
    );
  }
}

export default App;
