import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };

    axios.get("https://api.punkapi.com/v2/beers").then(response => {
      this.setState({
        beers: response.data
      });
    });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>

        {this.state.beers.map(beer => (
          <h2 key={beer.id}>
            <Link to={`/${beer.id}`}>{beer.name}</Link>
          </h2>
        ))}
      </>
    );
  }
}

export default Home;
