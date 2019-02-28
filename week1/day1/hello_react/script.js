class MyFirstComponent extends React.Component {
  render() {
    return React.createElement("h1", {}, "Hello React!");
  }
}

const target = document.querySelector("#target");

ReactDOM.render(React.createElement(MyFirstComponent), target);