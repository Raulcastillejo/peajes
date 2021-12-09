import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./consultas.css";

class Consulta extends Component {
  constructor() {
    super();
    this.state = {
      desde: "",
      hasta: "",
      error: "",
    };

    this.handleDesdeChange = this.handleDesdeChange.bind(this);
    this.handleHastaChange = this.handleHastaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.desde) {
      return this.setState({ error: "Nombre Requerido" });
    }

    if (!this.state.hasta) {
      return this.setState({ error: "Se Requiere La Descripcion" });
    }
    
    console.log (this.state.nombre);
    console.log ("*****************");
    console.log (this.state.hasta);

    return this.setState({ error: "" });
  }

  handleDesdeChange(evt) {
    this.setState({
      desde: evt.target.value,
    });
  }

  handleHastaChange(evt) {
    this.setState({
      hasta: evt.target.value,
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

          <div>Consulta</div>

          <Form.Group className="mb-3" controlId="formBasicnombre">
            <Form.Label>desde</Form.Label>
            <Form.Control
              type="text"
              placeholder="desde"
              data-test="desde"
              value={this.state.desde}
              onChange={this.handleUserChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicdescripcion">
            <Form.Label>Descricpcion</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="hasta"
              data-test="hasta"
              value={this.state.hasta}
              onChange={this.handlePassChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    );
  }
}

export default Consulta;
