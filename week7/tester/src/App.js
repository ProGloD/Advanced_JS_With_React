import React, { Component } from "react";

import "./App.css";

let id = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], todo: "" };

    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleInput(e) {
    this.setState({ todo: e.target.value });
  }

  addTodo(e) {
    e.preventDefault();

    id++;

    const newTodo = {
      todo: this.state.todo,
      id: `uniq${id}`
    };

    this.setState({ todos: [...this.state.todos, newTodo], todo: "" });
  }

  deleteTodo(todo) {
    const todos = [...this.state.todos];
    todos.splice(todos.indexOf(todo), 1);
    this.setState({ todos });
  }

  render() {
    const { todos, todo } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <h2>Todos</h2>
          <input onChange={this.handleInput} value={todo} />
          <input type="submit" value="Add" />
        </form>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.todo}{" "}
              <button onClick={() => this.deleteTodo(todo)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
