import React from 'react';
import logo from '../logo.svg';
import { Navbar, Container } from 'react-bootstrap'

export default function MyHeader() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React App
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
