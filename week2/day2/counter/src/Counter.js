import React, { Component } from "react";

import ActionButton from "./ActionButton";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }

  Increment() {
    this.props.increment(parseInt(this.props.key));
  }

  Decrement() {
    this.props.decrement(parseInt(this.props.key));
  }

  render() {
    return (
      <div className="counter_container" key={this.props.key}>
        
        <ActionButton
          className="action decrement"
          onClick={this.Decrement}
          value="-1"
        />
        <span className="counter">{this.props.counter}</span>
        <ActionButton
          className="action increment"
          onClick={this.Increment}
          value="+1"
        />
      </div>
    );
  }
}

export default Counter;
