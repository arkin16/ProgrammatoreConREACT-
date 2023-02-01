import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function HeaderNav() {

  /* const [loggedIn, setLoggedIn] = useState(null)

  useEffect(() => {
    if(localStorage.getItem('userLogin')){
      setLoggedIn(JSON.parse(localStorage.getItem('userLogin')))
    }
  }, []) */
  

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>React-App Users</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/users" className="nav-link">Users</NavLink>
          </Nav>
          {/* {!loggedIn && (  */}
          <Nav>
                <NavLink to="/login" className="nav-link">Login</NavLink>
                <NavLink to="/register" className="nav-link">Register</NavLink>
          </Nav>
          {/* ) }
          {loggedIn && ( */}
            {/* <Nav>
              <NavLink to="/logout" className="nav-link">Logout</NavLink>
            </Nav> */}
          {/* )} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
