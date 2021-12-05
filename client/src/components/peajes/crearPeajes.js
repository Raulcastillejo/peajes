import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './crearPeajes.css';

class CrearPeajes extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      latitud: '',
      longitud: '',
      valor: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleLongiChange = this.handleLongiChange.bind(this);
    this.handleValorChange = this.handleValorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.nombre) {
      return this.setState({ error: 'Nombre Requerido' });
    }

    if (!this.state.latitud) {
      return this.setState({ error: 'Se Requiere La Latitud' });
    }

    if (!this.state.longitud){
        return this.setState({error: 'Se Requierre La Longitud'});
    }

    if (!this.state.valor){
        return this.setState({error: 'Se Requierre El Valor'});
    }


    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      nombre: evt.target.value,
    });
  };

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

  handleValorChange(evt) {
    this.setState({
      valor: evt.target.value,
    });
  }


  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }

  <Form.Group className="mb-3" controlId="formBasicnombre">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" placeholder="Nombre"  data-test="nombre" value={this.state.nombre} onChange={this.handleUserChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasiclatitud">
    <Form.Label>Latitud</Form.Label>
    <Form.Control type="text" className="form-control" placeholder="latitud"  data-test="latitud" value={this.state.latitud} onChange={this.handlePassChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasiclongitud">
    <Form.Label>Longitud</Form.Label>
    <Form.Control type="text" className="form-control" placeholder="longitud"  data-test="longitud" value={this.state.longitud} onChange={this.handleLongiChange} />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicvalores">
    <Form.Label>Valores</Form.Label>
    <Form.Control type="text" className="form-control" placeholder="valor"  data-test="valor" value={this.state.valor} onChange={this.handleValorChange} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Enviar
  </Button>
</Form>


      </div>
    );
 } 
}

export default CrearPeajes;