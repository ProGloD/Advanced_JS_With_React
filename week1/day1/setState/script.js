class ChangeColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue"
    };
    this.change = this.change.bind(this);
  }

  change() {
    if (this.state.color === "blue") {
      this.setState({
        color: "red"
      });
    } else {
      this.setState({
        color: "blue"
      });
    }
  }

  render() {
    return React.createElement("h1", {
      style: {
        color: this.state.color
      },
      onClick: this.change
    }, "Click Me!");
  }
}

const target = document.querySelector("#target");
ReactDOM.render(React.createElement(ChangeColor), target);