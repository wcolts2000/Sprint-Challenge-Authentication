import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import JokeBin from "./components/JokeBin";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route path="/login" component={Login} />
          <Route path="/joke-bin" component={JokeBin} />
        </Switch>
      </div>
    );
  }
}

export default App;
