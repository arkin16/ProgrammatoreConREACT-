import React from 'react';
import { Container, Navbar } from 'react-bootstrap'

export default function HeaderNav() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
  )
}
