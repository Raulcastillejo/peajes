import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
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

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
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
          
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <div className="col-lg-10 col-m-7 mx-auto">
           <h3>Registrate</h3>

          <div className="form-group">
          <label>Nombre De Usuario</label>
          <input type="text" data-test="username" className="form-control" placeholder="Nombre De Usuario" value={this.state.username} onChange={this.handleUserChange} />
          </div>

         
          <div className="form-group">
          <label>Password</label>
          <input type="password" data-test="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePassChange} />
          </div>

          <input type="submit" className="btn btn-dark btn-lg btn-block" value="Log In" data-test="submit" />
          </div>
        </form>
      </div>
    );
 } 
}


export default Signup;