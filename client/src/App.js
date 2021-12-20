import logo from "./logo.svg";

import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
//componentes
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import CrearConsorcio from "./components/Consorcios/crearConsorcio";
import CrearPeajes from "./components/peajes/crearPeajes";
import PagoPeajes from "./components/pagos/pagoPeaje";
import RecargarTarjeta from "./components/recarga/recargarTarjeta";
import Consulta from "./components/consulta/consultas";
import Peajes from "./components/peajes/mostrarPeajes";
import Consorcios from "./components/Consorcios/mostrarConsorcios";

class App extends Component {
  state = { users: [] };

  // componentDidMount() {
  //   fetch("/users")
  //     .then((res) => res.json())
  //     .then((users) => this.setState({ users }));
  // }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
            Learn React xxxxx
          </a>
          <div className="App">
            <h1>Users</h1>
            {this.state.users.map((user) => (
              <div key={user.id}>{user.username}</div>
            ))}
          </div>
        </header> */}

        <div className="App">
          <NavBar />
          <div className="outer">
            <div className="inner">
          <BrowserRouter>
           <Routes>
          
            <Route path="/" element={<Login/>} />
            <Route path="/registro" element={<Signup/>} />
            <Route path="/crearPeajes" element={<CrearPeajes/>} />
            <Route path="/crearConsorcio" element={<CrearConsorcio/>} />
            <Route path="/pagoPeajes" element={<PagoPeajes/>} />
            <Route path="/recargarTarjeta" element={<RecargarTarjeta/>} />
            <Route path="/consulta" element={<Consulta/>} />
            <Route path="/peajes" element={<Peajes />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/mostrarConsorcios" element={<Consorcios />} />
            
           
           
          
          </Routes>
          
          </BrowserRouter>
          </div>
          </div>
          {/* <div className="outer">
            <div className="inner">
              
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

          <div className="outer">
            <div className="inner-2">
              <CrearConsorcio />
            </div>
          </div>

          <div className="outer">
            <div className="inner-2">
              <CrearPeajes />
            </div>
          </div>

          <div className="outer">
            <div className="inner-2">
              <PagoPeajes />
            </div>
          </div>

          
          <div className="outer">
            <div className="inner-2">
              <RecargarTarjeta />
            </div>
          </div>

          <div className="outer">
            <div className="inner-2">
              <Consulta />
            </div>
          </div>*/}

        </div>
      </div>  
    );
  }
}
export default App;
