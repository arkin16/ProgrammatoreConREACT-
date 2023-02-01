import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';


export default function AddTodoForm({addTodo}) {
  const inputTodo = useRef();
  return (
    <Form className='my-3'>
      <Row>
        <Col xs={10}>
          <Form.Control placeholder="Todo..." ref={inputTodo}/>
        </Col>
        <Col>
          <Button 
            variant="dark" 
            className='form-control'
            onClick={() => addTodo({todo: inputTodo.current.value, completed: ''})}
            >Add Todo</Button>
        </Col>
      </Row>
    </Form>
  )
}
