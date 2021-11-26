import logo from './logo.svg';

import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login/Login";
import Admin from './components/Admin/Admin';
import Signup from './components/Signup/Signup';



class App extends Component {

  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
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
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
      </header>

      
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Inicio</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Register"}>Registrarse</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Peajes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Cobros</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
        
          <Login/>
         
        
        </div>
      </div>

      <div className="outer">
        <div className="inner">
        
          <Signup/>
         
        
        </div>
      </div>

      <div className="outer">
        <div className="inner">
        
          <Admin/>
         
        
        </div>
      </div>



    </div>





    </div>

          


  );
}
}
export default App;
