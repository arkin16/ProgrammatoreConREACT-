import React, { Component } from 'react';
import {Spinner, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

export default class TableApi extends Component {

state = {
    users: [],
    loading: true,
    error: null
}

    componentDidMount = () => {
        /* fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET})
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    this.setState({
                        users: json,
                        loading: false
                    })
                }, 1000)
                
            }).catch(error => {
                this.setState({
                    loading: false,
                    error: error.message
                })
            }) */

            this.getUsers();
    }

    getUsers = () => {
        axios.get('http://localhost:3000/users/')
        .then(res => {
            setTimeout(() => {
                this.setState({
                    users: res.data,
                    loading: false
                })
            }, 1000)
        }).catch(error => {
            this.setState({
                loading: false,
                error: error.message
            })
        })
    }


    addUser = (obj) => {
        axios.post('http://localhost:3000/users/', obj)
            .then(res => this.getUsers())
            .catch(error => console.log(error))
    }

    updateUser = (obj) => {
        axios.put('http://localhost:3000/users/'+obj.id, obj)
            .then(res => this.getUsers())
            .catch(error => console.log(error))
    }

    modifyUser = (obj) => {
        axios.patch('http://localhost:3000/users/'+obj.id, obj)
            .then(res => this.getUsers())
            .catch(error => console.log(error))
    }

    removeUser = (obj) => {
        axios.delete('http://localhost:3000/users/'+obj.id)
            .then(res => this.getUsers())
            .catch(error => console.log(error))
    }

  render() {
    console.log(this.state);
    return (
        <>
      <div>TableApi</div>
      {this.state.loading && <Spinner animation="border" role="status" /> }
      {this.state.error && <Alert  variant="danger"> Errore!!!  + {this.state.error.message}</Alert>}
      <ul>
        {this.state.users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
      <Button className="form-control" variant="dark" type="button" onClick={() => this.addUser(
        {
            name: "Pippo Pluto",
            username: "pippini",
            email: "pippopluto@april.biz",
            city: "Paris",
            phone: "12345",
            website: "disney.org"
        }
        ) }>POST
        </Button>
        <Button className="form-control" variant="warning" type="button" onClick={() => this.updateUser(
        {
            id: 3,
            name: "Pippi Pluti",
            username: "pippini",
            email: "pippopluto@april.biz",
            city: "Paris",
            phone: "12345",
            website: "disney.org"
        }
        ) }>PUT
        </Button>
        <Button className="form-control" variant="info" type="button" onClick={() => this.modifyUser(
        {
            id: 1,
            city: "Miami",
        }
        ) }>PATCH
        </Button>
        <Button className="form-control" variant="danger" type="button" onClick={() => this.removeUser(
        {id: 3}
        ) }>DELETE
        </Button>
      </>
    )
  }
}
