import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import "./App.css";

class App extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: true })}>Show</button>
        <CSSTransition
          classNames="message"
          timeout={200}
          unmountOnExit
          in={this.state.show}
        >
          <div className="message">
            <p>Hello</p>
            <button onClick={() => this.setState({ show: false })}>
              Close
            </button>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
