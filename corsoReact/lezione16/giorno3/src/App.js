import './App.css';
import MyNavbar from './components/MyNavbar';
import Container from 'react-bootstrap/Container';
import MyAddForm from './components/MyAddForm';
import MyMain from './components/MyMain';
import MyFooter from './components/MyFooter';
import MyClassComponent from './components/Teoria/MyClassComponent';
import React from 'react';

class App extends React.Component {

  state = {
      selectUser: null,
      users: [
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
  }

  removeUser = (obj) => {
    this.setState((prevState)=> (
      {
        users: prevState.users.filter(ele => ele !== obj)
      }
    ))
  }

  selectUser = (obj) => {
    this.setState({
      selectUser: obj
    })
  }

  addUser = (obj) => {
    obj.id = this.state.users.length+1;
    this.setState((prevState)=> (
      {
        users: [...prevState.users, obj]
      }
    ))
  }

  render() {
    console.log(this.state);
    return (
      <>
        <MyNavbar />
        <Container>
          <MyAddForm addUser={this.addUser} />
          <MyMain 
            userlist={this.state.users} 
            remove={this.removeUser}
            select={this.selectUser}
            detail={this.state.selectUser}  
           />
        </Container>
        {/* <MyClassComponent /> // Teoria di oggi */}
        <MyFooter />
      </>
    );
  }
}

export default App;



/* let users = ['ciao', 'abc', 'tre']
console.log(users);
console.log(...users); */