import logo from "./logo.svg";

import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//componentes
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="App">
            <h1>Users</h1>
            {this.state.users.map((user) => (
              <div key={user.id}>{user.username}</div>
            ))}
          </div>
        </header>

        <div className="App">
          <NavBar />

          <div className="outer">
            <div className="inner">
              <Login />
            </div>
          </div>

          <div className="outer">
            <div className="inner">
              <Signup />
            </div>
          </div>

          <div className="outer">
            <div className="inner">
              <Admin />
            </div>
          </div>

          <div className="outer">
            <div className="inner-2">
              <Home />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
