import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import JokeBin from "./components/JokeBin";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { ProtectedRoute } from "./hoc/WithAuth";

class App extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      this.setState({ loggedIn: true });
    } else {
      return null;
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.error !== this.state.error) {
      setTimeout(() => {
        this.setState({ error: null });
      }, 2000);
    }
  };

  logout = () => {
    this.setState({
      loggedIn: false
    });
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };

  handleLogin = () => {
    const { state = {} } = this.props.location;
    const { prevLocation } = state;

    this.setState(
      {
        loggedIn: true
      },
      () => {
        this.props.history.push(prevLocation || "/users");
      }
    );
  };
  render() {
    return (
      <div className="App">
        <Navbar logout={this.logout} />

        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route
            path="/login"
            render={props => <Login login={this.handleLogin} {...props} />}
          />
          <ProtectedRoute
            loggedIn={this.state.loggedIn}
            path="/joke-bin"
            component={JokeBin}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
