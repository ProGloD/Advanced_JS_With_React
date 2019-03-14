import React, { Component } from "react";
import "./App.css";

import Counter from "./Counter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [{ counter: 0 }, { counter: 0 }, { counter: 0 }]
    };

    this.onIncreaseCounter = this.onIncreaseCounter.bind(this);
    this.onDecreaseCounter = this.onDecreaseCounter.bind(this);
  }

  onIncreaseCounter(index){
    this.setState(
      counters[index]: this.state.counters[index] + 1
    );
  }

  onDecreaseCounter(index){
    this.setState((prevState) => {
      return { [index.counter]: prevState[index.counter] - 1 };
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.counters.map( obj => {
          return <Counter increment={this.onIncreaseCounter} decrement={this.onDecreaseCounter} counter={obj.counter} key={this.state.counters.indexOf(obj).toString()} />
        })}
      </div>
    );
  }
}

export default App;
