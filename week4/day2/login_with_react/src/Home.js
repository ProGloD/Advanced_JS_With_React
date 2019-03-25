import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return <>
        <Link to="/login">
            <button>Log in</button>
        </Link>
    </>;
  }
}

export default Home;
