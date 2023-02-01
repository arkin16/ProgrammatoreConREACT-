import React from 'react';
import Card from 'react-bootstrap/Card';

export default function MyCardDetail(props) {
  return (
    <Card>
      <Card.Header as="h5">Detail Contact</Card.Header>
      <Card.Body>
        <Card.Title>{props.detailUser.name}</Card.Title>
        <Card.Text>City: {props.detailUser.address.city}</Card.Text>
        <Card.Text>Phone: {props.detailUser.phone}</Card.Text>
        <Card.Text>Email: {props.detailUser.email}</Card.Text>
      </Card.Body>
    </Card>
  )
}


