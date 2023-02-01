import { Container, Card } from 'react-bootstrap'
import AddTodoForm from './AddTodoForm'
import Todolist from './Todolist'

export default function Todos() {

  return (
    <Container>
      <Card>
        <AddTodoForm />
        <Todolist />
      </Card>
    </Container>
  )
}
