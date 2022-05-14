import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap/';
import { Routes, Route, Link } from "react-router-dom";
import './Footer.scss'

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
      <div className="Footer">
      <Navbar  bg="light" expand="lg" className='footer_menu'>
        <Container fluid className='mx-5 h-100'>

            <Nav className="me-auto text-center">     
          <b>ShittyTools - &copy;</b>  <div>{date}</div>
            </Nav>
        </Container>
      </Navbar>
      </div>
    );
  }
  
export default Footer;