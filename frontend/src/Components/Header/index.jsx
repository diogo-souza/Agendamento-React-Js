import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// componentização do header junto ao nav a ser apresentada nas páginas

const Header = ({ routes = [] }) => (
  <Navbar bg="dark" variant="dark">
    <Link className="navbar-brand" to="/">Vacinação</Link>
    <Nav className="mr-auto">
      {routes.filter(({ visible = true }) => visible).map((route) => (
        <Link key={route.path} className="nav-link" to={route.path}>{route.name}</Link>
      ))}
    </Nav>

  </Navbar>
);
export default Header;
