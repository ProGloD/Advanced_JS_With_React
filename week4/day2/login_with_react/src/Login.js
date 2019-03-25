import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email: null,
        password: null
      }
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form>
          <p>Email:</p>
          <input type="email" value={this.state.login.email} />
          <p>Password:</p>
          <input type="password" value={this.state.login.password} />
        </form>
      </>
    );
  }
}

export default Login;
