import React, { Component } from "react";
import "./Cards.css";
import Card from "react-bootstrap/Card";

import logo from "./logo.svg";

class Cards extends Component {
  state = { consorcios: [] };
  componentDidMount() {
    fetch("/consorcios")
      .then((res) => res.json())
      .then((consorcios) => this.setState({ consorcios }));
  }

  render() {
    const renderCard = (consorcios, index) => {
      return (
        <Card style={{ width: "18rem" }} key={index} className="box">
          {/* <Card.Img variant="top" src="holder.js/100px180" src={logo} /> */}
          <Card.Body>
            <Card.Title>{consorcios.nombre}</Card.Title>
            <Card.Text>{consorcios.descripcion}</Card.Text>
          </Card.Body>
        </Card>
      );
    };

    return <div className="grid">{this.state.consorcios.map(renderCard)}</div>;
  }
}

export default Cards;
