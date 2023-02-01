import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AddTodoForm from './AddTodoForm'
import AdminPanel from './AdminPanel'
import TodoList from './TodoList'
 
export default function Todos() {

  const role = useSelector(state => state.userLogin.user.user.role)

  return (
    <Container>
      <Card>
        <h1 className='my-3 text-center'>TodoList</h1>
        <AddTodoForm />
        <TodoList />
      </Card>
      { role === "Admin" && <Card className='my-3'>
        <AdminPanel />
      </Card>
      }
    </Container>
  )
}
