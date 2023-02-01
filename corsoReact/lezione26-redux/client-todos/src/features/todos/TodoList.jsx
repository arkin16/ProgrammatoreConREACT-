import React, { useEffect } from 'react'
import { Alert, Button, Card, ListGroup, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, deleteTodo, completeTodo } from './todosSlice'
import { TrashFill, CheckSquareFill } from 'react-bootstrap-icons'

export default function TodoList() {
  
  const loading = useSelector(state => state.todos.loading)
  const error = useSelector(state => state.todos.error)
  const todos = useSelector(state => state.todos.todolist)
  const dispatch = useDispatch();

  useEffect(() => {
    /* console.log(todos); */
    dispatch(getAllTodos());
  }, [])
  
  return (
    <>
    <Card.Body className='text-center'>
        {loading && <Spinner animation="grow" />}
        {error && <Alert variant="danger" dismissible>
          <Alert.Heading>Oh snap! {error}</Alert.Heading>
        </Alert>}
        <ListGroup variant="flush">
          {todos.map((t,i) => (
            <ListGroup.Item key={i} className={'d-flex justify-content-between '+ t.completed}>
              <span>{t.txt}</span>
              <span>{t.data}</span>
              <span>
                <Button variant='danger' className='btn-sm mx-1' onClick={() => dispatch(deleteTodo(t.id))}><TrashFill /></Button>
                <Button variant='warning' className='btn-sm mx-1' onClick={() => dispatch(completeTodo(t))}><CheckSquareFill /></Button>
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </>
  )
}
