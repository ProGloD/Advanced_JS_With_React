import React, { Component, PureComponent } from "react";
import "./App.css";

let counter = 4;

class Square extends PureComponent {
  render() {
    console.log("render");

    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid black",
          background: this.props.color
        }}
        onClick={() => this.props.changeColor(this.props.id)}
      >
        Square
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: [
        { color: "red", id: "square1" },
        { color: "red", id: "square2" },
        { color: "red", id: "square3" }
      ]
    };

    this.addSquare = this.addSquare.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  addSquare() {
    this.setState({
      squares: [...this.state.squares, { color: "red", id: `square${counter}` }]
    });
    counter++;
  }

  changeColor(id) {
    const { squares } = this.state;
    const index = this.state.squares.findIndex(square => square.id === id);

    squares[index].color = squares[index].color === "red" ? "blue" : "red";

    this.setState({ squares: squares });
  }

  render() {
    return (
      <>
        <button onClick={this.addSquare}>Add Square</button>
        {this.state.squares.map(square => (
          <Square
            key={square.id}
            id={square.id}
            color={square.color}
            changeColor={this.changeColor}
          />
        ))}
      </>
    );
  }
}

export default App;
