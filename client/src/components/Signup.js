import axios from "axios";
import React, { Component } from "react";

export default class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/register", this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/joke-bin");
      })
      .catch(err => console.log(err));
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="username..."
            autoComplete="off"
          />
          <input
            required
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password..."
            autoComplete="off"
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
