import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import JokeBin from "./components/JokeBin";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/">
            THE<span>JOKE</span>FACTORY
          </NavLink>
          <div>
            <NavLink to="/register">Signup</NavLink>
            <NavLink to="/login">Signin</NavLink>
            <NavLink to="/joke-bin">JokeBin</NavLink>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/joke-bin" component={JokeBin} />
        </Switch>
      </div>
    );
  }
}

export default App;
