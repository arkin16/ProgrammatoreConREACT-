import React from 'react';
import logo from '../logo.svg';
import { Container,  Navbar } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <>
    <Navbar bg="dark" variant="dark" className='mb-3'>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          React App
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
  )
}
