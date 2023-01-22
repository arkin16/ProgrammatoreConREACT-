import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBarGen from "../SideBarGen";

export default function PageUser() {
  return (
    <>
      <Container className="d-flex flex-row container-1 ">
        <SideBarGen/>
        <Outlet />
      </Container>
    </>
  );
}
