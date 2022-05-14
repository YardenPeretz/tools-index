import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap/';
import { Routes, Route, Link } from "react-router-dom";

function Footer() {
    return (
      <div className="Footer">
      <Navbar  bg="light" expand="lg" className='footer_menu'>
        <Container fluid className='mx-5 h-100'>

            <Nav className="me-auto">     
        FOOTER
            </Nav>
        </Container>
      </Navbar>
      </div>
    );
  }
  
export default Footer;