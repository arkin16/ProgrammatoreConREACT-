import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HouseDoor } from "react-bootstrap-icons";

export default function MNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <NavLink to="/" className={"navbar-brand"}>
            <HouseDoor /> React Bootstrap
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <NavLink to="/login" className={"nav-link"}>
                Login
              </NavLink>
              <NavLink to="/register" className={"nav-link"}>
                Register
              </NavLink>
            </Nav>
            <Nav>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavLink to="/user" className={"dropdown-item"}>
                  My Account
                </NavLink>
                <NavLink to="/" className={"dropdown-item"}>
                  Logout
                </NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
