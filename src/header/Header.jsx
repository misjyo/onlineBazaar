import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div>
       <Navbar className="Nav"  variant="dark">
    <Container>
      <Navbar.Brand href="#home">ONLINEbaZaar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home" style={{marginLeft:"450px" ,fontSize:"larger"}}>Welcomes You:Jyoti</Nav.Link>
      <button className='btn btn-primary' style={{marginLeft:"240px" }}> Edit </button>
      <button className='btn btn-primary' style={{marginLeft:"40px" }}> Logout </button>
      </Nav>
      </Container>
      </Navbar>
      </div>
  )
}

