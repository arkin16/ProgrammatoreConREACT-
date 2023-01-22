import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import FormProduct from "./FormProduct";
import "../style.css";


export default function AdminAddProduct() {
  return (
    <>
      <Row style={{ marginLeft: "0" }}>
        <Col>
          <Card
            className="d-flex align-items-center"
            style={{ width: "105%", marginTop: "3px" }}
          >
            <FormProduct />
          </Card>
        </Col>
      </Row>
    </>
  );
}
