import React, { Component } from "react";
//import "./Cards.css";
import Card from "react-bootstrap/Card";

//import logo from "./logo.svg";

class Peajes extends Component {
  state = { peajes: [] };
  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((peajes) => this.setState({ peajes }));
  }

  render() {
    <h1>Mostrar Peajes</h1>
    const renderCard = (peajes, index) => {
      return (
        
        <Card style={{ width: "18rem" }} key={index} className="box">
          {/* <Card.Img variant="top" src="holder.js/100px180" src={logo} /> */}
          <Card.Body>
            <Card.Title>{peajes.nombre}</Card.Title>
            <Card.Text>{peajes.longitud}</Card.Text>
            <Card.Text>{peajes.latitud}</Card.Text>
          </Card.Body>
        </Card>
      );
    };

    return <div className="grid">{this.state.peajes.map(renderCard)}</div>;
  }
}

export default Peajes;
