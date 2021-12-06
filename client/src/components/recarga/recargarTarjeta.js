import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./recargarTarjeta.css";

class RecargarTarjeta extends Component {
  constructor() {
    super();
    this.state = {
      numeroTarjeta: "",
      valor: "",
      error: "",
    };

    this.handleNumeroTarjetaChange = this.handleNumeroTarjetaChange.bind(this);
    this.handleValorChange = this.handleValorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.numeroTarjeta) {
      return this.setState({ error: "numeroTarjeta Requerido" });
    }

    if (!this.state.total) {
      return this.setState({ error: "Se Requiere El Valor" });
    }

    console.log (this.state.numeroTarjeta);
    console.log ("*****************");
    console.log(this.state.valor);

    return this.setState({ error: "" });
  }

  handleNumeroTarjetaChange(evt) {
    this.setState({
      numeroTarjeta: evt.target.value,
    });
  }

  handleValorChange(evt) {
    this.setState({
      total: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}

          <div>Recargar Tarjeta</div>

          <Row className="mb-3">
           
         
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>numeroTarjeta</Form.Label>
            <Form.Control placeholder="AAA123" value={this.state.numeroTarjeta} onChange={this.handleNumeroTarjetaChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Total</Form.Label>
            <Form.Control placeholder="1234" value={this.state.total} onChange={this.handleValorChange}/>
          </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox"  label="Efectivo" checked={true }  />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Tarjeta" />
            </Form.Group>
          </Row>
      

          <Button variant="primary" type="submit">
            recargar
          </Button>
        </Form>
      </div>
    );
  }
}

export default RecargarTarjeta;
