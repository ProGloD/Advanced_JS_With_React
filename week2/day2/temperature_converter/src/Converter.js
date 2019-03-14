import React, { Component } from "react";

class CelToFah extends Component {
  render() {
    const fah = parseFloat(this.props.celsius) * 1.8 + 32;
    const kelv = parseFloat(this.props.celsius) + 273.15;

    return (
      <div className="output_cotnainer">
        <p>{fah}&deg;F</p>
        <p>{kelv}&deg;K</p>
      </div>
    );
  }
}

export default CelToFah;
