import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { getUserLogin } from '../features/userLogin/userLoginSlice'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

    const inputEmail = useRef();
    const inputPassword = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        let obj = {
            email: inputEmail.current.value,
            password: inputPassword.current.value
          }
        dispatch(getUserLogin(obj))
        navigate('/todos')
    }

  return (
    <Container style={{width: "600px", marginTop: "250px"}}>
    <Card>
        <Card.Body className='text-center'>
            <h1 className='my-3 text-center'>Login</h1>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" ref={inputEmail} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" ref={inputPassword} />
            </Form.Group> 
            <Button variant="primary" onClick={loginUser}>Login</Button>
            </Form>
        </Card.Body>
    </Card>
    </Container>
  )
}
