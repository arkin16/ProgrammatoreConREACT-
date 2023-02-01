import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class MyAddForm extends Component {
  state = {
    name: "",
    username: "",
    address: {
        city: "",
      },
    phone: "",
    email: "",
    website: ""
  };

  /* handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  handleChangeCity = (e) => {
    this.setState({address: { city: e.target.value }});
  };

  handleChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleChangeWebsite = (e) => {
    this.setState({ website: e.target.value });
  }; */

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeCity = (e) => {
    this.setState({address: { city: e.target.value }});
  };

  handleSubmit = (e) => {
    this.props.addUser(this.state)
    this.setState({
        name: "",
        username: "",
        address: {
            city: "",
          },
        phone: "",
        email: "",
        website: ""
      })
  }

  render() {
    return (
      <Row className="my-3">
        <Col>
          <Form.Control
            type="text"
            name="name"
            placeholder="Fullname..."
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username..."
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="city"
            placeholder="City..."
            value={this.state.address.city}
            onChange={this.handleChangeCity}
          />
        </Col>
        <Col>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Phone..."
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email..."
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="website"
            name="website"
            placeholder="Website..."
            value={this.state.website}
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <Button className="form-control" variant="dark" type="button" onClick={this.handleSubmit}>
            Add
          </Button>
        </Col>
      </Row>
    );
  }
}
