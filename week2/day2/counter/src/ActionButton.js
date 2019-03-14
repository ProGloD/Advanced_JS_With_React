import React, { Component } from "react";

class ActionButton extends Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

export default ActionButton;
