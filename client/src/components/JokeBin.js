import axios from "axios";
import React, { Component } from "react";

export default class JokeBin extends Component {
  state = {
    jokes: []
  };

  componentDidMount = () => {
    const auth = localStorage.getItem("jwt");
    const headersOptions = {
      headers: {
        authorization: auth
      }
    };
    if (auth) {
      axios
        .get("http://localhost:3300/api/jokes", headersOptions)
        .then(({ data }) => this.setState({ jokes: data }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        {this.state.jokes.length &&
          this.state.jokes.map(joke => <h2 key={joke.id}>{joke.joke}</h2>)}
      </div>
    );
  }
}
