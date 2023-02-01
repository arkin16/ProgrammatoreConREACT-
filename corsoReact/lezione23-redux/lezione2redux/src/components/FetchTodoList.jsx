import React, { useEffect } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { CheckSquare, TrashFill } from 'react-bootstrap-icons'
import { connect } from "react-redux";
import { getTodo, removeTodo, completeTodo } from "../actions"

const mapStateToProps = (state) => {
    return { todos: [...state]};
}

function FetchTodoList({todos, getTodo, removeTodo, completeTodo}) {
    
    useEffect(() => {
      getTodo();
    }, [])
    
  return (
    <ListGroup variant="flush">
    {todos.map((t,i)=> <ListGroup.Item key={i} className={t.completed}>
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

export default connect(mapStateToProps, {getTodo, removeTodo, completeTodo})(FetchTodoList)