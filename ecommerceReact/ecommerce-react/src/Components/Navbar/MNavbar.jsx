import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HouseDoor } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import sign_in_upSlice from "../../feature/sign_in-up/sign_in_upSlice";



export default function MNavbar() {
  const userlog = useSelector((state) => state.sign_in_up.userlog);
  const dispacth = useDispatch();
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
                  <NavLink to="/" className={"dropdown-item"} onClick={() => dispacth(sign_in_upSlice.logOut())}>
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
