import React, { Component } from "react";
import "./App.css";

import InputBox from "./InputBox";
import Converter from "./Converter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: "0"
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      celsius: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Celsius to Fahrenheit</h2>
        <InputBox celsius={this.state.celsius} onChange={this.onChange} />
        <Converter celsius={this.state.celsius}/>
      </div>
    );
  }
}

export default App;
