import React, { Component } from "react";
import "./Cards.css";
import Card from "react-bootstrap/Card";

import logo from "./logo.svg";

class Cards extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    const renderCard = (user, index) => {
      return (
        <Card style={{ width: "18rem" }} key={index} className="box">
          <Card.Img variant="top" src="holder.js/100px180" src={logo} />
          <Card.Body>
            <Card.Title>{user.id}</Card.Title>
            <Card.Text>{user.username}</Card.Text>
          </Card.Body>
        </Card>
      );
    };

    return <div className="grid">{this.state.users.map(renderCard)}</div>;
  }
}

export default Cards;
