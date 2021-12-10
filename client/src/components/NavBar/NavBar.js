import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {  Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
;
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class NavBar extends Component {
  render() {
    return (
          
            <Navbar bg="light" expand="lg" className=" fixed-top">
            <Container fluid>
              <Navbar.Brand href="#">Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/registro">Registrar</Nav.Link>
                  <Nav.Link href="/crearPeajes">crear Peajes</Nav.Link>
                  <Nav.Link href="/crearConsorcio">crear Consorcio</Nav.Link>
                  <Nav.Link href="/pagoPeajes">pagos</Nav.Link>
                  <Nav.Link href="/recargarTarjeta">recargar Tarjeta</Nav.Link>
                  <Nav.Link href="/consulta">consulta</Nav.Link>
                  <Nav.Link href="/peajes">peajes</Nav.Link>
                  <Nav.Link href="/admin">admin</Nav.Link>
                  <Nav.Link href="/mostrarConsorcios">Consorcios</Nav.Link>
                  
                  
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>




            );
  }
}

export default NavBar;