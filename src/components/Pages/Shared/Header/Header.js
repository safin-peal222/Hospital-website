import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {
     const {users,logOut} = useAuth();
    return (
        <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">MEDCARE</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">    
    <Nav className="me-auto">
      <Nav.Link as ={Link} to="/home">Home</Nav.Link>
      <Nav.Link as ={Link} to="/about">About</Nav.Link>
      <Nav.Link as ={Link} to="/services">Services</Nav.Link>
      <Nav.Link as ={Link} to="/doctors">Doctors</Nav.Link>
      <Nav.Link as ={Link} to="/dept">Departments</Nav.Link>
      <Nav.Link as ={Link} to="/blog">Blog</Nav.Link>
      {
        users?.email? <button onClick={logOut}>LogOut</button>:
        <Nav.Link as ={Link} to="/login">Login</Nav.Link>
        
      }
      <Nav.Link as ={Link} to="/contact">Contact</Nav.Link>
      
      
    
      
    
    </Nav>
    
    <Navbar.Text>
        Signed in as: {<small>{users?.displayName}</small>}
      </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />

  <br />
  
</>
    );
};

export default Header;