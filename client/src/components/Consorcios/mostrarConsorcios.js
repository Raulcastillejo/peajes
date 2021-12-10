import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./crearConsorcio.css";
import Cards from "../Cards/Cards";

class Consorcios extends Component {
  render() {
    return (
      <div>
        <div>Consorcios</div>

        <div>
          <Cards />
        </div>
      </div>
    );
  }
}

export default Consorcios;