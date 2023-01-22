import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BagPlusFill, FilePerson, Sliders } from "react-bootstrap-icons";
import "./style.css";
export default function SideBarGen() {
  return (
    <Navbar
      className="d-flex flex-column marginy-1 marginx-1 dash"
      variant="dark"
      style={{ width: "280px", height: "95vh" }}
    >
      <NavLink
        to="/"
        className="d-flex align-items-center align-items-baseline me-md-auto text-white navbar-brand"
      >
        <Sliders className="mx-2 my-1" />{" "}
        {/* Aggiustare leggermente il margine orizzontale */}
        <h3>Dashboard</h3>
      </NavLink>
      <Nav className="nav nav-pills flex-column  nav-item">
        <NavLink
          to="add-product"
          className="d-flex align-items-baseline navbar-brand"
        >
          <BagPlusFill width={"30px"} height={"20px"} />
          <span className="mx-1">Add Product</span>
        </NavLink>
        <NavLink
          to="users-registered"
          className="d-flex align-items-baseline navbar-brand"
        >
          <FilePerson width={"30px"} height={"20px"} />
          <span className="mx-1">Users Registered</span>
        </NavLink>
      </Nav>
    </Navbar>
  );
}
