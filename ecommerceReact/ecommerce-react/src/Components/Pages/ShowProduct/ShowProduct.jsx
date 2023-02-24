import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProd from "../../CardProd/CardProd";
import "./style.css";

export default function ShowProduct() {
  const tmp = [1, 2, 3, 4, 5, 6];
  const width = "20%";
  return (
    <Container fluid>
      <Row>
        <Col xs lg="3">
          3 of 3
        </Col>
        <Col className="d-flex flex-wrap justify-content-center ">
          <CardProd tmp={tmp} width={width}/>
        </Col>
      </Row>
    </Container>
  );
}
