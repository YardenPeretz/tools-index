import './Header.scss';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap/';
import { Routes, Route, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

function Header() {
  return (

    <div className="Header">
      
      <Navbar  expand="lg" className='nav_menu'>
        <Container fluid className='mx-5 h-100'>
          <Navbar.Brand><img src={logo} className="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">     
              <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>

            

              <Nav.Link href="#"><Link to="/ToolCard">toolcard</Link></Nav.Link>  
              <Nav.Link href="#"> <Link to="/Item">Item</Link></Nav.Link> 
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
