import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class NavBar extends Component {
  render() {
    return (
            
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

            );
  }
}

export default NavBar;