class ControlledForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "World"
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value.length) {
      this.setState({
        name: e.target.value
      });
    } else {
      this.setState({
        name: "World"
      });
    }
  }

  render() {
    const name = this.state.name;

    const input = React.createElement("input", {
      type: "text",
      onChange: this.onChange
    });

    const output = React.createElement("p", {}, `Hello, ${this.state.name}!`);

    return React.createElement("div", {
      id: "controlledForm"
    }, input, output);
  }
}

ReactDOM.render(React.createElement(ControlledForm), document.querySelector("#target"));