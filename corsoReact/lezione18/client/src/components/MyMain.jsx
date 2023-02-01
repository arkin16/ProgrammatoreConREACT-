import React, { Component } from 'react';
import MyForm from './MyForm';
import MyTable from './MyTable';
import axios from 'axios';
import MyCard from './MyCard';
import { Row, Col } from 'react-bootstrap';

const urlAPI = 'http://localhost:3000/users/';

export default class MyMain extends Component {

  state = { 
    users: [],
    detailUser: null,
    updateUser: null
  }

  componentDidMount = () => {
    //fetch('http://localhost:3000/users', { method: 'GET' }).then(response => response.json()).then(json => console.log(json))
    axios.get(urlAPI).then(response => this.setState({ users: response.data}))
  }

  removeUser = (user) => {
    //fetch('http://localhost:3000/users/'+user.id, { method: 'DELETE' }).then(response => response.json()).then(json => console.log(json))
    axios.delete(urlAPI+user.id).then(response => {
      if(response.status === 200) {
        this.setState((prevState) => ({
          users: prevState.users.filter(u => u.id !== user.id)
        }))
        //axios.get(urlAPI).then(response => this.setState({ users: response.data}))
      }
    });
  }

  addUser = (user) => {
    /*fetch('http://localhost:3000/users/', {
                  method: 'POST', 
                  body: JSON.stringify(user), 
                  headers: {'Content-Type': 'application/json'}}).then(response => response.json()).then(json => console.log(json))*/
    axios.post(urlAPI, user).then(response => {
      if(response.status === 201) {
        this.setState((prevState) => ({
          users: [...prevState.users, response.data]
        }))
        //axios.get(urlAPI).then(response => this.setState({ users: response.data}))
      }
    });
  }

  selectUser = (user) => {
    this.setState({ 
      detailUser: user
    })
  }

  closeCard = () => {
    this.setState({ 
      detailUser: null
    })
  }

  updateUser = (user) => {
    this.setState({ 
      updateUser: user
    })
  }

  modUser = (user) => {
    axios.patch(urlAPI+user.id, user).then(response => {
      if(response.status === 200) {
        /* this.setState((prevState) => ({
          users: [...prevState.users, response.data]
        })) */
        axios.get(urlAPI).then(response => this.setState({ users: response.data}))
      }
    });
  }

  render() {
    return (
      <>
        <MyForm 
            createUser={this.addUser} 
            userSelected={this.state.updateUser}
            updateUser={this.modUser}  />
        <Row>
          <Col>
            <MyTable 
                userlist={this.state.users} 
                deleteUser={this.removeUser} 
                detailUser={this.selectUser} />
          </Col>
          { this.state.detailUser && <Col>
            <MyCard 
                userSelected={this.state.detailUser} 
                closeCard={this.closeCard}
                updateUser={this.updateUser} />
          </Col>}
        </Row>
      </>
    )
  }
}

