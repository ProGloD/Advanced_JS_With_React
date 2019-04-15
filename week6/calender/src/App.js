import React, { Component } from "react";
import axios from "axios";

import "./App.css";

const ROOT_API = "https://api.dryg.net/dagar/v2.1/";

class DayInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null
    };

    this.fetchDataForDate = this.fetchDataForDate.bind(this);
    this.fetchDataForDate(this.props.date);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      this.fetchDataForDate(this.props.date);
    }
  }

  fetchDataForDate(date) {
    axios
      .get(ROOT_API + date.split("-").join("/"))
      .then(response => this.setState({ info: response.data.dagar[0] }));
  }

  render() {
    let { info } = this.state;

    return (
      <>
        {!info ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>{info.veckodag}</div>
            <div>
              {info.namnsdag.map(name => (
                <span key={name}>{name} </span>
              ))}
            </div>
          </>
        )}
      </>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toLocaleString("sv-SE").split(" ")[0]
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(e) {
    this.setState({ date: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="date" onChange={this.setDate} value={this.state.date} />
          <DayInfo date={this.state.date} />
        </header>
      </div>
    );
  }
}

export default App;
