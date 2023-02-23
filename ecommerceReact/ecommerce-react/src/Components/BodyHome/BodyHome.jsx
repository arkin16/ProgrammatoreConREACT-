import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./style.css";

export default function BodyHome() {
  
  const tmp = [1,2,3,4,5]
  
  return (
    <div className="container-body">
    <div className="cardBody-container">
      {tmp.map((e,i) =>
      <Card key={i} className="item-cardBody" style={{ width: "25%" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      )}
    </div>
    </div>
  );
}
