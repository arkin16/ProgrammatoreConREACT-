import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

export default function DetailContactPage({store}) {

  const {id} = useParams();
  const [contact, setContact] = useState({});

  useEffect(() => {
    setContact(store.getState()[id]);
  }, [])


  return (
    <Container className="my-3">
        {contact && <Card>
        <Card.Header>{contact.firstName} {contact.lastName}</Card.Header>
        <Card.Body>
            <Card.Title>City: {contact.city}</Card.Title>
            <Card.Text>Phone: {contact.phone}</Card.Text>
            <Card.Text>Email: {contact.email}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>}
    </Container>
  )
}
