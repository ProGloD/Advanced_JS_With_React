import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctPost: true
    };

    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(e) {

    const postnumber = /^(\d{3}\s{0,1}\d{2}){0,1}$/;

    postnumber.test(e.target.value)
      ? this.setState({
          correctPost: true
        })
      : this.setState({
          correctPost: false
        });
  }

  render() {
    return (
      <div className="App">
        <p>Mata in ditt postnummer</p>
        <input onBlur={this.onBlur} />
        {!this.state.correctPost ? (
          <p>Det här är inte ett giltigt postnummer</p>
        ) : null}
      </div>
    );
  }
}

export default App;
