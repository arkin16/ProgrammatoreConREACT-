import './App.css';
import { Container } from 'react-bootstrap';
import HeaderNav from './components/HeaderNav';
/* import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList'; */
import TodoListContainer from './containers/TodoListContainer';
import AddTodoFormContainer from './containers/AddTodoFormContainer';
import FetchTodoList from './components/FetchTodoList';

function App() {
  return (
    <>
      <HeaderNav />
      <Container>
        {/* <AddTodoForm /> */}
        <AddTodoFormContainer />
        {/* <TodoList /> */}
        <TodoListContainer />
        <hr />
        <FetchTodoList />
      </Container>
    </>
  );
  
}

export default App;
