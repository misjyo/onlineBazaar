import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div> <Navbar className='header' style={{position:"fixed"}}>
    <Container>
      <Navbar.Brand href="#home" style={{marginLeft:"140px" ,color:"white"}}>
        ONline ShoP
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}
