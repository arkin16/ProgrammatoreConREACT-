import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HouseDoor } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

export default function MNavbar() {
  const userlog = useSelector((state) => state.sign_in_up.userlog);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {console.log(userlog)}
        <Container fluid>
          <NavLink to="/" className={"navbar-brand"}>
            <HouseDoor /> React Bootstrap
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            {!userlog && (
              <Nav>
                <NavLink to="/login" className={"nav-link"}>
                  Login
                </NavLink>
                <NavLink to="/register" className={"nav-link"}>
                  Register
                </NavLink>
              </Nav>
            )}
            {userlog && (
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
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
