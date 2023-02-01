import './App.css';
/* import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
*/
import {Container, Row, Col} from 'react-bootstrap';
import MyTable from './compnents/MyTable';

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      city: "Gwenborough",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  },
  {
    id: 2,
    name: "Mario Rossi Graham",
    username: "mariorossi",
    email: "mr@april.biz",
    address: {
      city: "London",
    },
    phone: "1-770-736-8031",
    website: "mariorossi.org"
  }
]

function click() {
  console.log(users);
}

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <MyTable myUsers={users} myClick={click} myStr="Ciao" myNum={25} />
        </Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default App;
