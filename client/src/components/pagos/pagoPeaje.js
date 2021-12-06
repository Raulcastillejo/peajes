import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./pagoPeajes.css";

class PagoPeajes extends Component {
  constructor() {
    super();
    this.state = {
      placa: "",
      total: "",
      error: "",
    };

    this.handlePlacaChange = this.handlePlacaChange.bind(this);
    this.handleValorChange = this.handleValorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.placa) {
      return this.setState({ error: "placa Requerido" });
    }

    if (!this.state.total) {
      return this.setState({ error: "Se Requiere El total" });
    }

    console.log (this.state.placa);
    console.log ("*****************");
    console.log(this.state.total);

    return this.setState({ error: "" });
  }

  handlePlacaChange(evt) {
    this.setState({
      placa: evt.target.value,
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

          <div>Pagar Peaje</div>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Categoria</Form.Label>
              <Form.Select defaultValue="1">
                
                <option value="1">Categoria I</option>
                <option value="2">Categoria II</option>
                <option value="3">Categoria III</option>
                <option value="4">Categoria VI</option>
                <option value="5">Categoria V</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Placa</Form.Label>
            <Form.Control placeholder="AAA123" value={this.state.placa} onChange={this.handlePlacaChange}/>
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox"  label="Efectivo" checked={true}  />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Tarjeta" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Total</Form.Label>
            <Form.Control placeholder="1234" value={this.state.total} onChange={this.handleValorChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Pagar
          </Button>
        </Form>
      </div>
    );
  }
}

export default PagoPeajes;
