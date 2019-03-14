import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    this.source = axios.CancelToken.source();

    axios
      .get(`https://api.punkapi.com/v2/beers/${this.props.match.params.id}`, {
        cancelToken: this.source.token
      })
      .then(response => this.setState({ beer: response.data[0] }))
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log("Request canceled", thrown.message);
        } else {
          // handle error
        }
      });
  }

  componentWillUnmount() {
    this.source.cancel("Operation canceled by the user.");
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{this.state.beer.name}</title>
        </Helmet>

        <h2>{this.state.beer.name}</h2>
        <p>{this.state.beer.description}</p>
      </>
    );
  }
}

export default Beer;
