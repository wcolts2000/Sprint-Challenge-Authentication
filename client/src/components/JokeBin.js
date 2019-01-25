import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  background: #17333f;
  padding: 60px;
`;

const H1 = styled.h1`
  color: #fd554c;
  letter-spacing: 5px;
  margin-bottom: 20px;
`;

const Hr = styled.hr`
  overflow: visible; /* For IE */
  height: 30px;
  border-style: solid;
  border-color: white;
  border-width: 1px 0 0 0;
  border-radius: 20px;
  &:before {
    /* Not really supposed to work, but does */
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: white;
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }
`;

const Col = styled.div`
  column-count: 2;
`;

const Li = styled.li`
  margin-top: 0;
  text-align: left;
  margin-bottom: 20px;
  color: #fd554c;
  font-size: 20px;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  letter-spacing: 1.2px;
`;

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
      <Div>
        <H1>
          <span role="img" aria-label="grinning emoji">
            😎
          </span>{" "}
          The Joke Repository{" "}
          <span role="img" aria-label="grinning cat">
            😹
          </span>
        </H1>
        <Hr />
        <Col>
          <ul>
            {this.state.jokes.length &&
              this.state.jokes.map(joke => <Li key={joke.id}>{joke.joke}</Li>)}
          </ul>
        </Col>
      </Div>
    );
  }
}
