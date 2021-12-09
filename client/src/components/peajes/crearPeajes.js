import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./crearPeajes.css";

class CrearPeajes extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      latitud: "",
      longitud: "",
      CategoriaI: "",
      CategoriaII: "",
      CategoriaIII: "",
      CategoriaIV: "",
      CategoriaV: "",
      error: "",
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleLongiChange = this.handleLongiChange.bind(this);
    this.handleCategoriaIChange = this.handleCategoriaIChange.bind(this);
    this.handleCategoriaIIChange = this.handleCategoriaIIChange.bind(this);
    this.handleCategoriaIIIChange = this.handleCategoriaIIIChange.bind(this);
    this.handleCategoriaIVChange = this.handleCategoriaIVChange.bind(this);
    this.handleCategoriaVChange = this.handleCategoriaVChange.bind(this);
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

    if (!this.state.latitud) {
      return this.setState({ error: "Se Requiere La Latitud" });
    }

    if (!this.state.longitud) {
      return this.setState({ error: "Se Requierre La Longitud" });
    }

    if (!this.state.CategoriaI) {
      return this.setState({
        error: "Se Requierre El Valor De La  Categoria I",
      });
    }

    if (!this.state.CategoriaII) {
      return this.setState({
        error: "Se Requierre El Valor De La  Categoria II",
      });
    }

    if (!this.state.CategoriaIII) {
      return this.setState({
        error: "Se Requierre El Valor De La  Categoria III",
      });
    }

    if (!this.state.CategoriaIV) {
      return this.setState({
        error: "Se Requierre El Valor De La  Categoria VI",
      });
    }

    if (!this.state.CategoriaV) {
      return this.setState({
        error: "Se Requierre El Valor De La  Categoria V",
      });
    }
    console.log (this.state.nombre);
    console.log ("*****************");
    console.log (this.state.latitud);
    console.log ("*****************");
    console.log (this.state.longitud);
    console.log ("*****************");
    console.log(this.state.CategoriaI);
    console.log ("*****************");
    console.log(this.state.CategoriaII);
    console.log ("*****************");
    console.log(this.state.CategoriaIII);
    console.log ("*****************");
    console.log(this.state.CategoriaIV);
    console.log ("*****************");
    console.log(this.state.CategoriaV);

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      nombre: evt.target.value,
    });
  }

  handlePassChange(evt) {
    this.setState({
      latitud: evt.target.value,
    });
  }

  handleLongiChange(evt) {
    this.setState({
      longitud: evt.target.value,
    });
  }

  handleCategoriaIChange(evt) {
    this.setState({
      CategoriaI: evt.target.value,
    });
  }

  handleCategoriaIIChange(evt) {
    this.setState({
      CategoriaII: evt.target.value,
    });
  }

  handleCategoriaIIIChange(evt) {
    this.setState({
      CategoriaIII: evt.target.value,
    });
  }

  handleCategoriaIVChange(evt) {
    this.setState({
      CategoriaVI: evt.target.value,
    });
  }

  handleCategoriaVChange(evt) {
    this.setState({
      CategoriaV: evt.target.value,
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
          <div>Crear Peajes</div>

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
          

          <Form.Group className="mb-3" controlId="formBasiclatitud">
            <Form.Label>Latitud</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="latitud"
              data-test="latitud"
              value={this.state.latitud}
              onChange={this.handlePassChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasiclongitud">
            <Form.Label>Longitud</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="longitud"
              data-test="longitud"
              value={this.state.longitud}
              onChange={this.handleLongiChange}
            />
          </Form.Group>
          <div>Valores</div>
          <Form.Group className="mb-3" controlId="formBasicCategoriaI">
            <Form.Label>Categoría I</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Categoria I"
              data-test="CategoriaI"
              value={this.state.CategoriaI}
              onChange={this.handleCategoriaIChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategoriaII">
            <Form.Label>Categoría II</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Categoria II"
              data-test="CategoriaI"
              value={this.state.CategoriaII}
              onChange={this.handleCategoriaIIChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategoriaIII">
            <Form.Label>Categoría III</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Categoria III"
              data-test="CategoriaI"
              value={this.state.CategoriaIII}
              onChange={this.handleCategoriaIIIChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategoriaVI">
            <Form.Label>Categoría VI</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Categoria VI"
              data-test="CategoriaI"
              value={this.state.CategoriaIV}
              onChange={this.handleCategoriaVIChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategoriaV">
            <Form.Label>Categoría V</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Categoria V"
              data-test="CategoriaI"
              value={this.state.CategoriaV}
              onChange={this.handleCategoriaVChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </div>
    );
  }
}

export default CrearPeajes;
