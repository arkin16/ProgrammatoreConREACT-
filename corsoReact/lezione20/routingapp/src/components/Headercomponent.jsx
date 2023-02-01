import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const activeLink = {textDecoration: 'underline'}

export default function Headercomponent() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/" className="nav-link">Home</Link>
            <Link to="/p1" className="nav-link">Page1</Link>
            <Link to="/p2" className="nav-link">Page2</Link>
            <Link to="/p3" className="nav-link">Page3</Link> */}
            <NavLink to="/" className="nav-link" style={({isActive}) => isActive ? activeLink : undefined} > Home </NavLink>
            <NavLink to="/p1" className="nav-link" style={({isActive}) => isActive ? activeLink : undefined} > Page1 </NavLink>
            <NavLink to="/p2" className="nav-link" style={({isActive}) => isActive ? activeLink : undefined} > Page2 </NavLink>
            <NavLink to="/p3" className="nav-link" style={({isActive}) => isActive ? activeLink : undefined} > Page3 </NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}
