import React, { Component } from 'react'

interface BodyComponentProps {
    subtitle: string,
    txt: string
}

interface BodyComponentState {
    name: string
}

export default class BodyComponent extends Component<BodyComponentProps, BodyComponentState> {

  state = {
    name: 'Mario Rossi'
  }

  render() {
    return (
      <div>
        <h1>BodyComponent</h1>
        <h2>{this.props.subtitle}</h2>  
        <h3>{this.props.txt}</h3>
        <h4>My name is: {this.state.name}</h4>
        <button onClick={()=> this.setState({name: 'Giuseppe Verdi'})}>Change Name</button>
      </div>
    )
  }
}

