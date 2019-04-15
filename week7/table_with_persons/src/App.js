import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";

let id = 1;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      person: {
        id: id,
        name: "",
        age: 0,
        email: ""
      }
    };

    this.onChange = this.onChange.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }

  onChange(e) {
    const person = { ...this.state.person };
    person[e.target.id] = e.target.value;
    this.setState({ person: person });
  }

  addPerson(e) {
    e.preventDefault();

    id++;

    const { peoples, person } = this.state;

    this.setState({
      peoples: [...peoples, person],
      person: {
        id: id,
        name: "",
        age: 0,
        email: ""
      }
    });
  }

  removePerson(person) {
    const peoples = [...this.state.peoples];
    peoples.splice(peoples.indexOf(person), 1);

    this.setState({ peoples: peoples });
  }

  render() {
    const { peoples, person } = this.state;

    return (
      <div className="App">
        <div>
          <form onSubmit={this.addPerson}>
            <p>Name:</p>
            <input
              id="name"
              type="text"
              onChange={this.onChange}
              required
              value={person.name}
            />
            <p>Age:</p>
            <input
              id="age"
              type="number"
              onChange={this.onChange}
              min={0}
              max={100}
              required
              value={person.age}
            />
            <p>Email:</p>
            <input
              id="email"
              type="email"
              onChange={this.onChange}
              value={person.email}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <TransitionGroup component="tbody">
              {peoples.map(person => (
                <CSSTransition
                  key={person.id}
                  classNames="person"
                  timeout={500}
                >
                  <tr>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.email}</td>
                    <td>
                      <button onClick={() => this.removePerson(person)}>
                        &times;
                      </button>
                    </td>
                  </tr>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
