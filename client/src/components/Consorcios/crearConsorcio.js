import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./crearConsorcio.css";

class CrearConsorcio extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      descripcion: "",
      error: "",
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.nombre) {
      return this.setState({ error: "Nombre Requerido" });
    }

    if (!this.state.descripcion) {
      return this.setState({ error: "Se Requiere La Descripcion" });
    }
    
    console.log (this.state.nombre);
    console.log ("*****************");
    console.log (this.state.descripcion);

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      nombre: evt.target.value,
    });
  }

  handlePassChange(evt) {
    this.setState({
      descripcion: evt.target.value,
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

          <div>Crear Consorcio</div>

          <Form.Group className="mb-3" controlId="formBasicnombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              data-test="nombre"
              value={this.state.nombre}
              onChange={this.handleUserChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicdescripcion">
            <Form.Label>Descricpcion</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Descripcion"
              data-test="descripcion"
              value={this.state.descripcion}
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

export default CrearConsorcio;
