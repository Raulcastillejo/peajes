import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: 'Email Requerido' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Se Requiere El Password ' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
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
{/* 
      <div className="col-lg-10 col-m-7 mx-auto">
          <h3>Log in</h3>

          <div className="form-group">
          <label>Nombre De Usuario</label>
          <input type="text" className="form-control" placeholder="Nombre De Usuario" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
          </div>
    

          <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password"  data-test="password" value={this.state.password} onChange={this.handlePassChange} />
          </div>

          <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                    </div>
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
          </div>
        </Form> */}



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Email"  data-test="email" value={this.state.email} onChange={this.handleUserChange}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" className="form-control" placeholder="Password"  data-test="password" value={this.state.password} onChange={this.handlePassChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    





      </div>
    );
 } 
}

export default Login;