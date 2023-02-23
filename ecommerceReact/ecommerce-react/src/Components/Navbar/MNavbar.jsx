import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { HouseDoor } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../feature/sign_in-up/sign_in_upSlice";
import "./style.css";

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
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="me-3" variant="outline-success">Search</Button>
            </Form>
            {!userlog && (
              <Nav className="me-3">
                <NavLink to="/login" className={"nav-link"}>
                  Login
                </NavLink>
                <NavLink to="/register" className={"nav-link"}>
                  Register
                </NavLink>
              </Nav>
            )}
            {userlog && (
              <Nav className="me-3">
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavLink to="/user" className={"dropdown-item"}>
                    My Account
                  </NavLink>
                  <NavLink
                    to="/"
                    className={"dropdown-item"}
                    onClick={() => dispacth(logOut())}
                  >
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
