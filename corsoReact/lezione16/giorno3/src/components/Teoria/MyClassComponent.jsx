import React, { Component } from 'react'
import AltroComponent from './AltroComponent'
import ChildComponent from './ChildComponent'
import Clock from './Clock';

export default class MyClassComponent extends Component {

    test = 'Ciao';
    state = { count: 10 }

constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
    console.log('constructor');
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


changeCount = () => {
    //this.setState({ count: 1})
    this.setState((prevState) => ({ count: prevState.count + 1 }))
}

myClick = () => {
    alert('myClick: ' + this.test);
}

  render() {
    return (
        <>
        <Clock />
        <ChildComponent mycount={this.state} myChange={this.changeCount} />
        <AltroComponent mycount={this.state} myChange={this.changeCount}  />
        <hr />
        <button onClick={this.myClick}>Test Click</button>
        </>
    )
  }
}



/* class User {
    name;
    lastname;
    city;

    salta() {
        // istruzioni
    }
    parla() {
        // istruzioni
    }
} */