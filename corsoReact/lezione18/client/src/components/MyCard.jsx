import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { HouseXFill, PencilSquare } from 'react-bootstrap-icons';

export default function MyCard({userSelected, closeCard, updateUser}) {
  return (
    <Card>
      <Card.Header as="h5">{userSelected.name}</Card.Header>
      <Card.Body>
        <Card.Title>Username: {userSelected.username}</Card.Title>
        <Card.Text>Email: {userSelected.email} </Card.Text>
        <Card.Text>Phone: {userSelected.phone} </Card.Text>
        <Card.Text>Website: {userSelected.website} </Card.Text>
        <Button variant="dark" onClick={closeCard} className="mx-1"><HouseXFill size={16} /></Button>
        <Button variant="primary" onClick={() => updateUser(userSelected)} className="mx-1"><PencilSquare size={16} /></Button>
      </Card.Body>
    </Card>
  )
}
