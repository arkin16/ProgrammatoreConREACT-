import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import MyHeader from './components/MyHeader';
import MyMain from './components/MyMain';

function App() {
  return (
    <>
      <MyHeader />
      <Container className="my-3">
        <MyMain />
      </Container>
    </>
  );
}

export default App;
