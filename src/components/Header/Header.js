import './Header.css'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap/';
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (

    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Useful Tools</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown.Item href="/ToolCard">Action</NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
