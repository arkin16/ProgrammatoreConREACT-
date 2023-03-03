import React from "react";
import { Accordion, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import CardProd from "../../CardProd/CardProd";
import InputGroupGenerics from "../../InputGroupGenerics/InputGroupGenerics";
import "./style.css";

export default function ShowProduct() {
  const tmp = [1, 2, 3, 4, 5, 6, 7, 8];
  const width = "20%";

  //make a clear code, to see if add container page for accordion e listgroup or to make internal of ShowProduct.jsx

  return (
    <Container fluid>
      <Row>
        <Col xs lg="3">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                   {/*  <ListGroup.Item style={{marginTop: "10px"}}> */}
                      <InputGroupGenerics
                        label={["Min", "Max"]}
                        example={["30$", "100$"]}
                      />
                    {/* </ListGroup.Item> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </ListGroup.Item>
            <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body> </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            <ListGroup.Item>
              Provenience
            </ListGroup.Item>
            <ListGroup.Item>
              review users
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="d-flex flex-wrap">
          <CardProd tmp={tmp} width={width} />
        </Col>
      </Row>
    </Container>
  );
}
