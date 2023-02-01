import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default class AddForm extends Component {

    state = {}

    componentDidMount = () => {
        this.props.fieldForm.forEach(element => {
            this.setState({ 
                [element]: ''
            })
        });
    }

    handleField = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ 
            [name]: value
        })
    }

    handleSubmit = () => {
        this.props.addUser(this.state)
    }

    render() {
        /* console.log(this.state); */
        return (
            <Row className="my-3">
                {this.props.fieldForm.map((field, index) => (
                    <Col key={index}>
                        <Form.Control
                            type="text"
                            name={field}
                            placeholder={field + "..."}
                            onChange={this.handleField}
                        />
                    </Col>
                ))}
                <Col>
                    <Button className="form-control" variant="dark" type="button" onClick={this.handleSubmit}>
                        Add
                    </Button>
                </Col>
            </Row>
        )
    }
}
