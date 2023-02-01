import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default class MyForm extends Component {

  state = {
    newObj: {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: ''
    },
    update: false
  }

  componentDidUpdate() {
    if(this.props.userSelected !== null && !this.state.update) {
      this.setState({
        newObj: this.props.userSelected,
        update: true
      })
    }
  }


  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({
      newObj: {
        ...this.state.newObj,
        [name]: value
      }
    })
  }

  handleSubmit = (event) => {
    if(this.state.newObj.id){
      this.props.updateUser(this.state.newObj)
    } else {
      this.props.createUser(this.state.newObj)
    }
    this.setState({
      newObj: {
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
      },
      update: false
    })

  }

  render() {
    
    return (
    <Form className="my-3">
      <Row>
        <Col>
          <Form.Control value={this.state.newObj.name} name='name' placeholder="FullName..." onChange={this.handleChange} />
        </Col>
        <Col>
          <Form.Control value={this.state.newObj.username}  name='username' placeholder="Username..." onChange={this.handleChange}  />
        </Col>
        <Col>
          <Form.Control value={this.state.newObj.email}  name='email' placeholder="Email..." onChange={this.handleChange}  />
        </Col>
        <Col>
          <Form.Control value={this.state.newObj.phone}  name='phone' placeholder="Phone..." onChange={this.handleChange}  />
        </Col>
        <Col>
          <Form.Control value={this.state.newObj.website}  name='website' placeholder="Website..." onChange={this.handleChange}  />
        </Col>
        <Col>
          <Button variant="secondary" className='form-control' onClick={this.handleSubmit}>Save</Button>
        </Col>
      </Row>
    </Form>
    )
  }
}
