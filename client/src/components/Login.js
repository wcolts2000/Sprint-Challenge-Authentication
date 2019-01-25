import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  min-height: calc(100vh - 87px);
  background: #17333f;

  & > div > form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 150px 0 0;
`;

const H3 = styled.h3`
  font-size: 20px;
  background: white;
  color: #fd554c;
  margin-bottom: 0;
  line-height: 3;
  border: 1px solid #fd554c;
`;

const Header = styled.div`
  display: flex;
  background: white;
`;

const Register = styled.p`
  transition: all 0.3s ease-in-out;
  margin: 0;
  color: ${props => (props.active ? "white" : "#fd554c")};
  flex: 1;
  border-right: 1px solid #fd554c;
  line-height: 4;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: bold;
  background: ${props => (props.active ? "#fd554c" : "white")};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Log = styled.p`
  transition: all 0.3s ease-in-out;
  margin: 0;
  color: ${props => (props.active ? "white" : "#fd554c")};
  line-height: 4;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: bold;
  flex: 1;
  background: ${props => (props.active ? "#fd554c" : "white")};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const UserInput = styled.input`
  padding: 20px;
  font-size: 20px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 20px;
  background: #fd554c;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  font-family: "Bree Serif", serif;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      register: false,
      error: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    if (this.state.register) {
      axios
        .post("http://localhost:3300/api/register", user)
        .then(res => {
          if (res.status === 201) {
            localStorage.setItem("jwt", res.data.token);
            this.setState({
              username: "",
              password: "",
              department: "",
              error: ""
            });
            this.props.history.push("/joke-bin");
          } else {
            return null;
          }
        })
        .catch(err => {
          this.setState({ error: err.message });
          setTimeout(() => {
            this.setState({
              username: "",
              error: ""
            });
            this.username.focus();
          }, 2000);
          console.error(err);
        });
    } else {
      axios
        .post("http://localhost:3300/api/login", user)
        .then(res => {
          localStorage.setItem("jwt", res.data.token);
          this.props.login();
          this.props.history.push("/joke-bin");
        })
        .catch(err => {
          if (err) {
            this.setState({ error: true });
            setTimeout(() => {
              this.setState({ error: false, username: "", password: "" });
            }, 2000);
            console.log(err);
          } else {
            console.error(err);
          }
        });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { error } = this.state;
    return (
      <Div>
        <Card>
          {error && this.state.register ? (
            <H3>Username Taken</H3>
          ) : (
            error && <H3>Incorrect Username/Password</H3>
          )}
          <Header>
            <Register
              active={this.state.register ? "active" : null}
              onClick={() => this.setState({ register: !this.state.register })}
            >
              Register
            </Register>
            <Log
              active={this.state.register ? null : "active"}
              onClick={() => this.setState({ register: !this.state.register })}
            >
              Login
            </Log>
          </Header>
          <form onSubmit={this.handleSubmit}>
            <UserInput
              required
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="username..."
              autoComplete="off"
              ref={input => (this.username = input)}
            />
            <UserInput
              required
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password..."
              autoComplete="off"
            />
            <Button>{this.state.register ? "Register" : "Login"}</Button>
          </form>
        </Card>
      </Div>
    );
  }
}
