import React from 'react'
import './Style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function navbar(){
    return( 
        <>
             <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Team 4</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#features">Register</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

           
        </>
    );
}
