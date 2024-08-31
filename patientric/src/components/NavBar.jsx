import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    return(
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/images/logo.jpg"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{' '}
              Patientric
            </Navbar.Brand>
          </Container>
        </Navbar>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="mission">Mission</Nav.Link>
              <Nav.Link href="team">Team</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="projects/insured_gpt">InsuredGPT</NavDropdown.Item>
                <NavDropdown.Item href="projects/med_ed">
                  Medical Foreign Language Education
                </NavDropdown.Item>
                <NavDropdown.Item href="projects/ai_interpret">AI-Modulated Interpretation</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }