import React from 'react';
import {
  Navbar, Nav, Form, FormControl, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ routes = [] }) => (
  <Navbar bg="dark" variant="dark">
    <Link className="navbar-brand" to="/">Vacinação</Link>
    <Nav className="mr-auto">
      {routes.filter(({ visible = true }) => visible).map((route) => (
        <Link className="nav-link" to={route.path}>{route.name}</Link>
      ))}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Digite aqui" className="mr-sm-2" />
      <Button variant="outline-info">Busca</Button>
    </Form>
  </Navbar>
);
export default Header;
