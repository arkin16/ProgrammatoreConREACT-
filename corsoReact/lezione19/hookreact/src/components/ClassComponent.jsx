import React, { Component } from 'react'

export default class ClassComponent extends Component {

  state = {
    test: '',
    name: ''
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    return (
        <>
            <div>ClassComponent</div>
            <h2>State: {this.state.test}</h2>
            <h2>State: {this.state.name}</h2>
            <input type="text" placeholder="Name..." onChange={this.handleChangeName}/>
            <button onClick={() => this.setState({ test: 'Class Test'})}>Change State</button>
            <button onClick={() => this.setState({ name: 'Mario'})}>Change name</button>
        </>
    )
  }
}
