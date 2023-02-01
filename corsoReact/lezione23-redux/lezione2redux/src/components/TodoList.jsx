import React from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { TrashFill, CheckSquare } from 'react-bootstrap-icons'

export default function TodoList({todos, removeTodo, completeTodo}) {
  //console.log(props);
  return (
    <ListGroup variant="flush">
    {todos.map((t, i) => <ListGroup.Item key={i} className={t.completed}>
        {t.todo}
        <Button 
          variant="outline-danger" 
          className='float-end'
          onClick={() => removeTodo(i)}
          ><TrashFill /></Button>
          <Button 
          variant="outline-warning" 
          className='float-end'
          onClick={() => completeTodo(i)}
          ><CheckSquare /></Button>
      </ListGroup.Item>)}
      
    </ListGroup>
  )
}
