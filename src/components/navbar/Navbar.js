import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const AppNavbar = () => {
  return (
    <Navbar bg="transparent" data-bs-theme="light">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link as={NavLink} exact to="/" activeClassName="active">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" activeClassName="active">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/skills" activeClassName="active">Skills</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;