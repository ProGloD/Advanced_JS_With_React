import React, { Component } from "react";
import "./App.css";

const Links = props => {
  const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  let words = props.children
    .split(" ")
    .map(word => (regex.test(word) ? <a target="_blank" href={word}>{word}</a> : word))
    .map(word => [word, " "]);

  return <>{words}</>;

  //return props.children.replace();
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Links>http://www.google.com is a search engine</Links>
      </div>
    );
  }
}

export default App;
