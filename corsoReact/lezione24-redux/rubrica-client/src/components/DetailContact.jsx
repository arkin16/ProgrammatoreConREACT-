import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import UpdateContactForm from './UpdateContactForm'
import { updateContact } from '../actions'

const mapStateToProps = (state) => {
  return { contacts: state.contacts }
}

function DetailContact({contacts, updateContact}) {

  const {id} = useParams();
  const [contact, setContact] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    let obj = contacts.find(c => c.id === +id)
    setContact(obj);
  }, [])
  

  return (
    <>
    {contact && 
    <Row>
      <Col>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{contact.fullname}</Card.Title>
            <Card.Text>City: {contact.city}</Card.Text>
            <Card.Text>Email: {contact.email}</Card.Text>
            <Card.Text>Phone: {contact.phone}</Card.Text>
            <Button variant="primary" onClick={() => setUpdate(true)}>Update</Button>
          </Card.Body>
        </Card>
      </Col>
      {update && (
        <Col>
        <Card className="text-center p-3">
            <UpdateContactForm contact={contact} updateContact={updateContact} />
        </Card>
      </Col>
      )}
    </Row>
    }   
    </>
  )
}

export default connect(mapStateToProps, {updateContact})(DetailContact)