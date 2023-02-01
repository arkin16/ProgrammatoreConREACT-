import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Col,  Container,  Form, ListGroup, Row } from 'react-bootstrap';

export default function Posts() {

    const [userLog, setUserLog] = useState(null);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        const userLogJson = localStorage.getItem('userLogin');
        if(userLogJson) {
            let logUser = JSON.parse(userLogJson);
            setUserLog(logUser);
            axios.get('http://localhost:3000/posts/?userId='+logUser.user.id, { 
                headers: {"Authorization" : `Bearer ${logUser.accessToken}`} })
                .then(response => setPosts(response.data))
        } else {
            navigate('/login')
        }
    }, [])


    const savePost = () => {
        let d = new Date();
        let p = { 
            date: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}` , 
            txt: inputRef.current.value, 
            userId: userLog.user.id
        }
        axios.post('http://localhost:3000/posts/', p, { 
            headers: {"Authorization" : `Bearer ${userLog.accessToken}`} })
            .then(response => {
                inputRef.current.value = '';
                axios.get('http://localhost:3000/posts/?userId='+userLog.user.id, { 
                headers: {"Authorization" : `Bearer ${userLog.accessToken}`} })
                .then(response => setPosts(response.data))
            })
    }

  return (
    <>
    
    <Container style={{ width: "600px" }}>
    {userLog && <h2 className="my-3 text-center display-3">Post di {userLog.user.firstName}</h2> }
    <Form  className='my-3' >
      <Row>
        <Col xs={9}>
            <Form.Control as="textarea" rows={2} placeholder="Inserisci post" ref={inputRef} />
        </Col>
        <Col>
          <Button variant="outline-dark" className="form-control h-100" onClick={savePost}>Add Message</Button>
        </Col>
      </Row>
    </Form>
    <ListGroup variant="flush">
        {posts.map(p => <ListGroup.Item key={p.id}><h5>{p.txt} <span className="float-end"> {p.date}</span></h5></ListGroup.Item>)}
    </ListGroup>
    </Container>
    </>
  )
}
