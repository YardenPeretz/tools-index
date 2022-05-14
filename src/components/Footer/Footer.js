import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap/';
import { Routes, Route, Link } from "react-router-dom";

function Footer() {
    return (
      <div className="Footer">
      <Navbar  bg="light" expand="lg" className='footer_menu'>
        <Container fluid className='mx-5 h-100'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">     
        FOOTER
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
  }
  
export default Footer;