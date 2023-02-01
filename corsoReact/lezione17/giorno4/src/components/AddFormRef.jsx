import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';



export default function AddFormRef(props) {

    let name = React.createRef();
    let username = React.createRef();
    let city = React.createRef();
    let phone = React.createRef();
    let email = React.createRef();
    let website = React.createRef();

    let handleSubmit = () => {
        let obj = {
            name: name.current.value,
            username: username.current.value,
            city: city.current.value,
            phone: phone.current.value,
            email: email.current.value,
            website: website.current.value
        };
        props.addUser(obj);
    }

  return (
    <Row className="my-3">
        <Col>
          <Form.Control
            type="text"
            name="name"
            placeholder="Fullname..."
            ref={name}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username..."
            ref={username}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="city"
            placeholder="City..."
            ref={city}
          />
        </Col>
        <Col>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Phone..."
            ref={phone}
          />
        </Col>
        <Col>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email..."
            ref={email}
          />
        </Col>
        <Col>
          <Form.Control
            type="website"
            name="website"
            placeholder="Website..."
            ref={website}
          />
        </Col>
        <Col>
          <Button className="form-control" variant="dark" type="button" onClick={handleSubmit}>
            Add
          </Button>
        </Col>
      </Row>
  )
}


