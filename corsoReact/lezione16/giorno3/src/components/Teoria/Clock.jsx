import React, { Component } from 'react'

export default class Clock extends Component {

    interval;
    state = {
        date: new Date()
    }

    tick = () => {
        this.setState({ date: new Date()})
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        console.log('Update: ' + this.state.date.getHours() + ':' + this.state.date.getMinutes() + ':' + this.state.date.getSeconds());
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {    
        return (
        <h2>Clock: {this.state.date.getHours()} : {this.state.date.getMinutes()} : {this.state.date.getSeconds()}</h2>
        )
    }
}
