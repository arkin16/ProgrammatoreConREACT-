import React, { Component } from "react";
import FormData from "../FormReact/FormData";
import DetailUserTable from "../ShowAddressBook/DetailUserTable";
import TableReact from "../ShowAddressBook/TableReact";


export default class Main extends Component {

state = {
  fields:["name","username", "city", "street", "zipcode", "email","phone","website","company"],
  setDetailsU: null,
  setShowForm: null,
};
  
details = (u) =>{
  this.setState({
    setDetailsU: u,
  });
};

closeDetailsUser = (close) =>{
  this.setState({
    setDetailsU: close,
  })
};

createForm = () => {
  this.setState({setShowForm:true, })
};

  render() {
    console.log(this.state.setDetailsU);
    return (
      <>
        <FormData field={this.state.fields}/>
        <TableReact detailsUser={this.details} createFormPatch={this.createForm} />
          {this.state.setDetailsU &&
            <DetailUserTable detailsU={this.state.setDetailsU} closeDetails={this.closeDetailsUser}   />
          }
      </>
    );
  }
}
