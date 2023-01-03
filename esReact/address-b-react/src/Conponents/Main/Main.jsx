import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import DetailUserTable from "../ShowAddressBook/DetailUserTable";
import TableReact from "../ShowAddressBook/TableReact";


export default class Main extends Component {

state = {
  setDetailsU: null,
}
  
details = (u) =>{
  this.setState({
    setDetailsU: u,
  })
}
closeDetailsUser = (close) =>{
  this.setState({
    setDetailsU: close,
  })
}
  render() {
    console.log(this.state.setDetailsU);
    return (
      <Container>
        <TableReact detailsUser={this.details} />
        {this.state.setDetailsU &&
          <DetailUserTable detailsU={this.state.setDetailsU} closeDetails={this.closeDetailsUser}/>
        }
      </Container>
    );
  }
}
