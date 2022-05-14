import './Header.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap/';
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (

    <div className="Header">
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Useful Tools</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">     
              <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#"><Link to="/ToolCard">toolcard</Link>  </Nav.Link>   
            </Nav>
            <Nav className="me-auto">     
                  <Link to="/Item">Item</Link>     
            </Nav>
            <Nav className="me-auto">     
                  <Link to="/ItemDiscription">ItemDiscription</Link>     
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
