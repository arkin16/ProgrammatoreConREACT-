import './App.css';
import { Container } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import MyMain from './components/MyMain';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <MyMain />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
