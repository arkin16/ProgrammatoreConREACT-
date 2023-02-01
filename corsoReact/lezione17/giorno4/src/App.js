import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import AddForm from './components/AddForm';
import AddFormFormik from './components/AddFormFormik';
import { AddFormFormikYup } from './components/AddFormFormikYup';
import AddFormRef from './components/AddFormRef';
import TableApi from './components/TableApi';

class App extends React.Component {

  state = {
    field: ['name', 'username', 'city', 'phone', 'email', 'website'],
    users: []
  }

  addUser = (u) => {
    this.setState((prevstate) => ({
      users: [...prevstate.users, u]
    }))
  }

  render(){
    console.log(this.state);
    return (
      <Container>
        <AddForm fieldForm={this.state.field} addUser={this.addUser} />
        <AddFormRef fieldForm={this.state.field} addUser={this.addUser} />
        <AddFormFormik />
        <AddFormFormikYup />
        <TableApi />
      </Container>
    );
  }
}

export default App;

