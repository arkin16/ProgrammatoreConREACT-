import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions'

const mapStateToProps = (state) => {
  return { userLogin: state.userLogin } 
}

function HeaderNav({userLogin, logout}) {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><NavLink to="/" className="nav-link">RubricApp</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/contactlist" className="nav-link">Contacts</NavLink>
          </Nav>
          
          {!userLogin && (
            <Nav>
              <NavLink to="/login" className="nav-link">Login</NavLink>
              <NavLink to="/register" className="nav-link">Register</NavLink>
            </Nav>
          )}
          {userLogin && (
            <Nav>
              
              <NavLink className="nav-link">Ciao {userLogin.user.firstname}</NavLink>
              <NavLink to="/login" className="nav-link" onClick={logout}>Logout</NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default connect(mapStateToProps, {logout})(HeaderNav)