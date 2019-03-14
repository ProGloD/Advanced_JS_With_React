import React, { Component } from "react";

class InputBox extends Component {
  render() {
    return (
      <div className="input_container">
        <input type="number" id="input_field" onChange={this.props.onChange} value={this.props.celsius} />
        <label htmlFor="input_field">&deg;C</label>
      </div>
    );
  }
}

export default InputBox;
